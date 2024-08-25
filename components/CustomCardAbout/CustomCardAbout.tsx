import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import { useTheme } from "@mui/material/styles";
import { CustomCardProps } from "../../types";

const CustomCard: React.FC<CustomCardProps> = ({ title, description, url }) => {
  const theme = useTheme();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", cursor: "pointer" }}
    >
      <Box
        sx={{
          "&:hover .arrow-icon": {
            color: theme.palette.secondary.main,
            transform: "translate(2px, -2px)",
          },
          "&:hover .card": {
            "&::before": {
              background: `linear-gradient(45deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            },
          },
        }}
      >
        <Card
          className="card"
          sx={{
            marginX: "auto",
            backgroundColor: "black",
            color: "white",
            borderRadius: "8px",
            position: "relative",
            overflow: "visible",
            height: { xs: "8.75rem", sm: "9.125rem" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "2px solid transparent",
            transition:
              "border-color 0.3s ease, transform 0.3s ease, color 0.3s ease",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              borderRadius: "inherit",
              padding: "2px",
              background: "linear-gradient(25deg, white 0%, #121312 100%)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              transition: "background 0.3s ease",
            },
          }}
        >
          <IconButton
            aria-label="open"
            sx={{ position: "absolute", top: 16, right: 16, color: "white" }}
            className="arrow-icon"
          >
            <ArrowOutward />
          </IconButton>
          <CardContent
            sx={{
              padding: "1rem",
              flex: "1 1 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="h4"
              component="div"
              className="title"
              sx={{
                fontWeight: "bold",
                // fontSize: { xs: '10px', sm: '15px', md: '20px' },
                marginTop: 1,
                position: "relative",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </a>
  );
};

export default CustomCard;
