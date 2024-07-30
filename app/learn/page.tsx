"use client";
import { Box, Stack, Typography, Grid } from "@mui/material";
import Link from "next/link";
import Accordion from "../../components/Accordion/Accordion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import localFont from "next/font/local";

import { animate, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Padding } from "@mui/icons-material";
import PopOut from "@/components/PopOut/PopOut";

const PopOutDKIMResourceCards = [
  { label: "ZK Regex Library", url: "https://github.com/zkemail/zk-regex" },
  {
    label: "Halo2 Benchmarking Browser Code",
    url: "https://github.com/zkemail/halo2-benchmark-wasm",
  },
  {
    label: "ZK PSI with Grumpkin and Hash to Curve",
    url: "https://github.com/zkemail/circom-grumpkin",
  },
  {
    label: "ZK Strings (base64 + pack)",
    url: "https://github.com/zkemail/halo2-base64",
  },
  { label: "ZK RSA", url: "https://github.com/zkemail/halo2-rsa" },
  {
    label: "ZK Variable Length SHA256",
    url: "https://github.com/zkemail/halo2-dynamic-sha256",
  },
];

const berkeleyOldStyle = localFont({
  src: "../../font/BerkeleyOldStyle.ttf",
  variable: "--berkeley",
});

interface SlideInDivProps {
  direction: "left" | "right";
  children: React.ReactNode;
}

// Define Fade-in animation variants
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

// Define slide-in animation variants
const slideInAnimationVariants = {
  initialLeft: {
    opacity: 0,
    x: -100,
  },
  initialRight: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1, // Adjust duration as needed
      ease: "easeInOut",
    },
  },
};

// Functional component to handle the slide-in animation
const SlideInDiv: React.FC<SlideInDivProps> = ({ direction, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <motion.div
        ref={ref}
        variants={slideInAnimationVariants}
        initial={direction === "left" ? "initialLeft" : "initialRight"}
        animate={controls}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default function Home() {
  const theme = useTheme();

  return (
    <main style={{background: theme.palette.background.default}} className="flex min-h-screen flex-col">
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Box>
          <div
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] relative z-10 pb-24 py-[100px]"
            style={{ background: "linear-gradient(to top, #FBFBFB, #F6F5F5)" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: berkeleyOldStyle.style.fontFamily,
                letterSpacing: "-2px",
                fontWeight: "medium",
                paddingX: "8%",
                color: "#666363",
                fontSize: {
                  xs: "2.05rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "4.5rem",
                  xl: "5rem",
                },
                textAlign: "center",
              }}
            >
              ZK Email leverages what emails already do but with{" "}
              <span style={{color: theme.palette.text.primary}}>Regex & Zero Knowledge</span>
            </Typography>
          </div>
        </Box>
      </motion.div>

      <div className="bg-white min-h-screen flex-col px-[8%]">
        <SlideInDiv direction="left">
          <Box sx={{ paddingY: "5%", paddingTop: "100px" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "medium", color: "#000000" }}
            >
              emails are signed using
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontWeight: "medium", color: "#000000" }}
            >
              DKIM Signatures
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "medium", color: "#000000", width: "60%" }}
            >
              almost all emails are signed by the sending domain server using an
              algorithm called DKIM.
            </Typography>
            <Box
              sx={{
                padding: "10px",
                marginY: "2%",
                backgroundColor: "#1E1E1E",
                borderRadius: "10px",
                width: { xs: "100%", sm: "90%", md: "60%" },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "medium", color: "#ffffff" }}
              >
                rsa_sign(sha256(from:..., to:..., subject:..., body hash,...),
                private key)
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "medium",
                color: "#000000",
                paddingBottom: "5%",
              }}
            >
              this lets us verify the sender, receiver, the subject, the body
            </Typography>
            <Accordion
              title="DKIM Resources"
              contents="DKIM: DomainKeys Identified Mail. An email authentication method designed to detect email spoofing."
            />
          </Box>
        </SlideInDiv>

        <SlideInDiv direction="right">
          <Box sx={{ paddingY: "5%", textAlign: "right" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "medium", color: "#000000" }}
            >
              we can extract any part of our email using
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontWeight: "medium", color: "#000000" }}
            >
              Regex
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "medium",
                color: "#000000",
                right: 0,
                paddingBottom: "5%",
              }}
            >
              we can hide any information or selectively reveal any text, wether
              that’s the sender, receiver, subject, body etc
            </Typography>
            <Accordion
              alignment="right"
              title="Regex Resources"
              contents="Regex: Short for regular expression, this term represents sequence of characters that forms a search pattern, commonly used for string matching within text. In the context of zkEmail where it`s used to parse email headers and extract relevant information."
            ></Accordion>
          </Box>
        </SlideInDiv>

        <SlideInDiv direction="left">
          <Box sx={{ paddingY: "5%" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "medium", color: "#000000" }}
            >
              we can verify our DKIM Signature and the Regex using
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontWeight: "medium", color: "#000000" }}
            >
              Zero Knowledge Circuits
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "medium",
                color: "#000000",
                width: "60%",
                paddingBottom: "5%",
              }}
            >
              Zero knowledge circuits allow us to verify that the DKIM Signature
              is correct and that our Regex is calculated correctly. We can
              prove these calculations were done correctly to a verifier without
              revealing the exact
            </Typography>
            <Accordion
              title="Zero Knowledge Resources"
              contents="Zero-Knowledge Proofs: A cryptographic method by which one party can prove to another that they know a value x, without conveying any information apart from the fact that they know the value x."
            ></Accordion>
          </Box>
        </SlideInDiv>

        <SlideInDiv direction="right">
          <Box sx={{ paddingY: "5%", textAlign: "right" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "medium", color: "#000000" }}
            >
              putting this all together, ZK Email lets us
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontWeight: "medium", color: "#000000" }}
            >
              Prove who sent an email & any of it’s contents.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "medium", color: "#000000" }}
            >
              anonymously. on or off chain.
            </Typography>
          </Box>
        </SlideInDiv>

        <SlideInDiv direction="left">
          <Box>
            <Typography sx={{ paddingY: "5%" }}>
              Dive deeper by reading our{" "}
              <Link
                href="/blog"
                target="_blank"
                className="underline font-bold"
              >
                blog
              </Link>{" "}
              &{" "}
              <Link
                href="https://zkemail.gitbook.io/zk-email"
                target="_blank"
                className="underline font-bold"
              >
                docs
              </Link>
            </Typography>
          </Box>
        </SlideInDiv>
      </div>
    </main>
  );
}

