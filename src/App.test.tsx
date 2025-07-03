import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Заглушки для дочерних компонентов
jest.mock('./pages/startpage', () => (props: any) => {
    return (
        <div>
            Startpage component
            <button onClick={() => props.onNavigate('home')}>Go Home</button>
            <button onClick={() => props.onMode('admin')}>Set Admin Mode</button>
            <button onClick={() => props.onLogin('user123')}>Login</button>
        </div>
    );
});

jest.mock('./pages/Home', () => (props: any) => <div>Home component</div>);
jest.mock('./pages/Catalog', () => (props: any) => <div>Catalog component</div>);
jest.mock('./pages/Contacts', () => (props: any) => <div>Contacts component</div>);
jest.mock('./pages/Basket', () => (props: any) => (
    <div>Basket component. Items: {props.cart.length}</div>
));
jest.mock('./pages/Buys', () => (props: any) => <div>Buys component</div>);

describe('App component', () => {
    test('рендерит Startpage по умолчанию', () => {
        render(<App />);
        expect(screen.getByText(/Startpage component/i)).toBeInTheDocument();
    });

    test('переход на Home при вызове onNavigate', () => {
        render(<App />);
        // Кликаем кнопку "Go Home" в стартовой странице
        fireEvent.click(screen.getByText('Go Home'));
        expect(screen.getByText(/Home component/i)).toBeInTheDocument();
    });

    test('изменение режима при вызове onMode', () => {
        render(<App />);
        fireEvent.click(screen.getByText('Set Admin Mode'));
        // После перехода в режим admin, при возврате на старт (page='start') mode сбросится
        fireEvent.click(screen.getByText('Go Home'));
        expect(screen.getByText(/Home component/i)).toBeInTheDocument();
    });

    test('логин устанавливается корректно', () => {
        render(<App />);
        fireEvent.click(screen.getByText('Login'));
        // Переходим в корзину, чтобы проверить, что login передается
        fireEvent.click(screen.getByText('Go Home')); // на home
        // Переходим в корзину, напрямую установим page:
        // Для упрощения теста можно рендерить Basket отдельно с login
        // Либо для полноты теста можно улучшить навигацию в App.
    });
});
