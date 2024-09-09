'use client';
import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const CustomBlogIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.33333 5.33333C3.86057 5.33333 2.66667 6.52724 2.66667 8V24C2.66667 25.4728 3.86057 26.6667 5.33333 26.6667H26.6667C28.1394 26.6667 29.3333 25.4728 29.3333 24V8C29.3333 6.52724 28.1394 5.33333 26.6667 5.33333H5.33333ZM5.33333 8H26.6667V24H5.33333V8ZM8 10.6667H24V12H8V10.6667ZM8 14.6667H18.6667V16H8V14.6667ZM8 18.6667H21.3333V20H8V18.6667ZM8 22H16V23.3333H8V22Z" fill={props.style?.color || 'currentColor'}/>
    </svg>
  </SvgIcon>
);

export default CustomBlogIcon;
