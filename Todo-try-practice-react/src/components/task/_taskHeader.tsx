import { Box, Chip, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const TaskHeader: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={3}
    ></Box>
  );
};
