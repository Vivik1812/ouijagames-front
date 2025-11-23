import { Container, Row } from "react-bootstrap";
import Text from "../../components/atoms/Text";
import usText from "../../data/usText";

function Us() {
  const encabezado = usText.find((t) => t.id === "encabezado");
  const parrafo1 = usText.find((t) => t.id === "principal1");
  const parrafo2 = usText.find((t) => t.id === "principal2");
  const frase = usText.find((t) => t.id === "frase");
  const valor1 = usText.find((t) => t.id === "valor1");
  const valor2 = usText.find((t) => t.id === "valor2");
  const valor3 = usText.find((t) => t.id === "valor3");
  const final = usText.find((t) => t.id === "final");

  return (
    <Container className="">
      <h2>Nosotros</h2>

      {/*ENCABEZADO*/}
      <Row className="border-bottom border-black-50 border-top border-black-50 p-5 w-75 m-auto text-lg-center">
        <Text variant="h3">¿Quienes somos?</Text>
        <Text variant="p">{encabezado.text}</Text>
      </Row>
      
      {/*PRINCIPAL*/}
      <Row className="border-bottom border-black-50 border-top border-black-50 p-5 w-75 m-auto text-lg-center">
        <Text variant="h3">Mucho texto</Text>
        <Text variant="p">{parrafo1.text}</Text>
        <Text variant="p">{parrafo2.text}</Text>
        <Text variant="p">{''}</Text>
        <Text variant="p">{frase.text}</Text>
      </Row>
      
      {/*VALORES*/}
      <Row className="border-bottom border-black-50 border-top border-black-50 p-5 w-75 m-auto text-lg-center">
        <Text variant="h3">Nuestros valores</Text>
        <Text variant="li">{valor1.text}</Text>
        <Text variant="li">{valor2.text}</Text>
        <Text variant="li">{valor3.text}</Text>
      </Row>

      {/*FINAL*/}
      <Row className="border-top border-black-50 p-5 w-75 m-auto text-lg-center">
        <Text variant="p">{final.text}</Text>
      </Row>
      

    </Container>
  );
}

export default Us;
