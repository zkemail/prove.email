'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Tabs, Tab, Typography, Paper, InputBase, Stack, useTheme } from '@mui/material';
import CustomButton from '@/components/CustomButton/CustomButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ActionCard from '@/components/ActionCard/ActionCard';
import Flipper from '@/components/Flipper/Flipper';
import SortIcon from '@mui/icons-material/Sort';
import IconLink from '@/components/IconLink/IconLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import sectionBackground from '@/public/sectionBackground.svg';
import pixelSectionBackground1 from '@/public/pixelSectionBackground1.svg';
import pixelSectionBackground2 from '@/public/pixelSectionBackground2.svg';

const backgrounds = [pixelSectionBackground1, pixelSectionBackground2];

const projects = [
  { name: 'Proof Of Twitter', tagline: 'prove you own a twitter account', description: 'about proof of twitter and how it works. about proof of twitter and how it works about proof of twitter and how it works', zk_email_lib: true, zk_lib: true, on_chain: false, off_chain: true, made_by_us: true },
  { name: 'ZK P2P', tagline: 'decentralized messaging', description: 'P2P communication using zero-knowledge proofs', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: true, made_by_us: false },
  { name: 'ZK Proof of Github', tagline: 'prove you own a twitter account', description: 'Prove you committed to a Github repo', zk_email_lib: true, zk_lib: true, on_chain: false, off_chain: true, made_by_us: false },
  { name: 'Proof of Organization', tagline: 'prove you own a twitter account', description: 'Prove you own an email address from a domain', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: true, made_by_us: false },
  { name: 'Email Wallet', tagline: 'prove you own a twitter account', description: 'Send transactions via email, including account recovery', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: true, made_by_us: true }
];

const texts = [
  'Proof Of Personhood',
  'KYC',
  'Whistle Blowing',
];

