import { useState } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Box from '@mui/material/Box';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import './VerticalToggleMenu.scss';

export default function VerticalToggleMenu() {
  const [view, setView] = useState('content');

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  return (
    
    <ToggleButtonGroup 
      className='toggleButtonGroup'
      color='primary'
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
      fullWidth
    >
      <ToggleButton className='toggleButton' disableRipple value="content" aria-label="content">
        <DescriptionOutlinedIcon />
        <Box>Content</Box>
      </ToggleButton>
      <ToggleButton className='toggleButton' disableRipple value="customize" aria-label="customize">
        <EditNoteOutlinedIcon />
        <Box>Customize</Box>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

