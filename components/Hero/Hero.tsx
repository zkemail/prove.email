// 'use client'
// import CustomButton from '../CustomButton/CustomButton';
// import Image from 'next/image';
// import { Box, Stack, Typography } from '@mui/material';
// import { useState, useEffect } from 'react';
// import localFont from 'next/font/local';

// // for animations
// import { animate, motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// // for envelope svgs that will get stacked on each other
// import rectangleEnvelope from '../../public/rectangleEnvelope.svg';  
// import triangleEnvelope from '../../public/triangleEnvelope.svg';  
// import LabelImportantIcon from '@mui/icons-material/LabelImportant';
// import EnvelopeBlurEffect from '../../public/EnvelopeBlurEffect.svg'

// // grey scale backgrounds with the blocks
// import rectangle1 from '../.././public/rectangle1.svg'
// import rectangle2 from '../.././public/rectangle2.svg'
// import rectangle3 from '../.././public/rectangle3.svg'

// // colored scale backgrounds with the blocks
// import heroBackground1 from '../.././public/heroBackground1.svg'
// import heroBackground2 from '../.././public/heroBackground2.svg'
// import heroBackground3 from '../.././public/heroBackground3.svg'
// import { Rectangle } from '@mui/icons-material';

// // array for different backgrouns to flip bettween  
// const backgrounds = [rectangle1, rectangle2, rectangle3];
// // const backgrounds = [heroBackground1, heroBackground2, heroBackground3];


// // Import the local Berkeley Old Style font
// const berkeleyOldStyle = localFont({
//   src: '../.././font/BerkeleyOldStyle.ttf',
//   variable: '--berkeley',
// });


// // Define Fade-in animation variants
// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.35,  // duration of the animation
//     },
//   },
// };

// const delayedFadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,  // duration of the animation
//       delay: 0.5,  // delay before the animation starts
//     },
//   },
// };

// export default function Hero() {
//   const [isEmailOpen, setIsEmailOpen] = useState(false);
//   const [backgroundIndex, setBackgroundIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 500);
//     return () => clearInterval(interval);
//   }, []);

//   const handleToggle = () => {
//     setIsEmailOpen(!isEmailOpen);
//   };

//   return (
//     <main 
//       className="px-16 pt-16 w-full bg-[#F6F5F5] text-center align-content-center content-center"
//       style={{
//         backgroundImage: `url(${backgrounds[backgroundIndex].src})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className='z-50 relative'>
//         <motion.div
//           variants={fadeInAnimationVariants}
//           initial='initial'
//           whileInView='animate'
//           viewport={{ once: true }}
//         >
//           <Typography variant='h1'
//             sx={{
//               fontFamily: berkeleyOldStyle.style.fontFamily,
//               lineHeight: '90%',
//               paddingTop: {xs:'10px', sm:'30px'},
//               // fontSize: {
//               //   xs: '3rem',  // font size for extra small screens
//               //   sm: '3.5rem',    // font size for small screens
//               //   md: '3.5rem',  // font size for medium screens
//               //   lg: '9rem',    // font size for large screens
//               //   xl: '9rem',  // font size for extra large screens
//               // },
//               fontSize: {
//                 xs: '2.3rem',  // font size for extra small screens
//                 sm: '2.5rem',    // font size for small screens
//                 md: '3rem',  // font size for medium screens
//                 lg: '4.5rem',    // font size for large screens
//                 xl: '5rem',  // font size for extra large screens
//               },
//             }}
//           >
//             Prove who sent an email <br></br> & any of it&apos;s contents.</Typography>
//         </motion.div>
//         {/* <p className='pb-3'>Prove who sent an email & any of its contents. Anonymously. On or Offchain.</p> */}
//         <p className='pb-3 pt-3 text-sm md:text-lg'>Anonymously prove any subset of any email you sent or received. On or Offchain. </p>
        
