import React, { useState } from 'react';
import axios from 'axios';

import "./BasicInformation.scss";

const BasicInformation = () => {

  const [basicInformation, setBasicInformation] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    website: '',
    location: ''
  });
  // console.log(basicInformation)

  const handleChange = (event) => {
    const { id, value } = event.target;
    setBasicInformation({ ...basicInformation, [id]: value });
  };

  // Another approach to handleChange is this one below but less DRY
  // const changeFullName = (event) => {
  //   setBasicInformation({ ...basicInformation, fullName: event.target.value });
  // };

  // const changeJobTitle = (event) => {
  //   setBasicInformation({ ...basicInformation, jobTitle: event.target.value });
  // };

  // const changeEmail = (event) => {
  //   setBasicInformation({ ...basicInformation, email: event.target.value });
  // };

  // const changeWebsite = (event) => {
  //   setBasicInformation({ ...basicInformation, website: event.target.value });
  // };

  // const changeLocation = (event) => {
  //   setBasicInformation({ ...basicInformation, location: event.target.value });
  // };

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

    // This below will delete inputs after clicking submit 
    // setBasicInformation({
    //   fullName: "",
    //   jobTitle: "",
    //   email: "",
    //   website: "",
    //   location: ""
    // });

  };

  return (
    <div className='main-basic-info-layout'>
      <form className='basic-info' onSubmit={saveInfo}>
        <div className='header'>Basic Information</div>

        <input
          className='detailed-basic-info'
          type='text'
          placeholder='Full Name'
          onChange={handleChange}
          id="fullName"
          value={basicInformation.fullName}
          required
        />

        <input
          className='detailed-basic-info'
          type='text'
          placeholder='Job Title'
          onChange={handleChange}
          id="jobTitle"
          value={basicInformation.jobTitle}
        />

        <input
          className='detailed-basic-info'
          type='text'
          placeholder='Email'
          onChange={handleChange}
          id="email"
          value={basicInformation.email}
          required
        />

        <input
          className='detailed-basic-info'
          type='text'
          placeholder='Website'
          onChange={handleChange}
          id="website"
          value={basicInformation.website}
        />

        <input
          className='detailed-basic-info'
          type='text'
          placeholder='Location'
          onChange={handleChange}
          id="location"
          value={basicInformation.location}
        />

        <div>
          <input
            type='submit'
            value='Save and Continue'
            className='save-button'
          />
        </div>

      </form>
    </div>
  );
};

export default BasicInformation;