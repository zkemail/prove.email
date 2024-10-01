"use client";

import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import IconLink from "../IconLink/IconLink";

import footerBackground1 from "../../public/footerBackground1.svg";
import footerBackground2 from "../../public/footerBackground2.svg";
import footerBackground3 from "../../public/footerBackground3.svg";
import footerBackground4 from "../../public/footerBackground4.svg";
import footerBackground5 from "../../public/footerBackground5.svg";
import footerBackground6 from "../../public/footerBackground6.svg";
import footerBackground7 from "../../public/footerBackground7.svg";

import zkEmailFooter from "../../public/zkEmailFooter.svg";
import Link from "next/link";
import DiscordIcon from "../DiscordIcon/DiscordIcon"; // Import the DiscordIcon component
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const berkeleyOldStyle = localFont({
  src: "../../font/BerkeleyOldStyle.ttf",
  variable: "--berkeley",
});

const HoverableLinks = ({
  href,
  target,
  title,
}: {
  href: string;
  target: string;
  title: string;
}) => {
  const theme = useTheme();

  return (
    <Grid item xs="auto">
      <Link href={href} color="inherit" target={target ?? "_blank"}>
        <Typography
          variant="subtitle2"
          sx={{
            position: "relative",
            color: "grey",
            width: "fit-content",
            "&:hover": {
              backgroundColor: "transparent", // No background color on hover
              "&::after": {
                transform: "scaleX(1)",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "2px",
              backgroundColor: theme.palette.secondary.main, // Underline color
              transform: "scaleX(0)",
              transformOrigin: "bottom right",
              transition: "transform 0.3s ease-out",
            },
          }}
        >
          {title}
        </Typography>
      </Link>
    </Grid>
  );
};

const Footer = () => {
  const theme = useTheme();

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Adjust the duration to slow down the animation
        ease: "easeInOut", // Optional, you can change the easing function as needed
      },
    },
  };

  const backgrounds = [
    footerBackground1,
    footerBackground2,
    footerBackground3,
    footerBackground4,
    footerBackground5,
    footerBackground6,
    footerBackground7,
  ];
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${backgrounds[currentBackground].src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image", // smooth transition for background image change
        backgroundColor: theme.palette.background.default, // ensure background color doesn't override background image
      }}
    >
      <Box
        component="footer"
        sx={{
          pt: { xs: 16, sm: 22 },
          textAlign: "center",
          marginTop: "auto",
          backgroundColor: "transparent", // ensure background color doesn't override background image
          fontFamily: "",
        }}
      >
        <Box
          sx={{
            px: {
              xs: 3,
              md: 6,
            },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* FOOTER TAGLINE */}
          <Grid container spacing={4} justifyContent={"space-between"}>
            <Grid item xs={12} sm={4} justifyContent="flex-start">
              <Typography
                color="white"
                variant="h3"
                sx={{
                  fontFamily: berkeleyOldStyle.style.fontFamily,
                  lineHeight: "2rem",
                  textAlign: { sm: "center", md: "left" },
                }}
              >
                ZK Email transfers{" "}
                <span className="italic font-bold">truth</span> with the freedom
                of <span className="italic font-bold">privacy</span>
              </Typography>
            </Grid>

            {/* FOOTER SITE LINKS */}
            <Grid
              item
              xs={12}
              sm={"auto"}
              container
              spacing={4}
              justifyContent="flex-end"
              alignItems={"flex-start"}
            >
              <Grid item xs={6} sm={4} container>
                <Typography
                  variant="h4"
                  color="white"
                  fontWeight="bold"
                  pb={2}
                  textAlign="left"
                >
                  DEVELOPERS
                </Typography>
                <Grid
                  container
                  direction="column"
                  spacing={1}
                  textAlign="left"
                  color="text.secondary"
                >
                  <HoverableLinks
                    title="Docs"
                    target="_blank"
                    href="https://zkemail.gitbook.io/zk-email"
                  />
                  <HoverableLinks
                    title="Projects"
                    target="_blank"
                    href="/projects"
                  />
                </Grid>
              </Grid>

              <Grid item xs={6} sm={4} container>
                <Typography
                  variant="h4"
                  color="white"
                  fontWeight="bold"
                  pb={2}
                  textAlign="left"
                >
                  COMMUNITY
                </Typography>
                <Grid
                  container
                  direction="column"
                  spacing={1}
                  textAlign="left"
                  color="text.secondary"
                >
                  <HoverableLinks title="Blog" target="_blank" href="/blog" />
                  <HoverableLinks
                    title="Learn More"
                    target="_blank"
                    href="/learn"
                  />
                  <HoverableLinks
                    title="Partner"
                    target="_blank"
                    href="https://t.me/zkemail"
                  />
                </Grid>
              </Grid>

              {/* FOOTER SOCIAL ICONS  */}
              <Grid
                item
                xs={12}
                sm={4}
                container
                justifyContent={"center"}
                spacing={2}
              >
                <Grid item>
                  <IconLink
                    target={false}
                    href="https://twitter.com/zkemail?lang=en"
                    IconComponent={XIcon}
                    dark={true}
                    
                  />
                </Grid>
                <Grid item>
                  <IconLink
                    target={false}
                    href="https://t.me/zkemail"
                    IconComponent={TelegramIcon}
                    dark={true}
                  />
                </Grid>
                {/* <Grid item>
                      <IconLink target={false} href="https://discord.com/invite/yourlink" IconComponent={DiscordIcon} />
                    </Grid> */}
                <Grid item>
                  <IconLink
                    target={false}
                    href="https://www.youtube.com/@sigsing"
                    IconComponent={YouTubeIcon}
                    dark={true}
                  />
                </Grid>
                <Grid item>
                  <IconLink
                    target={false}
                    href="https://github.com/zkemail"
                    IconComponent={GitHubIcon}
                    dark={true}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* BOTTOM FOOTER ZK EMAIL BIG TEXT*/}
          <Box sx={{ marginTop: "auto", overflow: "hidden" }}>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src={zkEmailFooter}
                alt="checkbox"
                className="w-full h-full fill-white pt-24"
              />
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
