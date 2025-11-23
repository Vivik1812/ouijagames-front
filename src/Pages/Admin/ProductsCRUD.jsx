import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../components/organisms/ProductCard";
import ProductCRUD from "../../components/organisms/ProductCRUD";
import ProductService from "../../services/ProductService";
import CategoryService from "../../services/CategoryService";
import Carousel from "../../components/organisms/Carousel";
import Label from "../../components/molecules/Label";
import Breadcrumbb from "../../components/organisms/Breadcrumb";
import Dropdownn from "../../components/organisms/Dropdown";
import ProductZero from "../../data/ProductModel";
import Form from '../../components/templates/Form'

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
        console.log(ProductZero);

  return (
    <Container>
        <Form/>
      <h2>Productos</h2>
      <Breadcrumbb />
      <Row className="p-1">
        <Col></Col>
        <Col className="text-lg-end">
          <Dropdownn />
        </Col>
      </Row>
      <Row className="justify-content-center">
        
        <ProductCRUD
          className="product-create"
          key={ProductZero[0].id}
          product={ProductZero[0]}
          w={"20rem"}
        />
        {products.map((product) => (
          <ProductCard
            className="card-animate"
            key={product.id}
            product={product}
            w={"20rem"}
            animate={true}
            isAdmin={true}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
