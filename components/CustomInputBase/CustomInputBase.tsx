'use client';

import * as React from 'react';
import { InputBase, InputBaseProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomInputProps extends InputBaseProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInputContainer = styled('div')({
  position: 'relative',
  width: '100%',
  backgroundColor: '#ffffff',
  borderRadius: '6px',
  paddingLeft: '3px',
  paddingRight: '3px',
  paddingTop: '3px',
  paddingBottom: '3px',
  border: '1px solid #161616',
  display: 'flex',
  alignItems: 'center',
});

const CustomInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: '14px',
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
  },
  padding: '8px 12px',
  borderRadius: '16px',
  backgroundColor: '#ffffff',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: 0,
  },
  '&:focus': {
    outline: 'none',
  },
}));

const SearchIcon = styled('svg')(({ theme }) => ({
  position: 'absolute',
  right: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#000000',
  width: '18px',
  height: '18px',
  [theme.breakpoints.down('md')]: {
    width: '15px',
    height: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '12px',
    height: '12px',
  },
}));

const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, ...props }) => {
  return (
    <CustomInputContainer>
      <CustomInputBase
        value={value}
        onChange={onChange}
        {...props}
      />
      <SearchIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0a9 9 0 110-12.7 9 9 0 010 12.7z" />
      </SearchIcon>
    </CustomInputContainer>
  );
};

export default CustomInput;
