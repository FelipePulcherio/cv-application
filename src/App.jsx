import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import BasicFill from './BasicFill.jsx';
import VerticalToggleMenu from './VerticalToggleMenu.jsx';
import VerticalForm from './VerticalForm.jsx';
import Resume from './Resume.jsx';

import { basicPersonalData, basicEducationData, basicExperienceData } from './data.js';

import './App.scss';

export default function App() {

  const initialPDItems = basicPersonalData;
  let initialItemsED = basicEducationData;
  let initialItemsEX = basicExperienceData;

  const [activeForm, setActiveForm] = useState('Content');


  const [fullName, setFullName] = useState(initialPDItems.fullName);

  function handleNameChange (e) {
    setFullName(e.target.value);
  }

  const [email, setEmail] = useState(initialPDItems.email);

  function handleEmailChange (e) {
    setEmail(e.target.value);
  }

  const [phone, setPhone] = useState(initialPDItems.phone);

  function handlePhoneChange (e) {
    setPhone(e.target.value);
  }

  const [address, setAddress] = useState(initialPDItems.address);

  function handleAddressChange (e) {
    setAddress(e.target.value);
  }

  return (
    <Box sx={{p: 2.5}}>
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
                  initialPDItems={initialPDItems}
                  initialItemsED={initialItemsED}
                  initialItemsEX={initialItemsEX}
                  nameChange={setFullName}
                  emailChange={setEmail}
                  phoneChange={setPhone}
                  addressChange={setAddress}
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
                />
            </Grid>
          </Grid>
        </Grid>
        
        <Grid xs={7} md={8} lg={7}>
          <Grid container columns={12}>
            <Grid xs={12}>
              <Resume 
                fullName={fullName}
                email={email}
                phone={phone}
                address={address}
              />
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