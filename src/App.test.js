import { render, screen, act } from '@testing-library/react'; // Updated import
import App from './App';

test('renders learn react link', async () => {  // Use async for awaiting async functions
  render(<App />);
  const linkElement = await screen.findByText(/learn react/i);  // await the result
  expect(linkElement).toBeInTheDocument();
});
