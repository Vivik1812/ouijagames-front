import React from 'react';
import '@testing-library/jest-dom';
import { expect, describe, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Image from '../../../components/atoms/Image';

describe('Image atom', () => {

    it('Debe renderizar correctamente con src y alt correctos', () => {
        render(<Image src="/test-image.jpg" alt="Test Image" />);
        const image = screen.getByAltText(/test image/i);

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/test-image.jpg');
        expect(image).toHaveAttribute('alt', 'Test Image');
    })

    it('Debe aplicar dimensiones personalizadas (width, height)', () => {
        render(
            <Image 
                src="/test-image.jpg" 
                alt="Sized Image"
                width="200"
                height="100"
            />
        );
        const image = screen.getByAltText(/sized image/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/test-image.jpg');
    })

    it('Debe ejecutar onError cuando la imagen no se carga', async() =>{
        const handleError = vi.fn();
        const { container } = render(
            <Image 
                src="/invalid-image.jpg" 
                alt="Broken Image"
                onError={handleError}
            />
        );
        const image = container.querySelector('img');

        // Verificar
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/invalid-image.jpg');
        expect(image).toHaveAttribute('alt', 'Broken Image');
    })
});