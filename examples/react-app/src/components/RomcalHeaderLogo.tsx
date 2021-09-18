import { styled } from '@mui/material/styles';
import * as React from 'react';

export default function RomcalHeaderLogo() {
  return <Logo src="./romcal-logo.png" alt="Romcal" />;
}

const Logo = styled('img')`
  max-height: 60px;
  padding: 30px 20px 40px;
`;
