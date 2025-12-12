import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Breadcrumbb from '../../../components/organisms/Breadcrumb';


describe('Breadcrumbb Component', () => {
    const renderWithRouter = (component, route) => {
        return render(
            <MemoryRouter initialEntries={[route]}>
                {component}
            </MemoryRouter>
        );
    };

    it('Valida que los enlaces internos usen Link de react-router', () => {
        const { container } = renderWithRouter(
            <Breadcrumbb productName="Test Product" id="123" />,
            '/products/123'
        );

        const links = container.querySelectorAll('a');
        expect(links.length).toBeGreaterThan(0);
        links.forEach(link => {
            expect(link.getAttribute('href')).not.toBeNull();
        });
    });

    it('Renderiza null o no renderiza nada para rutas no definidas', () => {
        const { container } = renderWithRouter(
            <Breadcrumbb />,
            '/ruta-inexistente'
        );

        expect(container.firstChild).toBeNull();
    });

    it('Muestra correctamente el nombre del producto cuando se proporciona', () => {
        const nombreProducto = 'Teclado Mecánico RGB';

        renderWithRouter(
            <Breadcrumbb productName={nombreProducto} id="789" />,
            '/products/789'
        );

        expect(screen.getByText(nombreProducto)).toBeInTheDocument();
    });

    it('Diferencia entre rutas de admin y rutas públicas', () => {
        const { container: publicContainer } = renderWithRouter(
            <Breadcrumbb />,
            '/products'
        );

        const { container: adminContainer } = renderWithRouter(
            <Breadcrumbb />,
            '/admin/products'
        );

        expect(publicContainer.textContent).toContain('Productos');
        expect(adminContainer.textContent).toContain('Administracion - Productos');
        expect(publicContainer.textContent).not.toEqual(adminContainer.textContent);
    });

    it('Verifica que los enlaces tengan las rutas correctas', () => {
        renderWithRouter(<Breadcrumbb id="123" />, '/products');

        const inicioLink = screen.getByText('Inicio').closest('a');
        expect(inicioLink).toHaveAttribute('href', '/');
    });
});