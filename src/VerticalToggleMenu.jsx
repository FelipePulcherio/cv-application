import { useState } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Box from '@mui/material/Box';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import './VerticalToggleMenu.scss';

export default function VerticalToggleMenu({
  handleClick
}) {
  const [view, setView] = useState('Content');

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
      <ToggleButton 
        className='toggleButton' 
        disableRipple 
        value="Content" 
        aria-label="Content"
        onClick={() => handleClick('Content')}
        >
          <DescriptionOutlinedIcon />
          <Box>Content</Box>
      </ToggleButton>

      <ToggleButton 
        className='toggleButton' 
        disableRipple 
        value="Customize" 
        aria-label="Customize"
        onClick={() => handleClick('Customize')}
        >
          <EditNoteOutlinedIcon />
          <Box>Customize</Box>
      </ToggleButton>

    </ToggleButtonGroup>
  )
}

