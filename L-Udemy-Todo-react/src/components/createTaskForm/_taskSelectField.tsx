import React, { FC, ReactElement } from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ISelectField } from './interface/ISelectField';
import PropTypes from 'prop-types';

export const TaskSelectField: FC<ISelectField> = (
  props,
): ReactElement => {
  const {
    name = 'select Box',
    label = 'Select Box',
    value = '',
    onChange = (e) => console.log(e),
    items = [{ value: '', label: 'Add Items' }],
    disabled = false,
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        label={label}
        name={name}
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        onChange={onChange}
      >
        {items.map((i, idx) => {
          return (
            <MenuItem key={i.value + idx} value={i.value}>
              {i.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
TaskSelectField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ),
  disabled: PropTypes.bool,
};
