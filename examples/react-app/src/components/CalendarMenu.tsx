import { Box, capitalize, FormControl, InputLabel, NativeSelect } from '@mui/material';
import React from 'react';
import Romcal from 'romcal';

const toHumanName = (str: string): string =>
  capitalize(
    str
      .replace(/_/g, ' / ')
      .replace(/([A-Z])/g, ' $1')
      .replace(/\s([a-z])/g, (c) => ` ${c.toUpperCase()}`),
  );

export default function CalendarMenu() {
  const allCalendars = Romcal.CALENDAR_PKG_NAMES.reduce((acc: Record<string, string>, pkg, index) => {
    acc[Romcal.CALENDAR_VAR_NAMES[index]] = pkg;
    return acc;
  }, {});

  const [calendar, setCalendar] = React.useState(Object.values(allCalendars)[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCalendar(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, marginRight: 2 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Calendar
        </InputLabel>
        <NativeSelect defaultValue={calendar} id="calendar" value={calendar} onChange={handleChange}>
          {Object.entries(allCalendars).map(([key, pkg]) => (
            <option key={key} value={pkg}>
              {toHumanName(key)}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
