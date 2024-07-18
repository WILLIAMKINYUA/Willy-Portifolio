import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { Link } from 'react-router-dom';
import"./Footer.css"
const Footer = () => {
  return (
    <div className="containerbox">
    <div className='footer'>
   
        <div className="left">
        <h3 className="footerhead">Reach me using:</h3><div className="linkgroupicon">
        <Link to="https://www.facebook.com"className='linkicon'><BsFacebook size={32}/></Link>
        <Link to="https://www.whatsup.com"className='linkicon'><FaWhatsappSquare size={32} style={{color:'green'}} className='note'/></Link>
        <Link to="https://www.instagram.com"className='linkicon'><FaInstagramSquare size={32}style={{color:'purple'}} className='note'/></Link>
        <Link to="https://www.linkedIn.com"className='linkicon'><FaLinkedin size={32}/></Link>
        <Link to="https://github.com/WILLIAMKINYUA"className='linkicon'><GrGithub size={32}style={{color:'grey'}} className='note'/></Link></div>
        </div>

        <div className="right">
    <h3 className="footerhead">Sites Link</h3>
    <Link to='/'className='footerlink'>Home</Link> 
      <Link to='/about'className='footerlink'>About</Link> 
      <Link to='/services'className='footerlink'>Services</Link>
      <Link to='/contact'className='footerlink'>Contact</Link>

        </div>
    </div></div>
  )
}

export default Footer