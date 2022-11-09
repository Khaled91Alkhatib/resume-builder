import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Homepage.scss";

import resumeImage from "../images/resume1.jpeg";

const Homepage = () => {

  const navigate = useNavigate();
  const navigateToBuild = () => {
    navigate("/build");
  };

  return (
    <div>
      <div className='main-title'>
        <div>
          BUILD YOUR RESUME
          <br />
          LAND THE JOB
        </div>
        <button className='get-started' onClick={navigateToBuild}>Get Started</button>
      </div>
      <img className='resume-image' src={resumeImage} alt="resume" />
    </div>
  );
};

export default Homepage;