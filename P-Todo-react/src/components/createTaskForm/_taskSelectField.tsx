import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { SelectBoxType } from './types/SelectBoxType';

export const TaskSelectField: FC<SelectBoxType> = (
  props,
): ReactElement => {
  const {
    name = 'select-box',
    label = 'select-box',
    value = '',
    onChange = (e) => console.log(e),
    items = [{ value: '', label: 'add Item' }],
  } = props;
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>{' '}
      <Select
        labelId={`${name}-id}`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        onChange={onChange}
      >
        {items.map((item, idx) => {
          return (
            <MenuItem
              key={item.value + idx}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
