
'use client';
import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';
import { Roboto, Space_Grotesk } from 'next/font/google';
import { createTheme as createThemeModule } from '@mui/material/styles';

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

const theme = createTheme({
  breakpoints, // Add breakpoints to the theme

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
    h5: {
      fontSize: '1.0rem',
      fontWeight: 500,
    },
    
    h6: {
      fontSize: '12px',
      [breakpoints.values.md]: {
        fontSize: '16px',
      },
    },
    footerLink: {
      color: 'grey',
      fontSize: '12px',
      textDecoration: 'none',
      [breakpoints.values.md]: {
        fontSize: '16px',
      },
    },
    videoCardSubText: {
      color: 'grey',
      fontSize: '12px',
      [breakpoints.values.md]: {
        fontSize: '12px',
      },
    },
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
            [breakpoints.values.md]: {
              fontSize: '16px',
            },
          },
          '&.videoCardSubText': {
            color: 'grey',
            fontSize: '12px',
            [breakpoints.values.md]: {
              fontSize: '12px',
            },
          },
        },
      },
    },
  },
});

export default theme;











// import { createTheme, ThemeOptions } from '@mui/material/styles';
// import { Roboto, Space_Grotesk } from 'next/font/google';

// // Import the Roboto font
// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// // Import the Space Grotesk font
// const spaceGrotesk = Space_Grotesk({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
// });

// // Define breakpoints
// const breakpoints = {
//   values: {
//     xs: 430,
//     sm: 540,
//     md: 720,
//     lg: 960,
//     xl: 1140,
//   },
// };

// // Extend the Theme interface to include maxWidth
// declare module '@mui/material/styles' {
//   interface Theme {
//     maxWidth: {
//       xs: string;
//       sm: string;
//       md: string;
//       lg: string;
//       xl: string;
//     };
//   }

//   interface ThemeOptions {
//     maxWidth?: {
//       xs?: string;
//       sm?: string;
//       md?: string;
//       lg?: string;
//       xl?: string;
//     };
//   }
// }

// const themeOptions: ThemeOptions = {
//   breakpoints, // Add breakpoints to the theme
//   typography: {
//     fontFamily: spaceGrotesk.style.fontFamily,
//     h1: {
//       fontSize: '2.125rem',
//       fontWeight: 500,
//       lineHeight: 1.2,
//       fontFamily: spaceGrotesk.style.fontFamily,
//     },
//     h2: {
//       fontSize: '1.75rem',
//       fontWeight: 500,
//       lineHeight: 1.3,
//       fontFamily: spaceGrotesk.style.fontFamily,
//     },
//     h5: {
//       fontSize: '1.0rem',
//       fontWeight: 500,
//     },
//     h6: {
//       fontSize: '12px',
//       [breakpoints.values.md]: {
//         fontSize: '16px',
//       },
//     },
//     footerLink: {
//       color: 'grey',
//       fontSize: '12px',
//       [breakpoints.values.md]: {
//         fontSize: '16px',
//       },
//     },
//     videoCardSubText: {
//       color: 'grey',
//       fontSize: '12px',
//       [breakpoints.values.md]: {
//         fontSize: '12px',
//       },
//     },
//   },
//   palette: {
//     primary: {
//       main: '#1976d2',
//       light: '#63a4ff',
//       dark: '#004ba0',
//       contrastText: '#ffffff',
//     },
//     secondary: {
//       main: '#dc004e',
//       light: '#ff616f',
//       dark: '#9a0036',
//       contrastText: '#ffffff',
//     },
//     background: {
//       default: '#F6F5F5',
//       paper: '#ffffff',
//     },
//     text: {
//       primary: '#000000',
//       secondary: '#757575',
//       disabled: 'rgba(0, 0, 0, 0.38)',
//     },
//   },
//   maxWidth: {
//     xs: '430px', // For extra small screens
//     sm: '540px', // For small screens
//     md: '720px', // For medium screens
//     lg: '960px', // For large screens
//     xl: '1140px', // For extra large screens
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           fontSize: '10px',
//           '@media (min-width:1000px)': {
//             fontSize: '16px',
//           },
//         },
//       },
//     },
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           '&.footerLink': {
//             color: 'grey',
//             fontSize: '12px',
//             [breakpoints.values.md]: {
//               fontSize: '16px',
//             },
//           },
//           '&.videoCardSubText': {
//             color: 'grey',
//             fontSize: '12px',
//             [breakpoints.values.md]: {
//               fontSize: '12px',
//             },
//           },
//         },
//       },
//     },
//   },
// };

// const theme = createTheme(themeOptions);

// export default theme;
