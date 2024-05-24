'use client';
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
import { AppBarProps } from '../../types'; // Adjust the import path as needed
import { useTheme } from '@mui/material/styles';
import IconLink from '../../components/IconLink/IconLink';
import ZKEIcon from '../../components/ZKEIcon/ZKEIcon'; // Import the ZKEIcon component


const ResponsiveAppBar: React.FC<AppBarProps> = ({ title, pages }) => {
  const theme = useTheme();

  return (
    <AppBar position="static" 
      sx={{ backgroundColor: 'white', paddingY: '22px', boxShadow: '0px 1px 10.8px rgba(0, 0, 0, 0.05)', zIndex: '10' 
    }}>
      <Container
        sx={{ 
          backgroundColor: 'white', 
          boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.09)', 
          borderRadius: '5px',
          maxWidth: {xs: '80%', md:'50%'}
        }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 !important'}}>
            <IconLink target={true} href="/" IconComponent={ZKEIcon} />


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
            <IconButton
              sx={{
                color: 'black',
                padding: { xs: '4px', sm: '6px', md: '8px' }, // Adjust padding based on screen size
                '& .MuiSvgIcon-root': {
                  fontSize: { xs: '12px', sm: '20px', md: '24px' } // Adjust icon size based on screen size
                }
              }}
              aria-label="GitHub link"
            >

            {/* NEED to link these icons https://github.com/zkemail/ */}
            <GitHubIcon />
            </IconButton>

            {/* <IconButton
              sx={{
                color: 'black',
                padding: { xs: '4px', sm: '6px', md: '8px' }, // Adjust padding based on screen size
                '& .MuiSvgIcon-root': {
                  fontSize: { xs: '12px', sm: '20px', md: '24px' } // Adjust icon size based on screen size
                }
              }}
              aria-label="Toggle theme"
            >
              <Brightness4Icon />
            </IconButton> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
