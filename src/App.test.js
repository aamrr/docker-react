import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello there, i travelled so long!/i);
  expect(linkElement).toBeInTheDocument();
});


test('be logical', () => {
  expect(1).toEqual(1);
});
