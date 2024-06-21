'use client'
import React, { useState, FC } from 'react';
import { Button, Collapse, Box, Typography, Card, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowOutward from '@mui/icons-material/ArrowOutward';

interface Card {
  label: string;
  url: string;
}

interface PopOutProps {
  topText: string;
  mainText: string;
  descriptionText: string;
  cards: Card[];
  toggleName: string;
}

const Container = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '4px',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
}));

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${theme.palette.divider}`,
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  '&:hover .expand-more-icon': {
    color: theme.palette.secondary.main,
  },
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  marginTop: '8px',
  color: theme.palette.text.secondary,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontSize: '1rem',
  padding: '8px 16px',
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.background.default,
  },
}));

const ArrowIcon = styled(ArrowOutward)(({ theme }) => ({
  transition: 'transform 0.3s ease, color 0.3s ease',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor:'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  borderTop: `1px solid ${theme.palette.divider}`,
  cursor: 'pointer',
  '&:last-child': {
    borderBottom: 'none',
  },
  '&:hover': {
    backgroundColor: theme.palette.background.default,
  },
  '&:hover .arrow-icon': {
    transform: 'translate(5px, -5px)',
    color: theme.palette.secondary.main,
  },
}));

const ExpandMoreStyledIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  transition: 'color 0.3s ease',
}));

const PopOut: FC<PopOutProps> = ({ topText, mainText, descriptionText, cards, toggleName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Container>
      <Box onClick={() => setIsOpen(!isOpen)} sx={{cursor:'pointer'}}>
        <Header sx={{ bgcolor: 'black', }}>
          <Typography variant="h6" sx={{ color: 'white', paddingX:'8%', textAlign:'left',fontSize: {xs:'5.5px', sm:'11px', md:'15px'}}}>{topText}</Typography>
          {/* <IconButton sx={{ color: 'white' }} onClick={() => setIsOpen(!isOpen)}>
            <ExpandMoreStyledIcon className="expand-more-icon" />
          </IconButton> */}
        </Header>
        <Box p={2} sx={{height:{xs:'140px', sm:'170px'}, backgroundColor:'white' }}>
          <MainText variant="h4" sx={{ fontWeight:'medium', textAlign: "left", paddingX:'8%', paddingTop:{xs:'5px',md:'15px'}, fontSize: {xs:'18px', sm:'20px', md:'30px', lg:'40px'}}}>{mainText}</MainText>
          <DescriptionText sx={{ textAlign: "left",  paddingX:'8%', fontSize: {xs:'6px', sm:'10px', md:'12px'}}}>{descriptionText}</DescriptionText>
        </Box>
      </Box>

      <Collapse in={isOpen}>
        <Box>
          {cards.map((card, index) => (
            <StyledCard key={index} sx={{ borderRadius: '0px',}} onClick={() => handleCardClick(card.url)}>
              <Typography variant="body1" sx={{ textAlign:'left', paddingLeft:{xs:'10px',sm:'25px'}, fontSize: {xs:'9px', sm:'11px', md:'15px'} }}>{card.label}</Typography>
              <ArrowIcon className="arrow-icon" sx={{width:{xs:'10px', sm:'15px'}}}/>
            </StyledCard>
          ))}
        </Box>
      </Collapse>
    </Container>
  );
};

export default PopOut;
