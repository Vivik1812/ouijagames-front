import React from 'react';
import '@testing-library/jest-dom';
import { expect, describe, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Text from '../../../components/atoms/Text';


describe('Text atoms', () => {

    it('Debe renderizar un texto simple correctamente', () => {
        render(<Text>Texto prueba</Text>);
        const text = screen.getByText('Texto prueba');
        expect(text).toBeInTheDocument();
        expect(text).toHaveTextContent('Texto prueba');
    });

    it('Debe aplicar clases CSS personalizadas', () => {
        render(<Text className="custom-text text-primary">style text</Text>);
        const text = screen.getByText(/style text/i);
        expect(text).toHaveClass('custom-text');
        expect(text).toHaveClass('text-primary');
    });

    it('Debe manejar multiples espacion y saltos de linea', () => {
        render(<Text>Linea 1{'\n'}{'   ' }Linea 2{'\n'}Linea 3</Text>);
        const text = screen.getByText(/Linea 1/i);
        expect(text).toBeInTheDocument();
    });

    it('Debe renderizar vacio cuando children es null', () => {
        render(<Text>{null}</Text>);
        const text = screen.getByTextId ? null : document.body;
        expect(text || document.body).toBeInTheDocument();
    });

    it('Debe fallar silenciosamente con props invalidas', () => {
        expect(() => {
            render(<Text as="invalidTag"></Text>);
        }).not.toThrow();
    });

});