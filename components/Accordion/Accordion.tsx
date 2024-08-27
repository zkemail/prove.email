import React, { FC } from 'react';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from "@mui/material/styles";

// Define the props types
interface AccordionProps {
  title: string;
  contents: string;
  alignment?: 'left' | 'right';
}

const CustomAccordion = styled(MuiAccordion)(({ theme }) => ({
  '&:before': {
    display: 'none',
  },
  background: theme.palette.background.default,

  boxShadow: "none",

  borderBottom:

    theme.palette.mode === "light"

      ? "1px solid rgba(0, 0, 0, 0.12)"

      : "1px solid rgba(255,255,255, 0.12)",

  "& .MuiAccordionSummary-root": {

    backgroundColor: "rgba(0, 0, 0, 0)",

    "&:hover .MuiAccordionSummary-expandIconWrapper": {
      color: theme.palette.secondary.main,
    },
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    marginRight: theme.spacing(1),
    transition: 'transform 0.2s',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionDetails-root': {
    // padding: theme.spacing(2),
  },
}));

const Accordion: FC<AccordionProps> = ({ title, contents, alignment = 'left' }) => {
  const theme = useTheme();
  return (
    <CustomAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
        sx={{
          flexDirection: alignment === 'right' ? 'row-reverse' : 'row',
          justifyContent: alignment === 'right' ? 'space-between' : 'flex-start',
          '& .MuiAccordionSummary-expandIconWrapper': {
            order: alignment === 'right' ? 2 : 1,
            marginRight: alignment === 'right' ? 0 : 1,
            marginLeft: alignment === 'right' ? 1 : 0,
          },
          width: '100%',
        }}
      >
        <Typography
          fontWeight="500"
          variant="h5"
          sx={{
            textAlign: alignment === "right" ? "right" : "left",
            flexGrow: 1,
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
            variant="body2"
            sx={{
              paddingLeft: '0px',
              marginLeft: '0px',
              color: theme.palette.text.secondary,
              textAlign: alignment === "right" ? "right" : "left",
            }}
          >
          {contents}
        </Typography>
      </AccordionDetails>
    </CustomAccordion>
  );
};

export default Accordion;