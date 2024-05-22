// 'use client'

// import React from 'react';
// import { Link, SvgIconProps } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// interface IconLinkProps {
//   href: string;
//   IconComponent: React.ComponentType<SvgIconProps>;
//   dark?: boolean;
//   size?: 'small' | 'medium' | 'large';
// }

// const IconLink: React.FC<IconLinkProps> = ({ href, IconComponent, dark, size = 'medium' }) => {
//   const theme = useTheme();

//   const getSize = () => {
//     switch (size) {
//       case 'small':
//         return '16px';
//       case 'large':
//         return '32px';
//       case 'medium':
//       default:
//         return '24px';
//     }
//   };

//   return (
//     <Link
//       href={href}
//       target="_blank"
//       color="inherit"
//       underline="none"
//       sx={{
//         fontSize: getSize(),
//         [theme.breakpoints.down('sm')]: {
//           fontSize: getSize(),
//         },
//       }}
//     >
//       <IconComponent style={{ color: dark ? 'black' : 'white', fontSize: 'inherit' }} />
//     </Link>
//   );
// };

// export default IconLink;



'use client'

import React from 'react';
import { Link, SvgIconProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface IconLinkProps {
  href: string;
  IconComponent: React.ComponentType<SvgIconProps>;
  dark?: boolean;
  size?: 'small' | 'medium' | 'large';
  target?: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({ href, IconComponent, dark, size = 'medium', target = false }) => {
  const theme = useTheme();

  const getSize = () => {
    switch (size) {
      case 'small':
        return '16px';
      case 'large':
        return '32px';
      case 'medium':
      default:
        return '24px';
    }
  };

  return (
    <Link
      href={href}
      target={target ? '_self' : '_blank'}
      color="inherit"
      underline="none"
      sx={{
        fontSize: getSize(),
        [theme.breakpoints.down('sm')]: {
          fontSize: getSize(),
        },
      }}
    >
      <IconComponent style={{ color: dark ? 'black' : 'white', fontSize: 'inherit' }} />
    </Link>
  );
};

export default IconLink;
