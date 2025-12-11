import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../components/organisms/ProductCard";  
import adminFuns from "../../data/adminFuns";
import Breadcrumbb from "../../components/organisms/Breadcrumb";

const HomeUser = () => {


  return (
    <Container>
      <h2>Inicio administrativo</h2>
      <Row className="justify-content-center">
        {adminFuns.map((adminFun) => (
            <ProductCard
              className="card-animate"
              key={adminFun.name}
              adminFun={adminFun}
              isAdminFun={true}
              w={"20rem"}
              animate={true}
            />
        ))}
      </Row>
    </Container>
  );
};

export default HomeUser;
