'use client'

import React from 'react';
import { Link, SvgIconProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface IconLinkProps {
  href: string;
  IconComponent: React.ComponentType<SvgIconProps>;
}

const IconLink: React.FC<IconLinkProps> = ({ href, IconComponent }) => {
  const theme = useTheme();

  return (
    <Link
      href={href}
      target="_blank"
      color="inherit"
      underline="none"
      sx={{
        fontSize: '24px',
        [theme.breakpoints.down('sm')]: {
          fontSize: '20px',
        },
      }}
    >
      <IconComponent style={{ color: 'white', fontSize: 'inherit' }} />
    </Link>
  );
};

export default IconLink;
