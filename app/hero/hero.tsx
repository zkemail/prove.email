'use client'

import UnstyledLinkButton from '../../components/Button';
import Image from 'next/image';
import { Box, Grid, Typography, Stack} from '@mui/material';
import rectangleEnvelope from '../.././public/rectangleEnvelope.svg'; // Adjust the path as necessary

export default function Hero() {
    return (
      <main className="p-16 w-full bg-[#F6F5F5] text-center align-content-center content-center">
        <h1 className="text-black text-9xl">ZKEmail</h1>
        <p className='pb-3'>Prove who sent an email & any of it’s contents. Anonmously. On or Offchain.</p>
          <div className='content-center items-center flex justify-center'>
            <Stack spacing={2} direction="row" sx={{paddingTop:"16px"}}>
              <UnstyledLinkButton buttonLabel="Docs" filledIn={true} url='https://zkemail.gitbook.io/zk-email'>material ui button</UnstyledLinkButton>
              <UnstyledLinkButton buttonLabel="Projects" filledIn={false}>material ui button</UnstyledLinkButton>
            </Stack>
          </div>

        

        <div className="relative w-fit flex justify-center mt-16">
        {/* MAIL LETTER PAPER */}
        <div className="absolute inset-0 rounded-lg bg-white w-2/3 h-full mx-auto p-20 text-left text-sm" style={{ zIndex: 0 }}> 
          <div className='font-semibold'>
            <p>From: zkEmail.com</p>
            <p>To: Developers</p>
            <p className='pt-8'>Subject: prove any content for any email, sent or received </p>
          </div>
          <div>
            <p>
            we built a primitive that allows you to prove only what content you want from an email.  hide what you don’t want known.  + Prove who sent the email.
            <br></br>
            Excited to see what you build : )
            <br></br>
            <span className='font-semibold'>The Zk team</span>
            <br></br>
            Aayush, Sora, Saleel, Wataru, Aditya and Elo

            </p>
          </div>

        </div>
        {/* ACTUAL ENVELOPE */}
        <Box sx={{ zIndex: 1 }}>
          <Image
            src={rectangleEnvelope}
            alt='Envelope'
            className='w-full h-full'
            style={{ zIndex: 1 }}
          />
        </Box>
      </div>
      </main>
    );
  }
  