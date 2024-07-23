"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

// Import the Roboto font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Import the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

// Import the local font
const berkeleyOldStyle = localFont({
  src: ".././font/BerkeleyOldStyle.ttf",
  variable: "--berkeley",
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
declare module "@mui/material/styles" {
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
    main: "#FFBB6B",
    light: "#FFD580",
    dark: "#B3773E",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#FFBB6B",
    light: "#FF8A80",
    dark: "#B23C3C",
    contrastText: "#ffffff",
  },
  background: {
    default: "#ffffff",
    paper: "#f5f5f5",
  },
  text: {
    primary: "#000000",
    secondary: "#757575",
  },
};

const darkPalette = {
  primary: {
    main: "#FFBB6B",
    light: "#FFD580",
    dark: "#B3773E",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#FFBB6B",
    light: "#FF8A80",
    dark: "#B23C3C",
    contrastText: "#ffffff",
  },
  background: {
    default: "#121212",
    paper: "#1D1D1D",
  },
  text: {
    primary: "#ffffff",
    secondary: "#B0B0B0",
  },
};

// Create themes for light and dark modes
const createCustomTheme = (mode: "light" | "dark") => {
  const palette = mode === "light" ? lightPalette : darkPalette;

  return createTheme({
    breakpoints, // Add breakpoints to the theme
    palette: {
      mode,
      ...palette,
    },
    typography: {
      fontFamily: spaceGrotesk.style.fontFamily,
      h1: {
        fontSize: "2.25em",
        "@media (max-width:1280px)": {
          fontSize: "2.14em",
        },
      },
      h2: {
        fontSize: "1.56em",
        "@media (max-width:1280px)": {
          fontSize: "1.5em",
        },
      },
      h3: {
        fontSize: "1.25rem",
        "@media (max-width:1280px)": {
          fontSize: "1.29rem",
        },
      },
      h4: {
        fontSize: "1rem",
        "@media (max-width:1280px)": {
          fontSize: "1rem",
        },
      },
      h5: {
        fontSize: "0.88rem",
        "@media (max-width:1280px)": {
          fontSize: "0.86rem",
        },
      },
      h6: {
        fontSize: "0.75rem",
        "@media (max-width:1280px)": {
          fontSize: "0.79rem",
        },
      },
      body1: {
        fontSize: "1rem",
        "@media (max-width:1280px)": {
          fontSize: "1rem",
        },
      },
      body2: {
        fontSize: "0.875rem",
        "@media (max-width:1280px)": {
          fontSize: "0.875rem",
        },
      },
      subtitle1: {
        fontSize: "1rem",
        "@media (max-width:1280px)": {
          fontSize: "1rem",
        },
      },
      subtitle2: {
        fontSize: "0.875rem",
        "@media (max-width:1280px)": {
          fontSize: "0.875rem",
        },
      },

      videoCardSubText: {
        color: "grey",
        fontSize: "0.75rem",
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          fontSize: "0.75rem",
        },
      },
    },
    maxWidth: {
      xs: "430px", // For extra small screens
      sm: "540px", // For small screens
      md: "720px", // For medium screens
      lg: "960px", // For large screens
      xl: "1140px", // For extra large screens
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "10px",
            "@media (min-width:1000px)": {
              fontSize: "16px",
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            "&.footerLink": {
              color: "grey",
              fontSize: "12px",
              [`@media (min-width:${breakpoints.values.md}px)`]: {
                fontSize: "16px",
              },
            },
            "&.videoCardSubText": {
              color: "grey",
              fontSize: "12px",
              [`@media (min-width:${breakpoints.values.md}px)`]: {
                fontSize: "12px",
              },
            },
          },
        },
      },
    },
  });
};

const lightTheme = createCustomTheme("light");
const darkTheme = createCustomTheme("dark");

// Export a function to get the theme based on a parameter
const getTheme = (mode: "light" | "dark") =>
  mode === "light" ? lightTheme : darkTheme;

export { lightTheme, darkTheme, getTheme };
export default getTheme; // Export getTheme as default for Storybook
