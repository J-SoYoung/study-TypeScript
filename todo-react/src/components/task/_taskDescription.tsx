import React, { FC, ReactElement } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { ITaskDescription } from './interface/ITsakDescription';
import PropTypes from 'prop-types';

export const TaskDescription: FC<ITaskDescription> = (
  props,
): ReactElement => {
  const {
    description = 'Lorem ipsum dolor sit amet consectetur adipisicinglit.',
  } = props;
  return (
    <Box>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Rem corrupti iusto incidunt natus tempore
        quisquam laboriosam nemo similique iure, rerum
        molestiae quidem architecto quasi, praesentium
      </Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};
