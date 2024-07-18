import React from 'react'
import"./Navbar.css"
import{Link}from"react-router-dom"
const Navbar = () => {
  return (
    < div className='navbar'>
      <div className="logo">WILLIAM KINYUA</div>
      <div className="navlink">
      <Link to='/'className='link'>Home</Link> 
      <Link to='/about'className='link'>About</Link> 
      <Link to='/services'className='link'>Services</Link> 
      <Link to='/contact'className='link'>Contact</Link> 
      </div>
      <div className="reach">
        <Link to='/resume' className='contactlink'>View my Resume</Link>
      </div>
    </div>
  )
}

export default Navbar