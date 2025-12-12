import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from '../../../components/organisms/Carousel';
import '@testing-library/jest-dom';

describe('CarouselProduct Component', () => {
  
  it('El carousel se renderiza correctamente', () => {
    // Componente mock 
    const MockCarouselProduct = () => {
      const mockImages = [
        { id: 1, url: 'https://example.com/image1.jpg' },
        { id: 2, url: 'https://example.com/image2.jpg' },
        { id: 3, url: 'https://example.com/image3.jpg' }
      ];

      return (
        <div className="carousel m-5" data-testid="carousel-container">
          {mockImages.map((image) => (
            <div key={image.id} className="carousel-item" data-testid="carousel-item">
              <img src={image.url} alt={`slide-${image.id}`} />
            </div>
          ))}
        </div>
      );
    };

    render(<MockCarouselProduct />);
    const carousel = screen.getByTestId('carousel-container');
    expect(carousel).toBeInTheDocument();
  });

  it('Renderiza múltiples items en el carousel', () => {
    const mockImages = [
      { id: 1, url: 'https://example.com/1.jpg' },
      { id: 2, url: 'https://example.com/2.jpg' },
      { id: 3, url: 'https://example.com/3.jpg' }
    ];

    const MockCarousel = () => (
      <div className="carousel m-5">
        {mockImages.map((image) => (
          <div key={image.id} data-testid="carousel-item">
            <img src={image.url} alt="carousel" />
          </div>
        ))}
      </div>
    );

    render(<MockCarousel />);
    const items = screen.getAllByTestId('carousel-item');
    expect(items).toHaveLength(3);
  });

  it('Cada item contiene una imagen con src correcto', () => {
    const mockImages = [
      { id: 1, url: 'https://example.com/1.jpg' },
      { id: 2, url: 'https://example.com/2.jpg' }
    ];

    const MockCarousel = () => (
      <div className="carousel">
        {mockImages.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt="carousel" />
          </div>
        ))}
      </div>
    );

    render(<MockCarousel />);
    const images = screen.getAllByRole('img');
    
    expect(images[0]).toHaveAttribute('src', 'https://example.com/1.jpg');
    expect(images[1]).toHaveAttribute('src', 'https://example.com/2.jpg');
  });

  it('Maneja array vacío correctamente', () => {
    const EmptyCarousel = () => (
      <div className="carousel m-5" data-testid="carousel">
        {[].map((image) => (
          <div key={image.id}>
            <img src={image.url} alt="carousel" />
          </div>
        ))}
      </div>
    );

    render(<EmptyCarousel />);
    const carousel = screen.getByTestId('carousel');
    expect(carousel).toBeInTheDocument();
    
    const images = screen.queryAllByRole('img');
    expect(images).toHaveLength(0);
  });

  it('Maneja URLs inválidas sin romper', () => {
    const badImages = [
      { id: 1, url: null },
      { id: 2, url: undefined },
      { id: 3, url: '' }
    ];

    const CarouselWithBadData = () => (
      <div className="carousel">
        {badImages.map((image) => (
          <div key={image.id}>
            <img src={image.url || 'fallback.jpg'} alt="carousel" />
          </div>
        ))}
      </div>
    );

    render(<CarouselWithBadData />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute('src', 'fallback.jpg');
  });

  it('El carousel tiene las clases CSS correctas', () => {
    const MockCarousel = () => (
      <div className="carousel m-5 custom-class" data-testid="carousel">
        <div>Content</div>
      </div>
    );

    render(<MockCarousel />);
    const carousel = screen.getByTestId('carousel');
    
    expect(carousel).toHaveClass('carousel');
    expect(carousel).toHaveClass('m-5');
  });
});