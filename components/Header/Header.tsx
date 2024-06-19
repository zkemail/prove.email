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
              md: '0px 1px 8px rgba(0, 0, 0, 0.09)', // Box shadow on medium and larger screens
            },
            borderRadius: '15px',
            maxWidth: { xs: '80%', md: '50%' },
            zIndex: '20'
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
                      position: 'relative',
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

        {/* Add SVG white blocks */}
        <Box
  sx={{
    position: 'absolute',
    bottom: -16,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    width: 'calc(100% - 40px)',
  }}
>
  <svg
    width="120"
    height="80"
    viewBox="0 0 120 80"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 10 Q60 0 120 10 V70 Q120 80 110 80 H10 Q0 80 0 70 Z" fill="white" />
  </svg>
  <svg
    width="50"
    height="80"
    viewBox="0 0 50 80"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: '-25px' }} // Make the right square less visible
  >
    <path d="M0 10 Q25 0 50 10 V70 Q50 80 40 80 H10 Q0 80 0 70 Z" fill="white" />
  </svg>
</Box>


      </AppBar>
      <FullScreenMenuDialog open={open} onClose={handleClose} pages={pages} />
    </>
  );
};

export default ResponsiveAppBar;




// 'use client';
// import React, { useState, useEffect } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Link from 'next/link';
// import IconButton from '@mui/material/IconButton';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useTheme } from '@mui/material/styles';
// import ZKEIcon from '../ZKEIcon/ZKEIcon'; // Adjust the import path if necessary
// import dynamic from 'next/dynamic';

// const FullScreenMenuDialog = dynamic(() => import('../OverlayMenu/OverlayMenu'), { ssr: false });

// interface Page {
//   label: string;
//   link: string;
// }

// interface ResponsiveAppBarProps {
//   title: string;
//   pages: Page[];
// }

// const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({ title, pages }) => {
//   const theme = useTheme();
//   const [open, setOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   if (!mounted) return null;

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         height: '200px',
//       }}
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 1,
//           pointerEvents: 'none', // Ensures that the SVG doesn't interfere with mouse events
//         }}
//       >
//         <svg
//           width="1437"
//           height="179"
//           viewBox="0 0 1437 179"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g filter="url(#filter0_d_137_13)">
//             <path
//               d="M10 0 Q60 10 110 0 Q1167 0 1267 10 Q1377 0 1427 10 Q1437 0 1437 10 V158.852C1437 163.27 1433.41 166.852 1428.99 166.852H1400.49C1396.07 166.852 1392.49 163.27 1392.49 158.852V133.926C1392.49 129.508 1388.91 125.926 1384.49 125.926H149.493C145.075 125.926 141.493 129.508 141.493 133.926V156.5C141.493 160.918 137.911 164.5 133.493 164.5H39.993C35.5748 164.5 31.993 160.918 31.993 156.5V133.926C31.993 129.508 28.4113 125.926 23.993 125.926H7.99304C3.57476 125.926 0 122.344 0 117.926V10 Q10 0 10 0 Z"
//               fill="white"
//             />
//           </g>
//           <defs>
//             <filter id="filter0_d_137_13" x="-10.807" y="-9.8" width="1461.6" height="188.452" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//               <feFlood flood-opacity="0" result="BackgroundImageFix"/>
//               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
//               <feOffset dy="4"/>
//               <feGaussianBlur stdDeviation="5"/>
//               <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
//               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_137_13"/>
//               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_137_13" result="shape"/>
//             </filter>
//           </defs>
//         </svg>
//       </Box>
      
//       <AppBar
//         position="relative"
//         sx={{
//           backgroundColor: 'white',
//           paddingY: '20px',
//           boxShadow: {
//             xs: 'none', // No box shadow on small screens
//             md: '0px 1px 7px rgba(0, 0, 0, 0.02)', // Box shadow on medium and larger screens
//           },
//           zIndex: 2,
//         }}
//       >
//         <Container
//           sx={{
//             backgroundColor: 'white',
//             boxShadow: {
//               xs: 'none', // No box shadow on small screens
//               md: '0px 1px 8px rgba(0, 0, 0, 0.09)', // Box shadow on medium and larger screens
//             },
//             borderRadius: '15px',
//             maxWidth: { xs: '80%', md: '50%' },
//             zIndex: '20'
//           }}
//         >
//           <Toolbar
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               padding: '0 !important',
//             }}
//           >
//             <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//               <IconButton
//                 href="/"
//                 sx={{
//                   color: 'black',
//                   padding: { xs: '4px', sm: '6px', md: '8px' }, // Adjust padding based on screen size
//                   '& .MuiSvgIcon-root': {
//                     fontSize: { xs: '16px', sm: '20px', md: '24px' }, // Adjust icon size based on screen size
//                   },
//                 }}
//                 aria-label="Home link"
//               >
//                 <ZKEIcon mode='light' />
//               </IconButton>
//             </Box>

//             <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { xs: 0.5, sm: 1, md: 2 } }}>
//               {pages.map((page) => (
//                 <Link href={page.link} key={page.label} passHref>
//                   <Button
//                     sx={{
//                       color: 'black',
//                       textTransform: 'capitalize',
//                       fontSize: { xs: '0.6rem', sm: '0.9rem', md: '1rem' },
//                       position: 'relative',
//                       '&:hover': {
//                         backgroundColor: 'transparent', // No background color on hover
//                         '&::after': {
//                           transform: 'scaleX(1)',
//                         },
//                       },
//                       paddingX: { xs: '1px', md: '6px' },
//                       padding: { xs: '2px 4px', md: '6px 16px' },
//                       minWidth: 'auto',
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         bottom: 0,
//                         left: 0,
//                         width: '100%',
//                         height: '2px',
//                         backgroundColor: theme.palette.secondary.main, // Underline color
//                         transform: 'scaleX(0)',
//                         transformOrigin: 'bottom right',
//                         transition: 'transform 0.3s ease-out',
//                       },
//                     }}
//                   >
//                     {page.label}
//                   </Button>
//                 </Link>
//               ))}
//             </Box>
//             <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
//               <IconButton
//                 href="https://github.com/zkemail/"
//                 target="_blank"
//                 sx={{
//                   color: 'black',
//                   padding: { xs: '4px', sm: '6px', md: '8px' }, // Adjust padding based on screen size
//                   '& .MuiSvgIcon-root': {
//                     fontSize: { xs: '16px', sm: '20px', md: '24px' }, // Adjust icon size based on screen size
//                   },
//                 }}
//                 aria-label="GitHub link"
//               >
//                 <GitHubIcon />
//               </IconButton>
//             </Box>
//             <IconButton
//               sx={{ display: { xs: 'flex', md: 'none' }, color: 'black' }}
//               onClick={handleClickOpen}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </Container>
//       </AppBar>

//       <FullScreenMenuDialog open={open} onClose={handleClose} pages={pages} />
//     </Box>
//   );
// };

// export default ResponsiveAppBar;
