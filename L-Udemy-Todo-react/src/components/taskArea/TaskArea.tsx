import React, { FC, ReactElement } from 'react';
import { Box, Grid } from '@mui/material';
import { format } from 'date-fns';
import { TaskCounter } from '../tasckCounter/TaskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { Task } from '../task/Task';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Box width={'70%'}>
      <Grid item md={8} px={4}>
        <h2>
          Status of your Tasks as on{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Grid>
      <Grid
        container
        display={'flex'}
        justifyContent={'center'}
      >
        <Grid
          item
          display={'flex'}
          alignItems={'center'}
          flexDirection={'row'}
          justifyContent={'space-around'}
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display={'flex'}
          flexDirection={'column'}
          md={10}
          xs={12}
        >
          <Grid>
            <Task />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
