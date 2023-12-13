import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import AccordionEDEX from './AccordionEDEX.jsx';

import './VerticalForm.scss';

// 'Content' Form: Personal details
function ContentFormPD () {
  return (
    <Paper elevation={3} sx={{p: 1.5, mb: 2.5}}>
      <Box 
        component='form' 
        noValidate 
        autoComplete='off'
      >
        <Box 
          sx={{
            fontSize: 'h5.fontSize', 
            fontWeight:600, 
            textAlign:'center', 
            mb:1
          }}
        >
          Personal Details
        </Box>

        <TextField 
          id='fullName' 
          label='Full Name' 
          variant='outlined' 
          size='small' 
          fullWidth
          margin='normal'
        />

        <TextField 
          id='email' 
          label='Email' 
          variant='outlined' 
          size='small' 
          margin='normal'
          fullWidth
        />

        <TextField 
          id='phone' 
          label='Phone Number' 
          variant='outlined' 
          size='small' 
          margin='normal'
          fullWidth
        />

        <TextField 
          id='address' 
          label='Address' 
          variant='outlined' 
          size='small' 
          margin='normal'
          fullWidth
        />
      </Box>
    </Paper>
  )
}

// 'Customize' Form
function CustomizeForm () {
  return <div>Component 2B</div>
}

// Main function
export default function VerticalForm ({
    isActive
  }) {
    return (
      <>
        {(() => {
          switch (isActive) {
            case 'Content':
              return (
                <>
                  <ContentFormPD />
                  <AccordionEDEX />
                </>
                );
            case 'Customize':
              return <CustomizeForm />;
          }
        })()}
      </>
    );
  }