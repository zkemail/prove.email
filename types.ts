// src/types.ts
export interface Page {
    label: string;
    link: string;
  }
  
  export interface AppBarProps {
    title: string;
    pages: Page[];
  }
  