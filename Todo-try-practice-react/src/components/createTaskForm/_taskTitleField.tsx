import { Box, TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const TaskTitleField = () => {
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
        // disabled={disabled}
        // onChange={onChange}
        disabled={false}
        onChange={(e) => console.log(e)}
      />
    </Box>
  );
};
