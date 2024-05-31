// src/types.ts
export interface Page {
  label: string;
  link: string;
}


// types.ts


export interface AnimationVariants {
  initial: {
    opacity: number;
    y?: number;
    x?: number;
  };
  animate: {
    opacity: number;
    y?: number;
    x?: number;
    transition?: {
      duration: number;
      ease: string;
    };
  };
}

export interface SlideInDivProps {
  direction: 'left' | 'right';
  children: React.ReactNode;
}


// types.ts
export type Email = {
  to: string;
  from: string;
  mainText: string;
  subject: string;
};

export type AboutModalProps = {
  emails: Email[];
};


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


export interface CustomCardProps {
  url: string;
  title: string;
  description: string;
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
