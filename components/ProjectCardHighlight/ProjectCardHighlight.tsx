"use client";
import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import { useTheme } from "@mui/material/styles";

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectTag: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  projectDescription,
  projectTag,
  url,
}) => {
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
            borderColor: theme.palette.secondary.main,
          },
          "&:hover .title": {
            "&::after": {
              width: "100%",
            },
          },
        }}
      >
        <Card
          className="card"
          sx={{
            maxWidth: "100%",
            backgroundColor: "white",
            color: "black",
            borderRadius: "7.77px",
            position: "relative",
            overflow: "visible",
            height: { xs: "auto", sm: "18.75rem" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Adjust to space-between for top and bottom alignment
            border: "1px solid grey",
            transition:
              "border-color 0.3s ease, transform 0.3s ease, color 0.3s ease",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ opacity: 0.6, textTransform: "uppercase" }}
            >
              {projectTag}
            </Typography>
            <IconButton
              aria-label="open"
              sx={{ color: "grey" }}
              className="arrow-icon"
            >
              <ArrowOutward />
            </IconButton>
          </Box>
          <CardContent
            sx={{
              padding: "16px",
              flex: "1 1 auto",
              minHeight: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="h3"
              component="div"
              className="title"
              sx={{
                fontWeight: "bold",

                marginTop: 1,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: "-4px",
                  width: "0",
                  height: "2px",
                  // backgroundColor: theme.palette.secondary.main,
                  transition: "width 0.3s ease",
                },
              }}
            >
              {projectTitle}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: 1, paddingBottom: "10px" }}
            >
              {projectDescription}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </a>
  );
};

export default ProjectCard;
