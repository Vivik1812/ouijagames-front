import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, describe, it, vi } from 'vitest';
import DynamicTexts from '../../../components/molecules/DynamicTexts';

describe('DynamicTexts molecule', () => {
    it('Debe renderizar correctamente con un solo texto', () => {
        const textos = [
            {id: 1, variant: 'h1', className: 'title', content: 'Texto de prueba'}];
        render(<DynamicTexts Texts={textos} />);

        const titulo = screen.getByText('Texto de prueba');
        expect(titulo).toBeInTheDocument();
        expect(titulo).toHaveClass('title');
    });
});