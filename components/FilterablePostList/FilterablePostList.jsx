'use client'; // This is a client component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CustomButton from '.././CustomButton/CustomButton'
import { useTheme } from '@mui/material/styles';
import { InputBase, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import sectionBackgroundBlog1 from '../../public/sectionBackgroundBlog1.svg'
import sectionBackgroundBlog2 from '../../public/sectionBackgroundBlog2.svg'
import sectionBackgroundBlog3 from '../../public/sectionBackgroundBlog3.svg'

const backgrounds = [sectionBackgroundBlog1, sectionBackgroundBlog2, sectionBackgroundBlog3];

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
      <div className="h-[450px] w-full bg-gradient-to-t to-[#F2F2F2] from-[#F5F5F5] flex flex-col justify-end"
        style={{
          backgroundImage: `url(${backgrounds[backgroundIndex].src})`, backgroundPosition: 'center, center', backgroundSize: 'cover, contain', backgroundRepeat: 'no-repeat, no-repeat'
          }}
      >
        
        <div className="pb-[100px] text-left px-[8%]">
          <Typography variant='h1' sx={{fontSize: { xs:'70px', sm:'90px',md:'120px'} ,textAlign:'left', paddingTop:'20px', marginTop:'80px' }}>Blog</Typography>
          {/* <p className="text-black w-1/2">
            While building the Zk Email ecosystem we created libraries for both building with ZK Email and general ZK libraries. This repository contains both our own projects and community projects using our libraries.
          </p> */}
        </div>
        <div className="absolute left-1/2 top-[560px] transform -translate-x-1/2 -translate-y-1/2  p-6 rounded-[20px] w-[90%]">
          <div className="flex justify-between items-center space-x-4">
            <div className="relative  w-1/2 bg-white rounded-[10px] px-3 border-[1px] border-[#797878]">
              <InputBase
                sx={{            

                  fontSize: { xs: '10px', sm: '12px', md: '14px' }
                }}
                type="text"
                placeholder="Search blogs..."
                className="form-input focus:outline-none px-3 py-2 rounded-[16px] bg-white  w-full"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0a9 9 0 110-12.7 9 9 0 010 12.7z"
                />
              </svg>
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
              {/* <CustomButton
                size="small"
                buttonLabel='Recommended'
                filledIn={selectedButton.includes('Recommended') ? true : false}
                sx={{
                  padding: { xs: '6px 8px', sm: '8px 16px', md: '10px 20px' },
                  fontSize: { xs: '10px', sm: '12px', md: '14px' },
                }}
                className={`rounded-[5px] ${selectedButton === 'Recommended' ? 'bg-black text-white' : 'bg-white text-black border-2 border-solid border-black-500'}`}
                onClick={() => setSelectedButton('Recommended')}
              >
                Recommended
              </CustomButton> */}
              {/* Add more buttons if needed */}
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
                  <div className="w-full h-[150px] bg-white border-2 grid grid-cols-2 p-6 col-span-4 sm:col-span-3">
                    <p className="text-xs py-2">{new Date(post.date).toISOString().split('T')[0]}</p>
                    <p className="text-right text-xs py-2">{post.category}</p>
                    <h1 className="text-[12px] sm:text-[15px]  md:text-[18px] col-span-2 font-bold group-hover:underline">{post.title}</h1>
                    <p className="text-[10px] sm:text-xs col-span-2">{post.description}</p>
                  </div>
                  <div className="h-[150px] w-full bg-black hidden sm:block" alt="Blog card"/>
                  {/* <img className="h-[150px] w-full" alt="Blog card" src={post.image} /> */}
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
