'use client';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import ZKEIcon from '../ZKEIcon/ZKEIcon';
import dynamic from 'next/dynamic';


//dark mode light mode icons
import LightModeIcon from '@mui/icons-material/LightMode'; 
import DarkModeIcon from '@mui/icons-material/DarkMode';


const FullScreenMenuDialog = dynamic(() => import('../OverlayMenu/OverlayMenu'), { ssr: false });

interface Page {
  label: string;
  link: string;
}

interface ResponsiveAppBarProps {
  title: string;
  pages: Page[];
}

const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({ title, pages }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          paddingY: '20px',
          boxShadow: {
            xs: 'none', // No box shadow on small screens
            md: '0px 1px 7px rgba(0, 0, 0, 0.02)', // Box shadow on medium and larger screens
          },
          zIndex: '10',
          position: 'relative',
        }}
      >
        <Container
          sx={{
            backgroundColor: 'white',
            boxShadow: {
              xs: 'none', // No box shadow on small screens
              md: '0px 1px 5px rgba(0, 0, 0, 0.09)', // Box shadow on medium and larger screens
            },
            borderRadius: '15px',
            maxWidth: { xs:'100%', sm: '80%', md: '50%' },
            zIndex: '20',
            padding: {
              xs: '0px', // Remove padding on xs screens
            }
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                href="/"
                sx={{
                  color: 'black',
                  padding: { xs: '4px', sm: '6px', md: '8px' }, 
                  '& .MuiSvgIcon-root': {
                    fontSize: { xs: '16px', sm: '20px', md: '24px' }, 
                  },
                }}
                aria-label="Home link"
              >
                <ZKEIcon mode='light' />
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { xs: 0.5, sm: 1, md: 2 } }}>
              {pages.map((page) => (
                <Link href={page.link} key={page.label} passHref>
                  <Button
                    sx={{
                      color: 'black',
                      fontWeight: 'regular',
                      textTransform: 'capitalize',
                      fontSize: { xs: '0.6rem', sm: '0.9rem', md: '1rem' },
                      position: 'relative',
                      '&:hover': {
                        color: 'grey',
                        backgroundColor: 'transparent', // No background color on hover
                        '&::after': {
                          transform: 'scaleX(1)',
                        },
                      },
                      paddingX: { xs: '1px', md: '6px' },
                      padding: { xs: '2px 4px', md: '8px 10px' },
                      minWidth: 'auto',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        // backgroundColor: theme.palette.secondary.main, // Underline color
                        transform: 'scaleX(0)',
                        transformOrigin: 'bottom right',
                        transition: 'transform 0.3s ease-out',
                      },
                    }}
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              <IconButton
                href="https://github.com/zkemail/"
                target="_blank"
                sx={{
                  color: 'black',
                  padding: { xs: '4px', sm: '6px', md: '0px' }, 
                  '& .MuiSvgIcon-root': {
                    fontSize: { xs: '16px', sm: '20px', md: '24px' }, 
                  },
                }}
                aria-label="GitHub link"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'flex-end',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #D9D9D9',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <IconButton
                  sx={{
                    color: 'black',
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                  }}
                  onClick={handleClickOpen}
                >
                  <MenuIcon fill='#454545'/>
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <FullScreenMenuDialog open={open} onClose={handleClose} pages={pages} />
    </>
  );
};

export default ResponsiveAppBar;
