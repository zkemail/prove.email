"use client";
import CustomButton from "../CustomButton/CustomButton";
import Image from "next/image";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

import rectangleEnvelope from "../../public/rectangleEnvelope.png";

// import triangleEnvelope from '../../public/triangleEnvelope.svg';
import triangleEnvelope from "../../public/triangleEnvelope.png";

import heroBackground1Light from "@/public/heroBackground/light/heroBackground1Light.svg";
import heroBackground1Dark from "@/public/heroBackground/dark/heroBackground1Dark.svg";
import heroBackground2Light from "@/public/heroBackground/light/heroBackground2Light.svg";
import heroBackground2Dark from "@/public/heroBackground/dark/heroBackground2Dark.svg";
import heroBackground3Light from "@/public/heroBackground/light/heroBackground3Light.svg";
import heroBackground3Dark from "@/public/heroBackground/dark/heroBackground3Dark.svg";
import heroBackground4Light from "@/public/heroBackground/light/heroBackground4Light.svg";
import heroBackground4Dark from "@/public/heroBackground/dark/heroBackground4Dark.svg";
import heroBackground5Light from "@/public/heroBackground/light/heroBackground5Light.svg";
import heroBackground5Dark from "@/public/heroBackground/dark/heroBackground5Dark.svg";
import heroBackground6Light from "@/public/heroBackground/light/heroBackground6Light.svg";
import heroBackground6Dark from "@/public/heroBackground/dark/heroBackground6Dark.svg";
import Link from "next/link";
// import heroBackground7Light from "@/public/heroBackground/light/heroBackground7Light.svg";
// import heroBackground7Dark from "@/public/heroBackground/dark/heroBackground7Dark.svg";

const backgroundsLight = [
  heroBackground1Light,
  heroBackground2Light,
  heroBackground3Light,
  heroBackground4Light,
  heroBackground5Light,
  heroBackground6Light,
  // heroBackground7Light,
];

const backgroundsDark = [
  heroBackground1Dark,
  heroBackground2Dark,
  heroBackground3Dark,
  heroBackground4Dark,
  heroBackground5Dark,
  heroBackground6Dark,
  // heroBackground7Dark,
];

const berkeleyOldStyle = localFont({
  src: "../.././font/BerkeleyOldStyle.ttf",
  variable: "--berkeley",
});

