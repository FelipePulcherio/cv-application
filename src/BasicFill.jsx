import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './BasicFill.scss';


export default function BasicFill ({
  basicPersonalData,
  setFullName,
  setEmail,
  setPhone,
  setAddress,
  basicEducationData,
  setInitialItemsED,
  basicExperienceData,
  setInitialItemsEX,
}) {
  
  function clearAllForms () {
    setFullName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setInitialItemsED([]);
    setInitialItemsEX([]);
  }

  function loadExampleForm () {
    setFullName(basicPersonalData.fullName);
    setEmail(basicPersonalData.email);
    setPhone(basicPersonalData.phone);
    setAddress(basicPersonalData.address);
    setInitialItemsED(basicEducationData);
    setInitialItemsEX(basicExperienceData);
  }

  return (
    <Stack direction='row' flexWrap={'wrap'} spacing={3} justifyContent='center' alignItems='center'>
      <Button className='clear' variant='text' color='error' startIcon={<DeleteIcon />} onClick={clearAllForms}>
        Clear Resume
      </Button>
      
      <Button className='loadExample' variant='contained' onClick={loadExampleForm}>
        Load Example
      </Button>
    </Stack>
  )
}