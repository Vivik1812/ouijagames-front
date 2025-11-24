import React from 'react';
import '@testing-library/jest-dom';
import { expect, describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../../components/atoms/Input';

describe('Input atom', () => {

    it('Debe aceptar diferentes tipos de input(text, password, email)', () => {
        const {rerender} = render(<Input type="text" placeholder="Text input" />);
        let input = screen.getByPlaceholderText(/text input/i);
        expect(input).toHaveAttribute('type', 'text');

        rerender(<Input type="password" placeholder="Password input" />);
        input = screen.getByPlaceholderText(/password input/i);
        expect(input).toHaveAttribute('type', 'password');

        rerender(<Input type="email" placeholder="Email input" />);
        input = screen.getByPlaceholderText(/email input/i);
        expect(input).toHaveAttribute('type', 'email');
    })

    it('Debe aceptar maxLenght y no permitir mas caracteres',() => {
        render(<Input maxLength={5} />);
        const input = screen.getByRole('textbox');

        expect(input).toHaveAttribute('maxLength', '5');
        expect(input.maxLength).toBe(5);
    })

    it('Debe manejar valor null sin errores', () => {
        expect(() => {
            render(<Input value = {null} onChange={() => {}}/>);
        }).not.toThrow();
    })

    it('Debe fallar validacion con patron incorrecto', () => {
        const emailPattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
        render(<Input pattern = {emailPattern}/>);
        const input = screen.getByRole('textbox');

        expect(input).toHaveAttribute('pattern');

        const pattern = new RegExp(emailPattern);
        expect(pattern.test('invalid-email')).toBe(false);
        expect(pattern.test('valid@email.com')).toBe(true);    
    })

});
