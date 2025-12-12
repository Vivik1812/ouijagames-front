import { Navbar, Nav, Container } from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiRamProfile } from "react-icons/gi";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


function NavBar() {
  const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout(){
        logout();
        navigate("/login");
    }


  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <GiRamProfile className="" />
          <span className="text-danger">O</span>uija
          <span className="text-danger">G</span>ames
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            <Nav.Link href="/us">Nosotros</Nav.Link>
            <Nav.Link href="#footer">Contactanos</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            {user ? (
                <>
              <Nav.Link href="/login">
                {user.username} <GiRamProfile size={"1.4rem"} />
              </Nav.Link>
              <Button onClick={handleLogout}>Cerrar Sesion</Button>
              </>
            ) : (
              <Nav.Link href="/login">
                Iniciar sesion <GiRamProfile size={"1.4rem"} />
              </Nav.Link>
            )}
            <Nav.Link href="/cart">
              Carrito
              <MdOutlineShoppingCart size={"1.4rem"} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
