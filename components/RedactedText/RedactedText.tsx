// import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';
// import { styled } from '@mui/system';

// interface RedactedTextProps {
//   text: string;
// }

// const RedactedBox = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundColor: 'black',
//   transition: 'transform 0.5s ease-in-out',
//   transformOrigin: 'left',
// }));

// const RedactedText: React.FC<RedactedTextProps> = ({ text }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Box
//       className="relative inline-block cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Typography variant='h4' className="relative z-10">{text}</Typography>
//       <RedactedBox
//         className={isHovered ? 'transform translate-x-full' : ''}
//       />
//     </Box>
//   );
// };

// export default RedactedText;



import React, { useState } from 'react';
import { Box, Typography} from '@mui/material';
import { styled } from '@mui/system';

interface RedactedTextProps {
  text: string;
}

const RedactedBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
  transformOrigin: 'left',
}));

const RedactedText: React.FC<RedactedTextProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <Typography variant='h4' sx={{fontSize: {xs:'8px', sm:'15px', md:'19px'}}} className="relative z-10 ">{text}</Typography>
      <RedactedBox
        style={{
          transform: isHovered ? 'translateX(100%)' : 'translateX(0)',
          opacity: isHovered ? 0 : 1,
        }}
      />
    </Box>
  );
};

export default RedactedText;
