'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Tabs, Tab, Typography, Paper, InputBase, useTheme, Stack, Hidden } from '@mui/material';
import CustomButton from '@/components/CustomButton/CustomButton';
import CustomInputBase from '@/components/CustomInputBase/CustomInputBase';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ActionCard from '@/components/ActionCard/ActionCard';
import FlipText from '@/components/FlipText/FlipText';
import SortIcon from '@mui/icons-material/Sort';
import IconLink from '@/components/IconLink/IconLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';



import CustomGitHubIcon from '../../public/CustomGithubIcon';
import CustomXIcon from '../../public/CustomXIcon';

import localFont from 'next/font/local';

import sectionBackground from '@/public/sectionBackground.svg';

import pixelSectionBackground1 from '@/public/pixelSectionBackground1.svg';
import pixelSectionBackground2 from '@/public/pixelSectionBackground2.svg';

import projectBackground1 from '@/public/projectBackground1.svg';
import projectBackground2 from '@/public/projectBackground2.svg';
import projectBackground3 from '@/public/projectBackground3.svg';
import projectBackground4 from '@/public/projectBackground1.svg';
import projectBackground5 from '@/public/projectBackground2.svg';
import projectBackground6 from '@/public/projectBackground3.svg';
import projectBackground7 from '@/public/projectBackground3.svg';


const backgrounds = [projectBackground1, projectBackground2, projectBackground3, projectBackground4, projectBackground5, projectBackground6, projectBackground7];

