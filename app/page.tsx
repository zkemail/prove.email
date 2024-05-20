'use client'
import Hero from './hero/hero'
import Accordion from '../components/Accordion/Accordion';
import PopOut from '../components/PopOut/PopOut';
import VideoCarousel from '../components/VideoCarousel/VideoCarousel';
import { Box, Stack, Typography, Grid} from '@mui/material';
import CustomButton from '.././components/CustomButton/CustomButton';
import ActionCard from '.././components/ActionCard/ActionCard'
import { Span } from 'next/dist/trace';
import ProjectCardHighlight from '@/components/ProjectCardHighlight/ProjectCardHighlight';


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

const PopOutZKLibraryCards = [
  { label: "ZK Regex Library", url: "https://example.com/1" },
  { label: "halo2 benchmarking browser code", url: "https://example.com/2" },
  { label: "zk psi with grumpkin and hash to curve", url: "https://example.com/3" },
  { label: "zk strings (base64 + pack)", url: "https://example.com/3" },
  { label: "zk rsa", url: "https://example.com/3" },
  { label: "zk variable length sha256", url: "https://example.com/3" },
];

let PopOutZKEmailLibraryCards = [
  { label: "zk-email", url: "https://example.com/1" },
  { label: "ZK Regex UI Tools", url: "https://example.com/2" },
  { label: "DKIM Archive", url: "https://example.com/3" },
  { label: "ZK JWTs", url: "https://example.com/3" },
  { label: "Regex Registry", url: "https://example.com/3" },
  { label: "Ether Email Auth", url: "https://example.com/3" },
];



export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col">
      <Hero/>

      {/* FAQ ACCORDION ON MAIN PAGE */}
      <div className='pl-[20px] py-[100px] z-50 bg-white w-full'>
        <div className='min-h-[200px] pl-20'>
          <Typography paddingY='20px' variant='h1' sx={{textAlign:'left'}}>
            Frequently Asked Questions
          </Typography>
          <div className='grid grid-cols-3'>
            <div className=''>
              <Typography variant='h5' paddingTop="10px">
                  Have a Question that isn’t answered <br></br> We would like to chat with you!
              </Typography>
              <Stack spacing={2} direction="row" sx={{ paddingTop: "16px" }}>
                <CustomButton buttonLabel="Drop Us a Line " filledIn={true} url='https://zkemail.gitbook.io/zk-email'/>
              </Stack>
            </div>
            <div className="relative col-span-2" style={{ width: '100%', margin: '0 auto', padding: '20px', zIndex:'100' }}>
              {faqs.map((faq, index) => (
                <Accordion key={index} title={faq.title} contents={faq.contents} />
              ))}
            </div>
          </div>
        </div>
      </div>




      {/* PROJECTS USING ZK EMAIL SECTION*/}
      <div className='px-[10%]'>
        <Typography variant='h1'
          sx={{
            textAlign:'center',
            paddingBottom: {xs:4, sm:10},
          }}
        >
          Projects Using ZK Email
        </Typography>

        <Grid container spacing={2} direction="row" sx={{ paddingTop: "16px",  justifyContent:'center' }}>
          <Grid item xs={4}>
            <ProjectCardHighlight projectTitle="ZKP2P" url='https://zkp2p.xyz/' projectDescription="Peer to peer marketplace for decentralized onramp/offramp to Ethereum via Venmo, UPI, Garanti, and more." projectTag="Protocol Kit"/>
          </Grid>
          <Grid item xs={4}>
            <ProjectCardHighlight projectTitle="Email Wallet" url='https://emailwallet.org/' projectDescription="Email a relayer in order to transfer money or transact on Ethereum, anonymously." projectTag="Protocol Kit"/>
          </Grid>
          <Grid item xs={4}>
            <ProjectCardHighlight projectTitle="Proof of Twitter" url='https://twitter.prove.email/' projectDescription="Prove you own a Twitter username on-chain, via any email from Twitter." projectTag="Protocol Kit"/>
          </Grid>
        </Grid>
      </div>





      {/* BUILD YOUR OWN PROJECT CALL OUT ON MAIN PAGE */}
      <ActionCard title='Build Your Own' text='No trusted hardware. No trusted attestation servers. Only trust zero knowledge proofs, smart contracts, email, and DNS infrastructure. All open source MIT libraries.' buttonText='Docs' buttonLink='https://zkemail.gitbook.io/zk-email'/>





      {/* LIBRARIES ON MAIN PAGE */}
      <div className="w-full min-h-[400px] relative z-10">
        <div className="text-center py-10 px-4">
          <Typography variant='h1' 
            sx={{
              textAlign:'center',
              paddingBottom: {xs:4, sm:10},
            }}
          >
              Our Libraries
          </Typography>
          <div className="grid grid-cols-2">
          <div>
            <PopOut
                topText="ZK Email Specific Libraries"
                mainText="ZKEmail Libraries"
                descriptionText="We have several repos within the ZK Email ecosystem. Developers can use these to build their own custom email verification circuits."
                toggleName="Show Libraries"
                cards={[
                  { label: 'Zk Email', url: 'https://example.com/zkemail' },
                  { label: 'Zk Regex UI Tools', url: 'https://example.com/zkregex' },
                  { label: 'DKIM Archive', url: 'https://example.com/dkim' },
                  { label: 'Zk Regex ZK JWTs', url: 'https://example.com/zkjwt' },
                  { label: 'Regex Registry', url: 'https://example.com/regex' },
                  { label: 'Ether Email Auth', url: 'https://example.com/ether' },
                ]}
              />
            </div>
            <div>
              <PopOut
                topText="General ZK Libraries"
                mainText="ZK Libraries"
                descriptionText="We have several repos within the ZK Email ecosystem. Developers can use these to build their own custom email verification circuits."
                toggleName="Show Libraries"
                cards={[
                  { label: "ZK Regex Library", url: "https://example.com/1" },
                  { label: "halo2 benchmarking browser code", url: "https://example.com/2" },
                  { label: "zk psi with grumpkin and hash to curve", url: "https://example.com/3" },
                  { label: "zk strings (base64 + pack)", url: "https://example.com/3" },
                  { label: "zk rsa", url: "https://example.com/3" },
                  { label: "zk variable length sha256", url: "https://example.com/3" },
                ]}
              />
            </div>
          
          </div>
        </div>
      </div>




      {/* VIDEO CAROUSEL ON MAIN PAGE */}
      <div className="w-full py-24">
        <div className="text-center py-10">
          <Typography variant='h1' className="text-5xl">Upcoming & Past Talks</Typography>
          <p className="py-4">Meet the team <span className="font-bold">Aayush, Sora, Saleel, Wataru, Aditya and Elo</span>  <br/>
            at one of our upcoming talks or message us if you have any questions!</p>
        </div>
        <div className="h-[430px] w-full mb-10">
          <VideoCarousel />
        </div>
      </div>
    </main>
  );
}

