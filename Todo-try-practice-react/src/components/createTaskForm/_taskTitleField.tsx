import { Box, TextField } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import { BasicType } from './types/BasicFormType';

export const TaskTitleField: FC<BasicType> = (
  props,
): ReactElement => {
  const {
    disabled = false,
    onChange = (e) => console.log(e.target.value),
  } = props;

  return (
    <Box>
      <TextField
        sx={{ width: '100%' }}
        id="title"
        label="Task Title"
        placeholder="Task Title"
        variant="outlined"
        size="small"
        name="title"
        fullWidth
        disabled={disabled}
        onChange={onChange}
      />
    </Box>
  );
};
