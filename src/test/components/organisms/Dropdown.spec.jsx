import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Dropdown from '../../../components/organisms/Dropdown';


describe('Dropdownn Component', () => {


  test('Al hacer click, muestra las opciones del menú', () => {
    render(<Dropdown />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    const opcion1 = screen.getByText('Ordenar por precio: bajo a alto');
    const opcion2 = screen.getByText('Ordenar por precio: alto a bajo');
    
    expect(opcion1).toBeInTheDocument();
    expect(opcion2).toBeInTheDocument();
  });

  test('El botón tiene el id dropdown-basic', () => {
    const { container } = render(<Dropdown />);
    const button = container.querySelector('#dropdown-basic');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('id', 'dropdown-basic');
  });

  test('El componente renderiza la estructura dropdown de Bootstrap', () => {
    const { container } = render(<Dropdown />);
    
    const dropdown = container.querySelector('.dropdown');
    const toggle = container.querySelector('.dropdown-toggle');
    
    expect(dropdown).toBeInTheDocument();
    expect(toggle).toBeInTheDocument();
  });

  test('Después de hacer click, el dropdown tiene la clase show', () => {
    const { container } = render(<Dropdown />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    const dropdown = container.querySelector('.dropdown');
    expect(dropdown?.classList.contains('show')).toBe(true);
  });

  test('El menú dropdown solo es visible después del click', () => {
    const { container } = render(<Dropdown />);
    
    // Antes del click
    let menuVisible = container.querySelector('.dropdown-menu.show');
    expect(menuVisible).toBeNull();
    
    // Después del click
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    menuVisible = container.querySelector('.dropdown-menu.show');
    expect(menuVisible).toBeInTheDocument();
  });
});