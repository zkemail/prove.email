import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const SpanWithBg = styled('span')({
  backgroundColor: 'black',
  color: 'white',
  padding: '0 4px',
});

type Email = {
  to: string;
  from: string;
  subject: string;
  mainText: string;
};

type AboutModalProps = {
  emails: Email[];
};

const AboutModal: React.FC<AboutModalProps> = ({ emails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRemixClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % emails.length);
  };

  const currentEmail = emails[currentIndex];

  // Function to render text with spans having black background and handling <br> tags
  const renderText = (text: string) => {
    const parts = text.split(/(<span>.*?<\/span>|<br \/>|<br>)/g).filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith('<span>') && part.endsWith('</span>')) {
        const content = part.slice(6, -7);
        return <SpanWithBg key={index}>{content}</SpanWithBg>;
      } else if (part === '<br />' || part === '<br>') {
        return <br key={index} />;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <Card sx={{ maxWidth: 400, boxShadow: 3, padding: { xs: '12px', sm: '20px' } }}>
      <CardContent>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          To: {renderText(currentEmail.to)}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          From: {renderText(currentEmail.from)}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Subject: {renderText(currentEmail.subject)}
        </Typography>
        <Box mt={2}>
          <Typography variant="body2">{renderText(currentEmail.mainText)}</Typography>
        </Box>
        <Box mt={2} display="flex" justifyContent="end">
          <Button variant="contained" color="primary" onClick={handleRemixClick}>
            <ShuffleIcon />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AboutModal;
