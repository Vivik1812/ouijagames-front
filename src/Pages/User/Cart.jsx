import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../components/organisms/ProductCard";
import Text from "../../components/atoms/Text";
import { PiMaskSadBold } from "react-icons/pi";


function Carrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  console.log("Carrito", carrito);
  console.log(
    "Item:",
    carrito.map((p) => p.cantidad)
  );

  return (
    <Container className="my-2">
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <>
        <PiMaskSadBold className="d-flex m-auto" style={{fontSize:'10rem'}}/>
        <Text
          variant="h2"
          className="text-muted d-flex justify-content-center align-items-center h-100 m-5 p-5"
        >
          
          No hay productos para mostrar.
        </Text>
        </>
        
      ) : (
        <Row>
          <Col className="p-0">
            <h2 className="d-flex justify-content-center m-5">Productos</h2>
            {carrito.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isCart={true}
                count={product.cantidad}
              />
            ))}
          </Col>
          <Col className="p-0">
            <h2 className="d-flex justify-content-center m-5">Resumen</h2>
            <ProductCard isResumenCart={true} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Carrito;
