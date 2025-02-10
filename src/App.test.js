import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  
  // Find the element that contains "Learn React" text
  const linkElement = await screen.findByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});

