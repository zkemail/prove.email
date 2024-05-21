import * as React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

interface CustomButtonProps extends MuiButtonProps {
  buttonLabel: string;
  filledIn?: boolean;
  url?: string;
  tag?: boolean;
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

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'filledIn' && prop !== 'tag',
})<CustomButtonProps>(({ theme, filledIn, tag }) => ({
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: 1.5,
  textDecoration: 'none',
  backgroundColor: filledIn ? grey[0] : 'transparent',
  color: filledIn ? white[0] : grey[0],
  padding: '8px 16px',
  transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  borderRadius: tag ? '32px' : '5px',
  border: tag ? '1px solid black' : `2px solid ${grey[0]}`,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  '&:hover': {
    backgroundColor: grey[0],
    color: white[0],
  },
  '&.MuiButton-root:active': {
    backgroundColor: grey[0],
    boxShadow: 'none',
    transform: 'scale(0.99)',
  },
  '&.Mui-focusVisible': {
    boxShadow: `0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]}`,
    outline: 'none',
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.mode === 'dark' ? grey[700] : grey[200],
    color: theme.palette.mode === 'dark' ? grey[200] : grey[700],
    border: 0,
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

const CustomButton: React.FC<CustomButtonProps> = ({ filledIn, buttonLabel, url, onClick, tag, ...props }) => {
  const ButtonContent = (
    <StyledButton
      onClick={onClick}
      filledIn={filledIn}
      tag={tag}
      {...props}
    >
      {buttonLabel}
    </StyledButton>
  );

  return (
    <Stack spacing={2} direction="row">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {ButtonContent}
        </a>
      ) : (
        ButtonContent
      )}
    </Stack>
  );
};

export default CustomButton;
