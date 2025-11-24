import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import CategoryService from "../../services/CategoryService";
import ProductService from "../../services/ProductService";


function Formm({ onClose }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 1,
    stock: 1,
    img: "",
    categoria: ""
  });

  {
    /*Esta funcion captura cambios al parecer de los inputs */
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  {
    /*Esto envia el formulario, let's gooooooooo */
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
    !product.name.trim() ||
    !product.description.trim() ||
    !product.price ||
    !product.stock ||
    !product.img.trim() ||
    !product.categoria
  ) {
    alert("Completa todos los campos.");
    return;
  }

    const productToSend = {
      name: product.name,
      description: product.description,
      price: Number(product.price),
      stock: Number(product.stock),
      img: product.img,
      categoria: {
        id: Number(product.categoria)

      }
    };

    try {
    console.log("Enviando producto:", productToSend);

      const response = await ProductService.postProduct(productToSend);
      console.log("Product creado:", response);
      onClose();
    } catch (error) {
      alert("Error al crear producto",error);
    }
  };

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
    <Form
      onSubmit={handleSubmit}
      className="w-50 m-auto border border-black-50 border rounded-5 p-5"
    >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre producto</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Exploding kittens"
            value={product.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            name="price"
            type="number"
            placeholder="$50990"
            value={product.price}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          name="description"
          type="text"
          as="textarea"
          placeholder="Este juego es explosivo"
          row={3}
          value={product.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridStock">
        <Form.Label>Stock</Form.Label>
        <Form.Control
          name="stock"
          type="number"
          placeholder="30"
          value={product.stock}
          onChange={handleChange}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCategory">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            name="categoria"
            value={product.categoria}
            onChange={handleChange}
          >
            <option value="">Categoria</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridImg">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            name="img"
            type="text"
            placeholder="image.nose"
            value={product.img}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row>
        <Col>
          <Button variant="outline-success" type="submit">
            Agregar
          </Button>
        </Col>
        <Col className="text-lg-end">
          <Button variant="outline-dark" type="button" onClick={onClose}>
            Volver
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Formm;
