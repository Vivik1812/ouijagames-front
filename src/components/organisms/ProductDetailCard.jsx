import CardBody from "../molecules/CardBody";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryService from "../../services/CategoryService";
import {useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


function ProductDetailCard({ product, isDescription, w }) {
    
    const [categories, setCategory] = useState([]);

  const fetchCategory = () => {
    CategoryService.getAllCategories()
      .then((response) => {
        setCategory(response);
      })
      .catch((error) => {
        console.log("Error fetching categorys", error);
      });
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const { id } = useParams();

  const getCategory = () => {
    const c = categories.find((c) => c.id === parseInt(id));
    if (!c) {
      return "Cargando...";
    }
    return c;
  };
  const category = getCategory();
  return (
    <>
      <Card style={{ width: w }} className="m-4 p-3 text-center">
        <Row>
          <Col className="col-6">
            <Link to={`/products/${product.id}`}>
              <Image src={product.img} alt={product.name} className="w-50" />
            </Link>
          </Col>
          <Col className="col-6">
            <Card.Body>
              <CardBody
                name={product.name}
                description={isDescription ? product.description : ""}
                price={product.price}
                src={product.img}
                isDetail={true}
                category={category}
                stock = {product.stock}
              />
            </Card.Body>
            <Button variant="dark">Agregar</Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default ProductDetailCard;
