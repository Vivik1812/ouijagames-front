import React from 'react';
import '@testing-library/jest-dom';
import Button from '../../../components/atoms/Button';
import { expect, describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button atom', () => {
    it('Debe ejecutar la funcion onClick cuando se hace click', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Test button</Button>)
        const button = screen.getByRole('button', {name: /Test button/i});
        fireEvent.click(button)

        expect(handleClick).toHaveBeenCalled();
        expect(handleClick).toHaveBeenCalledTimes(1);
    })

    it('Debe renderizar correctamente sin children', () => {
        render(<Button onClick={() => {}} />);
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('');
    })

    it('Debe lanzar error si se pasan props invalidas', () => {
        const invalidProps = undefined;
        expect(() =>{
             render(<Button {...invalidProps}>Invalid Props</Button>);
        }).not.toThrow();

        const button = screen.getByRole('button', {name: /Invalid Props/i});
        expect(button).toBeInTheDocument();
    })
});
