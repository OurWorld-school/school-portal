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
                <Link to="/updateSchool"> Update School Info</Link>
              </Dropdown.Toggle>

              <Dropdown.Menu></Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{ border: "1px solid transparent" }}
              >
                <Link to="/register-student"> Register A Student</Link>
              </Dropdown.Toggle>

              <Dropdown.Menu></Dropdown.Menu>
            </Dropdown>
          </li>
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
                  <Link to="/view-student">View Students</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Link to="/all-students">View All Students</Link>
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
          <li style={{ marginBottom: "20px" }}>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{ border: "1px solid transparent" }}
              >
                Classes
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/create-class">Create Class</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Link to="/view-class">View Classes</Link>
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
                Subjects
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/create-subject">Create Subject</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Link to="/view-subjects">View Subjects</Link>
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
                Subject Score Sheet
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/subject-score">Upload Student Subject Score</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Link to="/view-subject-marks">View subject Scores</Link>
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
                Result
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/create-result">Upload Result</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Link to="/viewResult">View Result</Link>
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
                Commulative Result
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/create-commutative">
                    Upload Commulative Result
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Link to="/view-commulative">View Commulative Result</Link>
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
                Director's Result Remark
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/create-result-remark">Upload Result Remark</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Link to="/view-result-remark">View Result Remarks</Link>
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
                Grade Marks
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/create-grade">Upload Result Grades</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Link to="/view-grade">View Result Grades</Link>
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
                C.A/Exam Grades
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/create-marks">Upload C/A & Exam Marks</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Link to="/view-marks">View Marks</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="mt-4">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{ border: "1px solid transparent" }}
              >
                Result Scratch Card
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/Admin-view-scratchCard">
                    View/Genrate Scratch Card
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>{" "}
      </div>
    </React.Fragment>
  );
}
