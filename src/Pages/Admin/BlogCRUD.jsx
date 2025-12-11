import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../components/organisms/ProductCard";
import ProductCRUD from "../../components/organisms/ProductCRUD";
import BlogService from "../../services/BlogService";
import Breadcrumbb from "../../components/organisms/Breadcrumb";
import ProductZero from "../../data/ProductModel";
import FormBlog from "../../components/templates/FormBlog";

const Blogs = () => {
  const [blogs, setBlog] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchBlog = () => {
    BlogService.getAllBlogs()
      .then((response) => {
        setBlog(response);
      })
      .catch((error) => {
        console.log("Error fetching blogs", error);
      });
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <Container>
      <h2>Noticias</h2>
      <Breadcrumbb />

      {/*Formulario*/}
      {showForm && <FormBlog onClose={closeForm} />}

      <Row className="justify-content-center">
        {!showForm && (
          <ProductCRUD
            className="blog-create"
            key={ProductZero[0].id}
            product={ProductZero[0]}
            w={"20rem"}
            onClick={openForm}
          />
        )}
        {blogs.map((blog) => (
          <ProductCard
            className="card-animate"
            key={blog.id}
            blog={blog}
            w={"20rem"}
            animate={true}
            isAdmin={true} 
            onDelete={(id) => {
              setBlog((prev) => prev.filter((p) => p.id !== id));
            }}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
