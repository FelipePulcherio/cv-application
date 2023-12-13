import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './BasicFill.scss';


export default function BasicFill () {
  return (
    <Stack direction='row' spacing={0.5} justifyContent='space-between' alignItems='center'>
      <Button className='clear' variant='text' color='error' startIcon={<DeleteIcon />}>
        Clear Resume
      </Button>
      
      <Button className='loadExample' variant='contained'>
        Load Example
      </Button>
    </Stack>
  )
}