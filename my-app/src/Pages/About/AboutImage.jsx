import React, { useState } from 'react';
import './AboutImage.css'; // Import your CSS file for styling
import { AboutData } from '../../About'; // Import AboutData assuming it's an array of about items

const AboutImage = () => {
  const [aboutData, setAboutData] = useState(AboutData); // Initialize state with AboutData assuming it's an array of about items

  const filterData = (aboutId) => {
    const filteredAboutData = aboutData.filter((item) => item.id === aboutId);
    setAboutData(filteredAboutData);
  }

  return (
    <div>
      {aboutData.map((item) => (
        <div className='aboutImage' key={item.id}>
          <img src={item.image} alt='Not Applicable' className='imageAbout' />  
        </div>
      ))}
    </div>
  );
}

export default AboutImage;
