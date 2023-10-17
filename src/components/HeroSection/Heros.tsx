import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/buildi.jpeg";
import image2 from "../../assets/images/comp.jpeg";
import image3 from "../../assets/images/band.jpeg";
import image4 from "../../assets/images/computer.jpeg";
import image5 from "../../assets/images/assemble.jpeg";
import build from "../../assets/images/build.jpeg";
import "./Heros.css";
import { Button } from "@mui/material";
const Heros = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define your background images in an array
  const backgroundImages = [build, image1, image3, image2, image5];

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
        <h1>Welcome To</h1>
        <h2>Our World International Nursery & Primary School</h2>
        <div className="read-btn">
          <Button className="btn-read" style={{ color: "white" }}>
            Read More
          </Button>
        </div>
        {/* <p>Current Slide: {currentSlide + 1}</p> */}
      </div>
    </div>
  );
};

export default Heros;
