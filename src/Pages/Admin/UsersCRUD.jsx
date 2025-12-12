import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../components/organisms/ProductCard";
import ProductCRUD from "../../components/organisms/ProductCRUD";
import UserService from "../../services/UserService";
import CategoryService from "../../services/CategoryService";
import Carousel from "../../components/organisms/Carousel";
import Label from "../../components/molecules/Label";
import Breadcrumbb from "../../components/organisms/Breadcrumb";
import Dropdownn from "../../components/organisms/Dropdown";
import ProductZero from "../../data/ProductModel";
import Form from "../../components/templates/FormUser";

const Users = () => {
  const [users, setUser] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchUser = () => {
    UserService.getAllUsers()
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.log("Error fetching products", error);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <Container>
      <h2>Usuarios</h2>
      <Breadcrumbb />

      {/*Formulario*/}
      {showForm && <Form onClose={closeForm} />}

      <Row className="justify-content-center">
        {!showForm && (
          <ProductCRUD
            className="product-create"
            key={ProductZero[0].id}
            product={ProductZero[0]}
            w={"20rem"}
            onClick={openForm}
          />
        )}
        {users.map((user) => (
          <ProductCard
            className="card-animate"
            key={user.id}
            user={user}
            w={"20rem"}
            animate={true}
            isAdmin={true}
            onDelete={(id) => {
              setUser((prev) => prev.filter((p) => p.id !== id));
            }}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Users;
