import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Breadcrumbb from "../../organisms/Breadcrumb";
import { useParams } from "react-router-dom";
import ProductService from "../../services/ProductService";

function ProductDetail() {
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

  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));
  const getName = () => {
    if(!product){
      return "Cargando..."
    }
    return product.name;
  }
  const name = getName()
  return (
    <Container>
      <h2>Detalle</h2>
      <Breadcrumbb productName={name} id={id} />
    </Container>
  );
}

export default ProductDetail;
