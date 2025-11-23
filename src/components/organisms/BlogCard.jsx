import CardBody from "../molecules/CardBody";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import { Card, Row, Col } from "react-bootstrap";

function BlogCard({ blog }) {
  console.log(blog);

  return (
    <>
      <Card className="m-4 p-3 text-center">
        <Row>
          <Col>
            <Image src={blog.img} className={"w-100"}/>
          </Col>
          <Col className="text-lg-center m-auto">
            <Card.Body>
              <CardBody
                name={blog.titulo}
                description={blog.texto}
                src={blog.img}
                urlRef={blog.urlRef}
                isBlog={true}
              />
              <Text
                variant="a"
                href={blog.urlRef}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 m-2 border border-black bg-black text-decoration-none text-white"
              >
                Link de referencia
              </Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default BlogCard;
