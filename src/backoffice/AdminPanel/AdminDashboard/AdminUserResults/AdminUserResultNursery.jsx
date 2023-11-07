import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "@material-ui/core";

import logo from "../../../../assets/images/logo.jpeg";
import Table from "react-bootstrap/Table";
import stamp from "../../../../assets/images/stamp.png";
import { Nursery1resultApi } from "../../../../data/Api";
import AdminLayout from "../../AdminLayout";

export const AdminUserResultNursery = () => {
  const { id } = useParams();

  const [viewResult, setViewResult] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(Nursery1resultApi + id);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setViewResult(data);
    };

    fetchPosts();
  }, []);
  React.useEffect(() => {
    // Filter the data based on genre "afrobeat"
    const filtered = viewResult.term === "1st-Term";
    setFilteredData(filtered);
    console.log(filtered);
  }, [viewResult]);

  return (
    <AdminLayout>
      <div className="mt-2 mb-2">
        <Container>
          <div className="result-main-div-section">
            <div className="display-content-head-result">
              <div className="logo-result-div">
                <img src={logo} alt="logo" className="logo-result" />{" "}
              </div>{" "}
              <div>
                <h3 className="our-title-h3">
                  OUR WORLD INTERNATIONAL NURSERY & PRIMARY SCHOOL
                </h3>
                <div className="adress-text">
                  <div>Road 19 A1 Federal Housing Umuguma Owerri</div>
                  <div>Imo State, Nigeria</div>
                </div>
                <div className="sheet-div">
                  <div style={{ textTransform: "uppercase" }}>
                    {viewResult?.classes} SCHOOL TERMINAL RESULT SHEET
                  </div>
                </div>
              </div>
              <div className="img-passport-result-div">
                <img
                  src={viewResult?.user?.passportPhoto}
                  alt="passport"
                  className="img-passport-result"
                />
              </div>{" "}
            </div>
            <div className="user-result-detail-display">
              <div>
                <span>NAME:</span> {viewResult?.user?.firstName}{" "}
                {viewResult?.user?.lastName}
                <hr />
              </div>
              <div className="user-d-class">
                <span> CLASS:</span> {viewResult?.classes}
                <hr />
              </div>
              <div className="mt-4">
                <span> TERM:</span> {viewResult?.term}
                <hr />
              </div>
              <div className="mt-4">
                <span> YEAR:</span> {viewResult?.year}
                <hr />
              </div>
            </div>
            <div className="table-div">
              <Table responsive="sm" bordered hover>
                <thead>
                  <tr>
                    {/* <th>#</th> */}
                    <th>SUBJECT</th>
                    <th>CA</th>
                    <th>EXAM</th>
                    <th>TOTAL</th>
                    <th>GRADE</th>
                    <th>REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* <td>1</td> */}
                    <td>English Language </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>MATHEMATICS </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>HEALTH SCIENCE </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>BASIC SCIENCE </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>SOCIAL HABIT </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>AGRIC SCIENCE </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>WRITING</td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>RHYMES </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-div-2">
              <Table striped bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th>TOTAL SCORE</th>
                    <th>TOTAL AVERAGE</th>
                    <th>TOTAL GRADE</th>
                    <th>POSITION</th>
                    <th>OUT OF</th>
                    <th>FORM TEACHER REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{viewResult?.TotalScore} </td>
                    <td>{viewResult?.TotalAverage} </td>
                    <td>{viewResult?.TotalGrade} </td>
                    <td>{viewResult?.Position} </td>
                    <td>{viewResult?.numberInClass} </td>
                    <td>{viewResult?.Remark} </td>
                  </tr>
                </tbody>
              </Table>
              <div className="school-stamp">
                <div className="stamp-img-div">
                  <img src={stamp} alt="stamp" className="stamp-img" />
                  <hr />
                </div>
                <div
                  style={{
                    fontWeight: "600",
                    marginTop: "6px",
                    fontSize: "small",
                    marginLeft: "10px",
                  }}
                >
                  SCHOOL STAMP
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </AdminLayout>
  );
};

