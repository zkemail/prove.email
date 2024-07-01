'use client'
import Link from 'next/link'
import localFont from 'next/font/local';
import { Typography, Box } from '@mui/material';
import CustomBottom from '.././components/CustomButton/CustomButton'
import { useTheme } from '@mui/material/styles';


import { animate, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const berkeleyOldStyle = localFont({
    src: '.././font/BerkeleyOldStyle.ttf',
    variable: '--berkeley',
  });


// Define Fade-in animation variants
const fadeInAnimationVariants = {
    initial: {
      opacity:0,
      y:100,
    },
    animate: {
      opacity:1,
      y:0
    }
  }
  
  

export default function NotFound() {
    const theme = useTheme();
  return (
    <Box sx={{height: '500px', justifyContent: 'center', textAlign: 'center'}}>
                   <motion.div
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{once: true}}
        > <Typography
                variant='h1'
                sx={{
                fontFamily: berkeleyOldStyle.style.fontFamily,
                lineHeight: '90%',
                paddingTop: { xs: '50px', sm: '150px' },
                fontSize: {
                    xs: '2.3rem',
                    sm: '2.5rem',
                    md: '3rem',
                    lg: '4.5rem',
                    xl: '5rem',
                },
                }}
            > 
                404 - Not Found
            </Typography>

            <Typography
                variant='h1'
                sx={{
                fontFamily: berkeleyOldStyle.style.fontFamily,
                lineHeight: '90%',
                paddingTop: { xs: '10px', sm: '30px' },
                fontSize: {
                    xs: '2.3rem',
                },
                }}
            > 
                where&apos;d you run off to?
            </Typography>
        </motion.div>
        <CustomBottom buttonLabel='Let`s Go Home!' href="/" sx={{marginY:'30px'}}>Let&apos;s Go Home!</CustomBottom>
    </Box>
  )
}