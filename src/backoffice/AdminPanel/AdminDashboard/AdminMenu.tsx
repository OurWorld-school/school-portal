import * as React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AdminMenu() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          // lineHeight: "80px",
        }}
      >
        <ul>
          <li style={{ marginBottom: "20px" }}>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{ border: "1px solid transparent" }}
              >
                Students
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/pre-nursery">Pre Nursery</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Link to="/nusery1">Nursery 1</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Link to="/nusery2">Nursery 2</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/nusery3">Nursery 3</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/basic1">Basic 1</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/basic2">Basic 2</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/basic3">Basic 3</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/basic4">Basic 4</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{ border: "1px solid transparent" }}
              >
                Staffs
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/staffs">View Staffs</Link>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2">
                  <Link to="/viewroles">View Staff Roles</Link>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-3">
                  <Link to="/viewadmins">View Admins</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{ border: "1px solid transparent" }}
              >
                View Results
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/pre-nurseryResult">Pre Nursery</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Link to="/nusery1Result">Nursery 1</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Link to="/nusery2Result">Nursery 2</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/nusery3Result">Nursery 3</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/basic1Result">Basic 1</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/basic2Result">Basic 2</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/basic3Result">Basic 3</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/basic4Result">Basic 4</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>{" "}
      </div>
    </React.Fragment>
  );
}
