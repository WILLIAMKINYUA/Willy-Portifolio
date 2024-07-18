import React, { useState } from 'react';
import './Phase3.css'; // Import your CSS file for styling
import { SocialData } from '../../Social'; // Import SocialData assuming it provides an array of social items
import { Phase3Data } from '../../Phase3'; // Import Phase3Data assuming it provides an array of phase 3 items

const Phase3 = () => {
  const [social, setSocial] = useState(SocialData); // Initialize state with SocialData
  const [image, setImage] = useState(Phase3Data); // Initialize state with Phase3Data

  const FilterSocial = (socialId) => {
    const filteredSocial = SocialData.filter((item) => item.id === socialId);
    setSocial(filteredSocial);
  }

  const FilterImage = (imageId) => {
    const filteredImage = Phase3Data.filter((item) => item.id === imageId);
    setImage(filteredImage);
  }

  return (
    <div className='phase3box'>
      {image.map((item) => (
        <div className="sectionleft" key={item.id}>
          <img src={item.image} alt='Not Applicable' className='imageSection' />      
        </div>
      ))}
       
      <div className="sectionright">
        <div className="one">
          <h3 className="sectiontopic">Why Work With Me</h3>
          <p className="paraSection">I am a great communicator and love to invest the necessary time to understand the customer's problem very well</p>
        </div>
        
        <div className="two">
          <h3 className="subsectiontopic">DESIGN TOOLS</h3>
          <p className="paraSection">My favorite design tools are Photoshop and Illustrator but I can create designs in Figma, Sketch and Adobe XD too</p>
        </div>

        <div className="three">
          <h3 className="subsectiontopic">DEVELOPMENT SKILLS</h3>
          <p className="paraSection">I am familiar and work on a daily basis with HTML, CSS, JavaScript, Bootstrap and other modern frameworks</p>
        
          <div className="threelogo">
            {social.map((item) => (
              <div className="merge" key={item.id}>
                <img src={item.image} alt="Not Applicable" className='logoicon' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phase3;
