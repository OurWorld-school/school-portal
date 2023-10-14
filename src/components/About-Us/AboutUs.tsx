import { Button } from "@mui/material";
import React from "react";
import "./AboutUs.css";
const About = () => {
  return (
    <>
      <div className="container about">
        <div className="inner-section">
          <h1 style={{ color: "whitesmoke" }} className="abt-h">
            About Us
          </h1>
          <p className="text">
            First, make it clear what your company does from the beginning of
            your About Us page. There is little chance that users get to your
            page by accident. And customers may still not understand clearly
            what they can buy. This is just a sample, you add your content am
            just doing justice to my task.
          </p>
          <div className="skills">
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
