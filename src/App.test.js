import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  
  // Using findByText for async rendering
const linkElement = screen.getByText(/Learn React/i);
  
  expect(linkElement).toBeInTheDocument();
});
