import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';

function Heading () {
  return (
    <Box 
      className='resumeHeading'
      sx={{
        color: 'white',
        bgcolor: 'black',
        p: 1.5, 
        mb:5
      }}
      >
      <Box sx={{          
        fontSize: 'h4.fontSize', 
        fontWeight:600, 
        textAlign:'center', 
        mt: 2.5,
        mb: 1.5
        }}
        >
        Teste
      </Box>

      <Stack direction='row' spacing={3.5} flexWrap="wrap" justifyContent='center' alignItems='center' sx={{mb: 1.5}}>
        <Box sx={{
          display: 'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          gap: 1}}
          >
            <EmailIcon />
            asd@asd.com
        </Box>
        
        <Box sx={{
          display: 'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          gap: 1}}
          >
            <PhoneIcon />
            +1 778 939 8663
        </Box>

        <Box sx={{
          display: 'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          gap: 1}}
          >
            <PlaceIcon />
            New Westminster, BC
        </Box>
      </Stack>
    </Box>
  )
}

function EducationSlot () {
  return (
    <Box sx={{mb: 4}}>
      <Grid container spacing={2} sx={{mb: 1}}>
        <Grid xs={5}>
          <Box>08/2020 - present</Box>
        </Grid>
        <Grid xs={7}>
          <Box sx={{fontWeight: 'bold'}}>London City University</Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={5}>
          <Box>New York City, US</Box>
        </Grid>
        <Grid xs={7}>
          <Box>Bachelors in Economics</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

function Education () {
  return (
    <Box 
      className='resumeEducation'
      sx={{
        p: 5,
        pt: 0,
        pb: 0
      }}
      >
      <Box sx={{          
        fontSize: 'h5.fontSize', 
        fontWeight:600, 
        textAlign:'center',
        bgcolor: '#eef1f2',
        p: 0.3,
        mb: 2
        }}
        >
        Education
      </Box>
      <EducationSlot />
    </Box>
  )
}

function ExperienceSlot () {
  return (
    <Box sx={{mb: 4}}>
      <Grid container spacing={2} sx={{mb: 1}}>
        <Grid xs={5}>
          <Box>08/2020 - present</Box>
        </Grid>
        <Grid xs={7}>
          <Box sx={{fontWeight: 'bold'}}>Umbrella Inc.</Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{mb: 1}}>
        <Grid xs={5}>
          <Box>New York City, US</Box>
        </Grid>
        <Grid xs={7}>
          <Box>UI & UX Designer</Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={5}>
          <Box></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

function Experience () {
  return (
    <Box 
      className='resumeExperience'
      sx={{
        p: 5,
        pt: 0
      }}
      >
      <Box sx={{          
        fontSize: 'h5.fontSize', 
        fontWeight:600, 
        textAlign:'center',
        bgcolor: '#eef1f2',
        p: 0.3,
        mb: 2
        }}
        >
        Professional Experience
      </Box>
      <ExperienceSlot />
    </Box>
  )
}

export default function Resume () {
  return (
    <Paper elevation={3}>
      <Heading />
      <Education />
      <Experience />
    </Paper>
  )
}