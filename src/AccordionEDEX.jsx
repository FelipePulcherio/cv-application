import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AddIcon from '@mui/icons-material/Add';


export default function AccordionEDEX ({
  initialItemsED,
  setInitialItemsED,
  initialItemsEX,
  setInitialItemsEX
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <MyAccordion 
        accordionNumber={1}
        isActive={activeIndex === 1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        items={initialItemsED}
        setItems={setInitialItemsED}
        mainTitle={'Education'}
        mainIcon={<SchoolIcon />}
      />
      <MyAccordion 
        accordionNumber={2}
        isActive={activeIndex === 2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        items={initialItemsEX}
        setItems={setInitialItemsEX}
        mainTitle={'Experience'}
        mainIcon={<WorkIcon />}
      />
    </>
  )
}

function MyAccordion ({
  accordionNumber,
  isActive, 
  activeIndex,
  setActiveIndex,
  items,
  setItems,
  mainTitle,
  mainIcon
  }) {

  function handleChangeAccordion() {

    if (accordionNumber === activeIndex) {
      return setActiveIndex(0)

    } else if (accordionNumber === 1) {
      return setActiveIndex(1)

    } else if (accordionNumber === 2) {
      return setActiveIndex(2)
    }
  }

  // Raised this state to App
  //const [items, setItems] = useState(initialItems)

  function handleAddItem() {
    const addItem = { id: uuidv4(), visible: true, title1: '', value1: 'New', title2: '', value2: '', value3: '', value4: '', value5: '', value6: '' }

    if (accordionNumber == 1) {
      addItem.title1 = 'School'
      addItem.title2 = 'Degree'
    } else if (accordionNumber == 2) {
      addItem.title1 = 'Company Name'
      addItem.title2 = 'Position Title'
    }

    setItems([...items, addItem ])
  }

  function handleUpdateItem(updatedItem) {  
    if (accordionNumber == 1) {
      updatedItem.title1 = 'School'
      updatedItem.title2 = 'Degree'
    } else if (accordionNumber == 2) {
      updatedItem.title1 = 'Company Name'
      updatedItem.title2 = 'Position Title'
    }

    setItems(items.map(item => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    }))
  }
  
  function handleDeleteItem(itemId) {
    setItems(
      items.filter(item => item.id !== itemId)
    )
  }

  function handleIconClick(itemId) {
    const clickedObject = items.filter(item => item.id == itemId);
    clickedObject[0].visible = !(clickedObject[0].visible);

    return (handleUpdateItem(clickedObject)); 
  }

  function GenerateList ({items, handleUpdateItem, handleDeleteItem, handleIconClick}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClicked, setIsClicked] = useState('');

    const newItems = items.map((item, index, array) => 
      <div key={item.id}>
        <ListItem key={item.id}>
          <ListItemText sx={{cursor: 'pointer'}} primary={item.value1} onClick={() => {setIsExpanded(true); setIsClicked(item.id)}}/>
          <IconButton onClick={() => handleIconClick(item.id)}>
            {item.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </ListItem>
        {!((array.length - 1) === index) && (<Divider />)}
      </div>
    )
    
    return (
      <>
        {isExpanded ? (
          <OptionsExpanded 
            setIsExpanded={setIsExpanded} handleUpdateItem={handleUpdateItem} handleDeleteItem={handleDeleteItem} items={items} itemId={isClicked} required={(accordionNumber == 2) && true}
          />
        ) : ( 
          <List>{newItems}</List>
        )}
      </>
    )
  }
    
  return (
    <Accordion 
      className='accordion' 
      expanded={isActive} 
      elevation={3} 
      sx={{mb: 2.5}}
      onChange={() => handleChangeAccordion()}
      >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Box 
          sx={{
            fontSize: 'h5.fontSize', 
            fontWeight:600, 
            display:'flex',
            justifyContent:'center',
            alignItems:'center', 
            gap: 1.5
          }}
          >
          {mainIcon}
          {mainTitle}
        </Box>
      </AccordionSummary>
      <AccordionDetails sx ={{pt:0, pb:1 }}>

        <GenerateList items={items} handleUpdateItem={handleUpdateItem} handleDeleteItem={handleDeleteItem} handleIconClick={handleIconClick}/>

        <Stack sx={{pt:1.7, pb:1}} direction='row' justifyContent='center' alignItems='center'>
          <Button onClick={() => handleAddItem('Title')} variant='contained' startIcon={<AddIcon />} sx={{fontWeight:600, textTransform:'none'}}>{mainTitle}</Button>
        </Stack>

      </AccordionDetails>
    </Accordion>
  )
}

function OptionsExpanded ({
  setIsExpanded,
  handleUpdateItem,
  handleDeleteItem,
  items,
  itemId,
  required=false
  }) {

  const clickedObject = items.filter(item => item.id == itemId);

  const [newValue1ED, setNewValue1ED] = useState(clickedObject[0].value1);

  function handleValue1EDChange (e) {
    setNewValue1ED(e.target.value);
  }

  const [newValue2ED, setNewValue2ED] = useState(clickedObject[0].value2);

  function handleValue2EDChange (e) {
    setNewValue2ED(e.target.value);
  }

  const [newValue3ED, setNewValue3ED] = useState(clickedObject[0].value3);

  function handleValue3EDChange (e) {
    setNewValue3ED(e.target.value);
  }

  const [newValue4ED, setNewValue4ED] = useState(clickedObject[0].value4);

  function handleValue4EDChange (e) {
    setNewValue4ED(e.target.value);
  }

  const [newValue5ED, setNewValue5ED] = useState(clickedObject[0].value5);

  function handleValue5EDChange (e) {
    setNewValue5ED(e.target.value);
  }

  const [newValue6ED, setNewValue6ED] = useState(clickedObject[0].value6);

  function handleValue6EDChange (e) {
    setNewValue6ED(e.target.value);
  }

  const updatedItem = { id: itemId, visible: true, title1: '', value1: newValue1ED, title2:'', value2: newValue2ED, value3: newValue3ED, value4: newValue4ED, value5: newValue5ED, value6: newValue6ED}

  return (
    <Box
      component='form' 
      noValidate 
      autoComplete='off'
      sx={{pb:2}}>

      <TextField 
        id={clickedObject[0].title1} 
        label={clickedObject[0].title1}
        value={newValue1ED}
        onChange={handleValue1EDChange}
        variant='outlined' 
        size='small' 
        fullWidth
        margin='normal'
      />

      <TextField 
        id={clickedObject[0].title2} 
        label={clickedObject[0].title2} 
        value={newValue2ED}
        onChange={handleValue2EDChange}
        variant='outlined' 
        size='small' 
        fullWidth
        margin='normal'
      />

      <Stack direction='row' gap={2} justifyContent='center' alignItems='center'>
        <TextField
          id='Start'
          label='Start Date'
          value={newValue3ED}
          onChange={handleValue3EDChange}
          variant='outlined'
          size='small'
          margin='normal'
        />

        <TextField
          id='End'
          label='End Date'
          value={newValue4ED}
          onChange={handleValue4EDChange}
          variant='outlined'
          size='small'
          margin='normal'
        />
      </Stack>

      <TextField 
        id='Location'
        label='Location'
        value={newValue5ED}
        onChange={handleValue5EDChange}
        variant='outlined' 
        size='small' 
        fullWidth
        margin='normal'
      />

      <>
        {(required) && (
          <TextField 
          id='Description'
          label='Description'
          value={newValue6ED}
          onChange={handleValue6EDChange}
          variant='outlined' 
          size='small' 
          fullWidth
          multiline
          margin='normal'
          />
        )}
      </>

      <Stack sx={{mt:2}} direction='row' gap={2} flexWrap='wrap' justifyContent='center' alignItems='center'>
        <Button variant="outlined" onClick={() => handleDeleteItem(itemId)}>Delete</Button>
        <Button variant="outlined" onClick={() => setIsExpanded(false)}>Cancel</Button>
        <Button variant="contained" onClick={() => handleUpdateItem(updatedItem)}>Save</Button>
      </Stack>
    </Box>
  )
}