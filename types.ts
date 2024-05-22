// src/types.ts
export interface Page {
  label: string;
  link: string;
}

export interface AppBarProps {
  title: string;
  pages: Page[];
}


export interface ActionCardProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  topText?: string;
  light?: boolean; // Add light prop
}



export interface FlipTextProps {
  texts: string[];
}



import { TypographyVariants } from '@mui/material/styles';

// Extend the MUI theme to include custom typography variants
declare module '@mui/material/styles' {
  interface TypographyVariants {
    videoCardSubText: React.CSSProperties;
    footerLink: React.CSSProperties;
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    videoCardSubText?: React.CSSProperties;
    footerLink?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    videoCardSubText: true;
    footerLink: true;
  }
}
