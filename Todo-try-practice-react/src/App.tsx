import React, { FC, ReactElement } from 'react';
import './App.css';
import { HomePage } from './page/home/HomePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { customTheme } from './theme/customTheme';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
