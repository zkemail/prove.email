'use client'
import CustomButton from '../CustomButton/CustomButton';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import rectangleEnvelope from '../../public/rectangleEnvelope.svg';   //LAST rectangle

import triangleEnvelope from '../../public/triangleEnvelope.svg';   
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useState, useEffect } from 'react';

// grey scale
import rectangle1 from '../.././public/rectangle1.svg'
import rectangle2 from '../.././public/rectangle2.svg'
import rectangle3 from '../.././public/rectangle3.svg'

// colored
import heroBackground1 from '../.././public/heroBackground1.svg'
import heroBackground2 from '../.././public/heroBackground2.svg'
import heroBackground3 from '../.././public/heroBackground3.svg'

const backgrounds = [rectangle1, rectangle2, rectangle3];
// const backgrounds = [heroBackground1, heroBackground2, heroBackground3];

import { animate, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define Fade-in animation variants
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,  // duration of the animation
    },
  },
};

const delayedFadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,  // duration of the animation
      delay: 0.5,  // delay before the animation starts
    },
  },
};

export default function Hero() {
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleToggle = () => {
    setIsEmailOpen(!isEmailOpen);
  };

  return (
    <main 
      className="px-16 pt-16 w-full bg-[#F6F5F5] text-center align-content-center content-center"
      style={{
        backgroundImage: `url(${backgrounds[backgroundIndex].src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='z-50 relative'>
        <motion.div
          variants={fadeInAnimationVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
        >
          <Typography variant='h1'
            sx={{
              lineHeight: '90%',
              fontSize: {
                xs: '3rem',  // font size for extra small screens
                sm: '3.5rem',    // font size for small screens
                md: '3.5rem',  // font size for medium screens
                lg: '9rem',    // font size for large screens
                xl: '9rem',  // font size for extra large screens
              },
            }}
          >
            ZK Email</Typography>
        </motion.div>
        <p className='pb-3'>Prove who sent an email & any of its contents. Anonymously. On or Offchain.</p>
        <div className='content-center items-center flex justify-center'>
          <Stack spacing={2} direction="row" sx={{ paddingTop: "16px" }}>
            <CustomButton buttonLabel="Docs" filledIn={true} url='https://zkemail.gitbook.io/zk-email'>
              material ui button
            </CustomButton>
            <CustomButton buttonLabel="Projects" filledIn={false} url='/projects'>
              material ui button
            </CustomButton>
          </Stack>
        </div>
      </div>

      <motion.div
        variants={delayedFadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        {/* ENVELOPE MAIL STUFF */}
        <div className="relative w-fit flex justify-center mx-auto mt-16 cursor-pointer " onClick={handleToggle}>
          {/* ENVELOPE MAIL PAPER */}
          <div className="absolute inset-0 rounded-lg bg-white w-3/4 mx-auto p-3 sm:p-16 sm:p-20 text-left text-[5px] sm:text-[12px] md:text-[15px]" style={{ zIndex: 1 }}>
            <div className='font-semibold'>
              <div className='grid grid-cols-2'>
                <div>
                  <p>From: zkEmail.com</p>
                  <p>To: Developers</p>
                </div>
                <LabelImportantIcon
                  className='justify-self-end'
                  sx={{
                    color: '#FFBB6B',
                    fontSize: {
                      xs: '10px',  
                      sm: '24px',
                      md: '32px',  
                    },
                  }}
                />
              </div>
              <p className='pt-2 pb-2 sm:pt-8 sm:pb-4'>Subject: prove any content for any email, sent or received </p>
            </div>
            <div>
              <p>
                we built a primitive that allows you to prove only what content you want from an email. hide what you don’t want known. + Prove who sent the email.
                <br />
                Excited to see what you build : )
                <br />
                <br></br>
                <span className='font-semibold'>The Zk team</span>
                <br />
                Aayush, Sora, Saleel, Wataru, Aditya and Elo
              </p>
            </div>
          </div>
          {/* TRIANGLE PART OF ENVELOPE */}
          <Box className={`translate-y-[30px] absolute transition-transform duration-500 ${isEmailOpen ? 'transform translate-y-[355px]' : ''}`} sx={{ zIndex: 0, top: '-40%', width: '100%', height: 'auto' }}>
            <Image
              src={triangleEnvelope}
              alt='Triangle Envelope'
              className='w-full h-full'
              style={{ zIndex: 0 }}
            />
          </Box>
          {/* RECTANGULAR ENVELOPE */}
          <Box className={`translate-y-[30px] transition-transform duration-500 ${isEmailOpen ? 'transform translate-y-[355px]' : ''}`} sx={{ zIndex: 1, clipPath: 'inset(-50% 0 0 0)' }}>
            <Image
              src={rectangleEnvelope}
              alt='Rectangle Envelope'
              className='w-full h-full'
              style={{ zIndex: 1 }}
            />
          </Box>
        </div>
      </motion.div>
    </main>
  );
}
