import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Day from './Day';
import LoadingIndicator from './LoadingIndicator';

const CalendarContent = observer(() => {
  const { romcalStore } = useContext(AppContext);
  const { fetchingData, monthlyData } = romcalStore;

  if (monthlyData.length === 0 && !fetchingData) {
    romcalStore.getMonthData();
  }

  if (fetchingData) {
    return <LoadingIndicator />;
  }

  return (
    <MonthContainer>
      {monthlyData.map((day) => (
        <Day liturgicalDay={day} key={day[0].date} />
      ))}
    </MonthContainer>
  );
});

export default CalendarContent;

const MonthContainer = styled('div')`
  padding: 30px 10px;
`;
