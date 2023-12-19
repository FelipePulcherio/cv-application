import { v4 as uuidv4 } from 'uuid';

const basicPersonalData = {
  fullName: 'Daniel Reynolds',
  email: 'daniel.reynolds@provider.com',
  phone: '+1 123 456 7890',
  address: 'New Westminster, BC'
}

const basicEducationData = [
  { 
    id: uuidv4(), 
    visible: true, 
    title1: 'School', 
    value1:'London City University', 
    title2:'Degree', 
    value2: 'Bachelors in Economics', 
    value3: '08/2020', 
    value4: 'present', 
    value5: 'New York City, US', 
    value6: ''
  },
  { 
    id: uuidv4(), 
    visible: false, 
    title1: 'School', 
    value1:'Hidden University', 
    title2:'Degree', 
    value2: 'Masters Degree in Math', 
    value3: '08/2020', 
    value4: 'present', 
    value5: 'New York City, US', 
    value6: ''
  }
]

const basicExperienceData = [
  { 
    id: uuidv4(), 
    visible: true, 
    title1: 'Company Name', 
    value1:'Umbrella Inc.', 
    title2:'Position Title', 
    value2: 'UI & UX Designer', 
    value3: '08/2020', 
    value4: 'present', 
    value5: 'New York City, US', 
    value6: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android.'
  },
  { 
    id: uuidv4(), 
    visible: false, 
    title1: 'Company Name', 
    value1:'Black Mesa Labs', 
    title2:'Position Title', 
    value2: 'UX Research Assistant', 
    value3: '04/2018', 
    value4: '02/2019', 
    value5: 'Berlin, Germany', 
    value6: 'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.'
  }
]

export {basicPersonalData, basicEducationData, basicExperienceData}