import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { format } from 'date-fns';
import React from 'react';
import { BaseLiturgicalDay } from 'romcal';

export default function Day(props: { liturgicalDay: BaseLiturgicalDay[] }) {
  const { liturgicalDay } = props;
  const date = new Date(liturgicalDay[0].date);

  return (
    <>
      {date.getDate() === 1 && (
        <Typography variant="h4" gutterBottom component="div">
          {format(date, 'MMMM yyyy')}
        </Typography>
      )}
      <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
        <Box sx={{ minWidth: 50 }}>
          <DayNumber>{date.getDate()}</DayNumber>
        </Box>
        <Box>
          <div className="Day">{liturgicalDay[0].name}</div>
          {liturgicalDay.length > 1 &&
            liturgicalDay.slice(1).map((altDay) => <div key={altDay.key}>{altDay.name}</div>)}
        </Box>
      </Grid>
    </>
  );
}

const DayNumber = styled('h4')`
  font-family: 'EB Garamond', serif;
  margin-top: 0;
  font-weight: normal;
  font-size: 30px;
  text-align: right;
  width: 30px;
`;
