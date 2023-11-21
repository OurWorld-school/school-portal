import React from "react";
import "./Register.css";
import baby from "../../assets/images/creche2.jpeg";
import nursery from "../../assets/images/nurs.jpeg";
import secondary from "../../assets/images/secskul.jpeg";
import primary from "../../assets/images/prim.jpeg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <Link
              to="/admission-portal"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>CRECHE</Button>
            </Link>
          </div>{" "}
        </div>

        <div className="register-div-img">
          <img src={nursery} alt="daycare" className="register-img" />
          <div className="register-border">
            <Link
              to="/admission-portal"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>Nursery</Button>
            </Link>
          </div>{" "}
        </div>
        <div className="register-div-img">
          <img src={primary} alt="daycare" className="register-img" />{" "}
          <div className="register-border">
            <Link
              to="/admission-portal"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>Primary</Button>
            </Link>
          </div>
        </div>
        <div className="register-div-img">
          <img src={secondary} alt="daycare" className="register-img" />{" "}
          <div className="register-border">
            <Link
              to="/admission-portal"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>Secondary</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterWithUs;
