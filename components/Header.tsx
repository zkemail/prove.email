'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Typography } from '@mui/material';
import { AppBarProps } from '../types'; // Adjust the import path as needed




// Header takes in props for the title name, and pages links. We call the header in the layout.
const ResponsiveAppBar: React.FC<AppBarProps> = ({ title, pages }) => {
  return (
    <AppBar position="static" 
      sx={{ backgroundColor: 'white', paddingY: '12px', boxShadow: '0px 1px 10.8px rgba(0, 0, 0, 0.05)', zIndex: '10' 
    }}>
      <Container
      sx={{ 
        backgroundColor: 'white', 
        boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.09)', 
        borderRadius: '20px',
        maxWidth: {
          xs: '430px', // For extra small screens
          sm: '540px', // For small screens
          md: '720px', // For medium screens
          lg: '960px', // For large screens
          xl: '1140px', // For extra large screens
        },
         }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 !important' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black', fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem'} }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', gap: {xs: 0.5, sm: 1, md:2}}}>
            {pages.map((page) => (
              <Link href={page.link} key={page.label} passHref>
                <Button sx={{ 
                  color: 'black', 
                  textTransform: 'capitalize', 
                  fontSize: { xs: '0.7rem', sm:'0.9rem', md: '1 rem'}, '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }, 
                  paddingX: { xs: '1px', md: '6px' },
                  padding: { xs: '2px 4px', md: '6px 16px' }, // Reduced padding
                  minWidth: 'auto', // Ensure buttons shrink to fit content
                  }}>
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton sx={{ color: 'black' }} aria-label="GitHub link">
              <GitHubIcon />
            </IconButton>
            <IconButton sx={{ color: 'black' }} aria-label="Toggle theme">
              <Brightness4Icon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
