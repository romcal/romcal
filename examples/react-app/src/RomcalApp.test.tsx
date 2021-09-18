import React from 'react';
import { render, screen } from '@testing-library/react';
import RomcalApp from './RomcalApp';

test('renders learn react link', () => {
  render(<RomcalApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
