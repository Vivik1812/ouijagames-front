import Button from "../atoms/Button";
import { Col, Form, Row, Card } from "react-bootstrap";

function HorizontalExample() {
  return (
    <div
      className="d-flex justify-content-center align-content-center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        className="p-4 shadow-sm border border-black shadow"
        style={{ width: "380px", borderRadius: "16px" }}
      >
        <h4 className="text-center mb-4">Iniciar Sesion</h4>

        <Form className="p-5">
          <Form.Group as={Row} className="mb-3 mt-5 " controlId="formHorizontalEmail">
            <Col>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Col>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mt-5">
            <Col>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
}

export default HorizontalExample;
