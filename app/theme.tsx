'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto, Space_Grotesk } from 'next/font/google';

// Import the Roboto font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Import the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

// Define breakpoints
const breakpoints = {
  values: {
    xs: 320,
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
  },
};

// Extend the Theme interface to include maxWidth
declare module '@mui/material/styles' {
  interface Theme {
    maxWidth: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }

  interface ThemeOptions {
    maxWidth?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    };
  }
}

// Define the color palettes for light and dark modes
const lightPalette = {
  primary: {
    main: '#FFBB6B',
    light: '#FFD580',
    dark: '#B3773E',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#FFBB6B',
    light: '#FF8A80',
    dark: '#B23C3C',
    contrastText: '#ffffff',
  },
  background: {
    default: '#ffffff',
    paper: '#f5f5f5',
  },
  text: {
    primary: '#000000',
    secondary: '#757575',
  },
};

const darkPalette = {
  primary: {
    main: '#FFBB6B',
    light: '#FFD580',
    dark: '#B3773E',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#FFBB6B',
    light: '#FF8A80',
    dark: '#B23C3C',
    contrastText: '#ffffff',
  },
  background: {
    default: '#121212',
    paper: '#1D1D1D',
  },
  text: {
    primary: '#ffffff',
    secondary: '#B0B0B0',
  },
};

// Create themes for light and dark modes
const createCustomTheme = (mode: 'light' | 'dark') => {
  const palette = mode === 'light' ? lightPalette : darkPalette;

  return createTheme({
    breakpoints, // Add breakpoints to the theme
    palette: {
      mode,
      ...palette,
    },
    typography: {
      fontFamily: spaceGrotesk.style.fontFamily,
      h1: {
        fontSize: '1.9rem', // Default font size for the smallest screens (xs)
        [`@media (min-width:${breakpoints.values.sm}px)`]: {
          fontSize: '2.5rem',
        },
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          fontSize: '3rem',
        },
        [`@media (min-width:${breakpoints.values.lg}px)`]: {
          fontSize: '4rem',
        },
        [`@media (min-width:${breakpoints.values.xl}px)`]: {
          fontSize: '5rem',
        },
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '1.75rem',
        fontWeight: 500,
        lineHeight: 1.3,
      },
      h5: {
        fontSize: '1.0rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '12px',
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          fontSize: '16px',
        },
      },
      footerLink: {
        color: 'grey',
        fontSize: '12px',
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          fontSize: '16px',
        },
      },
      videoCardSubText: {
        color: 'grey',
        fontSize: '12px',
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          fontSize: '12px',
        },
      },
    },
    maxWidth: {
      xs: '430px', // For extra small screens
      sm: '540px', // For small screens
      md: '720px', // For medium screens
      lg: '960px', // For large screens
      xl: '1140px', // For extra large screens
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '10px',
            '@media (min-width:1000px)': {
              fontSize: '16px',
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            '&.footerLink': {
              color: 'grey',
              fontSize: '12px',
              [`@media (min-width:${breakpoints.values.md}px)`]: {
                fontSize: '16px',
              },
            },
            '&.videoCardSubText': {
              color: 'grey',
              fontSize: '12px',
              [`@media (min-width:${breakpoints.values.md}px)`]: {
                fontSize: '12px',
              },
            },
          },
        },
      },
    },
  });
};

const lightTheme = createCustomTheme('light');
const darkTheme = createCustomTheme('dark');

export { lightTheme, darkTheme };
