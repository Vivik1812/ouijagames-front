import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../components/organisms/ProductCard";
import ProductService from "../../services/ProductService";
import CategoryService from "../../services/CategoryService";
import Carousel from "../../components/organisms/Carousel";
import Label from "../../components/molecules/Label";
import Breadcrumbb from "../../components/organisms/Breadcrumb";
import Dropdownn from "../../components/organisms/Dropdown";

const Products = () => {
  const [products, setProduct] = useState([]);

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

  return (
    <Container>
      <h2>Productos</h2>
      <Breadcrumbb />
      <Row className="p-1">
        <Col></Col>
        <Col className="text-lg-end">
          <Dropdownn />
        </Col>
      </Row>
      <Row className="justify-content-center">
        {products.map((product) => (
            <ProductCard
              className="card-animate"
              key={product.id}
              product={product}
              w={"20rem"}
              animate={true}
            />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
