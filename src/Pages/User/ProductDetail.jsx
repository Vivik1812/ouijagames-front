import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Breadcrumbb from "../../components/organisms/Breadcrumb";
import { useParams } from "react-router-dom";
import ProductService from "../../services/ProductService";
import ProductDetailCard from "../../components/organisms/ProductDetailCard";

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

  const getProduct = () => {
    const p = products.find((p) => p.id === parseInt(id));
    if (!p) {
      return "Cargando...";
    }
    return p;
  };
  const product = getProduct();
  const getName = () => {
    if (!product) {
      return "Cargando...";
    }
    return product.name;
  };
  const name = getName();
  return (
    <Container>
      <h2>Detalle</h2>
      <Breadcrumbb productName={name} id={id} />
      <ProductDetailCard
        key={product.id}
        product={product}
        isDescription={true}
        w={"100%"}
      />
    </Container>
  );
}

export default ProductDetail;
