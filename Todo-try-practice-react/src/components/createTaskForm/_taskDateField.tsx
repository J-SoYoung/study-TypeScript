import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import React, { FC, ReactElement } from 'react';

export const TaskDateField = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Task Date"
        disabled={false}
        value={new Date()}
        onChange={(e) => console.log(e)}
        // disabled={disabled}
        // value={value}
        // onChange={onChange}
      />
    </LocalizationProvider>
  );
};
