import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, describe, it, vi } from 'vitest';
import CartButtons from '../../../components/molecules/CartButtons';

describe('CardButtons molecule', () => {

    //mock
    const originalLocation =window.location;

    beforeEach(() => {
        //limpiar localStorage
        localStorage.clear();

        delete window.location;
        window.location = { ...originalLocation, reload: vi.fn()};
    });
    afterEach(() => {
        window.location = originalLocation;
        vi.clearAllMocks();
    });

    it('Debe sumar la cantidad cuando se hace click en el boton +', () => {
        const carrito = [
            {id: 1, name: 'producto 1', cantidad: 2, precio: 100 }];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        render(<CartButtons id={1}/>);

        const btnSumar = screen.getByText('+');
        fireEvent.click(btnSumar);

        expect(window.location.reload).toHaveBeenCalled();

        //verificar que se actualizo
        const carritoActualizado = JSON.parse(localStorage.getItem('carrito'));
        expect(carritoActualizado[0].cantidad).toBe(3);
        expect(window.location.reload).toHaveBeenCalled();
    });

    it('Debe manejar localStorage vacio correctamente', () => {
        render(<CartButtons id={1}/>);
        const cantidadBtn = screen.getByText('0');
        expect(cantidadBtn).toBeInTheDocument();
    });
});


