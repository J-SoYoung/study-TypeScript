import React, { FC, ReactElement } from 'react';
import { SideBar } from '../../components/sidebar/SideBar';
import { Box, Grid } from '@mui/material';
import { TaskArea } from '../../components/taskArea/TaskArea';

export const HomePage: FC = (): ReactElement => {
  return (
    <Grid container height={'100vh'}>
      <TaskArea />
      <SideBar />
    </Grid>
  );
};
