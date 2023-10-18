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
            Our World International School is a pre-childs formation home with
            basis on pre-school, nursery and primary experience located in Rd
            19, A1 Federal Housing Estate Umuguma Owerri Nigeria. It is a
            private establishement that provides non-parallel quality education
            for children between early childhood and childhood stage.
          </p>
          <div className="skills">
            <Button className="skills-btn">Read More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
