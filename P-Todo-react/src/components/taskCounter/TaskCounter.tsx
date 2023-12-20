import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { TaskCounterType } from './types/TaskCounterTypes';
import { emitCorrectBorderColor } from './helper/emitCorrectBorderColor';
import { Status } from '../createTaskForm/enum/Status';

export const TaskCounter: FC<TaskCounterType> = (
  props,
): ReactElement => {
  const { count = 10, status = Status.todo } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          backgroundColor: 'transparent',
          border: '5px solid',
          width: '96px',
          height: '96px',
          marginBottom: '16px',
          borderColor: `${emitCorrectBorderColor(status)}`,
        }}
      >
        <Typography color="primary.dark" variant="h4">
          {count}
        </Typography>
      </Avatar>
      <Typography
        color="primary.dark"
        fontWeight="bold"
        fontSize="20px"
        variant="h5"
      >
        {status}
      </Typography>
    </Box>
  );
};
