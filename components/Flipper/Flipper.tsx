import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { FlipTextProps } from '../.././types';

const FlipText: React.FC<FlipTextProps> = ({ texts }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <Box 
        sx={{ 
            textAlign: 'center', 
            py: 4, 
            mt: 6,
            backgroundColor: '#e0e0e0', 
            display:'flex', 
            flexDirection:'column', 
            justifyContent:'center',
            height: {xs:'200px', sm:'300px', md:'350px' ,lg:'500px'}
        }}
    >
      <Typography variant="subtitle1" sx={{ color: '#6d6d6d' }}>
        ZKEmail Enables
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '30px', md: '50px' },
          fontWeight: 'bold',
          color: '#000',
        }}
      >
        Serverless, Anonymous <br></br>
        {texts[index]}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        
        {texts.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: i === index ? '#000' : '#c4c4c4',
              mx: 0.5,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FlipText;
