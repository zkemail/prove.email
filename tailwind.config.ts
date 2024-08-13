import { BorderColor } from "@mui/icons-material";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            td: {
              align: 'center',
              textAlign: 'center',
            },
            code: {
              color: '#FFFFFF', // Change text color of inline code blocks
              backgroundColor: '#2A313B', 
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              borderColor: 'grey',
              borderWidth: '0.5px',
              fontWeight: '600px'
            },
            'code::before': {
              content: '""', // Remove backticks before inline code
            },
            'code::after': {
              content: '""', // Remove backticks after inline code
            },
            pre: {
              backgroundColor: '#1E1E1E', // Background color for code blocks
              color: '#D4D4D4', // Text color for code blocks
              padding: '1em', // Padding inside code blocks
              borderRadius: '0.5rem', // Rounded corners for code blocks
              overflowX: 'auto', // Enable horizontal scrolling for long code blocks
            },
            'pre code': {
              backgroundColor: 'transparent', // Remove background color from pre code blocks
              color: 'inherit', // Inherit color from pre
            },
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
