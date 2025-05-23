import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider2 from '../../assets/images/slider-2.jpeg';
import Slider3 from '../../assets/images/slider-3.jpeg';
import Slider1 from '../../assets/images/slider-image-1.jpeg';
import Slider4 from '../../assets/images/slider-image-2.jpeg';

function SliderGoTo() {
    let sliderRef =useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };
  return (
  <div className="flex flex-col md:flex-row mb-1 h-auto md:h-[300px]"> 
    {/* Slider Section */}
    <div className="w-full md:w-3/4 h-[200px] md:h-full">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src={Slider2} className="w-full h-[200px] md:h-[300px] object-cover" alt="" />
        </div>
        <div>
          <img src={Slider3} className="w-full h-[200px] md:h-[300px] object-cover" alt="" />
        </div>
      </Slider>
    </div>

    {/* Side Images Section */}
    <div className="w-full md:w-1/4 flex md:flex-col flex-row h-[200px] md:h-full">
      <img src={Slider1} className="w-1/2 md:w-full h-full md:h-1/2 object-cover" alt="" />
      <img src={Slider4} className="w-1/2 md:w-full h-full md:h-1/2 object-cover" alt="" />
    </div>
  </div>
);

}

export default SliderGoTo

  


