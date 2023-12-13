import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './BasicFill.scss';


export default function BasicFill ({
  nameChange,
  emailChange,
  phoneChange,
  addressChange
}) {
  function clearAllForms () {
    nameChange('');
    emailChange('');
    phoneChange('');
    addressChange('');
  }

  function loadExampleForm () {
    nameChange('Daniel Reynolds');
    emailChange('daniel.reynolds@provider.com');
    phoneChange('+1 123 456 7890');
    addressChange('New Westminster, BC');
  }

  return (
    <Stack direction='row' spacing={0.5} justifyContent='space-between' alignItems='center'>
      <Button className='clear' variant='text' color='error' startIcon={<DeleteIcon />} onClick={clearAllForms}>
        Clear Resume
      </Button>
      
      <Button className='loadExample' variant='contained' onClick={loadExampleForm}>
        Load Example
      </Button>
    </Stack>
  )
}