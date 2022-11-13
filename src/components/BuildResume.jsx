import React from 'react';
import BasicInformation from './BasicInformation/BasicInformation';

import './BuildResume.scss';
import resumeImage from "../images/resume1.jpeg";


const BuildResume = () => {
  return (
    <div>
      <img src={resumeImage} alt="resume" className='resume-image' />
      <div className='main-build'>
        <BasicInformation />
      </div>
    </div>
  );
};

export default BuildResume;