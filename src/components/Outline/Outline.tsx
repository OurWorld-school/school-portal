import React from "react";
import "./Outline.css";
import { RiContactsLine } from "react-icons/ri";
import { BsBookHalf, BsCheckSquare } from "react-icons/bs";
import { MdAccountBox, MdManageAccounts } from "react-icons/md";
import {
  FaCheck,
  FaBookReader,
  FaUserGraduate,
  FaCashRegister,
} from "react-icons/fa";
import { Button, Row } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

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
          <div className="first-portl-div-icon">
            <div className="portal-icon">
              <RiContactsLine />{" "}
            </div>
          </div>

          <div className="portal-phase">
            <div className="portal-write">ADMISSION REQUIREMENT</div>
            <div className="portal-btn">
              <Button className="btn-portal">More Info</Button>
            </div>
          </div>
        </div>
        <div className="portal-border-div">
          <div className="portal-icon">
            <BsCheckSquare />{" "}
          </div>{" "}
          <div className="portal-phase">
            <div className="portal-write">Check Result</div>
            <div className="portal-btn">
              <Link
                to="/check-result"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                <Button className="btn-portal">More Info</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="portal-border-div">
          {" "}
          <div className="portal-icon">
            <BsBookHalf />{" "}
          </div>
          <div className="portal-phase">
            <div className="portal-write">Online Learning</div>
            <div className="portal-btn">
              <Button className="btn-portal">More Info</Button>
            </div>
          </div>
        </div>
        <div className="portal-border-div">
          <div className="portal-icon">
            <MdManageAccounts />{" "}
          </div>{" "}
          <div className="portal-phase">
            <div className="portal-write">Student Portal</div>
            <div className="portal-btn">
              <Button className="btn-portal">More Info</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outline;
