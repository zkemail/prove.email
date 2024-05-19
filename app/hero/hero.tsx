'use client'
import CustomButton from '../../components/CustomButton/CustomButton';
import Image from 'next/image';
import { Box, Stack } from '@mui/material';
import rectangleEnvelope from '../../public/rectangleEnvelope.svg'; 
import triangleEnvelope from '../../public/triangleEnvelope.svg';
import backgroundHero from '../../public/backgroundHero.svg'; 
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useState } from 'react';

export default function Hero() {
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  const handleToggle = () => {
    setIsEmailOpen(!isEmailOpen);
  };

  return (
    <main 
      className="px-16 pt-16 w-full bg-[#F6F5F5] text-center align-content-center content-center"
      style={{
        backgroundImage: `url(${backgroundHero.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='z-50 relative'>
        <h1 className="text-black text-7xl lg:text-9xl">ZKEmail</h1>
        <p className='pb-3'>Prove who sent an email & any of its contents. Anonymously. On or Offchain.</p>
        <div className='content-center items-center flex justify-center'>
          <Stack spacing={2} direction="row" sx={{ paddingTop: "16px" }}>
            <CustomButton buttonLabel="Docs" filledIn={true} url='https://zkemail.gitbook.io/zk-email'>
              material ui button
            </CustomButton>
            <CustomButton buttonLabel="Projects" filledIn={false}>
              material ui button
            </CustomButton>
          </Stack>
        </div>
      </div>

      {/* ENVELOPE MAIL STUFF */}
      <div className="relative w-fit flex justify-center mt-16 cursor-pointer" onClick={handleToggle}>
        {/* MAIL LETTER PAPER */}
        <div className="absolute inset-0 rounded-lg bg-white w-3/4 mx-auto p-5 sm:p-16 sm:p-20 text-left text-[8px] sm:text-[12px] md:text-[18px]" style={{ zIndex: 1 }}>
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
                    xs: '16px',  // default size for extra-small screens
                    sm: '24px',  // size for small screens and above
                    md: '32px',  // size for medium screens and above
                  },
                }}
              />
            </div>
            <p className='pt-8 pb-4'>Subject: prove any content for any email, sent or received </p>
          </div>
          <div>
            <p>
              we built a primitive that allows you to prove only what content you want from an email. hide what you don’t want known. + Prove who sent the email.
              <br />
              Excited to see what you build : )
              <br />
              <span className='font-semibold'>The Zk team</span>
              <br />
              Aayush, Sora, Saleel, Wataru, Aditya and Elo
            </p>
          </div>
        </div>
        {/* TRIANGLE PART OF ENVELOPE */}
        <Box className={`translate-y-1/4 absolute transition-transform duration-500 ${isEmailOpen ? 'transform translate-y-2/4' : ''}`} sx={{ zIndex: 0, top: '-70%', width: '100%', height: 'auto' }}>
            <Image
              src={triangleEnvelope}
              alt='Triangle Envelope'
              className='w-full h-full'
              style={{ zIndex: 0 }}
            />
          </Box>
          {/* RECTANGULAR ENVELOPE */}
          <Box className={`translate-y-1/4 transition-transform duration-500 ${isEmailOpen ? 'transform translate-y-2/4' : ''}`} sx={{ zIndex: 1, clipPath: 'inset(-50% 0 0 0)' }}>
            <Image
              src={rectangleEnvelope}
              alt='Rectangle Envelope'
              className='w-full h-full'
              style={{ zIndex: 1 }}
            />
          </Box>
      </div>
    </main>
  );
}
