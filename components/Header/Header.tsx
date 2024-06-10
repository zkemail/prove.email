// 'use client';
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Link from 'next/link';
// import IconButton from '@mui/material/IconButton';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import { Typography } from '@mui/material';
// import { AppBarProps } from '../../types'; 
// import { useTheme } from '@mui/material/styles';
// import IconLink from '../../components/IconLink/IconLink';
// import ZKEIcon from '../../components/ZKEIcon/ZKEIcon'; // Import the ZKEIcon component

// const ResponsiveAppBar: React.FC<AppBarProps> = ({ title, pages }) => {
//   const theme = useTheme();

//   return (
//     <AppBar position="static" 
//       sx={{ backgroundColor: 'white', paddingY: '22px', boxShadow: '0px 1px 10.8px rgba(0, 0, 0, 0.05)', zIndex: '10' 
//     }}>
//       <Container
//         sx={{ 
//           backgroundColor: 'white', 
//           boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.09)', 
//           borderRadius: '15px',
//           maxWidth: {xs: '80%', md:'50%'}
//         }}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 !important'}}>
//             <IconButton
//              href='/'
//               sx={{
//                 color: 'black',
//                 padding: { xs: '4px', sm: '6px', md: '8px' }, // Adjust padding based on screen size
//                 '& .MuiSvgIcon-root': {
//                   fontSize: { xs: '16px', sm: '20px', md: '24px' } // Adjust icon size based on screen size
//                 }
//               }}
//               aria-label="GitHub link"
//             ><ZKEIcon/></IconButton>


//           <Box sx={{ display: 'flex', gap: {xs: 0.5, sm: 1, md:2}}}>
//             {pages.map((page) => (
//               <Link href={page.link} key={page.label} passHref>
//                 <Button sx={{ 
//                   color: 'black', 
//                   textTransform: 'capitalize', 
//                   fontSize: { xs: '0.6rem', sm:'0.9rem', md: '1rem'}, 
//                   position: 'relative', // Add this line
//                   '&:hover': { 
//                     backgroundColor: 'transparent', // No background color on hover
//                     '&::after': {
//                       transform: 'scaleX(1)',
//                     }
//                   }, 
//                   paddingX: { xs: '1px', md: '6px' },
//                   padding: { xs: '2px 4px', md: '6px 16px' }, 
//                   minWidth: 'auto',
//                   '&::after': {
//                     content: '""',
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '2px',
//                     backgroundColor: theme.palette.secondary.main, // Underline color
//                     transform: 'scaleX(0)',
//                     transformOrigin: 'bottom right',
//                     transition: 'transform 0.3s ease-out',
//                   },
//                 }}>
//                   {page.label}
//                 </Button>
//               </Link>
//             ))}
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <IconButton
//              href='https://github.com/zkemail/'
//              target='_blank'
//               sx={{
//                 color: 'black',
//                 padding: { xs: '4px', sm: '6px', md: '8px' }, // Adjust padding based on screen size
//                 '& .MuiSvgIcon-root': {
//                   fontSize: { xs: '16px', sm: '20px', md: '24px' } // Adjust icon size based on screen size
//                 }
//               }}
//               aria-label="GitHub link"
//             >

//             <GitHubIcon/>
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;



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
import ZKEIcon from '../ZKEIcon/ZKEIcon'; // Adjust the import path if necessary
import dynamic from 'next/dynamic';

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
          paddingY: '22px',
          boxShadow: '0px 1px 10.8px rgba(0, 0, 0, 0.05)',
          zIndex: '10',
        }}
      >
        <Container
          sx={{
            backgroundColor: 'white',
            boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.09)',
            borderRadius: '15px',
            maxWidth: { xs: '80%', md: '50%' },
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 !important',
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                href="/"
                sx={{
                  color: 'black',
                  padding: { xs: '4px', sm: '6px', md: '8px' }, // Adjust padding based on screen size
                  '& .MuiSvgIcon-root': {
                    fontSize: { xs: '16px', sm: '20px', md: '24px' }, // Adjust icon size based on screen size
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
                      textTransform: 'capitalize',
                      fontSize: { xs: '0.6rem', sm: '0.9rem', md: '1rem' },
                      position: 'relative', // Add this line
                      '&:hover': {
                        backgroundColor: 'transparent', // No background color on hover
                        '&::after': {
                          transform: 'scaleX(1)',
                        },
                      },
                      paddingX: { xs: '1px', md: '6px' },
                      padding: { xs: '2px 4px', md: '6px 16px' },
                      minWidth: 'auto',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: theme.palette.secondary.main, // Underline color
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
                  padding: { xs: '4px', sm: '6px', md: '8px' }, // Adjust padding based on screen size
                  '& .MuiSvgIcon-root': {
                    fontSize: { xs: '16px', sm: '20px', md: '24px' }, // Adjust icon size based on screen size
                  },
                }}
                aria-label="GitHub link"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'black' }}
              onClick={handleClickOpen}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <FullScreenMenuDialog open={open} onClose={handleClose} pages={pages} />
    </>
  );
};

export default ResponsiveAppBar;
