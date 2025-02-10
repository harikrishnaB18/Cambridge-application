import { act } from 'react-dom/test-utils';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
