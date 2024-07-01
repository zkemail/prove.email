import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { FlipTextProps } from '../../types';
import pixelSectionBackground1 from '../.././public/pixelSectionBackground1.svg'
import pixelSectionBackground2 from '../.././public/pixelSectionBackground2.svg'
import localFont from 'next/font/local';

import { animate, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const backgrounds = [pixelSectionBackground1, pixelSectionBackground2];


const berkeleyOldStyle = localFont({
  src: '../../font/BerkeleyOldStyle.ttf',
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



const FlipText: React.FC<FlipTextProps> = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        py: 4, 
        backgroundColor: '#202020', 
        backgroundImage: `url(${backgrounds[backgroundIndex].src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        height: { xs: '250px', sm: '300px', md: '350px', lg: '500px' }
      }}
    >

      
      <Typography variant="subtitle1" sx={{ color: '#989898', paddingBottom: {xs:'10px', md:'25px'}, fontSize:{xs:'12px', md:'20px'}}}>
        ZKEmail Enables
      </Typography>

      <motion.div
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{once: true}}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: berkeleyOldStyle.style.fontFamily,
            fontSize: { xs: '25px', sm: '30px', md: '50px' },
            fontWeight: 'regular',
            color: 'white',
          }}
        >
          Serverless, Anonymous <br></br>
          <span className='font-bold'>
             {texts[index]}
          </span>
         
        </Typography>
      </motion.div>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {texts.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: {xs:4, md:10},
              height: {xs:4, md:10},
              borderRadius: '50%',
              backgroundColor: i === index ? '#000' : '#c4c4c4',
              mx: 0.5,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FlipText;
