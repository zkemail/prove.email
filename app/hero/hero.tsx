'use client'

import UnstyledLinkButton from '../../components/Button';
import Image from 'next/image';
import { Box, Grid, Typography, Stack} from '@mui/material';
import Envelope from '../.././public/Envelope.svg'; // Adjust the path as necessary

export default function Hero() {
    return (
      <main className="p-16 w-full bg-[#F6F5F5] text-center align-content-center content-center">
        <h1 className="text-black text-9xl">ZKEmail</h1>
        <p className='pb-3'>Prove who sent an email & any of it’s contents. Anonmously. On or Offchain.</p>
          <div className='content-center items-center flex justify-center'>
            <Stack spacing={2} direction="row" sx={{paddingTop:"16px"}}>
              <UnstyledLinkButton buttonLabel="Docs" filledIn={true}>material ui button</UnstyledLinkButton>
              <UnstyledLinkButton buttonLabel="Projects" filledIn={true}>material ui button</UnstyledLinkButton>
            </Stack>
          </div>

        


        <Box sx={{ marginTop: 'auto' }}>
          <Image
            src={Envelope}
            alt='checkbox'
            className='w-full h-full fill-white pt-24'
          />
        </Box>
      </main>
    );
  }
  