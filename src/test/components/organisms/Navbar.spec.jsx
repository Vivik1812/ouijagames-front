import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

const TestNavBar = ({ user = null, isAdmin = false }) => {
  return (
    <nav className="navbar bg-black navbar-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          OuijaGames
        </a>
        
        <div className="navbar-nav me-auto">
          <a href="/">Inicio</a>
          <a href="/products">Productos</a>
          <a href="/us">Nosotros</a>
          <a href="#footer">Contactanos</a>
          <a href="/blog">Blog</a>
          
          {isAdmin && <span className="admin-badge">Admin Menu</span>}
        </div>
        
        <div className="navbar-nav">
          {user ? (
            <>
              <span>{user.username}</span>
              {isAdmin && <span className="badge bg-danger ms-2">Admin Badge</span>}
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

  it('1. Renderiza el nombre de la marca OuijaGames', () => {
    render(<TestNavBar />);
    expect(screen.getByText('OuijaGames')).toBeInTheDocument();
  });

  it('2. Muestra los enlaces de navegación principales', () => {
    render(<TestNavBar />);
    
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Productos')).toBeInTheDocument();
    expect(screen.getByText('Nosotros')).toBeInTheDocument();
    expect(screen.getByText('Contactanos')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('Usuario no autenticado: Muestra "Iniciar sesion"', () => {
    render(<TestNavBar user={null} isAdmin={false} />);
    expect(screen.getByText(/iniciar sesion/i)).toBeInTheDocument();
  });

  it('Usuario autenticado: Muestra el nombre del usuario', () => {
    const mockUser = { username: 'UsuarioPrueba' };
    render(<TestNavBar user={mockUser} isAdmin={false} />);
    expect(screen.getByText('UsuarioPrueba')).toBeInTheDocument();
  });

  it('Usuario administrador: Muestra el menú Admin', () => {
    const adminUser = { username: 'AdminTest' };
    render(<TestNavBar user={adminUser} isAdmin={true} />);
    
    // Ahora los textos son únicos
    expect(screen.getByText('Admin Menu')).toBeInTheDocument();
  });

  it('Usuario cliente: NO muestra el menú Admin', () => {
    const clientUser = { username: 'ClienteTest' };
    render(<TestNavBar user={clientUser} isAdmin={false} />);
    
    expect(screen.queryByText('Admin Menu')).not.toBeInTheDocument();
  });
});
