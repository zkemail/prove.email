import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { ActionCardProps } from '../../types';
import CustomButton from '../CustomButton/CustomButton';

const ActionCard: React.FC<ActionCardProps> = ({ title, text, buttonText, buttonLink, topText, light = false }) => {
  const cardStyles = light
    ? {
        background: 'linear-gradient(0deg, #FFFFFF 0%, #EAEAEA 100%)',
        color: '#000000',
      }
    : {
        background: 'linear-gradient(0deg, #010101 0%, #262626 100%)',
        color: '#FFFFFF',
      };

  return (
    <Card
      sx={{
        ...cardStyles,
        borderRadius: 0,
        padding: { xs: '20px', sm:'30px', md:'40px' },
        width: '80%',
        marginX: 'auto',
        marginY: { xs: '30px', md: '40px', lg: '60px' },
      }}
    >
      <CardContent>
        {topText && (
          <Typography variant="h4" gutterBottom 
          sx={{
            fontSize:{xs:'15px', md:'20px'}, 
            paddingBottom:'30px', 
            color:'#797979',
          }}>
            {topText}
          </Typography>
        )}
        <Typography
          gutterBottom
          variant="h4"
          sx={{
            fontSize: {
              sm: '30px',
              md: '40px',
              lg: '50px',
              xl: '65px',
            },
            lineHeight: {
              sm: '30px',
              md: '40px',
              lg: '50px',
              xl: '65px',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: {
              sm: '10px',
              md: '12px',
              lg: '22px',
            },
            lineHeight: {
              sm: '10px',
              md: '14px',
              lg: '30px',
            },
            paddingBottom:'10px',
            paddingRight: '10px',
            width:'80%'
          }}
        >
          {text}
        </Typography>
        <CustomButton
          variant="contained"
          light={!light} // Set the opposite of light for the button
          sx={{ marginTop: 3, paddingX:'30px'}}
          href={buttonLink}
          buttonLabel={buttonText}
        >
          {buttonText} →
        </CustomButton>
      </CardContent>
    </Card>
  );
};

export default ActionCard;
