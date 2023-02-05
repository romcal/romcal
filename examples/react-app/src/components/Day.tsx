import { Box, Grid, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { format } from 'date-fns';
import React from 'react';
import { BaseLiturgicalDay } from 'romcal';
import AdditionalLineContent from './AdditionalLineContent';

export default function Day(props: { liturgicalDay: BaseLiturgicalDay[] }) {
  const { liturgicalDay } = props;
  const date = new Date(liturgicalDay[0].date);

  return (
    <>
      {date.getUTCDate() === 1 && <MonthTitle>{format(date, 'MMMM yyyy')}</MonthTitle>}
      <DayContainer
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        className={`dow-${date.getUTCDay()} date-in-month-${date.getUTCDate()}`}
      >
        <Grid item xs={1}>
          <Box>
            <Tooltip placement="top-start" title={format(date, 'EEEE')}>
              <DayNumber>{date.getUTCDate()}</DayNumber>
            </Tooltip>
          </Box>
        </Grid>
        <Grid item xs>
          <Box>
            <MainTitle className={liturgicalDay[0].rank.toLowerCase()}>{liturgicalDay[0].name}</MainTitle>
            <AdditionalLineContent day={liturgicalDay[0]} />
            {liturgicalDay.length > 1 &&
              liturgicalDay.slice(1).map((altDay) => (
                <div key={altDay.id}>
                  <OptionalTitle key={altDay.id} className={altDay.rank.toLowerCase()}>
                    {altDay.isOptional ? <OrLabel>or: </OrLabel> : <></>}
                    {altDay.name}
                  </OptionalTitle>
                  <AdditionalLineContent day={altDay} />
                </div>
              ))}
          </Box>
        </Grid>
      </DayContainer>
    </>
  );
}

const DayContainer = styled(Grid)`
  margin: 15px 0;
`;

const MonthTitle = styled('h4')`
  font-weight: 100;
  font-family: 'Roboto', sans-serif;
  font-size: 2em;
`;

const DayNumber = styled('h4')`
  font-family: 'EB Garamond', serif;
  font-weight: normal;
  font-size: 30px;
  line-height: 30px;
  text-align: right;
  width: 30px;
  margin: 0;
`;

const MainTitle = styled('h5')`
  font-weight: 500;
  font-family: 'EB Garamond', serif;
  vertical-align: baseline;
  line-height: 30px;
  margin: 0;

  &::before {
    content: '';
    font-size: 25px;
  }
`;

const OptionalTitle = styled('h6')`
  font-weight: 500;
  font-family: 'EB Garamond', serif;
  vertical-align: baseline;
  line-height: 30px;
  margin: 5px 0 0;

  &::before {
    content: '';
    font-size: 25px;
  }
`;

const OrLabel = styled('span')`
  font-size: 19px;
  text-transform: none;
  font-variant: normal;
  font-weight: 400;
`;
