import React from "react";
import "./Register.css";
import baby from "../../assets/images/baby.jpg";
import nursery from "../../assets/images/nurs.jpeg";
import secondary from "../../assets/images/secondary.jpeg";
import primary from "../../assets/images/prim.jpeg";
import { Button } from "react-bootstrap";
const RegisterWithUs = () => {
  return (
    <div className="register-head-div">
      <div>
        <h3 className="Resgister-h3">Register With Us Today</h3>
      </div>
      <div className="register-display-div">
        <div className="register-div-img">
          <img src={baby} alt="daycare" className="register-img" />
          <div className="register-border">
            {" "}
            <Button>CRECHE</Button>
          </div>{" "}
        </div>

        <div className="register-div-img">
          <img src={nursery} alt="daycare" className="register-img" />
          <div className="register-border">
            <Button>Nursery</Button>
          </div>{" "}
        </div>
        <div className="register-div-img">
          <img src={primary} alt="daycare" className="register-img" />{" "}
          <div className="register-border">
            <Button>Primary</Button>
          </div>
        </div>
        <div className="register-div-img">
          <img src={secondary} alt="daycare" className="register-img" />{" "}
          <div className="register-border">
            <Button>Secondary</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterWithUs;
