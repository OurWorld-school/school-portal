import React from "react";
import "./Outline.css";
import { RiContactsLine } from "react-icons/ri";
import {
  FaCheck,
  FaBookReader,
  FaUserGraduate,
  FaCashRegister,
} from "react-icons/fa";
import { Button, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Outline = () => {
  const navigate = useNavigate();

  const checkout = () => {
    navigate("/registernumber");
  };
  const check = () => {
    navigate("/login");
  };
  return (
    <div className="skiller-div">
      <Row>
        <h1
          className="text-center py-3"
          style={{
            textAlign: "center",
            fontSize: "xx-large",
            fontWeight: "600",
            color: "#e53238",
          }}
        >
          Welcome to our e-portal
        </h1>
      </Row>
      <div className="skiller-col">
        <div className="portal-border-div">
          <div className="portal-icon">
            <RiContactsLine />{" "}
          </div>
          <div>ADMISSION REQUIREMENT</div>
          <Button className="btn-block-for" type="button">
            More Info
          </Button>
        </div>
        <div className="portal-border-div">
          <div className="portal-icon">
            <RiContactsLine />{" "}
          </div>{" "}
        </div>
        <div className="portal-border-div">
          {" "}
          <div className="portal-icon">
            <RiContactsLine />{" "}
          </div>
        </div>
        <div className="portal-border-div">
          <div className="portal-icon">
            <RiContactsLine />{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Outline;
