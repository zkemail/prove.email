'use client'

import * as React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomButtonProps extends MuiButtonProps {
  buttonLabel: string;
  filledIn?: boolean;
  url?: string;
  tag?: boolean;
  light?: boolean;
  target?: string;
}


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

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'filledIn' && prop !== 'tag' && prop !== 'light',
})<CustomButtonProps>(({ theme, filledIn, tag, light }) => ({
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: 1.5,
  textDecoration: 'none',
  textTransform: 'none',
  background: filledIn ? '#000000' : 'transparent',
  color: light ? '#FFFFFF' : filledIn ? '#FFFFFF' : grey[0],
  padding: '6px 30px',
  transition: 'background 0s, color 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  borderRadius: tag ? '32px' : '6px',
  border: tag ? '1px solid black' : `1px solid ${light ? '#FFFFFF' : '#000000'}`,
  outline: 'none',
  cursor: tag ? 'default' : 'pointer',
  pointerEvents: tag ? 'none' : 'auto',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  '&:hover': {
    background: filledIn ? 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(53,53,53,0.9) 100%)' : '#F1EEEE',
    color: filledIn ? '#FFFFFF' : grey[0],
    transition: 'background 600ms ease-in-out',
  },
  '&:not(:hover)': {
    background: filledIn ? '#000000' : 'transparent',
    transition: 'background 0s',
  },
  '&.MuiButton-root:active': {
    background: grey[0],
    boxShadow: 'none',
    transform: 'scale(0.99)',
  },
  '&.Mui-focusVisible': {
    boxShadow: `0 0 0 4px ${theme.palette.mode === 'dark' ? '#99CCFF' : '#99CCFF'}`,
    outline: 'none',
  },
  '&.Mui-disabled': {
    background: 'transparent',
    color: grey[0],
    border: '1px solid black',
    cursor: 'default',
    boxShadow: 'none',
    transform: 'scale(1)',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    padding: '6px 12px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    padding: '6px 12px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.625rem',
    padding: '4px 8px',
  },
}));



const CustomButton: React.FC<CustomButtonProps> = ({ filledIn, buttonLabel, url, onClick, tag, light, target, ...props }) => {
  return (
    <StyledButton
      href={url}
      target={target}
      onClick={onClick}
      filledIn={filledIn}
      tag={tag}
      light={light}
      disabled={tag}
      {...props}
      buttonLabel={buttonLabel}
    >
      {buttonLabel}
    </StyledButton>
  );
};

export default CustomButton;
