import Button from "../atoms/Button";
import { Container, Row, Col } from "react-bootstrap";

function CardButtons({ id }) {
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  const existente = carrito.find((item) => item.id === id);

  const isCount = () => {
    if (!existente) {
      return 0;
    }
    return existente.cantidad;
  };

  const sumar = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    const existente = carrito.find((item) => item.id === id);
    if (existente) {
      existente.cantidad += 1;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      window.location.reload();
    }
  };
  const restar = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    const existente = carrito.find((item) => item.id === id);
    if (existente) {
      existente.cantidad -= 1;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      window.location.reload();
    }
  };
  const eliminar = () => {
    const eliminado = carrito.filter((item) => item.id !== id);
    if (eliminado) {
      localStorage.setItem("carrito", JSON.stringify(eliminado));
      window.location.reload();
    }
  };
  return (
    <Container className={existente ? existente.name : ""}>
      <Row>
        <Col className="col-2">
          <Button
            variant={isCount() === 1 ? "secondary" : "dark"}
            className="w-100"
            onClick={restar}
            disabled={isCount() === 1}
          >
            -
          </Button>
        </Col>
        <Col className="col-5">
          <Button variant="outline-dark" className="w-75" disabled>
            {isCount()}
          </Button>
        </Col>
        <Col className="col-2">
          <Button variant="dark" className="w-100" onClick={sumar}>
            +
          </Button>
        </Col>
        <Col className="col-3 text-lg-end">
          <Button variant="outline-dark" onClick={eliminar}>
            Eliminar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CardButtons;
