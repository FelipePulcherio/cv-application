import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


export default function AccordionEDEX () {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <>
      <AccordionED 
        isActive={activeIndex === 1}
        handleClick={setActiveIndex}
      />
      <AccordionEX 
        isActive={activeIndex === 2}
        handleClick={setActiveIndex}
      />
    </>
  )
}

function AccordionED ({isActive, handleClick}) {
  return (
    <Accordion 
      className='accordion' 
      expanded={isActive} 
      elevation={3} 
      sx={{mb: 2.5}}
      onChange={() => isActive ? handleClick(0) : handleClick(1)}
      >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Box 
          sx={{
            fontSize: 'h5.fontSize', 
            fontWeight:600, 
            display:'flex',
            justifyContent:'center',
            alignItems:'center', 
            gap: 1.5,
          }}
          >
          <SchoolIcon />
          Education
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Caracoles!
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

function AccordionEX ({isActive, handleClick}) {
  return (
    <Accordion 
      className='accordion' 
      expanded={isActive} 
      elevation={3}
      onChange={() => isActive ? handleClick(0) : handleClick(2)}
      >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Box 
          sx={{
            fontSize: 'h5.fontSize', 
            fontWeight:600, 
            display:'flex',
            justifyContent:'center',
            alignItems:'center', 
            gap: 1.5,
          }}
          >
          <WorkIcon />
          Experience
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Caracoles!
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}