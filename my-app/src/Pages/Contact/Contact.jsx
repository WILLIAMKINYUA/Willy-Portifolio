import React from 'react'
import ContactPhase1 from './ContactPhse1'
import ContactPhase2 from './ContactPhase2'
import ContactImage from './ContactImage'
import ContactPhase3 from './ContactPhase3'
import Sliders from '../About/Slider'

const Contact = () => {
  return (
    <div>
        <ContactPhase1/>
        <ContactPhase2/>
        <ContactImage/>
        <ContactPhase3/>
        <Sliders/>
    </div>
  )
}

export default Contact