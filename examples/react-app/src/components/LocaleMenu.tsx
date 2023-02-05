import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import Romcal from 'romcal';
import { AppContext } from '../AppContext';

const LocaleMenu = observer(() => {
  const { romcalStore } = useContext(AppContext);
  const { localeId, setLocaleId } = romcalStore;

  const allLocales = Romcal.LOCALE_IDS.reduce((acc: Record<string, string>, pkg, index) => {
    acc[Romcal.LOCALE_VAR_NAMES[index]] = pkg;
    return acc;
  }, {});

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocaleId(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Locale
        </InputLabel>
        <NativeSelect id="calendar" value={localeId} onChange={handleChange}>
          {Object.entries(allLocales).map(([id, isoId]) => (
            <option key={id} value={id}>
              {isoId}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
});

export default LocaleMenu;
