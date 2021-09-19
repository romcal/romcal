import { Box, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import RomcalHeaderLogo from './RomcalHeaderLogo';

export default function Header() {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <RomcalHeaderLogo />
      <Box>
        <HeaderLink href="https://github.com/romcal/romcal/blob/dev/README.md" underline="hover">
          Documentation
        </HeaderLink>

        <HeaderLink href="https://github.com/romcal/romcal" underline="hover">
          Source Code
        </HeaderLink>
      </Box>
    </Grid>
  );
}

const HeaderLink = styled(Link)`
  text-transform: uppercase;
  margin: 10px;
  font-weight: bold;
  font-size: 0.9em;
`;
