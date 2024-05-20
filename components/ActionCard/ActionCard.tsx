import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { ActionCardProps } from '../.././types';

// // put the interface for this in types.ts instead of here
// interface ActionCardProps {
//     title: string;
//     text: string;
//     buttonText: string;
//     buttonLink: string;
//   }
  

  const ActionCard: React.FC<ActionCardProps> = ({ title, text, buttonText, buttonLink }) => {
  return (
    <Card sx={{ 
        backgroundColor: '#212121', 
        color: '#fff', 
        borderRadius: 2, 
        p: {xs:2, md:4}, 
        width: '80%', 
        marginX:'auto', 
        marginY: {xs: '30px', md:'40px', lg:'60px'},
    }}>
      <CardContent>
        <Typography gutterBottom variant="h4" 
        sx={{
            fontSize: {
                sm: '30px',
                md:'40px',
                lg:'50px',
                xl:'65px',

            },
            lineHeight: {
                sm: '30px',
                md:'40px',
                lg:'50px',
                xl:'65px',
            }
        }} 
        
        >
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom
            sx={{
                fontSize: {
                    sm: '10px',
                    md: '12px',
                    lg:'22px'},
                lineHeight: {
                    sm: '10px',
                    md: '14px',
                    lg:'30px',
                }
            }}
        >
          {text}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          href={buttonLink}
        >
          {buttonText} →
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActionCard;
