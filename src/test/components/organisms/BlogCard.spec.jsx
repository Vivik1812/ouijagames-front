import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogCard from '../../../components/organisms/BlogCard';

describe('BlogCard Organisms', () => {
  
  const mockBlog = {
    titulo: 'Mejores juegos de mesa 2025',
    texto: 'Los mejores juegos de mesa para disfrutar en familia y con amigos.',
    img: 'https://i.ytimg.com/vi/hRXDBGtb_Eg/maxresdefault.jpg'
  };


  it('Debe renderizar el blog con título, descripción e imagen', () => {
    render(<BlogCard blog={mockBlog} />);
    
    // Verificar el título
    expect(screen.getByText('Mejores juegos de mesa 2025')).toBeInTheDocument();
    
    // Verificar la descripción 
    expect(screen.getByText(/Los mejores juegos de mesa para disfrutar en familia y con amigos./i)).toBeInTheDocument();
    
    // Verificar la imagen 
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://i.ytimg.com/vi/hRXDBGtb_Eg/maxresdefault.jpg');
  });


  it('Debe pasar las props correctas a CardBody con isBlog=true', () => {
    const { container } = render(<BlogCard blog={mockBlog} />);
    
    expect(screen.getByText('Mejores juegos de mesa 2025')).toBeInTheDocument();
    expect(screen.getByText(/Los mejores juegos de mesa para disfrutar en familia y con amigos./i)).toBeInTheDocument();
    
    const cardBody = container.querySelector('.card-body');
    expect(cardBody).toBeInTheDocument();
  });


  it('Debe manejar blog undefined sin romper', () => {
    expect(() => {
      render(<BlogCard blog={undefined} />);
    }).toThrow(); 
    
    const emptyBlog = {
      titulo: '',
      texto: '',
      img: '',
      urlRef: ''
    };
    
    const { container } = render(<BlogCard blog={emptyBlog} />);
    
    const card = container.querySelector('.card');
    expect(card).toBeInTheDocument();
  });
});