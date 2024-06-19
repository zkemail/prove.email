'use client'; // This is a client component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CustomButton from '.././CustomButton/CustomButton'
import CustomInputBase from '../CustomInputBase/CustomInputBase'
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import blogBackground1 from '../../public/blogBackground1.svg'
import blogBackground2 from '../../public/blogBackground2.svg'
import blogBackground3 from '../../public/blogBackground3.svg'
import { motion } from 'framer-motion';

const backgrounds = [blogBackground1, blogBackground2, blogBackground3];

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
    <div className="min-h-screen flex flex-col bg-white">
      <div className="h-[450px] w-full bg-[#F5F5F5] flex flex-col justify-end"
        style={{
          backgroundImage: `url(${backgrounds[backgroundIndex].src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="pb-[100px] text-left px-[8%]">
          <motion.div
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
          >
            <Typography variant='h1' sx={{ fontSize: { xs: '70px', sm: '90px', md: '120px' }, textAlign: 'left', paddingTop: '20px', marginTop: '80px' }}>Blog</Typography>
          </motion.div>
        </div>
        <div className="absolute left-1/2 top-[560px] transform -translate-x-1/2 -translate-y-1/2 px-[8%] rounded-[20px] w-[100%]">
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
        </div>
      </div>
      <div className="p-[8%] mt-10 bg-white flex-grow">
        <div className="overflow-hidden relative w-full">
          <div className="">
            {filteredPosts.map((post) => (
              <Link href={`/posts/${post.slug}`} key={post.title}>
                <div className="grid grid-cols-4 mb-4 group">
                  <div className="w-full h-[150px] bg-white border-2 grid grid-cols-2 p-6 col-span-4 sm:col-span-3 group-hover:bg-black">
                    <p className="text-xs py-2 group-hover:text-white">{new Date(post.date).toISOString().split('T')[0]}</p>
                    <p className="text-right text-xs py-2 group-hover:text-white">{post.category}</p>
                    <h1 className="text-[12px] sm:text-[15px] md:text-[18px] col-span-2 font-bold group-hover:underline group-hover:text-white">{post.title}</h1>
                    <p className="text-[10px] sm:text-xs col-span-2 group-hover:text-white">{post.description}</p>
                  </div>
                  <div className="h-[150px] w-full hidden sm:block"
                    style={{
                      backgroundImage: `url(${backgrounds[backgroundIndex].src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }}>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterablePostList;
