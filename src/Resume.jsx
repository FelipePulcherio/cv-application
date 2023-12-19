import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';

function Heading ({
  fullName,
  email,
  phone,
  address
}) {
  return (
    <Box 
      className='resumeHeading'
      sx={{
        color: 'white',
        bgcolor: 'primary.main',
        p: 1.5, 
        mb:5
      }}
      >
      <Box sx={{          
        fontSize: 'h4.fontSize', 
        fontWeight:600, 
        textAlign:'center', 
        mt: 2.5,
        mb: 2
        }}
        >
        {fullName}
      </Box>

      <Stack direction='row' gap={2} flexWrap="wrap" justifyContent='center' alignItems='center' sx={{mb: 1.5}}>
        <Box sx={{
          display: 'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          gap: 1}}
          >
            <EmailIcon />
            {email}
        </Box>
        
        <Box sx={{
          display: 'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          gap: 1}}
          >
            <PhoneIcon />
            {phone}
        </Box>

        <Box sx={{
          display: 'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          gap: 1}}
          >
            <PlaceIcon />
            {address}
        </Box>
      </Stack>
    </Box>
  )
}

function EducationSlot ({
  initialItemsED
}) {
  return (
    <Box sx={{mb: 4}}>
      <Grid container spacing={2} sx={{mb: 1}}>
        <Grid xs={5}>
          <Box>{initialItemsED[0].value3} - {initialItemsED[0].value4}</Box>
        </Grid>
        <Grid xs={7}>
          <Box sx={{fontWeight: 'bold'}}>{initialItemsED[0].value1}</Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={5}>
          <Box>{initialItemsED[0].value5}</Box>
        </Grid>
        <Grid xs={7}>
          <Box>{initialItemsED[0].value2}</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

function Education ({
  initialItemsED
}) {
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
      <EducationSlot 
        initialItemsED={initialItemsED}
      />
    </Box>
  )
}

function ExperienceSlot ({
  initialItemsEX
}) {
  return (
    <Box sx={{mb: 4}}>
      <Grid container spacing={2} sx={{mb: 1}}>
        <Grid xs={5}>
          <Box>{initialItemsEX[0].value3} - {initialItemsEX[0].value4}</Box>
        </Grid>
        <Grid xs={7}>
          <Box sx={{fontWeight: 'bold'}}>{initialItemsEX[0].value1}</Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{mb: 1}}>
        <Grid xs={5}>
          <Box>{initialItemsEX[0].value5}</Box>
        </Grid>
        <Grid xs={7}>
          <Box>{initialItemsEX[0].value2}</Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={5}>
          <Box></Box>
        </Grid>
        <Grid xs={7}>
          <Box>{initialItemsEX[0].value6}</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

function Experience ({
  initialItemsEX
}) {
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
      <ExperienceSlot 
        initialItemsEX={initialItemsEX}
      />
    </Box>
  )
}

export default function Resume ({
  fullName,
  email,
  phone,
  address,
  initialItemsED,
  initialItemsEX
}) {
  return (
    <Paper elevation={3}>
      <Heading 
        fullName={fullName}
        email={email}
        phone={phone}
        address={address}
      />
      <Education 
        initialItemsED={initialItemsED}
      />
      <Experience 
        initialItemsEX={initialItemsEX}
      />
    </Paper>
  )
}