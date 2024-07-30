'use client'; // This is a client component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CustomButton from '.././CustomButton/CustomButton'
import CustomInputBase from '../CustomInputBase/CustomInputBase'
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Typography } from '@mui/material';
import blogBackground1Light from '../../public/blogBackground1Light.svg'
import blogBackground1Dark from '../../public/blogBackground1Dark.svg'
import blogBackground2Light from '../../public/blogBackground2Light.svg'
import blogBackground2Dark from '../../public/blogBackground2Dark.svg'
import blogBackground3Light from '../../public/blogBackground3Light.svg'
import blogBackground3Dark from '../../public/blogBackground3Dark.svg'
import blogBackground4Light from '../../public/blogBackground4Light.svg'
import blogBackground4Dark from '../../public/blogBackground4Dark.svg'
import blogBackground5Light from '../../public/blogBackground5Light.svg'
import blogBackground5Dark from '../../public/blogBackground5Dark.svg'
import blogBackground6Light from '../../public/blogBackground6Light.svg'
import blogBackground6Dark from '../../public/blogBackground6Dark.svg'
import blogBackground7Light from '../../public/blogBackground7Light.svg'
import blogBackground7Dark from '../../public/blogBackground7Dark.svg'

import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const backgroundsLight = [blogBackground1Light, blogBackground2Light, blogBackground3Light, blogBackground4Light, blogBackground5Light, blogBackground6Light, blogBackground7Light];
const backgroundsDark = [blogBackground1Dark, blogBackground2Dark, blogBackground3Dark, blogBackground4Dark, blogBackground5Dark, blogBackground6Dark, blogBackground7Dark];

const berkeleyOldStyle = localFont({
  src: '../.././font/BerkeleyOldStyle.ttf',
  variable: '--berkeley',
});

// Define Fade-in animation variants
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

const FilterablePostList = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [searchInput, setSearchInput] = useState('');
  const [selectedButton, setSelectedButton] = useState('Newest');
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundsLight.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const theme = useTheme();

  useEffect(() => {
    // Fetch posts from your API if initialPosts are not provided
    if (!initialPosts) {
      fetch('/api/posts') // Adjust this to your actual API endpoint
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }
  }, [initialPosts]);

  const filteredPosts = posts.filter((post) => {
    const title = post.title?.toLowerCase() ?? '';
    const description = post.description?.toLowerCase() ?? '';
    return (
      title.includes(searchInput.toLowerCase()) ||
      description.includes(searchInput.toLowerCase())
    );
  });

  if (selectedButton === 'Newest') {
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (selectedButton === 'Oldest') {
    filteredPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return (
    <Grid container style={{ background: theme.palette.background.default }}>
      <div className="h-[400px] sm:h-[430px] w-full  flex flex-col justify-end"
        style={{
          background: theme.palette.mode === "light" ? '#F5F5F5': '#202020',
          backgroundImage: `url(${theme.palette.mode === 'light' ? backgroundsLight[backgroundIndex].src : backgroundsDark[backgroundIndex].src})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain', // Ensure the image shrinks to fit within the container
          backgroundRepeat: 'no-repeat',
        }}>

        <div className="pb-[100px] text-left px-[8%]">
          <motion.div
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
          >
            <Typography variant='h1' sx={{ fontFamily: berkeleyOldStyle.style.fontFamily, fontSize: { xs: '70px', sm: '90px', md: '120px' }, textAlign: 'left', paddingTop: '20px', marginTop: '80px' }}>Blog</Typography>
          </motion.div>
        </div>

      </div>
      <Box sx={{ padding: { xs: '1rem', md: '8vw' }, paddingTop: {xs: 0, md: "0"} }} className=" flex-grow">
        <Box sx={{ paddingY: { xs: '4rem' } }} className="w-[100%]">
          <div className="flex justify-between items-center space-x-4">
            <div className='w-[50%]'>
              <CustomInputBase
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search blogs..."
              />
            </div>
            <div className="flex space-x-2">
              <CustomButton
                size="small"
                buttonLabel='Newest'
                filledIn={selectedButton.includes('Newest')}
                sx={{
                  padding: { xs: '6px 8px', sm: '8px 16px', md: '10px 20px' },
                  fontSize: { xs: '10px', sm: '12px', md: '14px' },
                  background: theme.palette.background.default,
                  color: theme.palette.text.primary
                }}
                // className={`rounded-[5px] ${selectedButton === 'Newest' ? 'bg-black text-white' : 'bg-white text-black border-2 border-solid border-black-500'}`}
                onClick={() => setSelectedButton('Newest')}
              >
                Newest
              </CustomButton>
              <CustomButton
                size="small"
                buttonLabel='Oldest'
                filledIn={selectedButton.includes('Oldest')}
                sx={{
                  padding: { xs: '6px 8px', sm: '8px 16px', md: '10px 20px' },
                  fontSize: { xs: '10px', sm: '12px', md: '14px' },
                  background: theme.palette.background.default,
                  color: theme.palette.text.primary
                }}
                // className={`rounded-[5px] ${selectedButton === 'Oldest' ? 'bg-black text-white' : 'bg-white text-black border-2 border-solid border-black-500'}`}
                onClick={() => setSelectedButton('Oldest')}
              >
                Oldest
              </CustomButton>
            </div>
          </div>
        </Box>
        <div className="overflow-hidden relative w-full">
          <div className="">
            {filteredPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.title}>
                <div className="grid grid-cols-4 mb-4 group">
                  <Grid container className="w-full border-2 grid grid-cols-2 p-6 col-span-4  group-hover:bg-black gap-4">
                    <Grid item xs={12} container justifyContent={'space-between'}>
                      <Grid item>
                        <Typography className="group-hover:text-white font-normal" variant='h6'>{new Date(post.date).toISOString().split('T')[0]}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography className="group-hover:text-white text-right font-normal" variant='h6'>{post.category}</Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className="group-hover:text-white" variant='h3' fontWeight={'bold'}>{post.title}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className="group-hover:text-white" variant='body2'>{post.description}</Typography>
                    </Grid>
                  </Grid>
                  <div className="h-[150px] w-full hidden"
                    style={{
                      backgroundImage: `url(${theme.palette.mode === 'light' ? backgroundsLight[backgroundIndex].src : backgroundsDark[backgroundIndex].src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }}>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Box>
    </Grid>
  );
};

export default FilterablePostList;
