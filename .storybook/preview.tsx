// // .storybook/preview.ts
// import React from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from '../app/theme';  // Adjust the path to your theme file
// import '../src/styles/global.css'; // Import global CSS if you have one

// export const decorators = [
//   (Story: any) => (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Story />
//     </ThemeProvider>
//   ),
// ];

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };


// .storybook/preview.tsx
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
