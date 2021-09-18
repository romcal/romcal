import { capitalize } from '@mui/material';
import React from 'react';
import { Color } from 'romcal';

export function SingleColor(props: { color: Color }) {
  const { color } = props;
  return (
    <>
      <span className={`color-ship ${color.toLowerCase()}`} />
      {capitalize(color.toLowerCase())}
    </>
  );
}

export default function Colors(props: { colors: Color[] }) {
  const { colors } = props;
  return (
    <>
      {colors.map((color, index) => (
        <span key={index}>
          {index > 0 ? ', ' : ''}
          <SingleColor key={color} color={color} />
        </span>
      ))}
    </>
  );
}
