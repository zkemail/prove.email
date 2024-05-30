import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from '../app/theme';  // Adjust the path to your theme file

const themeMode = 'light';  // or 'dark' based on your preference or logic

export const decorators = [
  (Story) => (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
