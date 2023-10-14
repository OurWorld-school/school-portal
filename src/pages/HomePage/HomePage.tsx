import { Container } from "@mui/material";
import React from "react";
import About from "../../components/About-Us/AboutUs";
import Hero from "../../components/HeroSection/Hero";
import Activites from "../../components/SchoolActivites/Activites";
import RegisterWithUs from "../../components/Registerwithus/RegisterWithUs";
import Footer from "../../components/Footer/Footer";
import Outline from "../../components/Outline/Outline";
import Heros from "../../components/HeroSection/Heros";

const HomePage = () => {
  return (
    <div>
      <Heros />
      <div className="container">
        <About />
        <RegisterWithUs />
        <Outline />
        <Activites />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
