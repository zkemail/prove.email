import * as React from 'react';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import theme from '@/app/theme';

const LinkSlot = Link;

interface ButtonProps {
    buttonLabel: string,
    filledIn?: boolean,
    url?: string; // Add the URL prop
}

export default function UnstyledLinkButton({ filledIn, buttonLabel, url }: ButtonProps) {
  return (
    <Stack spacing={2} direction="row">
      {url ? (
        <Link href={url} target='blank' passHref>
            <Button filledIn={filledIn}>
              {buttonLabel}
            </Button>
        </Link>
      ) : (
        <Button filledIn={filledIn}>
          {buttonLabel}
        </Button>
      )}
    </Stack>
  );
}

const darkGrey = {
  0: '#353535',
};

const white = {
  0: '#FFFFFF',
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  0: '#353535',
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Button = styled(BaseButton, {
  shouldForwardProp: (prop) => prop !== 'filledIn',
})<ButtonProps>(({ theme, filledIn }) => `
  font-family: ${theme.typography.fontFamily};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5;
  text-decoration: none;
  background-color: ${filledIn ? grey[0] : white[0]};
  color: ${filledIn ? white[0] : grey[0]};
  padding: 8px 16px;
  border-radius: 17.16px;
  transition: all 150ms ease;
  cursor: pointer;
  border: 2px solid ${grey[0]};

  &:hover {
    background-color: ${grey[0]};
    color: ${white[0]};
  }

  &.${buttonClasses.active} {
    background-color: ${grey[0]};
    box-shadow: none;
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
`);
