import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, describe, it, vi } from 'vitest';
import DynamicTable from '../../../components/molecules/DynamicTable';

describe('DynamicTable Component', () => {
    const mockColumns = ['ID', 'Name', 'email', 'Acciones'];
    const mockData = [
        { ID: 1, Name: 'Alice', email: 'alice@example.com', onEdit: vi.fn(), onDelete: vi.fn() },
        { ID: 2, Name: 'Bob', email: 'bob@example.com', onEdit: vi.fn(), onDelete: vi.fn() },
    ];

    it('Debe usar array format para datos', () => {
        const columns = ['Nombre', 'email'];
        const data = [
            { Nombre: 'Carlos', email: 'carlos@example.com' },
            { Nombre: 'Diana', email: 'diana@example.com' },
        ];
        render(<DynamicTable columns={columns} data={data} />);
        expect(screen.getByText('Carlos')).toBeInTheDocument();
        expect(screen.getByText('Diana')).toBeInTheDocument();
    });
});