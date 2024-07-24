import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "@material-ui/core";

import logo from "../../../../assets/images/logo.jpeg";
import Table from "react-bootstrap/Table";
import stamp from "../../../../assets/images/stamp.png";
import {
  Basic1CommulativeApi,
  Basic1resultApi,
  Nursery3resultApi,
} from "../../../../data/Api";
import AdminLayout from "../../AdminLayout";

export const AdminUserBasic1Commulative = () => {
  let classes = "";
  const { id } = useParams();
  const [viewResult, setViewResult] = useState({});
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(Basic1CommulativeApi + id);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setViewResult(data);
    };

    fetchPosts();
  }, []);

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
                    Basic 1 SCHOOL TERMINAL CUMULATIVE RESULT SHEET
                  </div>
                </div>
                <div className="school-stamp">
                  <div className="stamp-img-div">
                    <img src={stamp} alt="stamp" className="stamp-img" />
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
                <span> CLASS:</span>Basic 1
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
                    <th>1st Term TotalScore</th>
                    <th>2nd Term TotalScore</th>
                    <th>3rd Term TotalScore</th>
                    <th>TOTAL Score</th>
                    <th>TOTAL Average</th>
                    <th>GRADE</th>
                    <th>REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>English Language </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.English?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
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
                        <div key={item._id}>
                          {item?.totalAverage.toFixed(2)}
                        </div>
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
                        <div key={item._id}>
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Mathematics?.map((item) => (
                        <div key={item._id}>
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
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
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
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
                    <td>Verbal Reasoning </td>
                    <td>
                      {" "}
                      {viewResult?.VerbalReasoning?.map((item) => (
                        <div key={item._id}>
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.VerbalReasoning?.map((item) => (
                        <div key={item._id}>
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.VerbalReasoning?.map((item) => (
                        <div key={item._id}>
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.VerbalReasoning?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.VerbalReasoning?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.VerbalReasoning?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.VerbalReasoning?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Quantitative Reasoning </td>
                    <td>
                      {" "}
                      {viewResult?.QuantitativeReasoning?.map((item) => (
                        <div key={item._id}>
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.QuantitativeReasoning?.map((item) => (
                        <div key={item._id}>
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.QuantitativeReasoning?.map((item) => (
                        <div key={item._id}>
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.QuantitativeReasoning?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.QuantitativeReasoning?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.QuantitativeReasoning?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.QuantitativeReasoning?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Science </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.BasicScience?.map((item) => (
                        <div key={item._id}>
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
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
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
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
                    <td> National Values </td>
                    <td>
                      {" "}
                      {viewResult?.NationalValues?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.NationalValues?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.NationalValues?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.NationalValues?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.NationalValues?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.NationalValues?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.NationalValues?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>C.R.K</td>
                    <td>
                      {" "}
                      {viewResult?.CRK?.map((item) => (
                        <div key={item._id}>
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CRK?.map((item) => (
                        <div key={item._id}>
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CRK?.map((item) => (
                        <div key={item._id}>
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CRK?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CRK?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CRK?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CRK?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>CreativeArt </td>
                    <td>
                      {" "}
                      {viewResult?.CreativeArt?.map((item) => (
                        <div key={item._id}>
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CreativeArt?.map((item) => (
                        <div key={item._id}>
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CreativeArt?.map((item) => (
                        <div key={item._id}>
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CreativeArt?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CreativeArt?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CreativeArt?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.CreativeArt?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>History </td>
                    <td>
                      {" "}
                      {viewResult?.History?.map((item) => (
                        <div key={item._id}>
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.History?.map((item) => (
                        <div key={item._id}>
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.History?.map((item) => (
                        <div key={item._id}>
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.History?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.History?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.History?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.History?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Phonics </td>
                    <td>
                      {" "}
                      {viewResult?.Phonics?.map((item) => (
                        <div key={item._id}>
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Phonics?.map((item) => (
                        <div key={item._id}>
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Phonics?.map((item) => (
                        <div key={item._id}>
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Phonics?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Phonics?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Phonics?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Phonics?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>French </td>
                    <td>
                      {" "}
                      {viewResult?.French?.map((item) => (
                        <div key={item._id}>
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.French?.map((item) => (
                        <div key={item._id}>
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.French?.map((item) => (
                        <div key={item._id}>
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.French?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.French?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.French?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.French?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Igbo </td>
                    <td>
                      {" "}
                      {viewResult?.Igbo?.map((item) => (
                        <div key={item._id}>
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Igbo?.map((item) => (
                        <div key={item._id}>
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Igbo?.map((item) => (
                        <div key={item._id}>
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Igbo?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Igbo?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Igbo?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Igbo?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Pre Vocational Studies </td>
                    <td>
                      {" "}
                      {viewResult?.PVC?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PVC?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PVC?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PVC?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PVC?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PVC?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PVC?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Hand Writing </td>
                    <td>
                      {" "}
                      {viewResult?.HandWriting?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total1stTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total1stTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HandWriting?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total2ndTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HandWriting?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HandWriting?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HandWriting?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(2)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HandWriting?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HandWriting?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  {/* <tr>
                    <td>Computer </td>
                    <td>
                      {" "}
                      {viewResult?.Computer?.map((item) => (
                        <div key={item._id}>{item?.test}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Computer?.map((item) => (
                        <div key={item._id}>{item?.exam}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Computer?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Computer?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Computer?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr> */}
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
                    <th>HEAD TEACHER REMARK</th>
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
                    <td>{viewResult?.HmRemark} </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </div>
    </AdminLayout>
  );
};

// export default ViewResult;
