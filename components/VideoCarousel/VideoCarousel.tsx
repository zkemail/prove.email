'use client'
import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';

const videos = [
  { title: "ZK Email: Novel ZK Applications Unlocked by Portable Provenance", where: "ZK Summit 11", url: "https://www.youtube.com/embed/rZTNzvLXB14?si=2NOAwXQYalqGYTGE", date: "2024-04-19", thumbnail: "https://img.youtube.com/vi/rZTNzvLXB14/0.jpg" },
  { title: "ZK Email: Email Wallet and Identity Attestations", where: "Proof Singularity Denver", url: "https://www.youtube.com/embed/GEWuGtsjATw?si=ApokIEW2h8KYYAYO", date: "2024-03-15", thumbnail: "https://img.youtube.com/vi/GEWuGtsjATw/0.jpg" },
  { title: "ZK Email: Email Wallets and Provenant Identity", where: "PROGCRYPTO", url: "https://www.youtube.com/embed/qUYBja0glio?si=MuVP2sgVo9y7egLd", date: "2024-01-26", thumbnail: "https://img.youtube.com/vi/qUYBja0glio/0.jpg" },
  { title: "Vitalik @ Ethcon Korea 2023", where: "Ethcon Korea", url: "https://www.youtube.com/embed/gsrtxq0xYxs?si=twKpt5bfFzmZVi21&amp;start=939", date: "2023-11-15", thumbnail: "https://img.youtube.com/vi/gsrtxq0xYxs/0.jpg" },
  { title: "Universal Recovery: A Social Recovery Solution Utilizes ZK-Email", where: "Clave", url: "https://www.youtube.com/embed/iMAaHEYyuxA?si=aUdeSJ60Dv57TjQI", date: "2023-01-26", thumbnail: "https://img.youtube.com/vi/iMAaHEYyuxA/0.jpg" },
  { title: "ZK for web2 interop with zkLogin & ZK Email", where: "ZK Podcast", url: "https://www.youtube.com/embed/vFYUWRks7Kg?si=CDU7Ks4Bq5WgngAN", date: "2023-12-06", thumbnail: "https://img.youtube.com/vi/vFYUWRks7Kg/0.jpg" },
  { title: "Zuconnect 2023 ZK Day: ZK Email", where: "Zuconnect", url: "https://www.youtube.com/embed/3jCKdxQ9Pfw?si=Q4jVStBCmntXnOfO", date: "2023-12-03", thumbnail: "https://img.youtube.com/vi/3jCKdxQ9Pfw/0.jpg" },  
  { title: "zkemail: Decentralized ID Verification on Chain Without Servers", where: "Devcon", url: "https://www.youtube.com/embed/sPCHiUT3TmA?si=TiNLxkoj9n-0NbDl", date: "2022-11-16", thumbnail: "https://img.youtube.com/vi/sPCHiUT3TmA/0.jpg" },
];

const VideoCarousel = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

  const getVisibleCards = () => {
    if (isLargeScreen) return 4;
    if (isMediumScreen) return 3;
    return 3;
  };

  const visibleCards = getVisibleCards();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < videos.length - visibleCards) setCurrentIndex(currentIndex + visibleCards);
  };

  const previous = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - visibleCards);
  };

  return (
    <Box className="relative w-full" sx={{ height: '100%', paddingX: {xs:'10px', md: '30px'} }}>
      <Grid container spacing={2} className="overflowX-hidden">
        {videos.slice(currentIndex, currentIndex + visibleCards).map((video) => (
          <Grid item xs={12 / visibleCards} key={video.url}>
            <Card className="bg-black shadow-md rounded-lg overflow-hidden">
              <CardMedia
                component="img"
                image={video.thumbnail}
                title={video.title}
                sx={{ width: '100%', aspectRatio: '16/9', cursor: 'pointer' }}
                onClick={() => window.open(video.url, '_blank')}
              />
              <CardContent className="p-4 grid grid-cols-2">
                <Typography variant="h5" sx={{ color: 'black', gridColumn: 'span 2', height: '70px', fontSize: {xs:'12px', sm: '14px', md: '15px', lg:'17px'} }}>
                  {video.title}
                </Typography>
                <Typography sx={{ color: 'grey', fontSize: {xs:'8px', sm: '10px', md: '12px'}}}>
                  {video.where}
                </Typography>
                <Typography sx={{ color: 'grey', textAlign: 'right', fontSize: {xs:'8px', sm: '10px', md: '12px'} }}>
                  {video.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box className="flex justify-center space-x-4 mt-4">
        <Button
          variant="outlined"
          color="primary"
          onClick={previous}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={next}
          disabled={currentIndex >= videos.length - visibleCards}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default VideoCarousel;
