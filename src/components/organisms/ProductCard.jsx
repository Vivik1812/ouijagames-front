import CardBody from "../molecules/CardBody";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/organisms/ProductCard.css";
import CartButtons from "../molecules/CartButtons";
import CardResumen from "../molecules/CardResumen";

function ProductCard({
  product,
  isDescription,
  w,
  animate,
  isCart,
  count,
  isResumenCart,
}) {
  const agregarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    const existente = carrito.find((item) => item.id === product.id);

    if (!existente) {
      carrito.push({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        cantidad: 1,
      });
    }

    if (existente) {
      existente.cantidad += 1;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto super hiper mega agregado");
  };

  if (isCart) {
    return (
      <>
        <Card
          style={{ width: w }}
          className={
            animate ? "m-4 p-3 text-center card-animate" : "m-4 p-3 text-center"
          }
        >
          <Link to={`/products/${product.id}`} className="h-100">
            <Image src={product.img} alt={product.name} className="w-25" />
          </Link>
          <Card.Body>
            <>
              <CardBody
                name={product.name}
                description={isDescription ? product.description : ""}
                price={product.price}
                src={product.img}
                isCart={isCart}
              />
              <CartButtons id={product.id} count={count} />
            </>
          </Card.Body>
        </Card>
      </>
    );
  }
  if(isResumenCart){
    return(
      <>
        <CardResumen/>
      </>
    )
  }
  return (
    <>
      <Card
        style={{ width: w }}
        className={
          animate ? "m-5 p-3 text-center card-animate" : "m-5 p-3 text-center"
        }
      >
        <Link to={`/products/${product.id}`} className="h-100">
          <Image
            src={product.img}
            alt={product.name}
            className="card-img-top h-75"
          />
        </Link>
        <Card.Body>
          <CardBody
            name={product.name}
            description={isDescription ? product.description : ""}
            price={product.price}
            src={product.img}
          />
        </Card.Body>
        <Button variant="dark" onClick={agregarCarrito}>
          Agregar
        </Button>
      </Card>
    </>
  );
}

export default ProductCard;