//         <div className='content-center items-center flex justify-center'>
//           <Stack spacing={2} direction="row" sx={{ paddingTop: "16px" }}>
//             <CustomButton buttonLabel="Docs" filledIn={true} target='_blank' url='https://zkemail.gitbook.io/zk-email'>
//               material ui button
//             </CustomButton>
//             <CustomButton buttonLabel="Projects" filledIn={false} url='/projects'>
//               material ui button
//             </CustomButton>
//           </Stack>
//         </div>
//       </div>

//       <motion.div
//         variants={delayedFadeInAnimationVariants}
//         initial='initial'
//         whileInView='animate'
//         viewport={{ once: true }}
//       >
//         {/* ENVELOPE MAIL STUFF */}
//         <div className="relative w-fit flex justify-center mx-auto mt-16 cursor-pointer " onClick={handleToggle}>
//           {/* ENVELOPE MAIL PAPER */}
//           <div className="absolute inset-0 rounded-lg bg-white w-3/4 mx-auto p-3 sm:p-16 sm:p-20 text-left text-[5px] sm:text-[10px] md:text-[13px] lg:text-[15px]" style={{ zIndex: 1 }}>
//             <div className='font-semibold'>
//               <div className='grid grid-cols-2'>
//                 <div>
//                   <p>From: zkEmail</p>
//                   <p>To: Developers</p>
//                 </div>
//                 <LabelImportantIcon
//                   className='justify-self-end'
//                   sx={{
//                     color: '#FFBB6B',
//                     fontSize: {
//                       xs: '10px',  
//                       sm: '24px',
//                       md: '32px',  
//                     },
//                   }}
//                 />
//               </div>
//               <p className='pt-2 pb-2 sm:pt-8 sm:pb-4'>Subject: prove any content for any email, sent or received </p>
//             </div>
//             <div>
//               <p>
//                 we built a primitive that allows you to prove only what content you want from an email. hide what you don’t want known. + Prove who sent the email.
//                 <br />
//                 Excited to see what you build : )
//                 <br />
//                 <br></br>
//                 <span className='font-semibold'>The Zk team</span>
//                 <br />
//                 Aayush, Sora, Saleel, Wataru, Aditya and Elo
//               </p>
//             </div>
//           </div>
//           {/* TRIANGLE PART OF ENVELOPE */}
//           <Box className={`translate-y-[30px] absolute transition-transform duration-500 ${isEmailOpen ? 'transform translate-y-[355px]' : ''}`} sx={{ zIndex: 0, top: '-40%', width: '100%', height: 'auto' }}>
//             <Image
//               src={triangleEnvelope}
//               alt='Triangle Envelope'
//               className='w-full h-full'
//               style={{ zIndex: 0 }}
//             />
//           </Box>
//           {/* RECTANGULAR ENVELOPE */}
//           <Box className={`translate-y-[30px] transition-transform duration-500 ${isEmailOpen ? 'transform translate-y-[355px]' : ''}`} sx={{ zIndex: 1, clipPath: 'M 10 90 Q 0 90 0 80 L 0 10 Q 0 0 10 0 L 90 0 Q 100 0 100 10 L 100 80 Q 100 90 90 90 Z M 10 10 L 50 50 L 90 10 Z'}}>
//             <Image
//               src={rectangleEnvelope}
//               alt='Rectangle Envelope'
//               className='w-full h-full'
//               style={{ zIndex: 1 }}
//             />
//           </Box>
//         </div>
//       </motion.div>
//     </main>
//   );
// }


'use client';
import CustomButton from '../CustomButton/CustomButton';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import rectangleEnvelope from '../../public/rectangleEnvelope.svg';
import triangleEnvelope from '../../public/triangleEnvelope.svg';
import rectangle1 from '../../public/rectangle1.svg';
import rectangle2 from '../../public/rectangle2.svg';
import rectangle3 from '../../public/rectangle3.svg';

const backgrounds = [rectangle1, rectangle2, rectangle3];

