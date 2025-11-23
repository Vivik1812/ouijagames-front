import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/Navbar';
import HomeUser from '../src/components/Pages/User/Home';
import Products from '../src/components/Pages/User/Products';
import ProductDetail from '../src/components/Pages/User/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar/>
      <main className="ml my-3">
        <Routes>
          <Route path="/" element={<HomeUser/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<ProductDetail/>} />
          {/*<Route path="/perro" element={<ProductPerro/>}/>
          <Route path="/gato" element={<ProductGato/>}/>
          <Route path="/accesorio" element={<ProductAccesorio/>}/>
          <Route path="/carrito" element={<Carrito/>}></Route> */}
        </Routes>
      </main>
    </>
  );
}

export default App;