import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const SpanWithBg = styled('span')({
  backgroundColor: 'black',
  color: 'white',
  padding: '0 4px',
});

type AboutModalProps = {
  to: string;
  from: string;
  mainText: string;
};

const AboutModal: React.FC<AboutModalProps> = ({ to, from, mainText }) => {
  // Function to render text with spans having black background
  const renderText = (text: string) => {
    const parts = text.split(/(<span>.*?<\/span>)/g).filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith('<span>') && part.endsWith('</span>')) {
        const content = part.slice(6, -7);
        return <SpanWithBg key={index}>{content}</SpanWithBg>;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <Card sx={{ maxWidth: 400, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          To: {to}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          From: {from}
        </Typography>
        <Box mt={2}>
          <Typography variant="body2">{renderText(mainText)}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AboutModal;
