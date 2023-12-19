import {
  Avatar,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import React, { FC, ReactElement } from 'react';

export const Profile: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          bgcolor: deepOrange[500],
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.dark',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="white">
          T
        </Typography>
      </Avatar>
      <Typography variant="h5" color="white">
        welcome to my homepage
      </Typography>
      <Typography variant="body1" color="white">
        this is your personal tasks manager
      </Typography>
    </Box>
  );
};
