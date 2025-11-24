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
import Form from "../../components/templates/Form";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [showForm, setShowForm] = useState(false);

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

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <Container>
      <h2>Productos</h2>
      <Breadcrumbb />

      {/*Formulario*/}
      {showForm && <Form onClose={closeForm} />}

      <Row className="justify-content-center">
        {!showForm && (
          <ProductCRUD
            className="product-create"
            key={ProductZero[0].id}
            product={ProductZero[0]}
            w={"20rem"}
            onClick={openForm}
          />
        )}
        {products.map((product) => (
          <ProductCard
            className="card-animate"
            key={product.id}
            product={product}
            w={"20rem"}
            animate={true}
            isAdmin={true}
            onDelete={(id) => {
              setProduct((prev) => prev.filter((p) => p.id !== id));
            }}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
