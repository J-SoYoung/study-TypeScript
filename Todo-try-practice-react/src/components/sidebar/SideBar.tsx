import { Box, Grid, Stack } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const SideBar: FC = (): ReactElement => {
  return (
    <Grid
      md={4}
      sx={{
        backgroundColor: 'background.paper',
      }}
    ></Grid>
  );
};