const ProjectsPage = () => {
  const theme = useTheme();
  const [searchInput, setSearchInput] = useState('');
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedProjectIndex(newValue);
  };

  const toggleSelection = (buttonLabel) => {
    setSelectedButtons((current) =>
      current.includes(buttonLabel)
        ? current.filter((label) => label !== buttonLabel)
        : [...current, buttonLabel]
    );
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchInput.toLowerCase()) ||
                          (project.tagline && project.tagline.toLowerCase().includes(searchInput.toLowerCase()));
    const matchesFilters = selectedButtons.every(button => {
      switch (button) {
        case 'ZK Email Library': return project.zk_email_lib;
        case 'ZK Library': return project.zk_lib;
        case 'On Chain': return project.on_chain;
        case 'Off Chain': return project.off_chain;
        case 'Made by Us': return project.made_by_us;
        default: return true;
      }
    });
    return matchesSearch && matchesFilters;
  });

  return (
    <section className="min-h-screen bg-white">
      <div className='bg-[#161616]'>
        <div className="pt-40 text-center relative bg-cover bg-center" 
          style={{
            backgroundImage: `url(${backgrounds[backgroundIndex].src})`, backgroundPosition: 'center, center', backgroundSize: 'cover, contain', backgroundRepeat: 'no-repeat, no-repeat'
           }}>
          <Typography sx={{color:'white'}}>ZKEmail supports</Typography>
          <Typography variant='h1' sx={{paddingBottom:'20px', color:'white'}} >Projects using our ZK Libraries</Typography>
          <p className="text-white w-[50%] md:w-[35%] mx-auto">
            While building the ZK Email ecosystem we created libraries for both building with ZK Email and general ZK libraries. 
            This repository contains both our own projects and community projects using our libraries. What will you build?
          </p>
          <div className="relative mt-[70px] mx-auto w-2/3 max-w-2xl top-[30px]">
             <Paper
              sx={{borderRadius:'5px'}}
              component="form"
              className="flex items-center px-4 py-2 bg-[#F4F4F4] stickyz-10"
            >
              <InputBase
                className="flex-grow"
                placeholder="Search projects..."
                inputProps={{ 'aria-label': 'search projects' }}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <SearchIcon className="text-gray-400" />
            </Paper>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2 pt-12">
        <SortIcon/>
        {['ZK Email Library', 'ZK Library', 'On Chain', 'Off Chain', 'Made by Us'].map((label) => (
          <CustomButton
            key={label}
            buttonLabel={label}
            filledIn={selectedButtons.includes(label) ? true : false}
            color="primary"
            onClick={() => toggleSelection(label)}
            sx={{
              padding: { xs: '6px 8px', sm: '8px 16px', md: '10px 20px' },
              fontSize: { xs: '10px', sm: '12px', md: '14px' },
            }}
          >
            {label}
          </CustomButton>
        ))}
      </div>
      <Box sx={{ display: 'flex', pt: 12, textAlign:'left'}}>
        <div className='w-[50%]'>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          
          value={selectedProjectIndex}
          onChange={handleTabChange}
          sx={{ borderRight: 1, borderColor: 'divider', width: '100%' }}
        >
          {filteredProjects.map((project, index) => (
            <Tab
              key={project.name}
              fullWidth={true}
              
              sx={{ alignItems: 'start', borderBottom: 1, borderBottomColor: 'black' }}
              label={(
                <Box sx={{ borderBottom: 'black', }}>
                  <Typography variant='h5' sx={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '2px', textAlign: 'left' }}>
                    {project.name}
                  </Typography>
                  <Typography sx={{}}>{project.tagline}</Typography>
                </Box>
              )}
            />
          ))}
        </Tabs>
        </div>
        <Box sx={{ p: 3, width: '50%' }}>
          {filteredProjects[selectedProjectIndex] ? (
            <>
              <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
                {filteredProjects[selectedProjectIndex].name}
              </Typography>
              <Typography className="text-[#7A7A7A]">
                {filteredProjects[selectedProjectIndex].tagline}
              </Typography>
              <Typography className="py-4">
                {filteredProjects[selectedProjectIndex].description}
              </Typography>
              <Stack spacing={2} direction="row" sx={{ fontSize: '10px' }}>
                {filteredProjects[selectedProjectIndex].zk_email_lib && (
                  <CustomButton variant="outlined" tag='true' color="primary" buttonLabel='ZK Email Library'>
                    ZK Email Library
                  </CustomButton>
                )}
                {filteredProjects[selectedProjectIndex].zk_lib && (
                  <CustomButton variant="outlined" tag='true' color="primary" buttonLabel='ZK Library'>
                    ZK Library
                  </CustomButton>
                )}
                {filteredProjects[selectedProjectIndex].off_chain && (
                  <CustomButton variant="outlined" tag='true' color="primary" buttonLabel='Off Chain'>
                    Off Chain
                  </CustomButton>
                )}
                {filteredProjects[selectedProjectIndex].on_chain && (
                  <CustomButton variant="outlined" tag='true' color="primary" buttonLabel='On Chain'>
                    On Chain
                  </CustomButton>
                )}
                {filteredProjects[selectedProjectIndex].made_by_us && (
                  <CustomButton variant="outlined" tag='true' color="primary" buttonLabel='Made By Us'>
                    Made By Us
                  </CustomButton>
                )}
              </Stack>
              <Stack spacing={2} direction="row" className="mt-6" sx={{ alignItems: 'center' }}>
                <Link href="https://twitter.prove.email/">
                  <CustomButton
                    sx={{ paddingX: { xs: '15px', sm: '20px', md: '30px' }, paddingY: { xs: '8px', sm: '10px', md: '15px' }, bgcolor: 'black' }}
                    variant="contained"
                    filledIn='true'
                    color="primary"
                    buttonLabel='Try it out'
                    endIcon={<ArrowForwardIcon />}
                  >
                    Try it out
                  </CustomButton>
                </Link>
                <IconLink target={false} href="https://github.com/zkemail" dark='true' IconComponent={GitHubIcon} size='large' />
                <IconLink target={false} href="https://github.com/zkemail" dark='true' IconComponent={XIcon} size='large' />
              </Stack>
            </>
          ) : (
            <Typography>Select a project to see details here.</Typography>
          )}
        </Box>
      </Box>
      <Flipper texts={texts} />
      <ActionCard topText='For Developers' light={true} title='Build Your Own' text='No trusted hardware. No trusted attestation servers. Only trust zero knowledge proofs, smart contracts, email, and DNS infrastructure. All open source MIT libraries.' buttonText='Docs' buttonLink='https://zkemail.gitbook.io/zk-email' />
      <ActionCard topText='For Developers' title='Build Proof of Twitter Tutorial' text='Check out our How to Set Up Proof of Twitter Example' buttonText='Docs' buttonLink='https://zkemail.gitbook.io/zk-email' />
    </section>
  );
};

export default ProjectsPage;
