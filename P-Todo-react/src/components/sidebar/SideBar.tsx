import { Box, Grid, Stack } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { CreateTaskForm } from '../createTaskForm/CreateTaskForm';
import { Profile } from '../profile/Profile';

export const SideBar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile username="소영2" />
      <CreateTaskForm />
    </Grid>
  );
};
