import { Box, Chip, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { typeTaskDescription } from './types/typeTaskDescription';

export const TaskDescription: FC<typeTaskDescription> = (
  props,
): ReactElement => {
  const {
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={3}
    >
      {description}
    </Box>
  );
};
