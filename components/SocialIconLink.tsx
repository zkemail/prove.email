import React from 'react';
import { Link, SvgIconProps } from '@mui/material';

interface SocialIconLinkProps {
  href: string;
  IconComponent: React.ComponentType<SvgIconProps>;
}

const SocialIconLink: React.FC<SocialIconLinkProps> = ({ href, IconComponent }) => {
  return (
    <Link
      href={href}
      target="_blank"
      color="inherit"
      underline="none"
      sx={{
        fontSize: '24px',
        '@media (max-width:600px)': {
          fontSize: '20px',
        },
      }}
    >
      <IconComponent style={{ color: 'white', fontSize: 'inherit' }} />
    </Link>
  );
};

export default SocialIconLink;
