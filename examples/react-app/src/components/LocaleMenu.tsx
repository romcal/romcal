import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import React from 'react';
import Romcal from 'romcal';

const toIso = (str: string): string => str.replace(/(.)([A-Z])/g, '$1-$2').toLowerCase();

export default function LocaleMenu() {
  const allLocales = Romcal.LOCALE_KEYS.reduce((acc: Record<string, string>, pkg, index) => {
    acc[Romcal.LOCALE_VAR_NAMES[index]] = pkg;
    return acc;
  }, {});

  const [locale, setLocale] = React.useState('en');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Locale
        </InputLabel>
        <NativeSelect defaultValue={locale} id="calendar" value={locale} onChange={handleChange}>
          {Object.entries(allLocales).map(([key, pkg]) => (
            <option key={key} value={pkg}>
              {toIso(key)}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
