import React, { FC, ReactElement } from 'react';
import { MainBoard } from '../../components/mainboard/MainBoard';
import { SideBar } from '../../components/sidebar/SideBar';
import { Box, Grid } from '@mui/material';

export const HomePage: FC = (): ReactElement => {
  return (
    <Grid container height={'100vh'}>
      <MainBoard />
      <SideBar />
    </Grid>
  );
};
