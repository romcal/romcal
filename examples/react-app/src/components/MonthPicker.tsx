import styled from '@emotion/styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, IconButton, TextField, TextFieldProps } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { observer } from 'mobx-react';
import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const MonthPicker = observer(() => {
  const { romcalStore } = useContext(AppContext);
  const { currentYear, currentMonth } = romcalStore;

  const previousMonth = () => romcalStore.setPreviousMonth();
  const nextMonth = () => romcalStore.setNextMonth();

  const datePickerChange = (newValue: Date | null) => {
    if (newValue) {
      romcalStore.setDate(newValue);
    }
  };

  return (
    <Container>
      <Box sx={{ marginRight: 1, marginTop: 1 }}>
        <IconButton color="primary" onClick={previousMonth}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <DatePicker
          label="Month and Year"
          views={['year', 'month']}
          minDate={new Date('1969-01-01')}
          value={new Date(currentYear, currentMonth, 1)}
          onChange={datePickerChange}
          renderInput={(params: TextFieldProps) => <TextField {...params} variant="standard" helperText={null} />}
        />
      </Box>
      <Box sx={{ marginLeft: 1, marginTop: 1 }}>
        <IconButton color="primary" onClick={nextMonth}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Container>
  );
});

export default MonthPicker;

const Container = styled('div')`
  margin-top: 20px;
  display: inline-flex;
`;
