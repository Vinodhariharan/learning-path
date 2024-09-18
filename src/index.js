import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AuthProvider } from './contexts/AuthContext';
// import '@fontsource/poppins'; // Import Poppins font

const theme = createTheme({
  palette: {
    mode: 'light', // Change to 'dark' for dark mode
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Set Poppins as the default font
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>
);
