import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import Romcal, { BaseLiturgicalDay } from 'romcal';
import { GeneralRoman_En } from 'romcal/dist/bundles/general-roman';
import Day from './Day';

const romcal = new Romcal({ localizedCalendar: GeneralRoman_En });
const fetchCalendar = (): Promise<BaseLiturgicalDay[][]> => romcal.generateCalendar().then(Object.values);

export default function CalendarContent() {
  const [calendar, updateCalendar] = useState<BaseLiturgicalDay[][]>([]);

  useEffect(() => {
    fetchCalendar().then(updateCalendar);
  }, []);

  return (
    <MonthContainer>
      {calendar.map((day) => (
        <Day liturgicalDay={day} key={day[0].date} />
      ))}
    </MonthContainer>
  );
}

const MonthContainer = styled('div')`
  padding: 30px 10px;
`;
