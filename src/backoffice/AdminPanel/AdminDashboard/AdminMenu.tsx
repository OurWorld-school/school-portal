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
          <li>
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

                <Dropdown.Item href="#/action-3">
                  <Link to="/basic5">Basic 5</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/basic6">Basic 6</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>{" "}
      </div>
    </React.Fragment>
  );
}
