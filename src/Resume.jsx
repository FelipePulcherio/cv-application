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
        fontFamily: 'fontFamily',
        color: 'primary.contrastText',
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

  const newSlots = initialItemsED.map( (item) =>
    (item.visible) && (
      <Box sx={{fontFamily: 'fontFamily', mb: 4}}>
        <Grid container spacing={2} sx={{mb: 1}}>
          <Grid xs={5} lg={3}>
            <Box>{item.value3} - {item.value4}</Box>
          </Grid>
          <Grid xs={7} lg={9}>
            <Box sx={{fontWeight: 'bold'}}>{item.value1}</Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid xs={5} lg={3}>
            <Box>{item.value5}</Box>
          </Grid>
          <Grid xs={7} lg={9}>
            <Box>{item.value2}</Box>
          </Grid>
        </Grid>
      </Box>
    )
  )

  return ( <>{newSlots}</> )
}

function Education ({
  initialItemsED
}) {
  return (
    <>
      {(initialItemsED.length > 0) &&
        <Box 
          className='resumeEducation'
          sx={{
            fontFamily: 'fontFamily',
            p: 5,
            pt: 0,
            pb: 0
          }}
          >
          <Box sx={{        
            fontFamily: 'fontFamily',  
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
      }
    </>
  )
}

function ExperienceSlot ({
  initialItemsEX
}) {

  const newSlots = initialItemsEX.map( (item) =>
    (item.visible) && (
      <Box sx={{fontFamily: 'fontFamily', mb: 4}}>
        <Grid container spacing={2} sx={{mb: 1}}>
          <Grid xs={5} lg={3}>
            <Box>{item.value3} - {item.value4}</Box>
          </Grid>
          <Grid xs={7} lg={9}>
            <Box sx={{fontWeight: 'bold'}}>{item.value1}</Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mb: 1}}>
          <Grid xs={5} lg={3}>
            <Box>{item.value5}</Box>
          </Grid>
          <Grid xs={7} lg={9}>
            <Box>{item.value2}</Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid xs={5} lg={3}>
            <Box></Box>
          </Grid>
          <Grid xs={7} lg={9}>
            <Box>{item.value6}</Box>
          </Grid>
        </Grid>
      </Box>
    )
  )

  return ( <>{newSlots}</> )
}

function Experience ({
  initialItemsEX
}) {
  return (
    <>
      {(initialItemsEX.length > 0) &&
        <Box 
          className='resumeExperience'
          sx={{
            fontFamily: 'fontFamily',
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
      }
    </>
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