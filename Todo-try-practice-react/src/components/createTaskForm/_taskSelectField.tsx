import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const TaskSelectField = () => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>라벨</InputLabel>{' '}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={'age'}
        label="Age"
        onChange={(e) => console.log(e)}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
