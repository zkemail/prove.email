
// import React, { FC } from 'react';
// import {
//   Accordion as MuiAccordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   styled,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// // Define the props types
// interface AccordionProps {
//   title: string;
//   contents: string;
// }

// const CustomAccordion = styled(MuiAccordion)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   '&:before': {
//     display: 'none',
//   },
//   boxShadow: 'none',
//   borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
//   '& .MuiAccordionSummary-root': {
//     backgroundColor: 'rgba(0, 0, 0, 0.0)',
//   },
//   '& .MuiAccordionSummary-content': {
//     margin: 0,
//   },
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(180deg)',
//   },
//   '& .MuiAccordionDetails-root': {
//     padding: theme.spacing(2),
//   },
// }));

// const Accordion: FC<AccordionProps> = ({ title, contents }) => {
//   return (
//     <CustomAccordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel-content"
//         id="panel-header"
//       >
//         <Typography color="black" fontWeight="500" fontSize="19px">{title}</Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>{contents}</Typography>
//       </AccordionDetails>
//     </CustomAccordion>
//   );
// };

// export default Accordion;












import React, { FC } from 'react';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define the props types
interface AccordionProps {
  title: string;
  contents: string;
}

const CustomAccordion = styled(MuiAccordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '&:before': {
    display: 'none',
  },
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  '& .MuiAccordionSummary-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    order: -1,
    marginRight: theme.spacing(2),
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionDetails-root': {
    padding: theme.spacing(2),
  },
}));

const Accordion: FC<AccordionProps> = ({ title, contents }) => {
  return (
    <CustomAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography color="black" fontWeight="500" sx={{fontSize: {xs:"10px", sm:"15px", md:"19px"} }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{contents}</Typography>
      </AccordionDetails>
    </CustomAccordion>
  );
};

export default Accordion;
