import React from 'react';
import '@testing-library/jest-dom';
import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardBody from '../../../components/molecules/CardBody';

describe('CardBody molecule', () => {

    const mockProps = {
        name: 'Producto de prueba',
        description: 'Descripcion producto de prueba',
        price: '$1000',
        category: {
            name: 'Categoria prueba'},
        stock: 10,
        isDetail: false,
        isCart: false
    };
    
    it('Debe renderizar el componente en modo normal(card)', () => {
        render(<CardBody {...mockProps} />);

        const name = screen.getAllByText(/Producto de prueba/i)[0];
        const description = screen.getByText(/Descripcion producto de prueba/i);
        const price = screen.getByText(/\$1000/i);

        expect(name).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(price).toBeInTheDocument();
    });

    it('Debe mostrar "En stock" cuando el stock es mayor a 0', () => {
        render(<CardBody {...mockProps} isDetail ={true} stock={5} />);

        const stockInfo = screen.getByText(/En stock/i);
        expect(stockInfo).toBeInTheDocument();
        expect(stockInfo).toHaveClass('text-success');
    });

    it('Debe mostrar "Sin stock" cuando el stock es 0', () => {
        render(<CardBody {...mockProps} isDetail ={true} stock={0} />);

        const stockInfo = screen.getByText(/Sin stock/i);
        expect(stockInfo).toBeInTheDocument();
        expect(stockInfo).toHaveClass('text-danger');
    });

    it('Debe manejar nombre de producto muy largo', () => {
        const longName = 'Producto de prueba con un nombre demasiado largo'.repeat(10);
        render(<CardBody {...mockProps} name={longName} />);

        const name = screen.getByText(longName);
        expect(name).toBeInTheDocument();
    });

    it('Debe cambiar entre tipos correctamente', () => {
        const { rerender } = render(<CardBody {...mockProps} />);

        //normal
        let description = screen.getByText(/Descripcion producto de prueba/i);
        expect(description).toBeInTheDocument();

        //detalle
        rerender(<CardBody {...mockProps} isDetail={true} />);
        const button = screen.getByRole('button', { name: /Agregar al carrito/i });
        expect(button).toBeInTheDocument();

        //carrito
        rerender(<CardBody {...mockProps} isCart={true} />);
        const cartButton = screen.queryByRole('button', { name: /Agregar al carrito/i });
        expect(cartButton).not.toBeInTheDocument();
    });

    it('Debe renderizar sin romper cuando faltan props obligatorias', () => {
        expect(() => render(<CardBody />)).not.toThrow();
    }); 

    it('Debe manejar descripcion nulla sin romperse', () => {
        expect(() => render(<CardBody {...mockProps} description={null} />)).not.toThrow();
    });

    it('Debe manejar stock indefinido(como sin stock)', () => {
        render(<CardBody {...mockProps} isDetail={true} stock={undefined} />);

        const stockInfo = screen.getByText(/Sin stock/i);
        expect(stockInfo).toBeInTheDocument();
        expect(stockInfo).toHaveClass('text-danger');
    });

    it('Debe aplicar clases de alineacion de texto correctamente', () => {
        const { container } = render(<CardBody {...mockProps} textAlign="center" />);
        expect(container.firstChild).toBeInTheDocument();

        const containerDiv = container.querySelector('.container');
        expect(containerDiv).toBeInTheDocument();
    });


});