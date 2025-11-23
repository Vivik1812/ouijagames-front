import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../../components/organisms/BlogCard";
import BlogService from "../../services/BlogService";
import Breadcrumbb from "../../components/organisms/Breadcrumb";
import Dropdownn from "../../components/organisms/Dropdown";

const Blogs = () => {
  const [blogs, setBlog] = useState([]);

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
  console.log(blogs);
  
  return (
    <Container>
      <h2>Noticias</h2>
      <Row className="justify-content-center">
        {blogs.map((blog) => (
            <BlogCard
                key={blog.id}
                blog={blog}
            />
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
