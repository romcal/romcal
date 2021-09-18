import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, Container, Grid, Link } from '@mui/material';
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

        <HeadlineContainer>
          <p>
            A JavaScript library that generates liturgical calendars of the Roman Rite of the Roman Catholic Church.
          </p>
          <HeadlineFooter>
            <Button variant="outlined" href="https://github.com/romcal/romcal" startIcon={<GitHubIcon />}>
              See more
            </Button>
          </HeadlineFooter>
        </HeadlineContainer>

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

const HeaderLink = styled(Link)`
  text-transform: uppercase;
  margin: 10px;
  font-weight: bold;
  font-size: 0.9em;
`;

const HeadlineContainer = styled('div')`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 1.5em;
  margin: 0 0 50px;
  padding: 20px;
  border-radius: 3px;
  background-image: linear-gradient(135deg, #fcfaf8 0%, #faf7f4 100%);

  > p {
    margin: 0;
  }
`;

const HeadlineFooter = styled('p')`
  text-align: right;
  padding-top: 10px;
`;
