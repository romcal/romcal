import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import React from 'react';

export default function CalendarMenu() {
  const [calendar, setCalendar] = React.useState('general_roman');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setCalendar(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, marginRight: 2 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Calendar
        </InputLabel>
        <NativeSelect
          defaultValue={calendar}
          id="demo-simple-select"
          value={calendar}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={'general_roman'}>General Roman</option>
          <option value={'france'}>France</option>
          <option value={'slovakia'}>Slovakia</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
