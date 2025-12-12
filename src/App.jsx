import { Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import HomeUser from "../src/Pages/User/Home";
import Products from "../src/Pages/User/Products";
import ProductDetail from "../src/Pages/User/ProductDetail";
import Us from "../src/Pages/User/us";
import Carrito from "./Pages/User/Cart";
import Blog from "../src/Pages/User/Blogs";
import ProductsCRUD from "../src/Pages/Admin/ProductsCRUD";
import BlogCRUD from "../src/Pages/Admin/BlogCRUD";
import BlogDetail from "../src/Pages/Admin/BlogDetail";
import ProductDetailAdmin from "../src/Pages/Admin/ProductDetail";
import HomeAdmin from "../src/Pages/Admin/Home";
import Login from "../src/Pages/auth/login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomeUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Carrito />}></Route>
          <Route path="/us" element={<Us />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/admin/products" element={<ProductsCRUD />}></Route>
          <Route
            path="/admin/products/:id"
            element={<ProductDetailAdmin />}
          ></Route>
          <Route path="/admin/blogs" element={<BlogCRUD />}></Route>
          <Route path="/admin/blogs/:id" element={<BlogDetail />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
