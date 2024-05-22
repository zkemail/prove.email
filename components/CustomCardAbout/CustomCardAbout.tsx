import React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import { useTheme } from '@mui/material/styles';
import { CustomCardProps } from '../../types';

const CustomCard: React.FC<CustomCardProps> = ({ title, description, url }) => {
  const theme = useTheme();

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', cursor: 'pointer' }}>
      <Box
        sx={{
          '&:hover .arrow-icon': {
            color: theme.palette.secondary.main,
            transform: 'translate(2px, -2px)',
          },
          '&:hover .card': {
            '&::before': {
              background: `linear-gradient(45deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            },
          },
        }}
      >
        <Card
          className="card"
          sx={{
            maxWidth: '90%',
            marginX: 'auto',
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'visible',
            height: '270px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid transparent',
            transition: 'border-color 0.3s ease, transform 0.3s ease, color 0.3s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              borderRadius: 'inherit',
              padding: '2px',
              background: 'linear-gradient(45deg, white 0%, grey 100%)',
              WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              transition: 'background 0.3s ease',
            },
          }}
        >
          <IconButton aria-label="open" sx={{ position: 'absolute', top: 16, right: 16, color: 'white' }} className="arrow-icon">
            <ArrowOutward />
          </IconButton>
          <CardContent sx={{ padding: '16px', flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <Typography
              variant="h6"
              component="div"
              className="title"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.5rem' },
                marginTop: 1,
                position: 'relative',
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.4rem', sm: '0.5rem', md: '0.8rem' } }}>
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </a>
  );
};

export default CustomCard;
