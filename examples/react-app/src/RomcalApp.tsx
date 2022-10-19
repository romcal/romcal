import { LocalizationProvider } from '@mui/x-date-pickers';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React from 'react';
import { AppContext, stores } from './AppContext';
import { Calendar } from './components/Calendar';
import Header from './components/Header';
import Headline from './components/Headline';
import './RomcalApp.css';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff5f3d',
      main: '#D02611',
      dark: '#970000',
      contrastText: '#000',
    },
    secondary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#fff',
    },
  },
});

function RomcalApp() {
  return (
    <AppContext.Provider value={stores}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <AppContainer maxWidth="md" fixed={true}>
            <Header />
            <Headline />
            <Calendar />
          </AppContainer>
        </ThemeProvider>
      </LocalizationProvider>
    </AppContext.Provider>
  );
}

export default RomcalApp;

const AppContainer = styled(Container)`
  border-style: solid;
  border-color: #fff;
  border-width: 0;
  border-left-width: thin;
  border-right-width: thin;
  background-color: rgba(255, 255, 2555, 0.9);
  box-sizing: border-box;
  min-height: 100vh;
`;
