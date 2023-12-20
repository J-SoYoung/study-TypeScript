import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { typeFooter } from './types/typeFooter';

export const TaskFooter: FC<typeFooter> = (
  props,
): ReactElement => {
  const {
    onChange = (e) => console.log(e.target),
    onClick = (e) => console.log(e.target),
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={3}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch onChange={onChange} color="warning" />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={onClick}
      >
        Mark Complete
      </Button>
    </Box>
  );
};
