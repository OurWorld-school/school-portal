import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";
import { Dropdown } from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button } from "@mui/material";

import AdminLayout from "../AdminLayout";
import CircularIndeterminate from "../../../components/Loading/Progress";
import {
  Basic1resultApi,
  Basic2resultApi,
  Basic3resultApi,
  UserApi,
} from "../../../data/Api";
const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
interface SubjectScore {
  test: number;
  exam: number;
  totalScore?: number;
  grade?: string;
  remark?: string;
}

interface SubjectData {
  English?: SubjectScore[];
  Mathematics?: SubjectScore[];
  History?: SubjectScore[];
  CRK?: SubjectScore[];
  VerbalReasoning?: SubjectScore[];
  QuantitativeReasoning?: SubjectScore[];
  BasicScience?: SubjectScore[];
  Phonics?: SubjectScore[];
  French?: SubjectScore[];
  Computer?: SubjectScore[];
  NationalValues?: SubjectScore[];
  PVC?: SubjectScore[];
  CreativeArt?: SubjectScore[];
  HandWriting?: SubjectScore[];
  Igbo?: SubjectScore[];
}
const InputBasic3Result = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  //   const [user, setUser] = useState(id);
  console.log(id);
  // const [resultData, setResultData] = useState<SubjectData>({});
  const [resultData, setResultData] = useState<SubjectData>({
    English: [{ test: 0, exam: 0 }],
    Mathematics: [{ test: 0, exam: 0 }],
    History: [{ test: 0, exam: 0 }],
    CRK: [{ test: 0, exam: 0 }],
    VerbalReasoning: [{ test: 0, exam: 0 }],
    QuantitativeReasoning: [{ test: 0, exam: 0 }],
    BasicScience: [{ test: 0, exam: 0 }],
    Phonics: [{ test: 0, exam: 0 }],
    French: [{ test: 0, exam: 0 }],
    Computer: [{ test: 0, exam: 0 }],
    NationalValues: [{ test: 0, exam: 0 }],
    PVC: [{ test: 0, exam: 0 }],
    CreativeArt: [{ test: 0, exam: 0 }],
    HandWriting: [{ test: 0, exam: 0 }],
    Igbo: [{ test: 0, exam: 0 }],
  });
  const [user, setUser] = useState(id);
  console.log("singleUser", user);
  const [term, setTerm] = useState("");
  const [year, setYear] = useState("");
  const [TotalScore, setTotalScore] = useState(0);
  const [TotalAverage, setTotalAverage] = useState(0);
  const [Position, setPosition] = useState("");
  const [numberInClass, setNumberInClass] = useState(Number);
  const [TotalGrade, setTotalGrade] = useState("");
  //  const [Signature, setSignature]=useState('')
  const [classes, setClasses] = useState("");
  const [Remark, setRemark] = useState("");
  const [HmRemark, setHmRemark] = useState("");

  const [schoolRegNumber, setSchoolRegNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [userDatas, setUserDatas] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();
  const handleLoader = () => {
    setLoading(true);
  };
  useEffect(() => {
    let totalScoreSum = 0;
    let subjectCount = 0;

    Object.values(resultData).forEach((subjectScores) => {
      if (Array.isArray(subjectScores)) {
        subjectScores.forEach((score) => {
          if (score.totalScore !== undefined) {
            totalScoreSum += score.totalScore;
            subjectCount++;
          }
        });
      }
    });

    const average =
      subjectCount > 0
        ? parseFloat((totalScoreSum / subjectCount).toFixed(2))
        : 0;

    setTotalScore(totalScoreSum);
    setTotalAverage(average);

    // Assign TotalGrade based on TotalAverage
    if (average >= 70) {
      setTotalGrade("A");
    } else if (average >= 60) {
      setTotalGrade("B");
    } else if (average >= 50) {
      setTotalGrade("C");
    } else if (average >= 40) {
      setTotalGrade("D");
    } else {
      setTotalGrade("F");
    }
  }, [resultData]);

  const handleInputChange = (
    subject: string,
    index: number,
    field: string,
    value: string | number
  ) => {
    setResultData((prevData) => {
      const updatedSubject =
        prevData[subject as keyof SubjectData]?.map((item, i) => {
          if (i === index) {
            const updatedItem = { ...item, [field]: value };

            // Calculate totalScore
            const testScore = Number(updatedItem.test) || 0;
            const examScore = Number(updatedItem.exam) || 0;
            updatedItem.totalScore = testScore + examScore;

            // Assign grade and remark based on totalScore
            if (updatedItem.totalScore >= 70 && updatedItem.totalScore <= 100) {
              updatedItem.grade = "A";
              updatedItem.remark = "Excellent";
            } else if (
              updatedItem.totalScore >= 60 &&
              updatedItem.totalScore <= 69
            ) {
              updatedItem.grade = "B";
              updatedItem.remark = "Very Good";
            } else if (
              updatedItem.totalScore >= 50 &&
              updatedItem.totalScore <= 59
            ) {
              updatedItem.grade = "C";
              updatedItem.remark = "Credit";
            } else if (
              updatedItem.totalScore >= 40 &&
              updatedItem.totalScore <= 49
            ) {
              updatedItem.grade = "D";
              updatedItem.remark = "Pass";
            } else {
              updatedItem.grade = "F";
              updatedItem.remark = "Fail";
            }

            return updatedItem;
          }
          return item;
        }) || [];

      return { ...prevData, [subject]: updatedSubject };
    });
  };
  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(UserApi + id);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setUserDatas(data);
    };

    fetchPosts();
  }, [id]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    const data: any = {
      user: user,
      classes: classes,
      year: year,
      TotalScore: TotalScore,
      TotalGrade: TotalGrade,
      TotalAverage: TotalAverage,
      Position: Position,
      term: term,
      Remark: Remark,
      HmRemark: HmRemark,
      numberInClass: numberInClass,
      schoolRegNumber: userDatas?.schoolRegNumber || schoolRegNumber,

      // resultData,
    };

    axios
      .post(
        // "https://ourworldintschool.onrender.com/api/basic1result/",
        // "http://localhost:5000/api/basic1result/",
        Basic3resultApi,

        Object.entries(resultData).reduce(
          (acc: any, [subject, scores]) => {
            if (Array.isArray(scores)) {
              acc[subject] = scores.map(
                ({ test, exam, totalScore, grade, remark }) => ({
                  test: Number(test),
                  exam: Number(exam),
                  totalScore:
                    totalScore !== undefined ? Number(totalScore) : undefined,
                  grade,
                  remark,
                })
              );
            }
            return acc;
          },
          {
            user: user,
            classes: classes,
            year: year,
            TotalScore: TotalScore,
            TotalGrade: TotalGrade,
            TotalAverage: TotalAverage,
            Position: Position,
            term: term,
            Remark: Remark,
            HmRemark: HmRemark,
            numberInClass: numberInClass,
            schoolRegNumber: userDatas?.schoolRegNumber || schoolRegNumber,
          }
        ),

        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          //   setUser("");

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/basic3Result");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          "Failed to create a post, check your network connection or input the correct textfields"
        );
      });
  };

  return (
    <AdminLayout>
      <section className="h-100 h-custom" style={{ backgroundColor: "white" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <div className="card-body p-4 p-md-5">
                  <div
                    style={{
                      width: "100px",
                      height: "12vh",
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src={userDatas?.passportPhoto}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </div>
                  <h3
                    className="  d-flex justify-content-center"
                    style={{ fontSize: "x-large", fontWeight: "600" }}
                  >
                    Input {userDatas?.currentClass} Result of
                  </h3>
                  <div
                    className="text-center mb-4"
                    style={{ fontSize: "x-large", fontWeight: "600" }}
                  >
                    <span
                      style={{
                        marginLeft: "3px",
                        marginRight: "3px",
                        color: "green",
                      }}
                    >
                      {userDatas?.firstName}{" "}
                    </span>
                    <span className="ml-3" style={{ color: "green" }}>
                      {userDatas?.lastName}{" "}
                    </span>
                  </div>
                  <div
                    className="text-center mb-2"
                    style={{ color: "green", fontWeight: "600" }}
                  >
                    {userDatas?.schoolRegNumber}{" "}
                  </div>
                  <p
                    className="d-flex justify-content-center"
                    style={{ marginLeft: "15px" }}
                  >
                    *pls select your subject and input result*
                  </p>
                  <div className="mt-5">
                    <h3>Subjects</h3>
                  </div>
                  <form onSubmit={submitHandler}>
                    {Object.entries(resultData).map(([subject, scores]) =>
                      Array.isArray(scores) ? (
                        <div key={subject}>
                          {/* <h3>{subject}</h3> */}
                          {scores.map((score, index) => (
                            <div key={index}>
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="success"
                                  id="dropdown-basic"
                                  style={{
                                    border: "1px solid green",
                                    backgroundColor: "white",
                                    marginTop: "15px",
                                    color: "black",
                                  }}
                                  className="result-input-elect-nursery1"
                                >
                                  {subject}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      // required
                                      rows={4}
                                      id="outlined-required"
                                      label="Test/C.A"
                                      type="number"
                                      name="test"
                                      value={score.test || ""}
                                      onChange={(e) =>
                                        handleInputChange(
                                          subject,
                                          index,
                                          "test",
                                          Number(e.target.value)
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6 mb-2 mt-1">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      // required
                                      rows={4}
                                      id="outlined-required"
                                      label="Exam"
                                      name="exam"
                                      type="number"
                                      value={score.exam || ""}
                                      onChange={(e) =>
                                        handleInputChange(
                                          subject,
                                          index,
                                          "exam",
                                          Number(e.target.value)
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6 mb-2 mt-2">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      // required
                                      rows={4}
                                      id="outlined-required"
                                      label="Total Score"
                                      type="number"
                                      name="totalScore"
                                      value={score.totalScore || ""}
                                      onChange={(e) =>
                                        handleInputChange(
                                          subject,
                                          index,
                                          "totalScore",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6 mb-2 mt-1">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      // required
                                      rows={4}
                                      id="outlined-required"
                                      label="Grade"
                                      name="grade"
                                      type="text"
                                      value={score.grade || ""}
                                      onChange={(e) =>
                                        handleInputChange(
                                          subject,
                                          index,
                                          "grade",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="col-md-6 mb-2 mt-1">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      // required
                                      rows={4}
                                      id="outlined-required"
                                      name="remark"
                                      label="Remark"
                                      type="text"
                                      value={score.remark || ""}
                                      onChange={(e) =>
                                        handleInputChange(
                                          subject,
                                          index,
                                          "remark",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          ))}
                        </div>
                      ) : null
                    )}

                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="TotalScore"
                      label="Total Score"
                      type="number"
                      name="TotalScore"
                      autoComplete="classes"
                      autoFocus
                      value={TotalScore || ""}
                      onChange={(e) =>
                        setTotalScore(parseInt(e.target.value, 10))
                      }
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="TotalAverage"
                      label="Total Average"
                      name="TotalAverage"
                      autoComplete="TotalAverage"
                      autoFocus
                      value={TotalAverage || ""}
                      onChange={(e) =>
                        setTotalAverage(parseInt(e.target.value, 10))
                      }
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="TotalGrade"
                      label="Total Grade"
                      name="TotalGrade"
                      autoComplete="TotalGrade"
                      autoFocus
                      value={TotalGrade || ""}
                      onChange={(e) => setTotalGrade(e.target.value)}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="numberInClass"
                      label="Number In Class"
                      name="numberInClass"
                      autoComplete="numberInClass"
                      type="number"
                      autoFocus
                      value={numberInClass || ""}
                      onChange={(e) =>
                        setNumberInClass(parseInt(e.target.value))
                      }
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      multiline
                      rows={6}
                      fullWidth
                      type="text"
                      id="remark"
                      label="Form Teacher Remark"
                      name="remark"
                      autoComplete="remark"
                      autoFocus
                      value={Remark}
                      onChange={(e) => setRemark(e.target.value)}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      multiline
                      rows={6}
                      fullWidth
                      type="text"
                      id="remark"
                      label="Head Teacher Remark"
                      name="remark"
                      autoComplete="remark"
                      autoFocus
                      value={HmRemark}
                      onChange={(e) => setHmRemark(e.target.value)}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="schoolRegNumber"
                      label="School Registeration/Admission Number"
                      name="schoolRegNumber"
                      autoComplete="schoolRegNumber"
                      autoFocus
                      placeholder={
                        userDatas
                          ? ` ${userDatas?.schoolRegNumber}`
                          : "loading..."
                      }
                      style={{
                        color: "black",
                        fontSize: "x-large",
                        fontWeight: "500",
                      }}
                      value={userDatas?.schoolRegNumber || schoolRegNumber}
                      onChange={(e) => setSchoolRegNumber(e.target.value)}
                    />
                    <FormControl sx={{ m: 1, width: 370 }}>
                      <InputLabel id="demo-multiple-name-label">
                        Class
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        // multiple
                        value={classes}
                        onChange={(e) => setClasses(e.target.value)}
                        // input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                      >
                        <MenuItem value={userDatas?.currentClass}>
                          {userDatas?.currentClass}{" "}
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 370 }}>
                      <InputLabel id="demo-multiple-name-label">
                        Term
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        // multiple
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        // input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                      >
                        <MenuItem value="1st-Term">1st Term</MenuItem>
                        <MenuItem value="2nd-Term">2nd Term</MenuItem>
                        <MenuItem value="3rd-Term">3rd Term</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 370 }}>
                      <InputLabel id="demo-multiple-name-label">
                        Year
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        // multiple
                        fullWidth
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        // input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                      >
                        <MenuItem value={currentYear}> {currentYear} </MenuItem>
                      </Select>
                    </FormControl>
                    {loading ? (
                      <CircularIndeterminate />
                    ) : (
                      <div
                        className="d-flex justify-content-center"

                        // onClick={handleLoader}
                      >
                        <Button
                          fullWidth
                          variant="contained"
                          onSubmit={handleLoader}
                          type="submit"
                        >
                          Upload Result
                        </Button>
                        <ToastContainer />
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default InputBasic3Result;
