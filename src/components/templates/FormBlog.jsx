import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import BlogService from "../../services/BlogService";


function Formm({ onClose }) {
  const [blog, setBlog] = useState({
    titulo: "",
    texto: "",
    img: "",
    urlRef: "",
  });

  {
    /*Esta funcion captura cambios al parecer de los inputs */
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setBlog((prev) => ({
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
    !blog.titulo.trim() ||
    !blog.text.trim() ||
    !blog.img.trim()
  ) {
    alert("Completa todos los campos.");
    return;
  }

    const blogToSend = {
      titulo: blog.titulo,
      texto: blog.texto,
      img: blog.img,
      urlRef: blog.urlRef
    };

    try {
    console.log("Enviando noticia:", blogToSend);

      const response = await BlogService.postBlog(blogToSend);
      console.log("Noticia creado:", response);
      onClose();
    } catch (error) {
      alert("Error al crear noticia",error);
    }
  };

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
            placeholder="Muerte del fundador..."
            value={blog.titulo}
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
          value={blog.texto}
          onChange={handleChange}
        />
      </Form.Group>


      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridImg">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            name="img"
            type="text"
            placeholder="image.nose"
            value={blog.img}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridImg">
          <Form.Label>Url referencia</Form.Label>
          <Form.Control
            name="img"
            type="text"
            placeholder="referencia.nose"
            value={blog.urlRef}
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
