import { styled } from '@mui/material/styles';
import * as React from 'react';

export default function RomcalHeaderLogo() {
  return (
    <a href="./">
      <Logo src="./romcal-logo.png" alt="Romcal" />
    </a>
  );
}

const Logo = styled('img')`
  max-height: 60px;
  padding: 35px 20px 40px;
`;
