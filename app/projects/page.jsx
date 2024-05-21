'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, InputBase, Paper, Stack, Typography } from '@mui/material';
import CustomButton from '@/components/CustomButton/CustomButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ActionCard from '../../components/ActionCard/ActionCard'
import { Container } from 'postcss';
import Flipper from '../../components/Flipper/Flipper'
import SortIcon from '@mui/icons-material/Sort';
import IconLink from '@/components/IconLink/IconLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import sectionBackground from '../../public/sectionBackground.svg'

const projects = [
  { name: 'Proof Of Twitter', tagline: 'prove you own a twitter account', description: 'about proof of twitter and how it works. about proof of twitter and how it works about proof of twitter and how it works', zk_email_lib: true, zk_lib: true, on_chain: false, off_chain: true, made_by_us: true },
  { name: 'ZK P2P', tagline: 'decentralized messaging', description: 'P2P communication using zero-knowledge proofs', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: true, made_by_us: false },
  { name: 'ZK Proof of Github', tagline: '', description: 'Prove you committed to a Github repo', zk_email_lib: true, zk_lib: true, on_chain: false, off_chain: true, made_by_us: false },
  { name: 'Proof of Organization', tagline: '', description: 'Prove you own an email address from a domain', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: true, made_by_us: false },
  { name: 'Email Wallet', tagline: '', description: 'Send transactions via email, including account recovery', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: true, made_by_us: true }
];

const texts = [
  'Proof Of Personhood',
  'KYC',
  'Whistle Blowing',
];

const ProjectsPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

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
      <div className='bg-yellow-400'>
        <div className=" py-16 text-center relative bg-cover bg-center" style={{ backgroundImage: `url(${sectionBackground})` }}>
          <Typography>zk Email supports</Typography>
          <Typography variant='h1'>Projects using our ZK Libraries</Typography>
          <p className="text-black w-[50%] mx-auto">
            While building the ZK Email ecosystem we created libraries for both building with ZK Email and general ZK libraries. 
            This repository contains both our own projects and community projects using our libraries. What will you build?
          </p>
          <div className="relative mt-8 mx-auto w-2/3 max-w-2xl">
            <Paper
              component="form"
              className="flex items-center rounded-full px-4 py-2 bg-[#F4F4F4]"
            >
              <InputBase
                className="flex-grow"
                placeholder="Search projects..."
                inputProps={{ 'aria-label': 'search projects' }}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                sx={{borderRadius:"20px"}}
              />
              <SearchIcon className="text-gray-400" />
            </Paper>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2 pt-12">
        <SortIcon/>
        {['ZK Email Library', 'ZK Library', 'On Chain', 'Off Chain', 'Made by Us'].map((label) => (
          <Button
            key={label}
            variant={selectedButtons.includes(label) ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => toggleSelection(label)}
          >
            {label}
          </Button>
        ))}
      </div>
      <div className="flex mx-auto justify-center pt-12">
        <div className="flex flex-col w-1/2 h-96 overflow-y-scroll border-r-2 border-t-2 border-black">
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              className="bg-white p-6 border-b-2 border-black cursor-pointer hover:bg-black hover:text-white"
              onClick={() => setSelectedProject(project)}
            >
              <Typography variant='h5' sx={{fontSize:"25px", fontWeight:'bold', marginBottom:'2px'}} >{project.name}</Typography>
              <p>{project.tagline}</p>
            </div>
          ))}
        </div>
        <div className="w-1/2 p-12">
          {selectedProject ? (
            <>
              <Typography variant='h2' sx={{fontWeight:'bold'}}>{selectedProject.name}</Typography>
              <Typography className="text-[#7A7A7A]">{selectedProject.tagline}</Typography>
              <p className="py-4">{selectedProject.description}</p>
              {/* <p className="font-bold text-slate-500 text-sm pb-3">TAGS</p> */}
              <Stack spacing={2} direction="row"  sx={{fontSize:'10px'}}>
                {selectedProject.zk_email_lib && <CustomButton variant="outlined" tag='true' color="primary" buttonLabel='ZK Email Library'>ZK Email Library</CustomButton>}
                {selectedProject.zk_lib && <CustomButton variant="outlined" tag='true' color="primary" buttonLabel='ZK Library'>ZK Library</CustomButton>}
                {selectedProject.off_chain && <CustomButton variant="outlined" tag='true' color="primary" buttonLabel='Off Chain'>Off Chain</CustomButton>}
                {selectedProject.on_chain && <CustomButton variant="outlined" tag='true' color="primary" buttonLabel='On Chain'>On Chain</CustomButton>}
                {selectedProject.made_by_us && <CustomButton variant="outlined" tag='true' color="primary" buttonLabel='Made By Us'>Made By Us</CustomButton>}
              </Stack>
              <Stack spacing={2} direction="row" className="mt-6" sx={{alignItems:'center'}}>
                <Link href="https://twitter.prove.email/">
                  <CustomButton sx={{paddingX:'30px', paddingY:'15px', bgcolor:'black'}} variant="contained" filledIn='true' color="primary" buttonLabel='Try it out' endIcon={<ArrowForwardIcon />}>
                    Try it out
                  </CustomButton>
                </Link>
                <IconLink href="https://github.com/zkemail"  dark='true' IconComponent={GitHubIcon} size='large'/>
                <IconLink href="https://github.com/zkemail"  dark='true' IconComponent={XIcon} size='large' />
              </Stack>
            </>
          ) : (
            <p>Select a project to see details here.</p>
          )}
        </div>
      </div>



      <Flipper texts={texts} />
      <ActionCard title='Build Your Own' text='No trusted hardware. No trusted attestation servers. Only trust zero knowledge proofs, smart contracts, email, and DNS infrastructure. All open source MIT libraries.' buttonText='Docs' buttonLink='https://zkemail.gitbook.io/zk-email'/>

      <ActionCard title='Build Proof of Twitter Tutorial' text='Check out our How to Set Up Proof of Twitter Example' buttonText='Docs' buttonLink='https://zkemail.gitbook.io/zk-email'/>

   </section>
  );
};

export default ProjectsPage;
