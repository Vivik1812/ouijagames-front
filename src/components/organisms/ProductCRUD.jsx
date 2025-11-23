import CardBody from "../molecules/CardBody";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/organisms/ProductCard.css";
import CartButtons from "../molecules/CartButtons";
import CardResumen from "../molecules/CardResumen";

function ProductCard({ product, w, animate }) {
  return (
    <>
      <Card
        style={{ width: w }}
        className={
          animate
            ? "m-5 p-3 text-center card-animate"
            : "m-5 p-3 text-center product-create"
        }
      >
        <Link to={`/products/${product.id}`} className="h-100">
          <Image
            src={product.img}
            alt={product.name}
            className="card-img-top h-75"
          />
        </Link>
        <Button variant="dark" onClick={''}>
          Agregar
        </Button>
      </Card>
    </>
  );
}

export default ProductCard;
