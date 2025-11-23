import React from "react";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { Container, Col, Row } from "react-bootstrap";

function CardBody({ name, description, price, isDetail, category, stock }) {
  const isStock = stock > 0 ? "En Stock" : "Sin stock";
  const className =
    stock > 0
      ? "p-2 text-lg-start text-success"
      : "p-2 text-lg-start text-danger";

  if (!isDetail) {
    return (
      <>
        <Container>
          <Text variant="h5">{name}</Text>
          <Text variant="p">{description}</Text>
          <Text variant="span" className="text-muted">
            ${price}
          </Text>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container>
        <Text variant="h2" className="p-2 text-lg-start">
          {name}
        </Text>
        <Text variant="h6" className="p-2 text-lg-start text-black-50">
          Categoria: {category.descripcion}
        </Text>
        <Text variant="h4" className="p-2 text-lg-start">
          {price}
        </Text>
        <Row>
          <Col className="col-3">
            <Text variant="h6" className={className}>
              {isStock}
            </Text>
          </Col>
          <Col className="col-9 text-lg-start">
            <Button variant="dark" >Agregar al carrito</Button>
          </Col>
        </Row>

        <Text
          variant="h5"
          className="p-3 text-lg-start border-bottom border-black"
        >
          Descripcion
        </Text>
        <Text variant="p" className="p-3 text-lg-start">
          {description}
        </Text>
      </Container>
    </>
  );
}

export default CardBody;
