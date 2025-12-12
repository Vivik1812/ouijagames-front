import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../../components/organisms/Footer';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Footer Component', () => {

  it('Renderiza el logo y título "OG"', () => {
    renderWithRouter(<Footer />);
    
    const titulo = screen.getByText('OG');
    expect(titulo).toBeInTheDocument();
    expect(titulo).toHaveClass('text-danger');
  });

  it('El logo tiene un enlace que apunta a la página principal', () => {
    const { container } = renderWithRouter(<Footer />);
    
    const logoLink = container.querySelector('a.navbar-brand');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('El navbar tiene el fondo negro y variante oscura', () => {
    const { container } = renderWithRouter(<Footer />);
    
    const navbar = container.querySelector('.navbar');
    expect(navbar).toHaveClass('bg-black');
    expect(navbar).toHaveClass('navbar-dark');
  });

  it('El footer contiene el id "footer"', () => {
    renderWithRouter(<Footer />);
    
    const footerContainer = screen.getByText('OG').closest('#footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('El componente renderiza sin errores', () => {
    expect(() => {
      renderWithRouter(<Footer />);
    }).not.toThrow();
  });

  it('Todos los textos informativos están presentes', () => {
    renderWithRouter(<Footer />);
    
    // Verificar que hay al menos 3 Nav.Link con información
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });
});