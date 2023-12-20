import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BasicFill from './BasicFill.jsx';
import VerticalToggleMenu from './VerticalToggleMenu.jsx';
import VerticalForm from './VerticalForm.jsx';
import Resume from './Resume.jsx';

import { basicPersonalData, basicEducationData, basicExperienceData } from './data.js';

import './App.scss';

export default function App() {

  const [color, setColor] = useState('#1976d2')
  const [font, setFont] = useState('Serif')

  const myTheme = createTheme({
    palette: {
      primary: {
        main: color
      }
    },
    typography: {
      fontFamily: font
    }
  })

  const [activeForm, setActiveForm] = useState('Content')

  const [fullName, setFullName] = useState(basicPersonalData.fullName)

  function handleNameChange (e) {
    setFullName(e.target.value)
  }

  const [email, setEmail] = useState(basicPersonalData.email);

  function handleEmailChange (e) {
    setEmail(e.target.value)
  }

  const [phone, setPhone] = useState(basicPersonalData.phone);

  function handlePhoneChange (e) {
    setPhone(e.target.value)
  }

  const [address, setAddress] = useState(basicPersonalData.address);

  function handleAddressChange (e) {
    setAddress(e.target.value)
  }

  // state from AccordionEDEX component
  const [initialItemsED, setInitialItemsED] = useState(basicEducationData)
  const [initialItemsEX, setInitialItemsEX] = useState(basicExperienceData)


  return (
    <Box sx={{
      p: 2.5,
      pt: {lg: 4},
      pl: {lg: 14.5},
      pr: {lg: 17}
    }}>
      <Grid container disableEqualOverflow spacing={2.5}>
        <Grid xs={5} md={4} lg={5}>
          <Grid container columns={12} spacing={2.5}>
            <Grid xs={12} lg={3}>
              <Paper elevation={3} sx={{p: 1.5}}>
                <VerticalToggleMenu
                  handleClick={setActiveForm}/>
              </Paper>
            </Grid>
            <Grid xs={12} lg={9}>
              <Paper elevation={3} sx={{p: 1.5, mb: 2.5}}>
                <BasicFill
                  basicPersonalData={basicPersonalData}
                  setFullName={setFullName}
                  setEmail={setEmail}
                  setPhone={setPhone}
                  setAddress={setAddress}
                  basicEducationData={basicEducationData}
                  setInitialItemsED={setInitialItemsED}
                  basicExperienceData={basicExperienceData}
                  setInitialItemsEX={setInitialItemsEX}
                  />
              </Paper>
    
              <VerticalForm
                isActive={activeForm}
                nameValue={fullName}
                nameChange={handleNameChange}
                emailValue={email}
                emailChange={handleEmailChange}
                phoneValue={phone}
                phoneChange={handlePhoneChange}
                addressValue={address}
                addressChange={handleAddressChange}
                initialItemsED={initialItemsED}
                setInitialItemsED={setInitialItemsED}
                initialItemsEX={initialItemsEX}
                setInitialItemsEX={setInitialItemsEX}
                color={color}
                setColor={setColor}
                setFont={setFont}
                />
            </Grid>
          </Grid>
        </Grid>
    
        <Grid xs={7} md={8} lg={7}>
          <Grid container columns={12}>
            <Grid xs={12}>
              <ThemeProvider theme={myTheme}>
                <Resume
                  fullName={fullName}
                  email={email}
                  phone={phone}
                  address={address}
                  initialItemsED={initialItemsED}
                  initialItemsEX={initialItemsEX}
                />
              </ThemeProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

/* 
https://sharkri.github.io/cv-application/
https://mui.com/material-ui/react-accordion/
https://mui.com/system/getting-started/the-sx-prop/
https://mui.com/material-ui/material-icons/?query=pin
https://mui.com/system/spacing/
https://mui.com/system/borders/
https://mui.com/material-ui/react-text-field/
https://mui.com/material-ui/react-list/
https://react.dev/learn/rendering-lists
https://react.dev/learn/choosing-the-state-structure
*/