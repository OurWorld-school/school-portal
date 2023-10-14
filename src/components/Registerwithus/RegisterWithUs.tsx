import React from "react";
import "./Register.css";
import baby from "../../assets/images/baby.jpg";
import nursery from "../../assets/images/nursery.jpg";
import nurserys from "../../assets/images/nurserys.jpg";
import { Button } from "react-bootstrap";
const RegisterWithUs = () => {
  return (
    <div>
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
          <img src={nursery} alt="daycare" className="register-img" />{" "}
          <div className="register-border">
            <Button>Primary</Button>
          </div>
        </div>
        <div className="register-div-img">
          <img src={baby} alt="daycare" className="register-img" />{" "}
          <div className="register-border">
            <Button>Secondary</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterWithUs;
