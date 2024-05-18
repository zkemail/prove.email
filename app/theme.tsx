/* Your theme.tsx file should include:
-Colors
-Spacing
-Breakpoints
-Shadows
-Typography
-Z-Index
-Transitions
-Component Customizations
-Shape */

'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { Space_Grotesk } from 'next/font/google';




// Import the Roboto font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Import the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '700'], // Specify the weights you want to use
  subsets: ['latin'], // Specify the subsets you want to use
});


const theme = createTheme({
  typography: {
    fontFamily: spaceGrotesk.style.fontFamily,
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
      lineHeight: 1.2,
      fontFamily: spaceGrotesk.style.fontFamily,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.3,
      fontFamily: spaceGrotesk.style.fontFamily,
    },

    h5:{
      fontSize: '1.0 rem',
      fontWeight: 500,
    },

    h6: {
      fontSize: '12px',
      '@media (min-width:1000px)': {
        fontSize: '16px',
      },
    },

    footerLink: {
      color:'grey',
      fontSize: '12px',
      '@media (min-width:1000px)': {
        fontSize: '16px',
      },
    }

    
  },

  palette: {
    primary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#dc004e',
      light: '#ff616f',
      dark: '#9a0036',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F6F5F5',
      paper: '#ffffff',

    },
    text: {
      primary: '#000000',
      secondary: '#757575',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },


  // components: {
  //   MuiTypography: {
  //     defaultProps: {
  //       variantMapping: {
  //         h1: 'h2',
  //         h2: 'h2',
  //         h3: 'h2',
  //         h4: 'h2',
  //         h5: 'h2',
  //         h6: 'h2',
  //         subtitle1: 'h2',
  //         subtitle2: 'h2',
  //         body1: 'span',
  //         body2: 'span',
  //       },
  //     },
  //   },
  // },
  
});

export default theme;
