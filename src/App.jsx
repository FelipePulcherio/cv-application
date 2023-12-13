import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import BasicFill from './BasicFill.jsx';
import VerticalToggleMenu from './VerticalToggleMenu.jsx';
import VerticalForm from './VerticalForm.jsx';
import Resume from './Resume.jsx';

import './App.scss';

export default function App() {

  const [activeComponent, setActiveComponent] = useState('Content');

  return (
    <Box sx={{p: 2.5}}>
      <Grid container disableEqualOverflow spacing={2.5}>

        <Grid xs={5} md={4} lg={5}>
          <Grid container columns={12} spacing={2.5}>
            <Grid xs={12} lg={3}>
              <Paper elevation={3} sx={{p: 1.5}}>
                <VerticalToggleMenu 
                  handleClick={setActiveComponent}/>
              </Paper>
            </Grid>

            <Grid xs={12} lg={9}>

              <Paper elevation={3} sx={{p: 1.5, mb: 2.5}}>
                <BasicFill />
              </Paper>
              
              <VerticalForm
                isActive={activeComponent}/>

            </Grid>
          </Grid>
        </Grid>
        
        <Grid xs={7} md={8} lg={7}>
          <Grid container columns={12}>
            <Grid xs={12}>
              <Resume />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

/* 
https://sharkri.github.io/cv-application/
https://mui.com/material-ui/react-button/
https://mui.com/material-ui/react-stack/
https://mui.com/material-ui/material-icons/
https://mui.com/system/spacing/
 */