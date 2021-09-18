import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import React from 'react';

export default function LocaleMenu() {
  const [calendar, setCalendar] = React.useState('en');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setCalendar(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Locale
        </InputLabel>
        <NativeSelect
          defaultValue={calendar}
          id="demo-simple-select"
          value={calendar}
          onChange={handleChange}
          inputProps={{
            name: 'locale',
            id: 'locale',
          }}
        >
          <option value={'en'}>English</option>
          <option value={'fr'}>French</option>
          <option value={'sk'}>Slovak</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
