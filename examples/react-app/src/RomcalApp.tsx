import { Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import Romcal, { BaseLiturgicalDay } from 'romcal';
import { GeneralRoman_En } from 'romcal/dist/bundles/general-roman';
import CalendarMenu from './components/CalendarMenu';
import Day from './components/Day';
import LocaleMenu from './components/LocaleMenu';
import MonthPicker from './components/MonthPicker';
import RomcalHeaderLogo from './components/RomcalHeaderLogo';
import './RomcalApp.css';

const romcal = new Romcal({ localizedCalendar: GeneralRoman_En });
const fetchCalendar = (): Promise<BaseLiturgicalDay[][]> => romcal.generateCalendar().then(Object.values);

function RomcalApp() {
  const [calendar, updateCalendar] = useState<BaseLiturgicalDay[][]>([]);

  useEffect(() => {
    fetchCalendar().then(updateCalendar);
  }, []);

  return (
    <div className="RomcalApp">
      <AppContainer maxWidth="md" fixed={true}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <RomcalHeaderLogo />
        </Grid>

        <ToolBar container direction="row" justifyContent="space-between" alignItems="center">
          <Grid container xs>
            <MonthPicker />
          </Grid>
          <CalendarMenu />
          <LocaleMenu />
        </ToolBar>

        <MonthContainer>
          {calendar.map((day) => (
            <Day liturgicalDay={day} key={day[0].date} />
          ))}
        </MonthContainer>
      </AppContainer>
    </div>
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

const MonthContainer = styled('div')`
  padding: 30px 10px;
`;

const ToolBar = styled(Grid)`
  margin-bottom: 0;
`;
