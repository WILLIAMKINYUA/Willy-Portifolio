import React from 'react'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import Homephase from './Homephase'

const Home = () => {
  return (
    <div>
      <Homephase/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default Home