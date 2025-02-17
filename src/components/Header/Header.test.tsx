import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders title passed as prop', () => {
  render(<Header title="My App" />);
  const titleElement = screen.getByText(/My App/i);
  expect(titleElement).toBeInTheDocument();
});
