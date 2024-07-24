"use client";
import CustomButton from "../CustomButton/CustomButton";
import Image from "next/image";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

import rectangleEnvelope from "../../public/rectangleEnvelope.png";

// import triangleEnvelope from '../../public/triangleEnvelope.svg';
import triangleEnvelope from "../../public/triangleEnvelope.png";

import heroBackground1 from "../../public/heroBackground1.svg";
import heroBackground2 from "../../public/heroBackground2.svg";
import heroBackground3 from "../../public/heroBackground3.svg";
import heroBackground4 from "../../public/heroBackground4.svg";
import heroBackground5 from "../../public/heroBackground5.svg";
import heroBackground6 from "../../public/heroBackground6.svg";
import heroBackground7 from "../../public/heroBackground7.svg";

const backgrounds = [
  heroBackground1,
  heroBackground2,
  heroBackground3,
  heroBackground4,
  heroBackground5,
  heroBackground6,
  heroBackground7,
];

const berkeleyOldStyle = localFont({
  src: "../.././font/BerkeleyOldStyle.ttf",
  variable: "--berkeley",
});

export default function Hero() {
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 350);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleToggle = () => {
    setIsEmailOpen(!isEmailOpen);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={`px-5 sm:px-16 pt-16 w-full bg-[#F6F5F5] text-center align-content-center content-center ${isHovering ? "custom-cursor-active" : ""}`}
      style={{
        height: "calc(100vh - 6.5rem)",
        backgroundImage: `url(${backgrounds[backgroundIndex].src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="custom-cursor"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          position: "fixed",
          zIndex: 10000,
        }}
      ></div>
      <div className="z-50 relative">
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
            Prove who sent an email <br /> & any of it&apos;s contents.
          </Typography>
        </motion.div>
        <Typography
          variant="h4"
          className="pb-3 pt-3 sm:pt-4 md:pt-6 lg:pt-7 text-[12px] md:text-[20px] text-[#828282] leading-[160%] sm:leading-[140%]"
        >
          Anonymously prove any subset of any email <br></br>you sent or
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
            <CustomButton
              buttonLabel="Projects"
              filledIn={false}
              url="/projects"
            >
              Projects
            </CustomButton>
          </Stack>
        </div>
      </div>
      <Box sx={{height: {xs: '50%', md: '100%'}}}>
        <motion.div
          className="h-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div
            className="relative h-full w-fit flex justify-center mx-auto mt-16 cursor-none"
            onClick={handleToggle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Box
              className="absolute inset-0 rounded-lg bg-white mx-auto p-4 sm:p-16 md:p-14 text-left text-[6px] sm:text-[10px] md:text-[11px] lg:text-[12px]"
              style={{ zIndex: 1 }}
              sx={{ width: { xs: "90%", sm: "75%" } }}
            >
              <div className="font-semibold">
                <div className="grid grid-cols-2">
                  <div>
                    <Typography variant="subtitle2">From: zkEmail</Typography>
                    <Typography variant="subtitle2">To: Developers</Typography>
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
                  Subject: prove any content for any email, sent or received{" "}
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
              className={`translate-y-[25px] absolute transition-transform duration-500 ${isEmailOpen ? "transform translate-y-[400px]" : ""}`}
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
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "89%",
                      clipPath: "polygon(0 100%, 100% 100%, 0 0)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(100px)", // for Safari!
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "100%",
                      height: "90%",
                      clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
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
                background:
                  "radial-gradient(circle at bottom, #F4F1F1 80%, #FCFCFC 100%)",
                zIndex: 0,
                filter: "blur(20px)",
                borderTopLeftRadius: "100%",
                borderTopRightRadius: "100%",
                height: "100%",
                width: "100%",
                bottom: "0",
              }}
            />
          </div>
        </motion.div>
      </Box>

      <style jsx>{`
        .custom-cursor {
          cursor: none;
        }

        .custom-cursor::after {
          content: "";
          width: 20px;
          height: 20px;
          background-color: black;
          border-radius: 50%;
          position: absolute;
          pointer-events: none;
          transform: translate(-50%, -50%);
          display: none;
          z-index: 10000;
        }

        .custom-cursor-active .custom-cursor::after {
          display: block;
        }
      `}</style>
    </div>
  );
}
