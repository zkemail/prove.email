'use client';
import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ZKEIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <svg width="348" height="309" viewBox="0 0 348 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="42" y1="79" x2="242" y2="79" stroke="black" stroke-width="20"/>
        <line x1="107.969" y1="175.5" x2="309.031" y2="175.5" stroke="black" stroke-width="20"/>
        <line x1="42" y1="275" x2="229" y2="275" stroke="black" stroke-width="20"/>
        <path d="M259.791 110V93.2L294.391 53.4V51.8H260.791V40H308.191V56.8L273.591 96.6V98.2H308.391V110H259.791Z" fill="black"/>
        <path d="M41.3012 220V150H54.5012V177.8H56.3012L79.0012 150H95.9012L66.7012 184.5L96.9012 220H79.5012L56.3012 191.6H54.5012V220H41.3012Z" fill="black"/>
        <path d="M260.914 309V239H305.914V251H274.114V267.7H303.114V279.7H274.114V297H306.514V309H260.914Z" fill="black"/>
      </svg>
    </SvgIcon>
  );
};

export default ZKEIcon;