const berkeleyOldStyle = localFont({
  src: '../.././font/BerkeleyOldStyle.ttf',
  variable: '--berkeley',
});

export default function Hero() {
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
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
    <main
      className={`px-16 pt-16 w-full bg-[#F6F5F5] text-center align-content-center content-center ${isHovering ? 'custom-cursor-active' : ''}`}
      style={{
        backgroundImage: `url(${backgrounds[backgroundIndex].src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className='custom-cursor'
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          position: 'fixed',
          zIndex: 10000,
        }}
      ></div>
      <div className='z-50 relative'>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <Typography
            variant='h1'
            sx={{
              fontFamily: berkeleyOldStyle.style.fontFamily,
              lineHeight: '90%',
              paddingTop: { xs: '10px', sm: '30px' },
              fontSize: {
                xs: '2.3rem',
                sm: '2.5rem',
                md: '3rem',
                lg: '4.5rem',
                xl: '5rem',
              },
            }}
          >
            Prove who sent an email <br /> & any of it&apos;s contents.
          </Typography>
        </motion.div>
        <p className='pb-3 pt-3 text-sm md:text-lg'>Anonymously prove any subset of any email you sent or received. On or Offchain. </p>
        <div className='content-center items-center flex justify-center'>
          <Stack spacing={2} direction='row' sx={{ paddingTop: '16px' }}>
            <CustomButton buttonLabel='Docs' filledIn={true} target='_blank' url='https://zkemail.gitbook.io/zk-email'>
              material ui button
            </CustomButton>
            <CustomButton buttonLabel='Projects' filledIn={false} url='/projects'>
              material ui button
            </CustomButton>
          </Stack>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <div className='relative w-fit flex justify-center mx-auto mt-16 cursor-none' onClick={handleToggle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='absolute inset-0 rounded-lg bg-white w-3/4 mx-auto p-3 sm:p-16 sm:p-20 text-left text-[5px] sm:text-[10px] md:text-[13px] lg:text-[15px]' style={{ zIndex: 1 }}>
            <div className='font-semibold'>
              <div className='grid grid-cols-2'>
                <div>
                  <p>From: zkEmail</p>
                  <p>To: Developers</p>
                </div>
                <LabelImportantIcon
                  className='justify-self-end'
                  sx={{
                    color: '#FFBB6B',
                    fontSize: {
                      xs: '10px',
                      sm: '24px',
                      md: '32px',
                    },
                  }}
                />
              </div>
              <p className='pt-2 pb-2 sm:pt-8 sm:pb-4'>Subject: prove any content for any email, sent or received </p>
            </div>
            <div>
              <p>
                we built a primitive that allows you to prove who sent an email + prove only what content you want from an email while hiding what you don’t want known.
                <br />
                Excited to see what you build : )
                <br />
                <br />
                <span className='font-semibold'>The Zk team</span>
                <br />
                Aayush, Sora, Saleel, Wataru, Aditya and Elo
              </p>
            </div>
          </div>
          <Box className={`translate-y-[30px] absolute transition-transform duration-500 ${isEmailOpen ? 'transform translate-y-[355px]' : ''}`} sx={{ zIndex: 0, top: '-40%', width: '100%', height: 'auto' }}>
            <Image src={triangleEnvelope} alt='Triangle Envelope' className='w-full h-full' style={{ zIndex: 0 }} />
          </Box>
          <Box className={`translate-y-[30px] transition-transform duration-500 ${isEmailOpen ? 'transform translate-y-[355px]' : ''}`} sx={{ zIndex: 1 }}>
            <Image src={rectangleEnvelope} alt='Rectangle Envelope' className='w-full h-full' style={{ zIndex: 1 }} />
          </Box>
        </div>
      </motion.div>
      <style jsx>{`
        .custom-cursor {
          cursor: none;
        }

        .custom-cursor::after {
          content: '';
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
    </main>
  );
}
