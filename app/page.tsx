'use client'
import Hero from '../components/Hero/Hero'
import Accordion from '../components/Accordion/Accordion';
import PopOut from '../components/PopOut/PopOut';
import VideoCarousel from '../components/VideoCarousel/VideoCarousel';
import { Box, Stack, Typography, Grid} from '@mui/material';
import CustomButton from '.././components/CustomButton/CustomButton';
import ActionCard from '.././components/ActionCard/ActionCard'
import { Span } from 'next/dist/trace';
import ProjectCardHighlight from '@/components/ProjectCardHighlight/ProjectCardHighlight';
import RedactedText from '@/components/RedactedText/RedactedText'
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import buildYourOwnBackground from '.././public/buildYourOwnBackground.svg'
import CustomCardAbout from '.././components/CustomCardAbout/CustomCardAbout';
import AboutModal from '.././components/AboutModal/AboutModal'
import ourGoalsBackground from '.././public/ourGoalsBackground.svg'
import '.././types'
import waveBackground from '.././public/waveBackground.svg'



import { animate, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';



 interface SlideInDivProps {
  direction: 'left' | 'right';
  children: React.ReactNode;
}



// Define Fade-in animation variants
const fadeInAnimationVariants = {
  initial: {
    opacity:0,
    y:100,
  },
  animate: {
    opacity:1,
    y:0
  }
}


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
      ease: 'easeInOut'
    }
  }
};



