import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import "../ViewResultScreen/ViewResult.css";
import logo from "../../assets/images/logo.jpeg";
import Table from "react-bootstrap/Table";
import stamp from "../../assets/images/stamp.png";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
export const ViewPreNurseryCommulative = React.forwardRef((props, ref) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const navigate = useNavigate();
  const { selectedYear, userId, selectedTerm } = useParams();
  const [viewResult, setViewResult] = useState({});
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          `https://ourworldintschool.onrender.com/api/prenurseryCommulative/results/${userId}/${selectedYear}/${selectedTerm}`
        );
        console.log(data);
        // const foundData = data.find((item) => item.artist === artist);
        setViewResult(data);
      } catch (error) {
        // Handle the error here
        navigate("/PreNursery-commulative");
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);
  // useEffect(() => {
  //   if (viewResult?.id) {
  //     navigate("/PreNursery-result");
  //   } else {
  //     navigate(`/my-result/${selectedYear}/${userId}/${selectedTerm}`);
  //   }
  // }, []);
  return (
    <>
      <TopNavBar />
      <Header />
      <div className="mt-2 mb-2">
        <Container>
          <div className="result-main-div-section" ref={componentRef}>
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
                    PRE NURSERY SCHOOL TERMINAL CUMULATIVE RESULT SHEET
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
                <span> CLASS:</span> Pre Nursery
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
                    {/* <td>1</td> */}
                    <td>Numeracy </td>
                    <td>
                      {" "}
                      {viewResult?.Numeracy?.map((item) => (
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
                      {viewResult?.Numeracy?.map((item) => (
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
                      {viewResult?.Numeracy?.map((item) => (
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
                      {viewResult?.Numeracy?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Numeracy?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(1)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Numeracy?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Numeracy?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Literacy </td>
                    <td>
                      {" "}
                      {viewResult?.Literacy?.map((item) => (
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
                      {viewResult?.Literacy?.map((item) => (
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
                      {viewResult?.Literacy?.map((item) => (
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
                      {viewResult?.Literacy?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Literacy?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(1)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Literacy?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Literacy?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Colouring </td>
                    <td>
                      {" "}
                      {viewResult?.Colouring?.map((item) => (
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
                      {viewResult?.Colouring?.map((item) => (
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
                      {viewResult?.Colouring?.map((item) => (
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
                      {viewResult?.Colouring?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Colouring?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(1)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Colouring?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Colouring?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Health Habit </td>
                    <td>
                      {" "}
                      {viewResult?.HealthHabit?.map((item) => (
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
                      {viewResult?.HealthHabit?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total2nddTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total2ndTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthHabit?.map((item) => (
                        <div key={item._id}>
                          {" "}
                          {item?.total3rdTermScore === 0 ? (
                            <></>
                          ) : (
                            <>{item?.total3rdTermScore}</>
                          )}
                        </div>
                      ))}
                    </td>{" "}
                    <td>
                      {viewResult?.HealthHabit?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {viewResult?.HealthHabit?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(1)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthHabit?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.HealthHabit?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Pre Science </td>
                    <td>
                      {" "}
                      {viewResult?.PreScience?.map((item) => (
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
                      {viewResult?.PreScience?.map((item) => (
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
                      {viewResult?.PreScience?.map((item) => (
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
                      {viewResult?.PreScience?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PreScience?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(1)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PreScience?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PreScience?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Practical Life </td>
                    <td>
                      {" "}
                      {viewResult?.PracticalLife?.map((item) => (
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
                      {viewResult?.PracticalLife?.map((item) => (
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
                      {viewResult?.PracticalLife?.map((item) => (
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
                      {viewResult?.PracticalLife?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PracticalLife?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(1)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PracticalLife?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.PracticalLife?.map((item) => (
                        <div key={item._id}>{item?.remark}</div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Rhymes</td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
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
                      {viewResult?.Rhymes?.map((item) => (
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
                      {viewResult?.Rhymes?.map((item) => (
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
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.Rhymes?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(1)}
                        </div>
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
                  <tr>
                    <td>Sensorial Activity </td>
                    <td>
                      {" "}
                      {viewResult?.SensorialActivity?.map((item) => (
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
                      {viewResult?.SensorialActivity?.map((item) => (
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
                      {viewResult?.SensorialActivity?.map((item) => (
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
                      {viewResult?.SensorialActivity?.map((item) => (
                        <div key={item._id}>{item?.totalScore}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SensorialActivity?.map((item) => (
                        <div key={item._id}>
                          {item?.totalAverage?.toFixed(1)}
                        </div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SensorialActivity?.map((item) => (
                        <div key={item._id}>{item?.grade}</div>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.SensorialActivity?.map((item) => (
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
          <Button variant="contained" onClick={handlePrint}>
            Print Result!
          </Button>
        </Container>
      </div>
      <Footer />
    </>
  );
});
