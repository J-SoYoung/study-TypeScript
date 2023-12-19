import {
  Avatar,
  Box,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import React, { FC, ReactElement } from 'react';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDesriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={2}
      my={4}
    >
      <Typography
        component="h2"
        variant="h6"
        sx={{ color: 'white', marginBottom: '10px' }}
      >
        {' '}
        Createe A Task
      </Typography>
      <Stack
        sx={{
          width: '100%',
          backgroundColor: 'white',
          padding: '8px',
          boxSizing: 'border-Box',
          borderRadius: '4px',
        }}
        spacing={2}
      >
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack
          spacing={2}
          sx={{ width: '100%' }}
          direction="row"
        >
          <TaskSelectField />
          <TaskSelectField />
        </Stack>
      </Stack>
    </Box>
  );
};
