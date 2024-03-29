import React, { FC, ReactElement } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import PropTypes from 'prop-types';
import { ITaskFooter } from './interface/ITaskFooter';

export const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      mt={4}
    >
      <FormControlLabel
        control={
          <Switch
            color="warning"
            onChange={(e) => onStatusChange(e)}
          />
        }
        label="in Progress"
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#fff' }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
