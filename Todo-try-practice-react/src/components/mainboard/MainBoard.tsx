import { Box, Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const MainBoard: FC = (): ReactElement => {
  return (
    <Grid md={8}>
      <Box mb={8}>오늘 날짜</Box>
      <Grid>
        <Grid>상태바 표시</Grid>
        <Grid>TodoLists</Grid>
      </Grid>
    </Grid>
  );
};
