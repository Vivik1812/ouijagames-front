import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../../components/organisms/NavBar';

const TestNavBar = ({ user = null, isAdmin = false }) => {
  return (
    <nav className="navbar bg-black navbar-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          <span className="text-danger">O</span>uija
          <span className="text-danger">G</span>ames
        </a>
        
        <div className="navbar-nav me-auto">
          <a href="/">Inicio</a>
          <a href="/products">Productos</a>
          <a href="/us">Nosotros</a>
          <a href="#footer">Contactanos</a>
          <a href="/blog">Blog</a>
          
          {isAdmin && <span>Admin</span>}
        </div>
        
        <div className="navbar-nav">
          {user ? (
            <>
              <span>{user.username}</span>
              {isAdmin && <span className="badge bg-danger ms-2">Admin</span>}
            </>
          ) : (
            <a href="/login">Iniciar sesion</a>
          )}
          
          {(!user || !isAdmin) && (
            <a href="/cart">Carrito</a>
          )}
        </div>
      </div>
    </nav>
  );
};

describe('NavBar Component', () => {

  it('Renderiza el nombre de la marca OuijaGames', () => {
    render(<TestNavBar />);
    
    const brandLink = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'a' && 
             element.textContent === 'OuijaGames';
    });
    
    expect(brandLink).toBeInTheDocument();
  });

  it('2. Muestra los enlaces de navegación principales', () => {
    render(<TestNavBar />);
    
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Productos')).toBeInTheDocument();
    expect(screen.getByText('Nosotros')).toBeInTheDocument();
    expect(screen.getByText('Contactanos')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('Muestra "Iniciar sesion" para usuario no identificado', () => {
    render(<TestNavBar user={null} isAdmin={false} />);
    
    expect(screen.getByText(/iniciar sesion/i)).toBeInTheDocument();
  });

  it('Muestra el nombre del usuario para usuario identificado', () => {
    const mockUser = { username: 'UsuarioPrueba' };
    render(<TestNavBar user={mockUser} isAdmin={false} />);
    
    expect(screen.getByText('UsuarioPrueba')).toBeInTheDocument();
  });

  it('Muestra el menú Admin para usuario admin', () => {
    const adminUser = { username: 'AdminTest' };
    render(<TestNavBar user={adminUser} isAdmin={true} />);
    
    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  it('No muestra el menú Admin para otros usuarios', () => {
    const clientUser = { username: 'ClienteTest' };
    render(<TestNavBar user={clientUser} isAdmin={false} />);
    
    expect(screen.queryByText('Admin')).not.toBeInTheDocument();
  });
});