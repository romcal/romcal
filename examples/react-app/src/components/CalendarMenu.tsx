import { Box, capitalize, FormControl, InputLabel, NativeSelect } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { CALENDARS } from '../constants/calendars';

const toHumanName = (str: string): string =>
  capitalize(
    str
      .replace(/_/g, ' / ')
      .replace(/([A-Z])/g, ' $1')
      .replace(/\s([a-z])/g, (c) => ` ${c.toUpperCase()}`),
  );

const CalendarMenu = observer(() => {
  const { romcalStore } = useContext(AppContext);
  const { calendarId, setCalendarId } = romcalStore;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) {
      setCalendarId(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 120, marginRight: 2 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Calendar
        </InputLabel>
        <NativeSelect id="calendar" value={calendarId} onChange={handleChange}>
          {Object.keys(CALENDARS).map((id) => (
            <option key={id} value={id}>
              {toHumanName(id)}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
});

export default CalendarMenu;
