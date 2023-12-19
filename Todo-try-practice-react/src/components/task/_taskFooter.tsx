import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const TaskFooter: FC = (): ReactElement => {
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
          <Switch
            onChange={(e) => console.log(e)}
            color="warning"
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => console.log(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};
