import { createTheme, ThemeOptions } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      // light: 'rgba(168,85,247,.80)',
      // main: 'rgba(168,85,247,.65)',
      // dark: 'rgba(168,85,247,.28)',
      light: '#fff3bf',
      main: '#ffd43b',
      dark: '#f08c00',
      
    },
    background: {
      paper: '#fcc419',
      default: '#fff3bf',
    },
  },
});
