import React, { useRef } from "react";
import"./Slider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AboutSlider } from "../../AboutSlider";
const Sliders = () => {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className='slider'>
 <Slider ref={slider => (sliderRef = slider)} {...settings}>
  {AboutSlider.map((card)=>(
    <div className="card"key={card.id}>
      <h3 className="companyname">{card.company}</h3>
      <img src={card.image} alt={card.company} className="companyimage"/>
      <h5 className="rank">{card.rank}</h5>
      <p className="paraSlider">{card.body}</p>

    </div>
  ))}
 </Slider>
 <div style={{ textAlign: "left" }}>
        <button className="buttonNew" onClick={play}>
          Play
        </button>
        <button className="buttonNew" onClick={pause}>
          Pause
        </button>
      </div>
    </div>
  )
}

export default Sliders