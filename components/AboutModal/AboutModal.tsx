import React, { useState } from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
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
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRemixClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % emails.length);
  };

  const currentEmail = emails[currentIndex];

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

  const StyledCard = styled(Box)({
    position: 'relative',
    display: 'inline-block',
    maxWidth: '500px',
    cursor: 'pointer',
    '&:hover .icon': {
      color: theme.palette.secondary.main,
      transform: 'translate(3px, -3px)',
    },
    '&:hover .bg-box': {
      backgroundColor: theme.palette.secondary.main,
    },
  });

  const StyledIcon = styled(ShuffleIcon)({
    transition: 'color 0.3s, transform 0.3s',
  });

  return (
    <StyledCard onClick={handleRemixClick}>
      <Box
        className="bg-box"
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          borderRadius: '7.85px',
          zIndex: -1,
          transition: 'background-color 0.3s',
        }}
      />
      <Box
        sx={{
          backgroundColor: 'white',
          borderColor: '#DCDBDB',
          borderWidth: 1,
          borderRadius: '7.85px',
          boxShadow: 3,
          padding: { xs: '12px', sm: '20px' },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <CardContent sx={{ padding: '33px' }}>
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
            <Typography variant="body2" sx={{ width: '85%' }}>
              {renderText(currentEmail.mainText)}
            </Typography>
          </Box>
          <Box mt={2} display="flex" justifyContent="end" color="black">
            <StyledIcon className="icon" />
          </Box>
        </CardContent>
      </Box>
    </StyledCard>
  );
};

export default AboutModal;