// 'use client'
// import { Box, Stack, Typography, Grid} from '@mui/material';
// import Link from 'next/link';
// import Accordion from '../../components/Accordion/Accordion'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useTheme } from '@mui/material/styles';
// import localFont from 'next/font/local';

// import { animate, motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';
// import { Padding } from '@mui/icons-material';
// import PopOut from '@/components/PopOut/PopOut';

// const PopOutDKIMResourceCards = [
//   { label: "ZK Regex Library", url: "https://github.com/zkemail/zk-regex" },
//   { label: "Halo2 Benchmarking Browser Code", url: "https://github.com/zkemail/halo2-benchmark-wasm" },
//   { label: "ZK PSI with Grumpkin and Hash to Curve", url: "https://github.com/zkemail/circom-grumpkin" },
//   { label: "ZK Strings (base64 + pack)", url: "https://github.com/zkemail/halo2-base64" },
//   { label: "ZK RSA", url: "https://github.com/zkemail/halo2-rsa" },
//   { label: "ZK Variable Length SHA256", url: "https://github.com/zkemail/halo2-dynamic-sha256" },
// ];

// const berkeleyOldStyle = localFont({
//   src: '../../font/BerkeleyOldStyle.ttf',
//   variable: '--berkeley',
// });

//  interface SlideInDivProps {
//   direction: 'left' | 'right';
//   children: React.ReactNode;
// }

// // Define Fade-in animation variants
// const fadeInAnimationVariants = {
//   initial: {
//     opacity:0,
//     y:100,
//   },
//   animate: {
//     opacity:1,
//     y:0
//   }
// }

// // Define slide-in animation variants
// const slideInAnimationVariants = {
//   initialLeft: {
//     opacity: 0,
//     x: -100,
//   },
//   initialRight: {
//     opacity: 0,
//     x: 100,
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 1, // Adjust duration as needed
//       ease: 'easeInOut'
//     }
//   }
// };

// // Functional component to handle the slide-in animation
// const SlideInDiv: React.FC<SlideInDivProps> = ({ direction, children }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start('animate');
//     }
//   }, [controls, inView]);

//   return (
//     <Box sx={{overflow:'hidden'}}>
//       <motion.div
//         ref={ref}
//         variants={slideInAnimationVariants}
//         initial={direction === 'left' ? 'initialLeft' : 'initialRight'}
//         animate={controls}
//       >
//           {children}
//       </motion.div>
//     </Box>
//   );
// };

// export default function Home() {
//     const theme = useTheme();

//   return (
//     <main className="flex bg-white min-h-screen flex-col">

