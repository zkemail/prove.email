'use client'
import React, { useState, FC } from 'react';
import { Button, Collapse, Box } from '@mui/material';

interface Card {
  label: string;
  url: string;
}

interface PopOutProps {
  cards: Card[];
  toggleName: string;
}

const PopOut: FC<PopOutProps> = ({ cards, toggleName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Box className="container mx-auto my-4">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {toggleName}
      </Button>
      <Collapse in={isOpen}>
        <Box
          className="mt-2 p-4 rounded-md"
          sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}
        >
          {cards.map((card, index) => (
            <Button
              key={index}
              variant="contained"
              color="secondary"
              className="my-2 p-2 w-1/2 justify-center justify-self-center mx-auto"
              onClick={() => handleCardClick(card.url)}
            >
              {card.label}
            </Button>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default PopOut;