import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, describe, it, vi } from 'vitest';
import CardResumen from '../../../components/molecules/CardResumen';

describe('CardResumen molecule', () => {
    //mock
    const originalLocation =window.location;
    let alertMock;

    beforeEach(() => {
        //limpiar localStorage
        localStorage.clear();
        delete window.location;
        window.location = { ...originalLocation, reload: vi.fn()};
        alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    });
    afterEach(() => {
        window.location = originalLocation;
        alertMock.mockRestore();
        vi.clearAllMocks();
    });

    it('Debe ejecutar compra al hacer click en comprar', () => {
        const carrito = [
            {id: 1, name: 'producto 1', cantidad: 2, precio: 100 }];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        render(<CardResumen />);

        const btnComprar = screen.getByRole('button', { name: /comprar/i});
        fireEvent.click(btnComprar);

        expect(localStorage.getItem('carrito')).toBeNull();
        expect(alertMock).toHaveBeenCalledWith('Compra satisfactoria');
        expect(window.location.reload).toHaveBeenCalled();
    });
});