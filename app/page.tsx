"use client";
import Hero from "../components/Hero/Hero";
import Accordion from "../components/Accordion/Accordion";
import PopOut from "../components/PopOut/PopOut";
import VideoCarousel from "../components/VideoCarousel/VideoCarousel";
import { Box, Stack, Typography, Grid } from "@mui/material";
import CustomButton from ".././components/CustomButton/CustomButton";
import ActionCard from ".././components/ActionCard/ActionCard";
import { Span } from "next/dist/trace";
import ProjectCardHighlight from "@/components/ProjectCardHighlight/ProjectCardHighlight";
import RedactedText from "@/components/RedactedText/RedactedText";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import buildYourOwnBackground from ".././public/buildYourOwnBackground.svg";
import CustomCardAbout from ".././components/CustomCardAbout/CustomCardAbout";
import AboutModal from ".././components/AboutModal/AboutModal";
import ourGoalsBackground from ".././public/ourGoalsBackground.svg";
import ".././types";
import waveBackground from ".././public/waveBackground.svg";
import waveBackgroundInverted from ".././public/waveBackgroundInverted.svg";

import { animate, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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

const faqs = [
  {
    title: "How do you selectively reveal content in an email ?",
    contents:
      "We can hide any information or selectively reveal any text, wether that’s the sender, receiver, subject, body etc using Regex. Regex is short for regular expression, this term represents sequence of characters that forms a search pattern, commonly used for string matching within text.  It consists of a sequence of characters that define a search pattern, enabling complex searches, substitutions, and string manipulations. For example, in programming and text processing, regex can identify, extract, or replace specific text patterns, such as email addresses, dates, or phone numbers, by defining these patterns through a combination of literal characters and special symbols. In the context of ZK Email it is used to parse email headers and extract relevant information.",
  },
  {
    title: "How can I do this anonymously",
    contents:
      "ZK Email leverages the principles of Zero Knowledge proofs and serverless execution within the browser to provide a verifiable yet anonymous way to confirm an emails contents and recipents . Zero Knowledge proofs allow provers to prove that they know or possess certain information without revealing the information itself to a verifer. In ZK Email, this technology is used to verify user identity and email content without exposing sensitive data to a server or other users. The serverless architecture means that all proof generation is executed entirely within the user`s browser.",
  },
  {
    title: "Why don’t I need to trust you?",
    contents:
      "The DKIM email signitures do not contain information we can use to sign other emails, all our code is open source and being audited",
  },
  {
    title: "How do you verify the email contents and recipents",
    contents:
      "We use the existing DKIM Signiture, almost all emails are signed by the sending domain server using an algorithm called DKIM. It can be summarized as this rsa_sign(sha256(from:..., to:..., subject:..., <body hash>,...), private key). Every time an email is sent we can verify the sender, receiver, the subject, the body by checking if the corresponding public key of the email address applied on the DKIM signiture returns the sha256(from:..., to:..., subject:..., <body hash>,...) a hash of the from, to subject, email details which we can check by rehashing",
  },
];

//emails for email modal
const emails = [
  {
    to: "potus@gov.com",
    from: "<span>Email</span>@gov.com",
    subject: "Whistle Blowing",
    mainText:
      "For example, you can prove you have an email from <span>you</span>@gov.com without disclosing your full address. We can confirm the email has mentions a name, place etc and confirm who we sent/recieved it from potus@gmail.com",
  },
  {
    to: "<span>Bob</span>@gmail.com",
    from: "Github.com",
    subject: "Github Contribution to X Repo",
    mainText:
      "For example, you can prove you recieved an contribution email from github.com for a specific repo without revealing your full <span>you</span>@gmail.com email address",
  },
  {
    to: "<span>Bob</span>@gmail.com",
    from: "Venmo.com",
    subject: "Payment confirmation to X Person",
    mainText:
      "For example, you can prove you recieved an Venmo payment email from venmo.com which says you venmoed a specific person without revealing your full <span>you</span>@gmail.com email address ",
  },
  {
    to: "<span>Bob</span>@gmail.com",
    from: "itizenships@gov.com",
    subject: "Nationality",
    mainText:
      "For example, you can prove you recieved an email from a goverment site site.gov.com which mentioned you did something like e vote without revealing your full <span>you</span>@gmail.com email address",
  },
];

const PopOutZKLibraryCards = [
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

let PopOutZKEmailLibraryCards = [
  { label: "ZK Email", url: "https://github.com/zkemail/zk-email-verify" },
  { label: "ZK Regex UI Tools", url: "https://tool.zkregex.com/" },
  { label: "DKIM Archive", url: "https://github.com/zkemail/dkim-registry" },
  { label: "ZK JWTs", url: "https://github.com/zkemail/zk-jwt" },
  { label: "Regex Registry", url: "https://github.com/zkemail/zkregex.com" },
  {
    label: "Ether Email Auth",
    url: "https://github.com/zkemail/ether-email-auth",
  },
];

export default function Home() {
  const theme = useTheme();

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 100, opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <main className="flex bg-white min-h-screen flex-col">
      <Hero />

      {/*ABOUT SECTION*/}
      <Box
        width="100%"
        sx={{
          backgroundColor: "white",
          backgroundImage: `url(${waveBackground.src})`,
          background: "cover",
          paddingX: "10%",
          paddingTop: "10%",
          zIndex: "30",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", fontSize: "22px", color: "#828282" }}
              >
                With ZK Email
              </Typography>
            </motion.div>
            <Typography
              sx={{
                width: "80%",
                textAlign: "left",
                paddingTop: "15px",
                paddingBottom: "40px",
                fontSize: { sm: "15px", md: "16px", lg: "20px" },
              }}
            >
              You can confidently verify the sender, receiver, subject, or any
              part of an email while maintaining your privacy. Selectively
              reveal or hide any part of any email.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              sx={{ paddingBottom: "70px", overflow: "visable" }}
              direction="row"
              justifyContent="space-between"
            >
              <Grid item xs={12} md={12} justifySelf="right" overflow="visable">
                <Box display="flex" justifyContent="end" overflow="visable">
                  <SlideInDiv direction="right">
                    <AboutModal emails={emails} />
                  </SlideInDiv>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* TEST ENVELOPE BLUR
<div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="relative w-80 h-48 bg-white rounded-lg shadow">
        <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </div>
  </div> */}

      {/* HOW WE DO THIS */}
      <div className="pb-[50px] z-50 w-full">
        <Box
          sx={{
            height: { xs: "830px", sm: "650px" },
            background: "black",
            paddingY: "80px",
            width: "90%",
            borderRadius: "14.85px 14.85px 0px 0px ",
            marginX: "auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              paddingX: "5%",
              position: "relative",
              zIndex: 3,
            }}
          >
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Typography
                paddingY="20px"
                variant="h1"
                sx={{ textAlign: "center", color: "white" }}
              >
                How do we do this?
              </Typography>
            </motion.div>

            <Typography
              sx={{
                color: "white",
                paddingBottom: "30px",
                fontSize: { xs: "13px", sm: "15px", md: "19px" },
              }}
            >
              We leverage what emails already do... <br />
              but using Regex & Zero Knowledge
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ padding: "20px" }}>
            <Grid item xs={12} sm={4} md={4}>
              <CustomCardAbout
                title="DKIM Scheme Status Quo"
                description="Part of your current emails "
                url="https://zkemail.gitbook.io/zk-email/frequently-asked-questions"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CustomCardAbout
                title="Regex (Hashing & Regex)"
                description="Checks if a text contains a string"
                url="https://zkemail.gitbook.io/zk-email/zk-regex"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CustomCardAbout
                title="Zero Knowledge Circuits"
                description="Prove DKIM & Regex calculations are correct, without revealing extra info"
                url="/"
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          width="100%"
          sx={{
            backgroundColor: "white",
            backgroundImage: `url(${waveBackgroundInverted.src})`,
            backgroundSize: "cover",
            backgroundPosition: "calc(100% - 10) center",
            zIndex: "100",
            height: "500px",
          }}
        >
          <div
            style={{
              width: "0",
              height: "0",
              borderLeft: "45vw solid transparent",
              borderRight: "45vw solid transparent",
              borderTop: "100px solid black",
              margin: "0 auto",
            }}
          ></div>

          {/* Put this inside the end of the how do we do this section, bad coding but works fine */}
          {/* PROJECTS USING ZK EMAIL SECTION*/}
          <div className="px-[10%] py-[150px]">
            <Typography sx={{ textAlign: "center", paddingBottom: "15px" }}>
              What does this enable?
            </Typography>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Typography
                variant="h1"
                sx={{ textAlign: "center", paddingBottom: { xs: 4, sm: 10 } }}
              >
                Projects Using ZK Email
              </Typography>
            </motion.div>
            <Grid
              container
              spacing={2}
              direction="row"
              sx={{ justifyContent: "center" }}
            >
              <Grid item xs={12} sm={4}>
                <ProjectCardHighlight
                  projectTitle="ZKP2P"
                  url="https://zkp2p.xyz/"
                  projectDescription="Peer to peer marketplace for decentralized onramp/offramp to Ethereum via Venmo, UPI, Garanti, and more."
                  projectTag="Off Ramp"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <ProjectCardHighlight
                  projectTitle="Email Wallet"
                  url="https://emailwallet.org/"
                  projectDescription="Email a relayer in order to transfer money or transact on Ethereum, anonymously."
                  projectTag="Wallet"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <ProjectCardHighlight
                  projectTitle="Proof of Twitter"
                  url="https://twitter.prove.email/"
                  projectDescription="Prove you own a Twitter username on-chain, via any email from Twitter."
                  projectTag="Identity"
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: "30px",
              }}
            >
              {/* <Typography sx={{visibility:{xs:'hidden', md:'visible'}}}>Serverless, Anonymous Proof Of Personhood ??</Typography> */}
              <div></div>
              <SlideInDiv direction="right">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "underline",
                    textDecorationColor: theme.palette.secondary.main,
                    "&:hover .arrowIcon": {
                      color: theme.palette.secondary.main,
                      transform: "translateX(5px)",
                    },
                    "&:hover": {
                      // textDecoration:'underline',
                      // textDecorationColor:theme.palette.secondary.main,
                    },
                  }}
                  component="a"
                  href="/projects"
                >
                  <Typography
                    sx={{ fontSize: { xs: "15px", sm: "15px", md: "20px" } }}
                  >
                    See all our projects library
                  </Typography>
                  <ArrowForwardIcon
                    className="arrowIcon"
                    sx={{
                      transition: "color 0.3s, transform 0.3s",
                      ml: 1,
                    }}
                  />
                </Box>
              </SlideInDiv>
            </Box>
          </div>
          {/* end of the projects using zk email section  */}
        </Box>
      </div>
      {/* end of the how do we do this section 











      {/* BUILD YOUR OWN PROJECT CALL OUT ON MAIN PAGE */}
      <Box
        height="500px"
        sx={{
          backgroundColor: "white",
          backgroundImage: `url(${buildYourOwnBackground.src})`,
          paddingX: "10%",
          paddingTop: "100px",
          marginTop: { xs: "480px", sm: "430px", md: "370px" },
        }}
      >
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Typography variant="h5">For Developers</Typography>
          <Typography variant="h1">Build Your Own</Typography>
          <Typography
            sx={{
              paddingRight: "10%",
              width: { xs: "85%", md: "70%" },
              paddingTop: "20px",
              paddingBottom: "10px",
              fontSize: { xs: "12px", sm: "15px", md: "20px" },
            }}
          >
            No trusted hardware. No trusted attestation servers. Only trust zero
            knowledge proofs, smart contracts, email, and DNS infrastructure.
            All MIT open source libraries.
          </Typography>
          <CustomButton
            sx={{ marginTop: "10px", fontWeight: "light" }}
            filledIn={true}
            buttonLabel="Docs"
            target="true"
            url="https://zkemail.gitbook.io/zk-email"
          >
            Docs
          </CustomButton>
        </motion.div>
      </Box>

      {/* LIBRARIES ON MAIN PAGE */}
      <div
        className="w-full min-h-[400px] relative z-10 pb-24"
        style={{ background: "linear-gradient(to top, #FBFBFB, #FFFFFF)" }}
      >
        <div className="text-center py-0 px-[10%]">
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Typography
              variant="h1"
              sx={{ textAlign: "center", paddingY: { xs: 4, sm: 8 } }}
            >
              Our Libraries
            </Typography>
          </motion.div>
          <div className="grid grid-cols-2 gap-2 sm:gap-6">
            <div>
              <SlideInDiv direction="left">
                <PopOut
                  topText="ZK Email Specific Libraries"
                  mainText="ZK Email Libraries"
                  descriptionText="We have several repos within the ZK Email ecosystem. Developers can use these to build their own custom email verification circuits"
                  toggleName="Show Libraries"
                  cards={PopOutZKEmailLibraryCards}
                />
              </SlideInDiv>
            </div>
            <div>
              <SlideInDiv direction="right">
                <PopOut
                  topText="General ZK Libraries"
                  mainText="ZK Libraries"
                  descriptionText="While developing  ZK Email we built these libraries for general use, that can be applied outside of the ZK Email ecosystem"
                  toggleName="Show Libraries"
                  cards={PopOutZKLibraryCards}
                />
              </SlideInDiv>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ ACCORDION ON MAIN PAGE */}
      <div className="pl-[10%] py-[100px] z-50 bg-white w-full">
        <div className="min-h-[200px]">
          <div className="relative ">
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Typography
                paddingY="20px"
                variant="h1"
                sx={{ textAlign: "left" }}
              >
                Frequently Asked Questions
              </Typography>
            </motion.div>
          </div>

          <Grid container>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h5"
                paddingTop="10px"
                sx={{ fontSize: { xs: "12px", md: "15px" } }}
              >
                Have a Question that isn’t answered?<br></br> Reach out!
              </Typography>
              <Stack spacing={2} direction="row" sx={{ paddingTop: "16px" }}>
                <CustomButton
                  buttonLabel="Drop Us a Line"
                  filledIn={true}
                  target="true"
                  url="https://t.me/zkemail"
                />
              </Stack>
            </Grid>
            <SlideInDiv direction="right">
              <Grid
                item
                xs={12}
                sm={10}
                className="relative col-span-2 py-[30px] w-[100%]"
                style={{ width: "100%", margin: "0 auto", zIndex: "100" }}
              >
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    contents={faq.contents}
                  />
                ))}
              </Grid>
            </SlideInDiv>
          </Grid>
        </div>
      </div>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Grid
          container
          sx={{
            marginX: "auto",
            py: "60px",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <RedactedText text="Redact Text" />
          </Grid>
          <Grid item>
            <RedactedText text="Fast Proofs" />
          </Grid>
          <Grid item>
            <RedactedText text="Open Source" />
          </Grid>
          <Grid item>
            <RedactedText text="Redact Text" />
          </Grid>
          <Grid item>
            <RedactedText text="Fast Proofs" />
          </Grid>
          <Grid item>
            <RedactedText text="Open Source" />
          </Grid>
        </Grid>
      </Box>

      {/* VIDEO CAROUSEL ON MAIN PAGE */}
      <div className="w-full py-16">
        <div className="text-center py-10 px-[12%]">
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Typography variant="h1" className="text-5xl">
              Upcoming & <br />
              Past Talks
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "15px", md: "20px" } }}
              className="py-4"
            >
              Meet the team at one of our upcoming talks or message us if you
              have any questions!
            </Typography>
          </motion.div>
        </div>
        <div className="h-[430px] w-full mb-10">
          <SlideInDiv direction="right">
            <VideoCarousel />
          </SlideInDiv>
        </div>
      </div>
    </main>
  );
}
