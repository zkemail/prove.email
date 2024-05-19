'use client'
// components/VideoCarousel.js
import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const videos = [
  { title: "ZK Email: Novel ZK Applications Unlocked by Portable Provenance", where: "ZK Summit 11", url: "https://www.youtube.com/embed/rZTNzvLXB14?si=2NOAwXQYalqGYTGE", date: "2024-04-19" },
  { title: "ZK Email: Email Wallet and Identity Attestations", where: "Proof Singularity Denver", url: "https://www.youtube.com/embed/GEWuGtsjATw?si=ApokIEW2h8KYYAYO", date: "2024-03-15" },
  { title: "ZK Email: Email Wallets and Provenant Identity", where: "PROGCRYPTO", url: "https://www.youtube.com/embed/qUYBja0glio?si=MuVP2sgVo9y7egLd", date: "2024-01-26" },
  { title: "Universal Recovery: A Social Recovery Solution Utilizes ZK-Email", where: "Clave", url: "https://www.youtube.com/embed/iMAaHEYyuxA?si=aUdeSJ60Dv57TjQI", date: "2023-01-26" },
  { title: "ZK for web2 interop with zkLogin & ZK Email", where: "ZK Podcast", url: "https://www.youtube.com/embed/vFYUWRks7Kg?si=CDU7Ks4Bq5WgngAN", date: "2023-12-06" },
  { title: "Zuconnect 2023 ZK Day: ZK Email", where: "Zuconnect", url: "https://www.youtube.com/embed/3jCKdxQ9Pfw?si=Q4jVStBCmntXnOfO", date: "2023-12-03" },  
  { title: "zkemail: Decentralized ID Verification on Chain Without Servers", where: "Devcon", url: "https://www.youtube.com/embed/sPCHiUT3TmA?si=TiNLxkoj9n-0NbDl", date: "2022-11-16" },
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < videos.length - 3) setCurrentIndex(currentIndex + 3);
  };

  const previous = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 3);
  };

  return (
    <Box className="overflow-hidden relative w-full" sx={{ height: '100%' }}>
      <Box
        className="flex transition-transform duration-500 ease-in-out"
        sx={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
      >
        {videos.map((video, index) => (
          <Box key={video.url} className="min-w-[350px] max-w-[350px] box-border p-2">
            <Card className="bg-black shadow-md rounded-lg overflow-hidden">
              <CardMedia
                component="iframe"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allowFullScreen
                sx={{ width: '100%', aspectRatio: '16/9' }}
              />
              <CardContent className="p-4 grid grid-cols-2">
                <Typography variant="h5" className="text-black col-span-2 h-[70px]">
                  {video.title}
                </Typography>
                <Typography  variant="videoCardSubText" className="text-gray-600 text-grey-500 text-xs">
                  {video.where}
                </Typography>
                <Typography variant="videoCardSubText" className="text-gray-600 text-grey-500 text-xs text-right">
                  {video.date}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Box className="flex justify-center space-x-4 mt-4">
        <Button
          variant="outlined"
          color="primary"
          onClick={previous}
          disabled={currentIndex === 0}
          background 
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={next}
          disabled={currentIndex >= videos.length - 3}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default VideoCarousel;
