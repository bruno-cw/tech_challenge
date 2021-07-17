import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home page', () => {
  render(<Home />);
  const element = screen.getByText(/Welcome!/i);
  expect(element).toBeInTheDocument();
});
