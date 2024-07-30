'use client'; // This is a client component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CustomButton from '.././CustomButton/CustomButton'
import CustomInputBase from '../CustomInputBase/CustomInputBase'
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Typography } from '@mui/material';
import blogBackground1 from '../../public/blogBackground1.svg'
import blogBackground2 from '../../public/blogBackground2.svg'
import blogBackground3 from '../../public/blogBackground3.svg'
import blogBackground4 from '../../public/blogBackground4.svg'
import blogBackground5 from '../../public/blogBackground5.svg'
import blogBackground6 from '../../public/blogBackground6.svg'
import blogBackground7 from '../../public/blogBackground7.svg'

import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const backgrounds = [blogBackground1, blogBackground2, blogBackground3, blogBackground4, blogBackground5, blogBackground6, blogBackground7];

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
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
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
      <div className="h-[400px] sm:h-[430px] w-full bg-[#F5F5F5] flex flex-col justify-end"
        style={{
          backgroundImage: `url(${backgrounds[backgroundIndex].src})`,
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
                filledIn={selectedButton.includes('Newest') ? true : false}
                sx={{
                  padding: { xs: '6px 8px', sm: '8px 16px', md: '10px 20px' },
                  fontSize: { xs: '10px', sm: '12px', md: '14px' },
                }}
                className={`rounded-[5px] ${selectedButton === 'Newest' ? 'bg-black text-white' : 'bg-white text-black border-2 border-solid border-black-500'}`}
                onClick={() => setSelectedButton('Newest')}
              >
                Newest
              </CustomButton>
              <CustomButton
                size="small"
                buttonLabel='Oldest'
                filledIn={selectedButton.includes('Oldest') ? true : false}
                sx={{
                  padding: { xs: '6px 8px', sm: '8px 16px', md: '10px 20px' },
                  fontSize: { xs: '10px', sm: '12px', md: '14px' },
                }}
                className={`rounded-[5px] ${selectedButton === 'Oldest' ? 'bg-black text-white' : 'bg-white text-black border-2 border-solid border-black-500'}`}
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
                      backgroundImage: `url(${backgrounds[backgroundIndex].src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
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
