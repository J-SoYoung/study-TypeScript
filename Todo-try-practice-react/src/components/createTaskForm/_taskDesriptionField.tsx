import { Box, TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const TaskDescriptionField = () => {
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
      onChange={(e) => console.log(e)}
      disabled={false}
      // onChange={onChange}
      // disabled={disabled}
    />
  );
};
