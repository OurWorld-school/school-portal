import React from "react";
import videoBg from "../../assets/videos.mp4";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div className="hero-main">
        <div className="hero-overlay"></div>
        <video src={videoBg} autoPlay loop muted className="hero-video" />
        <div className="hero-content">
          <h1>Welcome</h1>
          <p>To my site.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
