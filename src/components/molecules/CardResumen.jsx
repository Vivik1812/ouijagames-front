import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { Container, Col, Row } from "react-bootstrap";

function CardResumen() {
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    const costoEnvio = 3990;


  const subTotal = () => {
    return carrito.reduce(
      (total, product) => total + product.price * product.cantidad,
      0
    );
  };

  const total = () => {
    if (subTotal() === 0) {
      return 0;
    }
    return subTotal()+costoEnvio;
  };

  const comprar = () => {
    localStorage.removeItem("carrito");
    alert('Compra satisfactoria')
    window.location.reload();
  };


  return (
    <Container>
      {/*SUBTOTAL*/}
      <Row>
        <Col className="d-flex justify-content-start border-bottom border-black-50">
          <Text variant="span" className={"fw-semibold"}>
            Subtotal
          </Text>
        </Col>
        <Col className="d-flex justify-content-end border-bottom border-black-50">
          <Text variant="span" className={"fw-semibold m-2"}>
            {subTotal()}
          </Text>
        </Col>
      </Row>

      {/*ENVIO*/}
      <Row className="border-bottom">
        <Col className="d-flex justify-content-start border-bottom border-black-50">
          <Text variant="span" className={"fw-semibold"}>
            Envio
          </Text>
        </Col>
        <Col className="d-flex justify-content-end border-bottom border-black-50">
          <Text variant="span" className={"fw-semibold m-2"}>
            {costoEnvio}
          </Text>
        </Col>
      </Row>

      {/*TOTAL*/}
      <Row className="border-bottom">
        <Col className="d-flex justify-content-start border-bottom border-black-50">
          <Text variant="span" className={"fw-semibold"}>
            Total
          </Text>
        </Col>
        <Col className="d-flex justify-content-end border-bottom border-black-50">
          <Text variant="span" className={"fw-semibold m-2"}>
            {total()}
          </Text>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center m-5">
        <Button variant="outline-dark" className="w-75" onClick={comprar}>
          COMPRAR
        </Button>
      </Row>
    </Container>
  );
}

export default CardResumen;
