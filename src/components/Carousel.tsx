import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import a from '../assets/img/carousel/1.png'
import b from '../assets/img/carousel/2.png'
import c from '../assets/img/carousel/3.png'
import d from '../assets/img/carousel/4.png'
import e from '../assets/img/carousel/5.png'

export function Carousel() {

  let settings = {
    accessibility: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} className="slider content-container">
      <div>
        <img src={a} alt="" className="carousel-img" />
      </div>
      <div>
        <img src={b} alt="" className="carousel-img" />
      </div>
      <div>
        <img src={c} alt="" className="carousel-img" />
      </div>
      <div>
        <img src={d} alt="" className="carousel-img" />
      </div>
      <div>
        <img src={e} alt="" className="carousel-img" />
      </div>
    </Slider>
  );
}
