import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../organisms/ProductCard";
import ProductService from "../../services/ProductService";
import CategoryService from "../../services/CategoryService";
import Carousel from "../../organisms/Carousel";
import Label from "../../molecules/Label";
import Breadcrumbb from "../../organisms/Breadcrumb";
import Dropdownn from '../../organisms/Dropdown'

const Products = () => {
  const [products, setProduct] = useState([]);
  //   const [categories, setCategory] = useState([]);

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

  //   const fetchCategory = () => {
  //     CategoryService.getAllCategories()
  //       .then((response) => {
  //         setCategory(response);
  //       })
  //       .catch((error) => {
  //         console.log("Error fetching categorys", error);
  //       });
  //   };
  //   useEffect(() => {
  //     fetchCategory();
  //   }, []);

  return (
    <Container>
      <h2>Productos</h2>
      <Breadcrumbb />
      <Row className="p-1">
        <Col>

        </Col>
        <Col className="text-lg-end">
            <Dropdownn/>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isDescription={false}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
