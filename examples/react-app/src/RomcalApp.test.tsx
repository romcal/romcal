import { render, screen } from '@testing-library/react';
import React from 'react';
import RomcalApp from './RomcalApp';

test('renders romcal headline', () => {
  render(<RomcalApp />);
  const textElement = screen.getByText(/A JavaScript library/i);
  expect(textElement).toBeInTheDocument();
});