export default function Hero() {
  const theme = useTheme();
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [preloadedLightImages, setPreloadedLightImages] = useState<
    HTMLImageElement[]
  >([]);
  const [preloadedDarkImages, setPreloadedDarkImages] = useState<
    HTMLImageElement[]
  >([]);

  useEffect(() => {
    // Preload light mode images
    const lightImages = backgroundsLight.map((bg) => {
      const img = document.createElement("img");
      img.src = bg.src;
      return img;
    });
    setPreloadedLightImages(lightImages);

    // Preload dark mode images
    const darkImages = backgroundsDark.map((bg) => {
      const img = document.createElement("img");
      img.src = bg.src;
      return img;
    });
    setPreloadedDarkImages(darkImages);
  }, [backgroundsLight, backgroundsDark]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundsLight.length
      );
    }, 1500);
    return () => clearInterval(interval);
  }, [backgroundsLight]);


  const handleToggle = () => {
    setIsEmailOpen(!isEmailOpen);
  };

  return (
    <div
      className={`px-5 sm:px-16 pt-16 w-full text-center align-content-center content-center`}
      style={{
        backgroundColor: theme.palette.mode === "light" ? "#F6F5F5" : "#0F0F0F",
        height: "calc(100vh - 6.5rem)",
        backgroundImage:
          preloadedLightImages.length === backgroundsLight.length
            ? `url(${
                theme.palette.mode === "light"
                  ? preloadedLightImages[backgroundIndex]?.src
                  : preloadedDarkImages[backgroundIndex]?.src
              })`
            : "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <Box
        sx={{ height: { xs: "70%", sm: "auto" } }}
        className="relative flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: berkeleyOldStyle.style.fontFamily,
              lineHeight: "105%",
              paddingTop: { xs: "10px", sm: "30px", md: "50px" },
              fontSize: {
                xs: "1.9rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "4.5rem",
                xl: "4.5rem",
              },
            }}
          >
            Prove who sent an email <span className="hidden sm:inline"><br /></span> & any of it&apos;s contents.
          </Typography>
        </motion.div>
        <Typography
          variant="h4"
          style={{
            color: theme.palette.mode === "light" ? "#828282" : "#b0b0b0",
          }}
          className="pb-3 pt-3 sm:pt-4 md:pt-6 lg:pt-7 text-[12px] md:text-[20px] leading-[160%] sm:leading-[140%]"
        >
          Anonymously prove any subset of any email <span className="hidden sm:inline"><br /></span> you sent or
          received. On or Offchain.{" "}
        </Typography>
        <div className="content-center items-center flex justify-center">
          <Stack
            spacing={2}
            direction="row"
            sx={{ paddingTop: { xs: "4px", sm: "16px" } }}
          >
            <CustomButton
              buttonLabel="Docs"
              filledIn={true}
              target="_blank"
              url="https://zkemail.gitbook.io/zk-email"
            >
              Docs
            </CustomButton>
            <Link href={"/projects"} passHref>
              <CustomButton
                style={{
                  color: theme.palette.mode === "light" ? "black" : "white",
                  borderColor:
                    theme.palette.mode === "light" ? "black" : "white",
                }}
                buttonLabel="Projects"
                filledIn={false}
              >
                Projects
              </CustomButton>
            </Link>
          </Stack>
        </div>
      </Box>
      <Box sx={{ height: { xs: "50%", sm:"70%", md: "100%" } }}>
        <motion.div
          className="h-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Box
            sx={{
              marginTop: {
                xs: "3rem",
                sm: "9rem",
              },
            }}
            className="relative h-full w-fit flex justify-center mx-auto cursor-pointer"
            onClick={handleToggle}
          >
            <Box
              className="absolute inset-0 rounded-lg mx-auto p-4 sm:p-16 md:p-14 text-left text-[6px] sm:text-[10px] md:text-[11px] lg:text-[12px]"
              style={{
                zIndex: 1,
                background: theme.palette.background.default,
              }}
              sx={{ width: { xs: "90%", md: "85%" } }}
            >
              <div className="font-semibold">
                <div className="grid grid-cols-2">
                  <div>
                    <Typography variant="subtitle2">
                      From:{" "}
                      <span
                        style={{
                          background: theme.palette.text.primary,
                          color: theme.palette.text.primary,
                        }}
                      >
                        zkEmail
                      </span>
                    </Typography>
                    <Typography variant="subtitle2">
                      To:{" "}
                      <span
                        style={{
                          background: theme.palette.text.primary,
                          color: theme.palette.text.primary,
                        }}
                      >
                        Developers
                      </span>
                    </Typography>
                  </div>
                  <LabelImportantIcon
                    className="justify-self-end"
                    sx={{
                      color: "#FFBB6B",
                      fontSize: {
                        xs: "10px",
                        sm: "24px",
                        md: "32px",
                      },
                    }}
                  />
                </div>
                <Typography
                  variant="subtitle2"
                  className="pt-2 pb-2 sm:pt-6 sm:pb-4"
                >
                  Subject:{" "}
                  <span
                    style={{
                      background: theme.palette.text.primary,
                      color: theme.palette.text.primary,
                    }}
                  >
                    prove any content for any email, sent or received
                  </span>
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle2">
                  we built a primitive that allows you to prove who sent an
                  email + prove only what content you want from an email while
                  hiding what you don’t want known.
                  <br />
                  Excited to see what you build : )
                  <br />
                  <br />
                  <span className="font-semibold">The Zk team</span>
                  <br />
                  Aayush, Sora, Saleel, Wataru, Aditya and Elo
                </Typography>
              </div>
            </Box>
            <Box
              className={` absolute transition-transform duration-500 ${isEmailOpen ? "transform translate-y-[400px]" : ""}`}
              sx={{ zIndex: 0, top: "-20%", width: "100%", height: "auto" }}
            >
              <Image
                src={triangleEnvelope}
                alt="Triangle Envelope"
                className="w-full h-full"
                style={{ zIndex: 0 }}
              />
            </Box>
            <Box
              className={`translate-y-[25px] transition-transform duration-500 ${isEmailOpen ? "transform translate-y-[400px]" : ""}`}
              sx={{ position: "relative", zIndex: 1 }}
            >
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Image
                    src={rectangleEnvelope}
                    alt="Rectangle Envelope"
                    className="w-full h-full"
                    style={{ zIndex: 2 }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "20px",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      marginX: "4px",
                      marginTop: "-6px",
                      width: "100%",
                      height: "100%",
                      clipPath: "polygon(0 100%, 100% 95%, 0 0)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(100px)", // for Safari!
                    }}
                  />
                  <Box
                    sx={{
                      borderRadius: "10px",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      marginX: "4px",
                      marginTop: "-6px",
                      width: "100%",
                      height: "100%",
                      clipPath: "polygon(100% 100%, 0 95%, 100% 0)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(100px)", // for Safari!
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <div
              className="absolute inset-0"
              style={{
                zIndex: 0,
                filter: "blur(20px)",
                borderTopLeftRadius: "100%",
                borderTopRightRadius: "100%",
                height: "100%",
                width: "100%",
                bottom: "0",
              }}
            />
          </Box>
        </motion.div>
      </Box>
    </div>
  );
}
