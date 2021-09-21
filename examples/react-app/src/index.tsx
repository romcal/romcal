import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContext, stores } from './AppContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RomcalApp from './RomcalApp';

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

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={stores}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <RomcalApp />
        </ThemeProvider>
      </LocalizationProvider>
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
