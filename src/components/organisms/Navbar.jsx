import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiRamProfile } from "react-icons/gi";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../utils/roleHelper";
import Button from "../atoms/Button";

function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const userIsAdmin = user ? isAdmin(user) : false;

  function handleLogout() {
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
            {userIsAdmin ? (
              <>
                <Nav.Link href={"/admin"}>Inicio</Nav.Link>
                <Nav.Link href="/admin/products">Productos</Nav.Link>
                <Nav.Link href="/us">Nosotros</Nav.Link>
                <Nav.Link href="#footer">Contactanos</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href={"/"}>Inicio</Nav.Link>
                <Nav.Link href="/products">Productos</Nav.Link>
                <Nav.Link href="/us">Nosotros</Nav.Link>
                <Nav.Link href="#footer">Contactanos</Nav.Link>
                <Nav.Link href="/blogs">Blog</Nav.Link>
              </>
            )}

            {userIsAdmin && (
              <NavDropdown title="Admin" id="admin-dropdown">
                <NavDropdown.Divider />
                <NavDropdown.Item href="/admin/products">
                  Gestionar Productos
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/blogs">
                  Gestionar Noticias
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/users">
                  Gestionar Usuarios
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  PROXIMAMENTE...
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Nav>
            {user ? (
              <>
                <NavDropdown
                  title={
                    <>
                      {user.username} <GiRamProfile size={"1.4rem"} />
                      {userIsAdmin && (
                        <span className="badge bg-danger ms-2">Admin</span>
                      )}
                    </>
                  }
                  id="user-dropdown"
                  align="end"
                >
                  <NavDropdown.Item disabled className="text-center">
                    <small
                      className={
                        userIsAdmin ? "text-danger fw-bold" : "text-info"
                      }
                    >
                      {userIsAdmin ? " Administrador" : " Cliente"}
                    </small>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item href="#">
                    PROXIMAMENTE...
                  </NavDropdown.Item>

                  {/* {!userIsAdmin && (
                    <>
                      <NavDropdown.Item href="/mis-compras">
                        Mis Compras
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/cart">
                        Ver Carrito
                      </NavDropdown.Item>
                    </>
                  )} */}

                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={handleLogout}
                    className="text-danger"
                  >
                    Cerrar Sesión
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/login">
                Iniciar sesion <GiRamProfile size={"1.4rem"} />
              </Nav.Link>
            )}
            {(!user || !userIsAdmin) && (
              <Nav.Link href="/cart" className="d-flex align-items-center">
                Carrito
                <MdOutlineShoppingCart size={"1.4rem"} className="ms-1" />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
