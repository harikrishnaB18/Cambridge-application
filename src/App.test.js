import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders home page content', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    // Update this to match actual content from HomeTwo
    const homeElement = screen.getByText(/chelmsford conveyancing/i); 
    expect(homeElement).toBeInTheDocument();
});
