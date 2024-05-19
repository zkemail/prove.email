'use client'; // This is a client component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import FilterButton from '../FilterButton/FilterButton';

const FilterablePostList = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [searchInput, setSearchInput] = useState('');
  const [selectedButton, setSelectedButton] = useState('Newest');

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
      <div className="h-1/2 w-full bg-blue-500 flex flex-col justify-end">
        <div className="pb-[100px] text-left px-20">
          <h1 className="text-6xl text-left py-3 align-middle mt-10">Blog</h1>
          <p className="text-black w-1/2">
            While building the Zk Email ecosystem we created libraries for both building with ZK Email and general ZK libraries. This repository contains both our own projects and community projects using our libraries.
          </p>
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-6 rounded-[20px] w-[90%] px-12">
          <div className="flex justify-between items-center space-x-4">
            <div className="relative w-1/2 bg-[#F4F4F4] rounded-[16px] px-6 py-1">
              <input
                type="text"
                placeholder="Search blogs..."
                className="form-input focus:outline-none px-4 py-2 rounded-[16px] bg-[#F4F4F4] w-full"
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
              <button
                className={`px-6 py-2 rounded-[20px] ${selectedButton === 'Newest' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-2 border-solid border-blue-500'}`}
                onClick={() => setSelectedButton('Newest')}
              >
                Newest
              </button>
              <button
                className={`px-6 py-2 rounded-[20px] ${selectedButton === 'Oldest' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-2 border-solid border-blue-500'}`}
                onClick={() => setSelectedButton('Oldest')}
              >
                Oldest
              </button>
              {/* Add more buttons if needed */}
            </div>
          </div>
        </div>
      </div>
      <div className="p-20 mt-10 bg-white flex-grow">
        <div className="overflow-hidden relative w-full">
          <div className="">
            {filteredPosts.map((post) => (
              <Link href={`/posts/${post.slug}`} key={post.title}>
                <div className="grid grid-cols-4 mb-4">
                  <div className="w-full h-[130px] bg-white border-2 py-6 grid grid-cols-2 p-6 px-12 col-span-3">
                    <p className="text-xs py-2">{new Date(post.date).toISOString().split('T')[0]}</p>
                    <p className="text-right text-xs py-2">{post.category}</p>
                    <h1 className="col-span-2 font-bold">{post.title}</h1>
                    <p className="text-xs col-span-2">{post.description}</p>
                  </div>
                  <img className="h-[130px] w-full" alt="Blog card" src={post.image} />
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
