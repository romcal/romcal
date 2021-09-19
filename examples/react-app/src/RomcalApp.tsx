import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import CalendarContent from './components/CalendarContent';
import CalendarToolbar from './components/CalendarToolbar';
import Header from './components/Header';
import Headline from './components/Headline';
import './RomcalApp.css';

function RomcalApp() {
  return (
    <AppContainer maxWidth="md" fixed={true}>
      <Header />
      <Headline />
      <CalendarToolbar />
      <CalendarContent />
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
`;
