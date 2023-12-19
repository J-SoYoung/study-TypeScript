import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const TaskCounter = () => {
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
          borderColor: 'primary.main',
        }}
      >
        <Typography color="primary.dark" variant="h4">
          T
        </Typography>
      </Avatar>
      <Typography
        color="primary.dark"
        fontWeight="bold"
        fontSize="20px"
        variant="h5"
      >
        Todo
      </Typography>
    </Box>
  );
};
