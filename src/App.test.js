import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  
  // Using findByText for async rendering
  const linkElement = await screen.findByText(/learn react/i);  // Adjust this if needed
  
  expect(linkElement).toBeInTheDocument();
});
