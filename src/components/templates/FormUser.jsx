import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import UserService from "../../services/UserService";

function Formm({ onClose }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    roles: [
      {
        id: 2,
      },
    ],
  });

  {
    /*Esta funcion captura cambios al parecer de los inputs */
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  {
    /*Esto envia el formulario, let's gooooooooo */
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.username.trim() || !user.email.trim() || !user.password.trim()) {
      alert("Completa todos los campos.");
      return;
    }

    const userToSend = {
      username: user.username,
      email: user.email,
      password: user.password,
      roles: user.roles,
    };

    try {
      console.log("Enviando usuario:", userToSend);

      const response = await UserService.postUser(userToSend);
      console.log("Usuario creado:", response);
      onClose();
    } catch (error) {
      alert("Error al crear usuario", error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-50 m-auto border border-black-50 border rounded-5 p-5"
    >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Usuario"
            value={user.username}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="text"
          placeholder="email@example.com"
          value={user.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridImg">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="********"
            value={user.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCategory">
          <Form.Label>Tipo usuario</Form.Label>
          <Form.Select name="roles" value={user.roles[0].id} onChange={(e) => setUser({
            ...user, roles: [{ id: Number(e.target.value)}]
          })}>
            <option key={1} value={"2"}>
              Cliente
            </option>
            <option key={1} value={"1"}>
              Administrador
            </option>
          </Form.Select>
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