// 2nd term;
export const AdminUserResultNursery2ndterm = () => {
  const { id } = useParams();

  const [viewResult, setViewResult] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(Nursery1resultApi + id);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setViewResult(data);
    };

    fetchPosts();
  }, []);
  React.useEffect(() => {
    // Filter the data based on genre "afrobeat"
    const filtered = viewResult.term === "2nd-Term";
    setFilteredData(filtered);
    console.log(filtered);
  }, [viewResult]);

  return (
    <AdminLayout>
      <div className="mt-2 mb-2">
        <Container>
          <div className="result-main-div-section">
            <div className="display-content-head-result">
              <div className="logo-result-div">
                <img src={logo} alt="logo" className="logo-result" />{" "}
              </div>{" "}
              <div>
                <h3 className="our-title-h3">
                  OUR WORLD INTERNATIONAL NURSERY & PRIMARY SCHOOL
                </h3>
                <div className="adress-text">
                  <div>Road 19 A1 Federal Housing Umuguma Owerri</div>
                  <div>Imo State, Nigeria</div>
                </div>
                <div className="sheet-div">
                  <div style={{ textTransform: "uppercase" }}>
                    {viewResult?.classes} SCHOOL TERMINAL RESULT SHEET
                  </div>
                </div>
              </div>
              <div className="img-passport-result-div">
                <img
                  src={viewResult?.user?.passportPhoto}
                  alt="passport"
                  className="img-passport-result"
                />
              </div>{" "}
            </div>
            <div className="user-result-detail-display">
              <div>
                <span>NAME:</span> {viewResult?.user?.firstName}{" "}
                {viewResult?.user?.lastName}
                <hr />
              </div>
              <div className="user-d-class">
                <span> CLASS:</span> {viewResult?.classes}
                <hr />
              </div>
              <div className="mt-4">
                <span> TERM:</span> {viewResult?.term}
                <hr />
              </div>
              <div className="mt-4">
                <span> YEAR:</span> {viewResult?.year}
                <hr />
              </div>
            </div>
            <div className="table-div">
              <Table responsive="sm" bordered hover>
                <thead>
                  <tr>
                    {/* <th>#</th> */}
                    <th>SUBJECT</th>
                    <th>CA</th>
                    <th>EXAM</th>
                    <th>TOTAL</th>
                    <th>GRADE</th>
                    <th>REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* <td>1</td> */}
                    <td>English Language </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>MATHEMATICS </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>HEALTH SCIENCE </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>BASIC SCIENCE </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>SOCIAL HABIT </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>AGRIC SCIENCE </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>WRITING</td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>RHYMES </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-div-2">
              <Table striped bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th>TOTAL SCORE</th>
                    <th>TOTAL AVERAGE</th>
                    <th>TOTAL GRADE</th>
                    <th>POSITION</th>
                    <th>OUT OF</th>
                    <th>FORM TEACHER REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{viewResult?.TotalScore} </td>
                    <td>{viewResult?.TotalAverage} </td>
                    <td>{viewResult?.TotalGrade} </td>
                    <td>{viewResult?.Position} </td>
                    <td>{viewResult?.numberInClass} </td>
                    <td>{viewResult?.Remark} </td>
                  </tr>
                </tbody>
              </Table>
              <div className="school-stamp">
                <div className="stamp-img-div">
                  <img src={stamp} alt="stamp" className="stamp-img" />
                  <hr />
                </div>
                <div
                  style={{
                    fontWeight: "600",
                    marginTop: "6px",
                    fontSize: "small",
                    marginLeft: "10px",
                  }}
                >
                  SCHOOL STAMP
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </AdminLayout>
  );
};

// 3rd term;
export const AdminUserResultNursery3rdterm = () => {
  const { id } = useParams();

  const [viewResult, setViewResult] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(Nursery1resultApi + id);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setViewResult(data);
    };

    fetchPosts();
  }, []);
  React.useEffect(() => {
    // Filter the data based on genre "afrobeat"
    const filtered = viewResult.term === "3rd-Term";
    setFilteredData(filtered);
    console.log(filtered);
  }, [viewResult]);

  return (
    <AdminLayout>
      <div className="mt-2 mb-2">
        <Container>
          <div className="result-main-div-section">
            <div className="display-content-head-result">
              <div className="logo-result-div">
                <img src={logo} alt="logo" className="logo-result" />{" "}
              </div>{" "}
              <div>
                <h3 className="our-title-h3">
                  OUR WORLD INTERNATIONAL NURSERY & PRIMARY SCHOOL
                </h3>
                <div className="adress-text">
                  <div>Road 19 A1 Federal Housing Umuguma Owerri</div>
                  <div>Imo State, Nigeria</div>
                </div>
                <div className="sheet-div">
                  <div style={{ textTransform: "uppercase" }}>
                    {viewResult?.classes} SCHOOL TERMINAL RESULT SHEET
                  </div>
                </div>
              </div>
              <div className="img-passport-result-div">
                <img
                  src={viewResult?.user?.passportPhoto}
                  alt="passport"
                  className="img-passport-result"
                />
              </div>{" "}
            </div>
            <div className="user-result-detail-display">
              <div>
                <span>NAME:</span> {viewResult?.user?.firstName}{" "}
                {viewResult?.user?.lastName}
                <hr />
              </div>
              <div className="user-d-class">
                <span> CLASS:</span> {viewResult?.classes}
                <hr />
              </div>
              <div className="mt-4">
                <span> TERM:</span> {viewResult?.term}
                <hr />
              </div>
              <div className="mt-4">
                <span> YEAR:</span> {viewResult?.year}
                <hr />
              </div>
            </div>
            <div className="table-div">
              <Table responsive="sm" bordered hover>
                <thead>
                  <tr>
                    {/* <th>#</th> */}
                    <th>SUBJECT</th>
                    <th>CA</th>
                    <th>EXAM</th>
                    <th>TOTAL</th>
                    <th>GRADE</th>
                    <th>REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* <td>1</td> */}
                    <td>English Language </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>MATHEMATICS </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>HEALTH SCIENCE </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthScience?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>BASIC SCIENCE </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>SOCIAL HABIT </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SocialHabit?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>AGRIC SCIENCE </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.AgricScience?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>WRITING</td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Writing?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>RHYMES </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-div-2">
              <Table striped bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th>TOTAL SCORE</th>
                    <th>TOTAL AVERAGE</th>
                    <th>TOTAL GRADE</th>
                    <th>POSITION</th>
                    <th>OUT OF</th>
                    <th>FORM TEACHER REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{viewResult?.TotalScore} </td>
                    <td>{viewResult?.TotalAverage} </td>
                    <td>{viewResult?.TotalGrade} </td>
                    <td>{viewResult?.Position} </td>
                    <td>{viewResult?.numberInClass} </td>
                    <td>{viewResult?.Remark} </td>
                  </tr>
                </tbody>
              </Table>
              <div className="school-stamp">
                <div className="stamp-img-div">
                  <img src={stamp} alt="stamp" className="stamp-img" />
                  <hr />
                </div>
                <div
                  style={{
                    fontWeight: "600",
                    marginTop: "6px",
                    fontSize: "small",
                    marginLeft: "10px",
                  }}
                >
                  SCHOOL STAMP
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </AdminLayout>
  );
};

// export default ViewResult;
