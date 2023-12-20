import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import AccordionEDEX from './AccordionEDEX.jsx';

import './VerticalForm.scss';

// 'Content' Form: Personal details
function ContentFormPD ({
  nameValue,
  nameChange,
  emailValue,
  emailChange,
  phoneValue,
  phoneChange,
  addressValue,
  addressChange
}) {
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
          onChange={nameChange}
          value={nameValue}
        />

        <TextField 
          id='email' 
          label='Email' 
          variant='outlined' 
          size='small' 
          margin='normal'
          fullWidth
          onChange={emailChange}
          value={emailValue}
        />

        <TextField 
          id='phone' 
          label='Phone Number' 
          variant='outlined' 
          size='small' 
          margin='normal'
          fullWidth
          onChange={phoneChange}
          value={phoneValue}
        />

        <TextField 
          id='address' 
          label='Address' 
          variant='outlined' 
          size='small' 
          margin='normal'
          fullWidth
          onChange={addressChange}
          value={addressValue}
        />
      </Box>
    </Paper>
  )
}

// 'Customize' Form
function CustomizeForm ({
  color,
  setColor
}) {

  return (
    <>
      <Paper elevation={3} sx={{p: 1.5, mb: 2.5}}>
        <Box
          sx={{
            fontSize: 'h5.fontSize',
            fontWeight:600,
            textAlign:'center',
            mb:2.5
          }}
        >
          Color
        </Box>
        <Stack direction='row' gap={2} flexWrap="wrap" justifyContent='start' alignItems='center' sx={{mb: 1.5}}>
          <Box sx={{fontWeight: 600}}>Accent Color</Box>
          <input type='color' value={color} onChange={e => setColor(e.target.value)}></input>
        </Stack>
      </Paper>
    </>
  )
}

// Main function
export default function VerticalForm ({
    isActive,
    nameValue,
    nameChange,
    emailValue,
    emailChange,
    phoneValue,
    phoneChange,
    addressValue,
    addressChange,
    initialItemsED,
    setInitialItemsED,
    initialItemsEX,
    setInitialItemsEX,
    color,
    setColor
  }) {
    return (
      <>
        {(() => {
          switch (isActive) {
            case 'Content':
              return (
                <>
                  <ContentFormPD 
                    nameValue={nameValue} 
                    nameChange={nameChange}
                    emailValue={emailValue}
                    emailChange={emailChange}
                    phoneValue={phoneValue}
                    phoneChange={phoneChange}
                    addressValue={addressValue}
                    addressChange={addressChange}
                  />
                  <AccordionEDEX 
                    initialItemsED={initialItemsED}
                    setInitialItemsED={setInitialItemsED}
                    initialItemsEX={initialItemsEX}
                    setInitialItemsEX={setInitialItemsEX}
                  />
                </>
                );
            case 'Customize':
              return <CustomizeForm 
                color={color}
                setColor={setColor}
              />;
          }
        })()}
      </>
    );
  }