import { Box, Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Task } from '../task/Task';
import { TaskCounter } from '../taskCounter/TaskCounter';
import { format } from 'date-fns';
import { Status } from '../createTaskForm/enum/Status';
import { TaskCounterStatusType } from '../taskCounter/types/TaskCounterTypes';

export const TaskArea: FC = (): ReactElement => {
  const statusList: TaskCounterStatusType[] = [
    Status.todo,
    Status.inProgress,
    Status.completed,
  ];

  return (
    <Grid
      item
      sx={{
        width: '66%',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      <Box mb={8} px={4}>
        <h2 style={{ color: '#f08c00' }}>
          Today - {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
          width={'100%'}
        >
          {/* <TaskCounter /> */}
          {statusList.map((ele, idx) => {
            return (
              <TaskCounter key={ele + idx} status={ele} />
            );
          })}
        </Grid>
        <Grid>
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};