// Functional component to handle the slide-in animation
const SlideInDiv: React.FC<SlideInDivProps> = ({ direction, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);



  return (
    <motion.div
      ref={ref}
      variants={slideInAnimationVariants}
      initial={direction === 'left' ? 'initialLeft' : 'initialRight'}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const faqs = [
  {
    title: 'How do you selectively reveal content in an email ?',
    contents: 'Cryptography is everywhere: every time you connect to a secure site...'
  },
  {
    title: 'How can I do this anonymously',
    contents: 'Authenticate themselves, make confidential transactions on the blockchain, and respect and preserve user privacy.'
  },
  {
    title: 'Why don’t I need to trust you?',
    contents: 'Cryptography is everywhere: every time you connect to a secure site...'
  },
  {
    title: 'How can I do this anonymously',
    contents: 'Authenticate themselves, make confidential transactions on the blockchain, and respect and preserve user privacy.'
  },
];


const emails = [
  {
    to: "Anonymous",
    from: "Zk <span>Email</span>",
    subject: "email 1, <span>hidden text</span>",
    mainText: 'For example, you can prove you have an email from <span>you@gov.com</span> without disclosing your full address.<br /> <br />Best,<br />Zk Email',
  },
  {
    to: "<span>Bob</span>@apple.com",
    from: "Zk Email",
    subject: "email 2",
    mainText: 'For example, you can prove you have an email from <span>you@edu.com</span> without disclosing <span>your full</span> address.<br /> <br />Best,<br />Zk Email',
  },
];


const PopOutZKLibraryCards = [
  { label: "ZK Regex Library", url: "https://github.com/zkemail/zk-regex" },
  { label: "Halo2 Benchmarking Browser Code", url: "https://github.com/zkemail/halo2-benchmark-wasm" },
  { label: "ZK PSI with Grumpkin and Hash to Curve", url: "https://github.com/zkemail/circom-grumpkin" },
  { label: "ZK Strings (base64 + pack)", url: "https://github.com/zkemail/halo2-base64" },
  { label: "ZK RSA", url: "https://github.com/zkemail/halo2-rsa" },
  { label: "ZK Variable Length SHA256", url: "https://github.com/zkemail/halo2-dynamic-sha256" },
];

let PopOutZKEmailLibraryCards = [
  { label: "ZK-Email", url: "https://github.com/zkemail/zk-email-verify" },
  { label: "ZK Regex UI Tools", url: "https://tool.zkregex.com/" },
  { label: "DKIM Archive", url: "https://github.com/zkemail/dkim-registry" },
  { label: "ZK JWTs", url: "https://github.com/zkemail/zk-jwt" },
  { label: "Regex Registry", url: "https://github.com/zkemail/zkregex.com" },
  { label: "Ether Email Auth", url: "https://github.com/zkemail/ether-email-auth" },
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
      <Hero/>


      {/*ABOUT SECTION*/}
      <Box width='100%' sx={{
        backgroundColor: 'white', 
        backgroundImage: `url(${waveBackground.src})`,
        background: 'cover',
        paddingX:'10%', 
        paddingTop:'10%',
        zIndex:'30'
      }}>
      <div>
        <motion.div
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{once: true}}
        >
          <Typography variant='h3' sx={{fontWeight:'bold', fontSize:'22px', }}>With ZK Email</Typography>
        </motion.div>
        <Typography sx={{ width: '80%', textAlign: 'left', paddingTop: '15px', fontSize: { sm: '15px', md: '16px', lg: '20px' } }}>
          You can confidently verify the sender, receiver, subject, or any part of an email while maintaining your privacy. Selectively reveal or hide any part of your email.
        </Typography>
      </div>
      <Grid container sx={{ paddingY: '50px', paddingBottom:'70px'}} direction='row' justifyContent='space-between'>
        <Grid item xs={4} sx={{display: { xs:'none', md: 'block' }}}>
          <Typography sx={{fontSize: { sm: '15px', md: '16px', lg: '20px' } }}> {'<>'} Redact Information <br /> {'<>'} Fast Proofs <br /> {'<>'} Open Source</Typography>
        </Grid>
        <Grid item xs={12} md={8} justifySelf="right">
          <Box display='flex' justifyContent='end'>
            <SlideInDiv direction="right">
              <AboutModal emails={emails} />
            </SlideInDiv>
          </Box>
        </Grid>
      </Grid>
    </Box>






{/* HOW WE DO THIS */}
<div className='pb-[100px] z-50 w-full' style={{ background: 'white' }}>
  <Box sx={{
    height: { xs: '830px', sm: '650px' },
    background: 'black',
    paddingY: '80px',
    width: '90%',
    borderRadius: '14.85px 14.85px 0px 0px ',
    marginX: 'auto',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <Box sx={{ textAlign: 'center', paddingX: '5%', position: 'relative', zIndex: 3 }}>
      <motion.div
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}>
        <Typography paddingY='20px' variant='h1' sx={{ textAlign: 'center', color: 'white' }}>
          How do we do this?
        </Typography>
      </motion.div>

      <Typography sx={{ color: 'white', paddingBottom: '30px', fontSize: { xs: '13px', sm: '15px', md: '19px' } }}>
        We leverage what emails already do... <br />but using regex & zero knowledge
      </Typography>
    </Box>
    <Grid container spacing={2} sx={{ padding: '20px' }}>
      <Grid item xs={12} sm={4} md={4}>
        <CustomCardAbout title='DKIM Scheme Status Quo' description='Part of your current emails' url='https://zkemail.gitbook.io/zk-email/frequently-asked-questions' />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CustomCardAbout title='Regex (Hasing & Regex)' description='Part of your current emails' url='https://zkemail.gitbook.io/zk-email/zk-regex' />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CustomCardAbout title='Zero Knowledge Circuits' description='Part of your current emails' url='/' />
      </Grid>
    </Grid>
  </Box>
  <div style={{
    width: '0',
    height: '0',
    borderLeft: '45vw solid transparent',
    borderRight: '45vw solid transparent',
    borderTop: '50px solid black',
    margin: '0 auto',
    transform: 'translateY(-1px)'
  }}></div>
</div>












      {/* FAQ ACCORDION ON MAIN PAGE */}
      <div className='pl-[10%] py-[100px] z-50 bg-white w-full'>
        <div className='min-h-[200px]'>
          <div className='relative '>
            <motion.div
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{once: true}}
            >
              <Typography paddingY='20px' variant='h1' sx={{textAlign:'left'}}>
                Frequently Asked Questions
              </Typography>            
            </motion.div>
          </div>

          <Grid container>
              <Grid item xs={12} sm={4}>
                <Typography variant='h5' paddingTop="10px" sx={{fontSize:{xs:'12px', md:'15px'}}}>
                    Have a Question that isn’t answered?<br></br> Reach out!
                </Typography>
                <Stack spacing={2} direction="row" sx={{ paddingTop: "16px" }}>
                  <CustomButton buttonLabel="Drop Us a Line" filledIn={true} target='true' url='https://t.me/zkemail'/>
                </Stack>
              </Grid>
              <SlideInDiv direction="right">
              <Grid item xs={12} sm={10} className="relative col-span-2 py-[30px] w-[100%]" style={{ width: '100%', margin: '0 auto', zIndex:'100' }}>
                {faqs.map((faq, index) => (
                  <Accordion key={index} title={faq.title} contents={faq.contents} />
                ))}
              </Grid>
            </SlideInDiv>
          </Grid>
        </div>
      </div>




      {/* PROJECTS USING ZK EMAIL SECTION*/}
      <div className='px-[10%] py-[6%]'>
        <Typography sx={{textAlign:'center', paddingBottom:'15px'}}>What does this enable?</Typography>
          <motion.div
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{once: true}}
          >
            <Typography variant='h1' sx={{ textAlign:'center', paddingBottom: {xs:4, sm:10}, }}>
              Projects Using ZK Email
            </Typography>
          </motion.div>
        <Grid container spacing={2} direction="row" sx={{ justifyContent:'center' }}>
          <Grid item xs={12} sm={4}>
            <ProjectCardHighlight projectTitle="ZKP2P" url='https://zkp2p.xyz/' projectDescription="Peer to peer marketplace for decentralized onramp/offramp to Ethereum via Venmo, UPI, Garanti, and more." projectTag="Off Ramp"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCardHighlight projectTitle="Email Wallet" url='https://emailwallet.org/' projectDescription="Email a relayer in order to transfer money or transact on Ethereum, anonymously." projectTag="Wallet"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCardHighlight projectTitle="Proof of Twitter" url='https://twitter.prove.email/' projectDescription="Prove you own a Twitter username on-chain, via any email from Twitter." projectTag="Identity"/>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '30px' }}>
          {/* <Typography sx={{visibility:{xs:'hidden', md:'visible'}}}>Serverless, Anonymous Proof Of Personhood ??</Typography> */}
          <div></div>
          <SlideInDiv direction="right">
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none',
                '&:hover .arrowIcon': {
                  color: theme.palette.secondary.main,
                  transform: 'translateX(5px)'
                },
                '&:hover': {
                  textDecoration:'underline',
                  textDecorationColor:theme.palette.secondary.main,
                }
              }}
              component='a' 
              href='/projects'
            >
              <Typography sx={{fontSize:{xs:'10px', sm:'14px', md:'20px'}}}>See all our projects library</Typography>
              <ArrowForwardIcon
                className='arrowIcon'
                sx={{
                  transition: 'color 0.3s, transform 0.3s',
                  ml: 1 
                }}
              />
            </Box>
          </SlideInDiv>
        </Box>
      </div>

    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Grid container sx={{ marginX: 'auto', py: '60px', width: '100%', justifyContent: 'space-between' }}>
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





      {/* BUILD YOUR OWN PROJECT CALL OUT ON MAIN PAGE */}
      <Box height='500px' sx={{
        backgroundColor: 'white', 
        backgroundImage: `url(${buildYourOwnBackground.src})`,
        paddingX:'10%', 
        paddingY:'8%'}}>

        <motion.div
          variants={fadeInAnimationVariants}
          initial='initial'
          whileInView='animate'
          viewport={{once: true}}
        >
          <Typography variant='h5'>For Developers</Typography>
          <Typography variant='h1'>Build Your Own</Typography>
          <Typography sx={{paddingRight:'10%', width:{xs:'85%',md:'70%'}, paddingTop:'20px', paddingBottom: '10px', fontSize:{xs:'12px',sm:'15px', md:'20px'}}}>No trusted hardware. No trusted attestation servers. Only trust zero knowledge proofs, smart contracts, email, and DNS infrastructure. All MIT open source libraries.</Typography>
          <CustomButton sx={{marginBottom: '30px', fontWeight:'light'}} filledIn={true} buttonLabel='Docs' target='true' url='https://zkemail.gitbook.io/zk-email'>Docs</CustomButton>
        </motion.div>
      </Box>





      {/* LIBRARIES ON MAIN PAGE */}
      <div className="w-full min-h-[400px] relative z-10">
          <div className="text-center py-10 px-[10%]">
            <motion.div
                  variants={fadeInAnimationVariants}
                  initial='initial'
                  whileInView='animate'
                  viewport={{once: true}}
            >
              <Typography variant='h1' sx={{ textAlign:'center', paddingY: {xs:4, sm:8}, }}>
                Our Libraries
              </Typography>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <SlideInDiv direction="left">
                  <PopOut
                    topText="ZK Email Specific Libraries"
                    mainText="ZKEmail Libraries"
                    descriptionText="We have several repos within the ZK Email ecosystem. Developers can use these to build their own custom email verification circuits."
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
                    descriptionText="We have several repos within the ZK Email ecosystem. Developers can use these to build their own custom email verification circuits."
                    toggleName="Show Libraries"
                    cards={PopOutZKLibraryCards}
                  />
                  </SlideInDiv>
              </div>
            </div>
          </div>
      </div>




      {/* VIDEO CAROUSEL ON MAIN PAGE */}
      <div className="w-full py-24">
          <div className="text-center py-10 px-[10%]">
            <motion.div
                  variants={fadeInAnimationVariants}
                  initial='initial'
                  whileInView='animate'
                  viewport={{once: true}
            }>
              <Typography variant='h1' className="text-5xl">Upcoming & <br/>Past Talks</Typography>
              <Typography sx={{fontSize:{xs:'12px', sm:'15px', md:'20px'}}} className="py-4">Meet the team <span className="font-bold">Aayush, Sora, Saleel, Wataru, Aditya and Elo </span> <br/>
                at one of our upcoming talks or message us if you have any questions!</Typography>
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
