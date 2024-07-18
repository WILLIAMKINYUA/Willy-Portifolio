import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';
import"./ContactPhase3.css"
const ContactPhase3 = () => {
  return (
    <div className='contactPhase'>
        <div className="leftside">
        <h1 className="phase1head">Let's Work Together</h1>
        <p className="phases1para"><br></br><br></br><br></br>I  am currently eager and ready as I highly hope to hear from you soon.</p>       
        </div>
        <div className="rightside">
            <div className="subone">
                <h3 className="subtitle">FOLLOW ON SOCIAL</h3>
                <div className="iconsocial">
                <Link to={"https://www.facebook.com/"} className='socialicon'><IoLogoFacebook size={32} /></Link>
                <Link to={"https://www.twitter.com/"}className='socialicon'><FaTwitter size={32} style={{color:"black"}}/></Link>
                <Link to={"https://www.instagram.com/"} className='socialicon'><BsInstagram size={32} style={{color:"purple"}}/></Link>
                <Link to={"https://www.whatsapp.com/"} className='socialicon'><IoLogoWhatsapp size={32} style={{color:'green'}}/></Link></div>
            </div>
            <div className="subtwo">
                <h3 className="subtitle">EMAIL</h3>
                <p className="subpara">williammuhunikinyua@gmail.com</p>
            </div>
            <div className="subthree">
                <h3 className="subtitle">PHONE</h3>
                <p className="subpara">+25458388340</p>
                <p className="subpara">+24780313060</p>
            </div>
        </div>
    </div>
  )
}

export default ContactPhase3