import { Box, TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { BasicType } from './types/BasicFormType';

export const TaskDescriptionField: FC<BasicType> = (
  props,
): ReactElement => {
  const {
    disabled = false,
    onChange = (e) => {
      console.log(e.target.value);
    },
  } = props;
  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};
