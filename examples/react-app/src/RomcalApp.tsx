import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Calendar } from './components/Calendar';
import Header from './components/Header';
import Headline from './components/Headline';
import './RomcalApp.css';

function RomcalApp() {
  return (
    <AppContainer maxWidth="md" fixed={true}>
      <Header />
      <Headline />
      <Calendar />
    </AppContainer>
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
