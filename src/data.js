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
    value1: 'University of British Columbia', 
    title2: 'Degree', 
    value2: 'Bachelors in Computer Science', 
    value3: '05/2020', 
    value4: '05/2023', 
    value5: 'Vancouver, CA', 
    value6: ''
  },
  { 
    id: uuidv4(), 
    visible: false, 
    title1: 'School', 
    value1: 'Hidden University', 
    title2: 'Degree', 
    value2: 'Masters Degree in Physics', 
    value3: '01/2018', 
    value4: '01/2020', 
    value5: 'Toronto, CA', 
    value6: ''
  }
]

const basicExperienceData = [
  { 
    id: uuidv4(), 
    visible: true, 
    title1: 'Company Name', 
    value1: 'Web Builders', 
    title2: 'Position Title', 
    value2: 'Software Developer', 
    value3: '05/2020', 
    value4: 'Present', 
    value5: 'Vancouver, CA', 
    value6: 'Designed and prototyped softwares for various clients in various industries, ranging from LIMS within the laboratorial-sector to mobile games for IOS and Android.'
  },
  { 
    id: uuidv4(), 
    visible: false, 
    title1: 'Company Name', 
    value1: 'CERN', 
    title2: 'Position Title', 
    value2: 'Nuclear Engineer', 
    value3: '01/2017', 
    value4: '04/2020', 
    value5: 'Meyrin, CH', 
    value6: 'Led a group of researchers on nuclear fission experiments. Conducted experiments for CA government.'
  }
]

export {basicPersonalData, basicEducationData, basicExperienceData}