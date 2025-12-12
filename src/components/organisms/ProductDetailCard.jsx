import CardBody from "../molecules/CardBody";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryService from "../../services/CategoryService";

function ProductDetailCard({ blog, product, isDescription, w, isAdmin }) {

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

  return (
    <>
      <Card style={{ width: w }} className="m-4 p-3 text-center">
        <Row>
          <Col className="col-6">
            <Link to={blog ? `/blogs/${blog.id}` : (isAdmin? `/admin/products/${product.id}` : `/products/${product.id}`)}>
              <Image
                src={blog ? blog.img : product.img}
                alt={blog ? blog.name : product.name}
                className="w-50"
              />
            </Link>
          </Col>
          <Col className="col-6">
            <Card.Body>
              {blog ? (
                <CardBody
                  name={blog.titulo}
                  description={blog.texto}
                  src={blog.img}
                  category={null}
                  isBlogDetail={true}
                />
              ) : (
                <CardBody
                  name={product.name}
                  description={isDescription ? product.description : ""}
                  price={product.price}
                  src={product.img}
                  isDetail={true}
                  isProductDetailAdmin={isAdmin? true : false}
                  category={product.categoria}
                  stock={product.stock}
                  fun = {agregarCarrito}
                />
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default ProductDetailCard;
