// components/Accordion.js
import React, { useState } from 'react';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = ({ title, contents }) => {
  return (
    <MuiAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography color="black">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{contents}</Typography>
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
