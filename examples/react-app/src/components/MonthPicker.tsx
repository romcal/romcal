import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DatePicker from '@mui/lab/DatePicker';
import { Box, IconButton, TextField } from '@mui/material';
import * as React from 'react';

export default function MonthPicker() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <>
      <Box sx={{ marginRight: 1, marginTop: 1 }}>
        <IconButton aria-label="delete" color="primary">
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <DatePicker
          label="Month and Year"
          views={['year', 'month']}
          minDate={new Date('1969-01-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} variant="standard" helperText={null} />}
        />
      </Box>
      <Box sx={{ marginLeft: 1, marginTop: 1 }}>
        <IconButton aria-label="delete" color="primary">
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  );
}
