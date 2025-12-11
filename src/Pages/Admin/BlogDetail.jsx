import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Breadcrumbb from "../../components/organisms/Breadcrumb";
import { useParams } from "react-router-dom";
import BlogService from "../../services/BlogService";
import ProductDetailCard from "../../components/organisms/ProductDetailCard";

function BlogDetail() {
  const [blogs, setBlog] = useState([]);

  const fetchBlog = () => {
    BlogService.getAllBlogs()
      .then((response) => {
        setBlog(response);
      })
      .catch((error) => {
        console.log("Error fetching blog", error);
      });
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  const { id } = useParams();

  const getBlog = () => {
    const b = blogs.find((b) => b.id === parseInt(id));
    if (!b) {
      return "Cargando...";
    }
    return b;
  };
  const blog = getBlog();
  const getName = () => {
    if (!blog) {
      return "Cargando...";
    }
    return blog.titulo;
  };
  const name = getName();
  return (
    <Container>
      <h2>Blog Detalle</h2>
      <Breadcrumbb productName={name} id={id}/>
      <ProductDetailCard
        key={blog.id}
        blog={blog}
        isDescription={true}
        w={"100%"}
      />
    </Container>
  );
}

export default BlogDetail;
