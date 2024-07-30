import React, { useState, useEffect } from "react";
import { CardContent, Typography, Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const SpanWithBg = styled(motion.span)({
  padding: "0 4px",
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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 700);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleRemixClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % emails.length);
  };

  const currentEmail = emails[currentIndex];

  const renderText = (text: string) => {
    const parts = text
      .split(/(<span>.*?<\/span>|<br \/>|<br>)/g)
      .filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith("<span>") && part.endsWith("</span>")) {
        const content = part.slice(6, -7);
        return (
          <SpanWithBg
            key={index}
            initial={{
              backgroundColor: "transparent",
              color: theme.palette.text.primary,
            }}
            animate={
              animate
                ? {
                    backgroundColor:
                      theme.palette.mode === "light" ? "black" : "white",
                    color: theme.palette.text.primary,
                  }
                : {}
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {content}
          </SpanWithBg>
        );
      } else if (part === "<br />" || part === "<br>") {
        return <br key={index} />;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  const StyledCard = styled(Box)({
    position: "relative",
    display: "inline-block",
    maxWidth: "500px",
    cursor: "pointer",
    marginRight: "10px",
    "&:hover .circle": {
      backgroundColor: theme.palette.secondary.main,
    },
    "&:hover .circle.selected": {
      backgroundColor: "#000",
    },
    "&:hover .bg-box": {
      backgroundColor: theme.palette.secondary.main,
    },
  });

  return (
    <StyledCard onClick={handleRemixClick}>
      <Box
        className="bg-box"
        sx={{
          position: "absolute",
          top: 8,
          left: 10,
          width: "100%",
          height: "100%",
          backgroundColor: "#595959",
          borderRadius: "7.85px",
          zIndex: -1,
          transition: "background-color 0.3s",
          overflow: "visible",
        }}
      />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          borderColor: "#DCDBDB",
          borderWidth: 1,
          marginBottom: "5px",
          borderRadius: "7.85px",
          boxShadow: 3,
          padding: { xs: "12px", sm: "20px" },
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <CardContent sx={{ padding: "33px" }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "medium",
              fontSize: { xs: "8px", sm: "10px", md: "15px" },
            }}
          >
            To: {renderText(currentEmail.to)}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "medium",
              fontSize: { xs: "8px", sm: "10px", md: "15px" },
            }}
          >
            From: {renderText(currentEmail.from)}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "medium",
              fontSize: { xs: "8px", sm: "10px", md: "15px" },
            }}
          >
            Subject: {renderText(currentEmail.subject)}
          </Typography>
          <Box mt={2}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "light",
                width: "85%",
                fontSize: { xs: "8px", sm: "10px", md: "15px" },
              }}
            >
              {renderText(currentEmail.mainText)}
            </Typography>
          </Box>
          <Box mt={2} display="flex" justifyContent="center" color="black">
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              {emails.map((_, i) => (
                <Box
                  key={i}
                  className={`circle ${i === currentIndex ? "selected" : ""}`}
                  sx={{
                    width: { xs: 4, md: 10 },
                    height: { xs: 4, md: 10 },
                    borderRadius: "50%",
                    backgroundColor: i === currentIndex ? "#000" : "#c4c4c4",
                    mx: 0.5,
                    transition: "background-color 0.3s",
                  }}
                />
              ))}
            </Box>
          </Box>
        </CardContent>
      </Box>
    </StyledCard>
  );
};

export default AboutModal;
