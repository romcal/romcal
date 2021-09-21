import styled from '@emotion/styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DatePicker from '@mui/lab/DatePicker';
import { Box, IconButton, TextField } from '@mui/material';
import { observer } from 'mobx-react';
import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

interface Props {}

const MonthPicker = observer((props: Props) => {
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
        <IconButton aria-label="delete" color="primary" onClick={previousMonth}>
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
          renderInput={(params) => <TextField {...params} variant="standard" helperText={null} />}
        />
      </Box>
      <Box sx={{ marginLeft: 1, marginTop: 1 }}>
        <IconButton aria-label="delete" color="primary" onClick={nextMonth}>
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
