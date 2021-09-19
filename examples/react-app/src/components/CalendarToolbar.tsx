import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import CalendarMenu from './CalendarMenu';
import LocaleMenu from './LocaleMenu';
import MonthPicker from './MonthPicker';

export default function CalendarToolbar() {
  return (
    <Container container direction="row" justifyContent="space-between" alignItems="center">
      <Grid container xs>
        <MonthPicker />
      </Grid>
      <CalendarMenu />
      <LocaleMenu />
    </Container>
  );
}

const Container = styled(Grid)`
  margin-bottom: 0;
`;
