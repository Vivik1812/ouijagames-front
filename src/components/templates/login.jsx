import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { Col, Form, Row, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import RolService from "../../services/RolService";
import UserService from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function HorizontalExample() {
  const [roles, setRoles] = useState([]);
  console.log("useAuth:", useAuth());


  const fetchRoles = () => {
    RolService.getAllRoles()
      .then((response) => {
        setRoles(response);
      })
      .catch((error) => {
        console.log("Error fetching roles", error);
      });
  };
  useEffect(() => {
    fetchRoles();
  }, []);

  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  async function getRole() {
    return roles.find((r) => r.nombre === "client");
  }

  async function register() {
    try {
      const role = await getRole();

      const body = {
        username,
        password,
        email,
        roles: [role],
      };

      try {
        console.log("Enviando rol:", body);

        const response = await UserService.postUser(body);
        console.log("Usuario creado:", response);
        alert("Cuenta creada con exito");
      } catch (error) {
        alert("Error al crear usuario", error);
      }
    } catch (e) {
      console.error("Error:", e);
    }
  }
  const { login } = useAuth();
  const navigate = useNavigate();
  
  async function handleLogin(){
    const user = await UserService.login(email, password);

    if(!user){
      alert("Credenciales incorrectas")
      return;
    }
    
    login(user);
    navigate("/");
  }
  return (
    <div
      className="d-flex justify-content-center align-content-center"
      style={{ minHeight: "50vh", opacity: ".7" }}
    >
      <Card
        className="p-5 shadow-sm shadow-lg border border-black shadow bg-black"
        style={{ width: "400px", borderRadius: "16px" }}
      >
        <h2 className="text-center text-white">
          {isLogin ? "Iniciar Sesion" : "Registrarse"}
        </h2>

        <Form
          className="my-5"
          onSubmit={(e) => {
            e.preventDefault();
            if(isLogin) handleLogin();
            else register()
          }}
        >
          {!isLogin && (
            <Form.Group as={Row} className="mb-3 d-flex justify-content-center">
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Col>
            </Form.Group>
          )}

          <Form.Group
            as={Row}
            className="mb-3 d-flex justify-content-center"
            controlId="formHorizontalEmail"
          >
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3 d-flex justify-content-center"
            controlId="formHorizontalPassword"
          >
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 d-flex justify-content-center">
            <Col className="mb-3 d-flex justify-content-center">
              <Button variant={"outline-success"} type="submit">
                {isLogin ? "Iniciar Sesion" : "Registrarse"}
              </Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 d-flex justify-content-center">
            <Col className="mb-3 d-flex justify-content-center">
              <Text
                variant="a"
                className={"text-info"}
                style={{ cursor: "pointer" }}
                onClick={toggleForm}
              >
                {isLogin ? "Crear cuenta" : "Iniciar sesion"}
              </Text>
            </Col>
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
}

export default HorizontalExample;