//         <motion.div
//               variants={fadeInAnimationVariants}
//               initial='initial'
//               whileInView='animate'
//               viewport={{once: true}}
//         >
//           <Box>
//           <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] relative z-10 pb-24 py-[100px]" style={{ background: 'linear-gradient(to top, #FBFBFB, #F6F5F5)' }}>
//               <Typography  variant='h1'
//                 sx={{
//                 fontFamily: berkeleyOldStyle.style.fontFamily,
//                 letterSpacing: '-2px',
//                 fontWeight: 'medium',
//                 paddingX: '8%',
//                 color: '#666363',
//                 fontSize: {
//                   xs: '2.05rem',
//                   sm: '2.5rem',
//                   md: '3rem',
//                   lg: '4.5rem',
//                   xl: '5rem',
//                 },
//               textAlign:'center'
//               }}>
//                   ZK Email leverages what emails already do
//                   but with <span className='text-[#000000]'>Regex & Zero Knowledge</span>
//               </Typography>
//               {/* <Typography  variant='h1'
//                 sx={{
//                 fontFamily: berkeleyOldStyle.style.fontFamily,
//                 fontWeight: 'medium',
//                 color: '#666363',
//                 fontSize: {
//                   xs: '2.3rem',
//                   sm: '2.5rem',
//                   md: '3rem',
//                   lg: '4.5rem',
//                   xl: '5rem',
//                 },
//               textAlign:'center'
//               }}>
//                   ZK Email leverages what emails already do
//                   but with <span className='text-[#000000]'>Regex & Zero Knowledge</span>
//               </Typography> */}
//               </div>
//           </Box>

//         </motion.div>

//         <div className='bg-white min-h-screen flex-col px-[8%]'>
//           <SlideInDiv direction="left">
//             <Box sx={{paddingY: '5%', paddingTop: '100px'}}>
//                 <PopOut
//                   topText='emails are signed using'
//                   mainText='DKIM Signatures'
//                   descriptionText="almost all emails are signed by the sending domain server using an algorithm called DKIM. this lets us verify the sender, receiver, the subject, the body"
//                   toggleName="Show Libraries"
//                   cards={PopOutDKIMResourceCards}
//                 ></PopOut>
//             </Box>
//           </SlideInDiv>

//           <SlideInDiv direction="right">
//             <Box sx={{paddingY: '5%'}}>
//                 <PopOut
//                   topText='we can extract any part of our email using'
//                   mainText='Regex'
//                   descriptionText="we can hide any information or selectively reveal any text, wether that’s the sender, receiver, subject, body etc"
//                   toggleName="Show Libraries"
//                   cards={PopOutDKIMResourceCards}
//                 ></PopOut>
//             </Box>
//           </SlideInDiv>

//           <SlideInDiv direction="left">
//             <Box sx={{paddingY: '5%'}}>
//                 <PopOut
//                   topText='we can verify our DKIM Signature and the Regex using'
//                   mainText='Zero Knowledge Circuits'
//                   descriptionText="Zero knowledge circuits allow us to verify that the DKIM Signature is correct and that our Regex is calculated correctly.  We can prove these calculations were done correctly to a verifier without revealing the exact"
//                   toggleName="Show Libraries"
//                   cards={PopOutDKIMResourceCards}
//                 ></PopOut>
//             </Box>
//           </SlideInDiv>

//           <SlideInDiv direction="left">
//             <Box sx={{paddingY: '5%'}}>
//                 <Typography variant='h6' sx={{fontWeight: 'medium', color: '#000000'}}>
//                   we can verify our DKIM Signature and the Regex using
//                 </Typography>
//                 <Typography variant='h1' sx={{fontWeight: 'medium', color: '#000000'}}>
//                   Zero Knowledge Circuits
//                 </Typography>
//                 <Typography variant='h6' sx={{fontWeight: 'medium', color: '#000000', width:'60%', paddingBottom:'5%'}}>
//                 Zero knowledge circuits allow us to verify that the DKIM Signature is correct and that our Regex is calculated correctly.
//                 We can prove these calculations were done correctly to a verifier without revealing the exact
//                 </Typography>
//                 <Accordion title='Zero Knowledge Resources' contents='Zero-Knowledge Proofs: A cryptographic method by which one party can prove to another that they know a value x, without conveying any information apart from the fact that they know the value x.' >

//                 </Accordion>
//             </Box>
//           </SlideInDiv>

//           <SlideInDiv direction="right">
//             <Box sx={{paddingY: '5%', textAlign: 'right'}}>
//                 <Typography variant='h6' sx={{fontWeight: 'medium', color: '#000000'}}>
//                   putting this all together, ZK Email lets us
//                 </Typography>
//                 <Typography variant='h1' sx={{fontWeight: 'medium', color: '#000000'}}>
//                   Prove who sent an email & any of it’s contents.
//                 </Typography>
//                 <Typography variant='h6' sx={{fontWeight: 'medium', color: '#000000'}}>
//                   anonymously. on or off chain.
//                 </Typography>
//             </Box>
//           </SlideInDiv>

//           <SlideInDiv direction="left">
//             <Box>
//               <Typography sx={{paddingY: '5%'}}>
//                 Dive deeper by reading our <Link href='/blog' target='_blank' className='underline font-bold'>blog</Link> & <Link  href='https://zkemail.gitbook.io/zk-email' target='_blank'  className='underline font-bold'>docs</Link>
//               </Typography>
//             </Box>
//           </SlideInDiv>
//         </div>
//     </main>
//   );
// }
