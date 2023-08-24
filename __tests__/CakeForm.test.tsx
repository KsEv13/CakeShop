import React from 'react';
import { render, screen } from '@testing-library/react';
import CakeForm from '../src/components/CakeForm/CakeForm';

test('renders cake order form', () => {
  render(<CakeForm />);
  const cakeFormTitle = screen.getByText(/Cake Order Form/i);
  expect(cakeFormTitle).toBeInTheDocument();
});
