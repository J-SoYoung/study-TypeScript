import { Box, Chip, Grid, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { typeTaskHeader } from './types/typeTaskHeader';

export const TaskHeader: FC<typeTaskHeader> = (
  props,
): ReactElement => {
  const { title = "today's Todo", date = new Date() } =
    props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={3}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={format(date, 'PPP')}
        />
      </Box>
    </Box>
  );
};