import { animate, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CustomBlogIcon from '@/public/CustomBlogIcon';

const berkeleyOldStyle = localFont({
  src: '../.././font/BerkeleyOldStyle.ttf',
  variable: '--berkeley',
});

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const projects = [
  { name: 'Account Recovery', tagline: 'recover any safe wallet or smart wallet via email addresses', url: 'https://prove.email/recovery', description: 'Use email addresses to recover wallet ownership Integrate into new wallets in 5 lines of code!', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: false, made_by_us: true, logo: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*FJXPBexD-aQvAKH-qhjbmQ.png', blogLink: 'https://prove.email/blog/recovery', githubLink: 'https://github.com/zkemail/email-recovery', twitterLink: 'https://x.com/zkemail' },
  { name: 'Safe 2FA', tagline: 'confirm any multisig transaction via an email', url: 'https://prove.email/blog/2fa', description: 'Use an email controlled smart contract to confirm multisig transactions.', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: false, made_by_us: true, logo: 'https://recovery.prove.email/assets/gnosis-safe-logo-CWjLluxj.svg', blogLink: 'https://prove.email/blog/2fa', githubLink: 'https://github.com/zkemail/email-wallet', twitterLink: 'https://x.com/zkemail' },
  { name: 'Decentralized Oauth Login', tagline: 'authorize any session key to scoped wallet access via emails', url: 'https://oauth.emailwallet.org', description: 'Login to any app for a specific crypto scope using emails, in just 3 lines of code.', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: false, made_by_us: true, logo: 'https://i.imgur.com/SvAOP8F.png', blogLink: 'https://zkemail.gitbook.io/zk-email/login-with-zk-email-oauth-api', githubLink: 'https://github.com/zkemail/oauth-demo-ui/', twitterLink: 'https://x.com/zkemail' },
  { name: 'Proof Of Twitter', tagline: 'prove you own a twitter account', url: 'https://twitter.prove.email/', description: 'Prove you own a Twitter username by sending yourself a Twitter password reset email', zk_email_lib: true, zk_lib: true, on_chain: false, off_chain: true, made_by_us: true, logo: 'https://em-content.zobj.net/source/apple/76/dark-sunglasses_1f576.png', blogLink: 'https://prove.email/blog/twitter', githubLink: 'https://github.com/zkemail/proof-of-twitter', twitterLink: 'https://x.com/zkemail' },
  { name: 'ZK P2P', tagline: 'peer to peer transactions using everyday payment networks', url: 'https://zkp2p.xyz/', description: 'Transactations entirely P2P leveraging everyday payment networks like Venmo, HDFC, Garanti, Revolut', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: true, made_by_us: false, logo: 'https://zkp2p.xyz/logo512.png', blogLink: 'https://docs.zkp2p.xyz', githubLink: 'https://github.com/zkp2p/zk-p2p', twitterLink: 'https://x.com/zkp2p' },
  { name: 'ZK Proof of Github', tagline: 'prove you own a github account', url: 'https://sdk.prove.email/try/rdave8/proof-of-github-user', description: 'Prove you committed to a Github repo', zk_email_lib: true, zk_lib: true, on_chain: false, off_chain: true, made_by_us: false, logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', githubLink: 'https://github.com/JernKunpittaya/zk-github', twitterLink: 'https://x.com/zkemail' },
  { name: 'Nozee Proof of Organization', tagline: 'prove you own an @domain account, and anonymously post from it', url: 'https://www.nozee.xyz/', description: 'Prove you own an email address from a domain', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: true, made_by_us: false, logo: 'https://emojiisland.com/cdn/shop/products/36_grande.png?v=1571606117', blogLink: 'https://prove.email/blog/jwt', githubLink: 'https://github.com/emmaguo13/nozee', twitterLink: 'https://x.com/zkemail' },
  { name: 'Email Wallet', tagline: 'email money to any wallet or email address, via emails', url: 'https://emailwallet.org/', description: 'Send transactions via email, including account recovery', zk_email_lib: true, zk_lib: true, on_chain: true, off_chain: true, made_by_us: true, logo: 'https://emailwallet.org/logo.svg', blogLink: 'https://prove.email/blog/emailwallet', githubLink: 'https://github.com/zkemail/email-wallet', twitterLink: 'https://x.com/zkemail' },
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
    <section style={{ background: theme.palette.background.default, height: '100%' }}>
      <div className='bg-[#161616]'>
        <div className="pt-40 text-center relative"
          style={{
            backgroundImage: `url(${backgrounds[backgroundIndex].src})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain', // Ensure the image shrinks to fit within the container
            backgroundRepeat: 'no-repeat',
            display: 'flex', // Use flexbox to center content
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Typography sx={{ color: 'white', fontSize: { xs: '10px', sm:'15px', md: '16px' } }}>ZKEmail supports</Typography> */}
          <motion.div
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
          >
            <Typography variant='h1'
              sx={{ fontFamily: berkeleyOldStyle.style.fontFamily, paddingBottom: '20px', color: 'white', fontSize: { xs: '30px', sm: '40px', md: '50px', lg: '60px' } }}
            >
              Projects using our ZK Libraries
            </Typography>
          </motion.div>
          <Typography
            sx={{
              color: 'white',
              width: { xs: '60%', md: '40%' },
              marginX: 'auto',
              fontSize: { xs: '10px', sm: '12px', md: '14px' }
            }}
          >
            While building the ZK Email ecosystem we created libraries for both building with ZK Email and general ZK libraries.
            This repository contains both our own projects and community projects using our libraries.
          </Typography>
          <div className="relative mt-[70px] mx-auto w-2/3 max-w-2xl top-[20px]">
            <CustomInputBase
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search projects..."
              sx={{ width: '50%' }}
            ></CustomInputBase>
          </div>
        </div>

      </div>

      <Box sx={{ display: { md: 'flex', xs: 'none' } }} className="flex items-center justify-center space-x-0.5 sm:space-x-2 pt-10">
        <Hidden smDown>
          <SortIcon className='inline-block align-middle' />
        </Hidden>
        {['ZK Email Library', 'ZK Library', 'On Chain', 'Off Chain', 'Made by Us'].map((label) => (
          <CustomButton
            key={label}
            style={{
              color: theme.palette.mode === "light" ? "black" : "white",
              borderColor: theme.palette.mode === "light" ? "black" : "white",
            }}
            buttonLabel={label}
            filledIn={selectedButtons.includes(label) ? true : false}
            color="primary"
            onClick={() => toggleSelection(label)}
            sx={{
              padding: { xs: '3px 3px', sm: '4px 10px', md: '5px 10px' },
              fontSize: { xs: '6px', sm: '12px', md: '14px' },
            }}
          >
            {label}
          </CustomButton>
        ))}
      </Box>





      {/* SELECTED PROJECT SECTION */}
      <Box sx={{ display: 'flex', pt: '40px', textAlign: 'left' }}>
        <div className='w-[50%]'>
          <Tabs
            orientation="vertical"
            variant='fullWidth'
            value={selectedProjectIndex}
            onChange={handleTabChange}
            sx={{ borderRight: 1, borderColor: 'divider', width: '100%' }}
          >
            {filteredProjects.map((project, index) => (
              <Tab
                key={project.name}
                fullWidth={true}
                sx={{
                  alignItems: 'start',
                  borderBottom: 1,
                  borderBottomColor: 'black',
                  backgroundColor: selectedProjectIndex === index ? 'black' : 'inherit',
                  color: selectedProjectIndex === index ? 'white' : 'inherit',
                  minHeight: '90px',  // Increased height
                  '& .MuiTab-wrapper': {
                    textTransform: 'none',  // Prevent text from being all uppercase
                    color: selectedProjectIndex === index ? 'white' : 'inherit'
                  }
                }}
                label={(
                  <Box sx={{ borderBottom: 'black', paddingLeft: '2%', textAlign: 'left' }}>
                    <Typography variant='h5' sx={{ fontSize: { xs: '14px', sm: '20px', md: '25px' }, fontWeight: 'bold', marginBottom: '2px', textAlign: 'left', textTransform: 'none', color: selectedProjectIndex === index ? 'white' : 'inherit' }}>
                      {project.name}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '8px', sm: '15px', md: '15px' }, textTransform: 'none', color: selectedProjectIndex === index ? 'white' : 'inherit' }}>
                      {project.tagline}
                    </Typography>
                  </Box>
                )}
              />
            ))}
          </Tabs>
        </div>
        <Box sx={{ p: 3, width: '50%' }}>
          {filteredProjects[selectedProjectIndex] && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] mr-[20px] flex items-center justify-center">
                  <img
                    src={filteredProjects[selectedProjectIndex].logo}
                    alt={`${filteredProjects[selectedProjectIndex].name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: { xs: '12px', sm: '15px', md: '25px' } }}>
                    {filteredProjects[selectedProjectIndex].name}
                  </Typography>
                  <Typography sx={{ color: '#7A7A7A', fontSize: { xs: '11px', sm: '13px', md: '15px' } }}>
                    {filteredProjects[selectedProjectIndex].tagline}
                  </Typography>
                </div>
              </div>
              <Typography sx={{ paddingY: '20px', width: { xs: '100%', sm: '90%', md: '83%' }, fontSize: { xs: '11px', sm: '13px', md: '15px' } }}>
                {filteredProjects[selectedProjectIndex].description}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  justifyContent: 'flex-start',
                  maxWidth: '500px',
                }}
              >
                {filteredProjects[selectedProjectIndex].zk_email_lib && (
                  <CustomButton
                    variant="outlined"
                    tag
                    color="primary"
                    buttonLabel='ZK Email Library' style={{
                      color: theme.palette.mode === "light" ? "black" : "white",
                      borderColor: theme.palette.mode === "light" ? "black" : "white",
                    }}
                    sx={{
                      padding: { xs: '2px 4px', sm: '4px 8px', md: '6px 10px' },
                      fontSize: { xs: '8px', sm: '10px', md: '12px' },
                    }}
                  >
                    ZK Email Library
                  </CustomButton>
                )}
                {filteredProjects[selectedProjectIndex].zk_lib && (
                  <CustomButton
                    variant="outlined"
                    tag
                    color="primary"
                    buttonLabel='ZK Library' style={{
                      color: theme.palette.mode === "light" ? "black" : "white",
                      borderColor: theme.palette.mode === "light" ? "black" : "white",
                    }}
                    sx={{
                      padding: { xs: '2px 4px', sm: '4px 8px', md: '6px 10px' },
                      fontSize: { xs: '8px', sm: '10px', md: '12px' },
                    }}
                  >
                    ZK Library
                  </CustomButton>
                )}
                {filteredProjects[selectedProjectIndex].off_chain && (
                  <CustomButton
                    variant="outlined"
                    tag
                    color="primary" style={{
                      color: theme.palette.mode === "light" ? "black" : "white",
                      borderColor: theme.palette.mode === "light" ? "black" : "white",
                    }}
                    buttonLabel='Off Chain'
                    sx={{
                      padding: { xs: '2px 4px', sm: '4px 8px', md: '6px 10px' },
                      fontSize: { xs: '8px', sm: '10px', md: '12px' },
                    }}
                  >
                    Off Chain
                  </CustomButton>
                )}
                {filteredProjects[selectedProjectIndex].on_chain && (
                  <CustomButton
                    variant="outlined"
                    tag
                    color="primary"
                    buttonLabel='On Chain' style={{
                      color: theme.palette.mode === "light" ? "black" : "white",
                      borderColor: theme.palette.mode === "light" ? "black" : "white",
                    }}
                    sx={{
                      padding: { xs: '2px 4px', sm: '4px 8px', md: '6px 10px' },
                      fontSize: { xs: '8px', sm: '10px', md: '12px' },
                    }}
                  >
                    On Chain
                  </CustomButton>
                )}
                {filteredProjects[selectedProjectIndex].made_by_us && (
                  <CustomButton
                    variant="outlined"
                    tag
                    color="primary"
                    buttonLabel='Made By Us' style={{
                      color: theme.palette.mode === "light" ? "black" : "white",
                      borderColor: theme.palette.mode === "light" ? "black" : "white",
                    }}
                    sx={{
                      padding: { xs: '2px 4px', sm: '4px 8px', md: '6px 10px' },
                      fontSize: { xs: '8px', sm: '10px', md: '12px' },
                    }}
                  >
                    Made By Us
                  </CustomButton>
                )}
              </Box>

              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} className="mt-6" sx={{ alignItems: { xs: 'flex-start', sm: 'center' } }}>
                <Link target='_blank' href={filteredProjects[selectedProjectIndex].url}>
                  <CustomButton
                    sx={{ paddingX: { xs: '10px', sm: '15px', md: '25px' }, paddingY: '7px', bgcolor: 'black' }}
                    filledIn='true'
                    buttonLabel='Try it out'
                    endIcon={<ArrowForwardIcon sx={{ fontSize: { xs: '16px', sm: '20px', md: '24px' } }} />}
                  >
                    Try it out
                  </CustomButton>
                </Link>
                <Stack direction="row" spacing={2}>
                  <IconLink target={false} href={filteredProjects[selectedProjectIndex].githubLink ? filteredProjects[selectedProjectIndex].githubLink : 'https://github.com/zkemail'} style={{ color: theme.palette.mode === 'light' ? 'black' : 'white' }} dark={theme.palette.mode != 'light'} IconComponent={CustomGitHubIcon} size={{ xs: 'small', sm: 'medium', md: 'large' }} />
                  <IconLink target={false} href={filteredProjects[selectedProjectIndex].blogLink ? filteredProjects[selectedProjectIndex].blogLink : 'https://prove.email/blog'} style={{ color: theme.palette.mode === 'light' ? 'black' : 'white' }} dark={theme.palette.mode != 'light'} IconComponent={CustomBlogIcon} size={{ xs: 'small', sm: 'medium', md: 'large' }} />
                  <IconLink target={false} href={filteredProjects[selectedProjectIndex].twitterLink ? filteredProjects[selectedProjectIndex].twitterLink : 'https://x.com/zkemail'} style={{ color: theme.palette.mode === 'light' ? 'black' : 'white' }} dark={theme.palette.mode != 'light'} IconComponent={CustomXIcon} size={{ xs: 'small', sm: 'medium', md: 'large' }} />
                </Stack>
              </Stack>
            </>
          )}
        </Box>
      </Box>
      <FlipText texts={texts} />
      <motion.div
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        <ActionCard topText='For Developers' light={true} title='Build Your Own' text='No trusted hardware. No trusted attestation servers. Only trust zero knowledge proofs, smart contracts, email, and DNS infrastructure. All open source MIT libraries.' buttonText='Docs' buttonLink='https://zkemail.gitbook.io/zk-email' />
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        <ActionCard topText='For Developers' title='Put up a new proof in 5 minutes' text='Try our new ZK Email SDK and proof registry' buttonText='SDK Registry' buttonLink='https://sdk.prove.email/' />
      </motion.div>
    </section>
  );
};

export default ProjectsPage;
