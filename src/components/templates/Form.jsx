import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import CategoryService from "../../services/CategoryService";

function Formm() {
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

  return (
    <Form className="w-50 m-auto border border-black-50 border rounded-5 p-5">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre producto</Form.Label>
          <Form.Control type="text" placeholder="Exploding kittens" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="$50990" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          placeholder="Este juego es explosivo"
          row={3}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridStock">
        <Form.Label>Stock</Form.Label>
        <Form.Control type="number" placeholder="34" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCategory">
          <Form.Label>Categoria</Form.Label>
          <Form.Select defaultValue="...">
            {categories.map((c) => (
              <option>{c.nombre}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridImg">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" placeholder="image.nose" />
        </Form.Group>
      </Row>

      <Row>
        <Col>
          <Button variant="outline-success" type="submit">
            Agregar
          </Button>
        </Col>
        <Col className="text-lg-end">
          <Button variant="outline-dark" type="submit">
            Volver
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Formm;
