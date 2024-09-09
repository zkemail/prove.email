"use client";
import React, { useState, FC } from "react";
import {
  Button,
  Collapse,
  Box,
  Typography,
  Card,
  IconButton,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import { useTheme } from "@mui/material/styles";

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
  borderRadius: "4px",
  overflow: "hidden",
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
}));

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: `1px solid ${theme.palette.divider}`,
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover .expand-more-icon": {
    color: theme.palette.secondary.main,
  },
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  textTransform: "none",
  fontSize: "1rem",
  padding: "8px 16px",
  borderTop: `1px solid ${theme.palette.divider}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  "&:hover": {
    backgroundColor: theme.palette.background.default,
  },
}));

const ArrowIcon = styled(ArrowOutward)(({ theme }) => ({
  transition: "transform 0.3s ease, color 0.3s ease",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  borderTop: `1px solid ${theme.palette.divider}`,
  cursor: "pointer",
  "&:last-child": {
    borderBottom: "none",
  },
  "&:hover": {
    backgroundColor: theme.palette.background.default,
  },
  "&:hover .arrow-icon": {
    transform: "translate(5px, -5px)",
    color: theme.palette.secondary.main,
  },
}));

const ExpandMoreStyledIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  transition: "color 0.3s ease",
}));

const PopOut: FC<PopOutProps> = ({
  topText,
  mainText,
  descriptionText,
  cards,
  toggleName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme()

  const handleCardClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      <Box onClick={() => setIsOpen(!isOpen)} sx={{ cursor: "pointer" }}>
        <Header sx={{ bgcolor: theme.palette.background.default }}>
          <Typography variant="h5" sx={{ color:  theme.palette.text.primary, textAlign: "left", marginBottom:'1rem'}}>
            {topText}
          </Typography>
        </Header>
        <Grid spacing={2} container p={2} sx={{background: theme.palette.primary.dark}}>
          <Grid item>
            <Typography
              fontWeight={"bold"}
              variant="h3"
              sx={{
                fontWeight: "medium",
                textAlign: "left",
                color: 'white',
              }}
            >
              {mainText}
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ textAlign: "left", color: 'white' }} variant="body1">
              {descriptionText}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Collapse in={isOpen}>
        <Box>
          {cards.map((card, index) => (
            <StyledCard
              key={index}
              sx={{ borderRadius: "0px" }}
              onClick={() => handleCardClick(card.url)}
            >
              <Typography
                variant="body2"
                sx={{ textAlign: "left", paddingLeft: "0.5rem" }}
              >
                {card.label}
              </Typography>
              <ArrowIcon className="arrow-icon" sx={{ width: "1rem" }} />
            </StyledCard>
          ))}
        </Box>
      </Collapse>
    </Container>
  );
};

export default PopOut;
