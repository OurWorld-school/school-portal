import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/hero2.jpg";
import image2 from "../../assets/images/hero2.jpg";
import image3 from "../../assets/images/hero2.jpg";
import "./Heros.css";
const Heros = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define your background images in an array
  const backgroundImages = [image1, image2, image3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current: any, next: any) => {
      setCurrentSlide(next);
    },
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        {backgroundImages.map((image, index) => (
          <div key={index} className="hero-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="hero-content">
        <h1>Your Hero Title</h1>
        <p>Your hero description goes here.</p>
        <p>Current Slide: {currentSlide + 1}</p>
      </div>
    </div>
  );
};

export default Heros;
