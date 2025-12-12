import CardBody from "../molecules/CardBody";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/organisms/ProductCard.css";
import CartButtons from "../molecules/CartButtons";
import CardResumen from "../molecules/CardResumen";
import ProductService from "../../services/ProductService";

function ProductCard({
  user,
  blog,
  product,
  isDescription,
  w,
  animate,
  isCart,
  count,
  isResumenCart,
  isAdmin,
  onDelete,
  isAdminFun,
  adminFun,
}) {
  const rol = () => {
    if (!user) return null;
    return user.roles[0].nombre;
  };

  const eliminarProduct = async () => {
    try {
      const confirm = window.confirm("Eliminar?");
      if (!confirm) return;
      await ProductService.deleteProduct(product.id);
      alert("Producto eliminado con exito");

      if (onDelete) {
        onDelete(product.id);
      }
    } catch (error) {
      console.error("Error al eliminar", error);
      alert("Error al eliminar");
    }
  };

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
  if (isResumenCart) {
    return (
      <>
        <CardResumen />
      </>
    );
  }
  if (isAdmin) {
    return (
      <>
        <Card
          style={{ width: w }}
          className={
            animate ? "m-5 p-3 text-center card-animate" : "m-5 p-3 text-center"
          }
        >
          {user ? (
            <>
              <Image
                src={"/profile2.webp"}
                alt={user.username}
                className="card-img-top h-75"
              />
            </>
          ) : (
            <>
              <Link
                to={
                  blog
                    ? `/admin/blogs/${blog.id}`
                    : `/admin/products/${product.id}`
                }
                className="h-100"
              >
                <Image
                  src={blog ? blog.img : product.img}
                  alt={blog ? blog.titulo : product.name}
                  className="card-img-top h-75"
                />
              </Link>
            </>
          )}

          <Card.Body>
            {user ? (
              <>
                <CardBody
                  name={user.username}
                  email={user.email}
                  tipo={rol()}
                  isUser={true}
                />
              </>
            ) : (
              <>
                <CardBody
                  name={blog ? blog.titulo : product.name}
                  description={
                    isDescription
                      ? blog
                        ? blog.texto
                        : product.description
                      : ""
                  }
                  price={blog ? "" : product.price}
                  src={blog ? blog.img : product.img}
                />
              </>
            )}
          </Card.Body>
          <Button variant="outline-danger" onClick={eliminarProduct}>
            {"Eliminar"}
          </Button>
        </Card>
      </>
    );
  }
  if (isAdminFun) {
    return (
      <>
        <Card
          style={{ width: w }}
          className={
            animate ? "m-5 p-3 text-center card-animate" : "m-5 p-3 text-center"
          }
        >
          <Link to={adminFun.link} className="h-100">
            <Image
              src={adminFun.img}
              alt={adminFun.name}
              className="card-img-top h-75"
            />
          </Link>
          <Row>
            <Text variant="h2" className="mb-5">
              {adminFun.name}
            </Text>
          </Row>
          <Link to={adminFun.link}>
            <Button variant="outline-success">{"Administrar"}</Button>
          </Link>
        </Card>
      </>
    );
  }
  return (
    <>
      <Card
        style={{ width: w }}
        className={
          animate ? "m-5 p-3 text-center card-animate" : "m-5 p-3 text-center"
        }
      >
        <Link
          to={blog ? `/blog/${blog.id}` : `/products/${product.id}`}
          className="h-100"
        >
          <Image
            src={blog ? blog.img : product.img}
            alt={blog ? blog.titulo : product.name}
            className="card-img-top h-75"
          />
        </Link>
        <Card.Body>
          <CardBody
            name={blog ? blog.titulo : product.name}
            description={
              isDescription ? (blog ? blog.texto : product.description) : ""
            }
            price={blog ? "" : product.price}
            src={blog ? blog.img : product.img}
          />
        </Card.Body>
        {!blog && (
          <Button variant="dark" onClick={agregarCarrito}>
            {"Agregar"}
          </Button>
        )}
      </Card>
    </>
  );
}

export default ProductCard;
