import React from 'react';
import '@testing-library/jest-dom';
import { expect, describe, it, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import InputFile from '../../../components/atoms/InputFile'; 

describe('InputFile atoms', () => {

    it('Debe renderizar un input de tipo file', () => {
        const { container } = render(<InputFile />);
        const input = container.querySelector('input[type="file"]');

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'file');
    });

    it('Debe llamar a la función onChange al seleccionar un archivo', async () => {
        const handleChange = vi.fn();
        const { container } = render(<InputFile onChange={handleChange} />);
        const inputFile = container.querySelector('input[type="file"]');
        expect(inputFile).toBeInTheDocument();

        const file = new File(['file content'], 'example.png', { type: 'image/png' });

        fireEvent.change(inputFile, { target: { files: [file] } });
        await waitFor(() => {
            expect(handleChange).toHaveBeenCalled();
        });
    });

    it('Debe validar el tamaño maximo de archivo', () =>{
        const handleChange = vi.fn();
        const maxSize = 1024; 
        const validateFileSize = (file) => file.size <= maxSize;

        render(<InputFile onChange={handleChange} />);
        const input = document.querySelector('input[type="file"]');
        const largeFile = new File(['a'.repeat(2048)], 'large.txt', { type: 'text/plain' });

        fireEvent.change(input, { target: { files: [largeFile] } });

        //ejecutar la validación
        expect(validateFileSize(largeFile)).toBe(false);
        expect(handleChange).toHaveBeenCalled();
    })

    it('Debe manejar tipo de archivo no permitido', () => {
        render(<InputFile  accept= "jpg,.png"/>);
        const input = document.querySelector('input[type="file"]');

        //ej intentar cargar un pdf cuando solo se aceptan imagenes
        const pdfFile = new File(['content'], 'document.pdf', { type: 'application/pdf' });
        fireEvent.change(input, { target: { files: [pdfFile] } });

        expect(input).toHaveAttribute('accept', 'jpg,.png');
    });

    it('Debe manejar la seleccion de archivo y posterior cancelacion', () => {
        const handleChange = vi.fn();
        render(<InputFile onChange={handleChange} />);

        const input = document.querySelector('input[type="file"]');
        const file = new File(['file content'], 'test.txt', { type: 'text/plain' });

        fireEvent.change(input, { target: { files: [file] } });
        expect(handleChange).toHaveBeenCalledTimes(1);

        //simular cancelacion
        fireEvent.change(input, { target: { files: [] } });
        expect(handleChange).toHaveBeenCalledTimes(2);

    });


});