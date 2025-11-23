import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../components/organisms/ProductCard";
import ProductService from "../../services/ProductService";
import CategoryService from "../../services/CategoryService";
import Carousel from "../../components/organisms/Carousel";
import Label from "../../components/molecules/Label";

const HomeUser = () => {
  const [products, setProduct] = useState([]);
  const [categories, setCategory] = useState([]);

  const fetchProduct = () => {
    ProductService.getAllProducts()
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log("Error fetching products", error);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchCategory = () => {
    CategoryService.getAllCategories()
      .then((response) => {
        setCategory(response);
      })
      .catch((error) => {
        console.log("Error fetching categorys", error);
      });
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Container>
      <Carousel />

      <Row className="justify-content-center">
        {categories.map((category) => (
          <div key={category.id}>
            <Label key={category.id} categoria={category.descripcion} />
            <Row>
              {products
                .filter((product) => product.categoria.id === category.id)
                .map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isDescription={false}
                      animate={true}
                      w={"20rem"}
                    />
                ))}
            </Row>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default HomeUser;
