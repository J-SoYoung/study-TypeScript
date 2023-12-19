import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import React, { FC, ReactElement } from 'react';
import { DateType } from './types/DateFieldType';

export const TaskDateField: FC<DateType> = (
  props,
): ReactElement => {
  const {
    disabled = false,
    value = new Date(),
    onChange = (date) => console.log(date),
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Task Date"
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};
