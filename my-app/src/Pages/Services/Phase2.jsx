import React from 'react'
import { IoDiamondOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import"./Phase2.css"
const Phase2 = () => {
  return (
    <div className='phase2box'>
        <section className="design"><div className="box">
        <IoDiamondOutline size={72} style={{ textAlign: "left",color:"blue",}}className='boxicon'/>
        <h4 className='topichead'>DESIGN</h4>
        <p className="topicpara">Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth</p>
        </div>
        </section>

        <section className="development"><div className="box">
        <FaCode  size={72} style={{ textAlign: "left",color:"blue", }}className='boxicon'/>
        <h4 className='topichead'>DEVELOPMENT</h4>
        <p className="topicpara">I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>
        </div>
        </section>

        <section className="design"><div className="box">
        <HiComputerDesktop size={72} style={{ textAlign: "left",color:"blue", }}className='boxicon'/>
        <h4 className='topichead'>BASIC SEO</h4>
        <p className="topicpara">i can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money</p>
        </div>
</section>
    </div>
  )
}

export default Phase2