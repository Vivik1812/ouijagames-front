import { Navbar, Nav, Container } from 'react-bootstrap'
import { MdOutlineShoppingCart } from 'react-icons/md';
import { GiRamProfile } from "react-icons/gi";


function NavBar() {
    return (
        <Navbar bg='black' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand href="/"><GiRamProfile className=''/><span className='text-danger'>O</span>uija<span className="text-danger">G</span>ames</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/products">Productos</Nav.Link>
                        <Nav.Link href="/us">Nosotros</Nav.Link>
                        <Nav.Link href="#footer">Contactanos</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href='#'><GiRamProfile size={'1.5rem'}/></Nav.Link> */}
                        <Nav.Link href='/cart'><MdOutlineShoppingCart size={'1.5rem'}/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;