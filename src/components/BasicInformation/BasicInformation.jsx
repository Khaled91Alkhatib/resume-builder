import React, { useState } from 'react';
import axios from 'axios';

const BasicInformation = () => {

  const [basicInformation, setBasicInformation] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    website: '',
    location: ''
  });
  // console.log(basicInformation)

  const changeFullName = (event) => {
    setBasicInformation({ ...basicInformation, fullName: event.target.value });
  };

  const changeJobTitle = (event) => {
    setBasicInformation({ ...basicInformation, jobTitle: event.target.value });
  };

  const changeEmail = (event) => {
    setBasicInformation({ ...basicInformation, email: event.target.value });
  };

  const changeWebsite = (event) => {
    setBasicInformation({ ...basicInformation, website: event.target.value });
  };

  const changeLocation = (event) => {
    setBasicInformation({ ...basicInformation, location: event.target.value });
  };

  const saveInfo = (event) => {
    event.preventDefault();

    const saving = {
      fullName: basicInformation.fullName,
      jobTitle: basicInformation.jobTitle,
      email: basicInformation.email,
      website: basicInformation.website,
      location: basicInformation.location
    };

    axios.post('http://localhost:5001/api/basicInformation', saving)
      .then(response => {
        console.log(response.data);
      });

    // setBasicInformation({
    //   fullName: "",
    //   jobTitle: "",
    //   email: "",
    //   website: "",
    //   location: ""
    // });

  };

  return (
    <form onSubmit={saveInfo}>

      <input
        type='text'
        placeholder='Full Name'
        onChange={changeFullName}
        value={basicInformation.fullName}
      />

      <input
        type='text'
        placeholder='Job Title'
        onChange={changeJobTitle}
        value={basicInformation.jobTitle}
      />

      <input
        type='text'
        placeholder='Email'
        onChange={changeEmail}
        value={basicInformation.email}
      />

      <input
        type='text'
        placeholder='Website'
        onChange={changeWebsite}
        value={basicInformation.website}
      />

      <input
        type='text'
        placeholder='Location'
        onChange={changeLocation}
        value={basicInformation.location}
      />

      <input
        type='submit'
        value='Save'
      />

    </form>
  );
};

export default BasicInformation;