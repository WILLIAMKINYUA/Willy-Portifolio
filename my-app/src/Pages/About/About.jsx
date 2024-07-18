import React from 'react'
import AboutPhase1 from './AboutPhase1'
import AboutPhase3 from './AboutPhase3'
import AboutPhase2 from './AboutPhase2'
import AboutImage from './AboutImage'
import AboutPhase4 from './AboutPhase4'
import Slider from './Slider'
const About = () => {
  return (
    <div className='aboutpage'>
    <AboutPhase1/>
  <AboutPhase2/>
  <AboutImage/>
  <AboutPhase3/>
  <AboutPhase4/>
  <Slider/>
      
    </div>
  )
}

export default About