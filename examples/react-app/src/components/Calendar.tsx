import { observer } from 'mobx-react';
import React from 'react';
import CalendarContent from './CalendarContent';
import CalendarToolbar from './CalendarToolbar';

export const Calendar = observer(() => {
  return (
    <>
      <CalendarToolbar />
      <CalendarContent />
    </>
  );
});
