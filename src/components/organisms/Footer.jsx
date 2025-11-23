import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Image,
  Stack,
} from "react-bootstrap";
import { GiRamProfile } from "react-icons/gi";

function Footer() {
  return (
    <Navbar bg="black" variant="dark">
      <Container id="footer">
        <Stack>
          <Row className="p-1">
            <Col>
              <Navbar.Brand href="/" className="m-5">
                <GiRamProfile size={'8rem'}/>
                <h1 className="text-danger ms-5">OG</h1>
              </Navbar.Brand>
            </Col>

            <Col className="m-4">
              <Nav.Link className="text-white p-2">
                Tienda oficial, OuijaGames.
              </Nav.Link>
              <Nav.Link className="text-white p-2">
                Juegos y accesorios para todas tus mesas.
              </Nav.Link>
              <Nav.Link className="text-white p-2">
                La tienda favorita de los frikis.
              </Nav.Link>
            </Col>

            <Col className="m-4">
              <Row className="text-white p-2">Atencion al cliente:</Row>
              <Row className="text-white p-2">+56 9 1234 5678</Row>
              <Row className="text-white p-2">contacto@ouijagames.cl</Row>
              <Row className="text-white p-2">
                Lunes a viernes de 9:00 a 19:00 hrs
              </Row>
            </Col>
          </Row>
          <Row className="p-2 justify-content-center text-gray">
            Copyright 2025
          </Row>
        </Stack>
      </Container>
    </Navbar>
  );
}

export default Footer;
