import React, { FC, ReactElement } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import PropTypes from 'prop-types';

export const TaskFooter: FC = (): ReactElement => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      mt={4}
    >
      <FormControlLabel
        control={<Switch color="warning" />}
        label="in Progress"
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#fff' }}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

// TaskFooter.propTypes = {

// };
