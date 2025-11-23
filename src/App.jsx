import { Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import HomeUser from "../src/Pages/User/Home";
import Products from "../src/Pages/User/Products";
import ProductDetail from "../src/Pages/User/ProductDetail";
import Us from "../src/Pages/User/us";
import Carrito from "./Pages/User/Cart";
import Blog from '../src/Pages/User/Blogs';
import ProductsCRUD from '../src/Pages/Admin/ProductsCRUD';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <main className="ml my-3">
        <Routes>
          <Route path="/" element={<HomeUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Carrito />}></Route>
          <Route path="/us" element={<Us />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/admin/products" element={<ProductsCRUD />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
