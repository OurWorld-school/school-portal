import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Nursery1resultApi,
  PreNurseryresultApi,
  UserApi,
} from "../../../data/Api";
import { Nursery1Data } from "../../../data/Data.Type";
import CircularIndeterminate from "../../../components/Loading/Progress";
import AdminLayout from "../AdminLayout";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";
import { Dropdown } from "react-bootstrap";
import "./InputResult.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button } from "@mui/material";
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
const InputPreNurseryResult = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState(id);
  console.log(id);
  const [term, setTerm] = useState("");
  const [year, setYear] = useState("");
  const [TotalScore, setTotalScore] = useState(Number);
  const [TotalAverage, setTotalAverage] = useState("");
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
  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };
  // const [englishData, setEnglishData] = useState({
  //   English: [],
  // });

  const [NumeracyData, setNumeracyData] = useState<any>({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [LiteracyData, setLiteracyData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [ColouringData, setColouringData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [HealthHabitData, setHealthHabitData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [PreScienceData, setPreScienceData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [PracticalLifeData, setPracticalLifeData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [RhymesData, setRhymesData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [SensorialActivityData, setSensorialActivityData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });

  const handleInputChangeNumeracy = (e: any) => {
    const { name, value } = e.target;
    setNumeracyData({
      ...NumeracyData,
      [name]: value,
      // totalScore: parseFloat(NumeracyData.test) + parseFloat(NumeracyData.exam),
    });
  };
  const handleInputChangeLiteracy = (e: any) => {
    const { name, value } = e.target;
    setLiteracyData({ ...LiteracyData, [name]: value });
  };
  const handleInputChangeColouring = (e: any) => {
    const { name, value } = e.target;
    setColouringData({ ...ColouringData, [name]: value });
  };
  const handleInputChangeHealthHabit = (e: any) => {
    const { name, value } = e.target;
    setHealthHabitData({ ...HealthHabitData, [name]: value });
  };
  const handleInputChangePreScience = (e: any) => {
    const { name, value } = e.target;
    setPreScienceData({ ...PreScienceData, [name]: value });
  };
  const handleInputChangePracticalLife = (e: any) => {
    const { name, value } = e.target;
    setPracticalLifeData({ ...PracticalLifeData, [name]: value });
  };
  const handleInputChangeRhymes = (e: any) => {
    const { name, value } = e.target;
    setRhymesData({ ...RhymesData, [name]: value });
  };
  const handleInputChangeSensorialActivity = (e: any) => {
    const { name, value } = e.target;
    setSensorialActivityData({ ...SensorialActivityData, [name]: value });
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
      schoolRegNumber: schoolRegNumber,
      Numeracy: [
        // ...English,
        {
          test: NumeracyData.test,
          exam: NumeracyData.exam,
          totalScore: NumeracyData.totalScore,
          grade: NumeracyData.grade,
          remark: NumeracyData.remark,
        },
      ],

      Literacy: [
        // ...English,
        {
          test: LiteracyData.test,
          exam: LiteracyData.exam,
          totalScore: LiteracyData.totalScore,
          grade: LiteracyData.grade,
          remark: LiteracyData.remark,
        },
      ],
      Colouring: [
        // ...English,
        {
          test: ColouringData.test,
          exam: ColouringData.exam,
          totalScore: ColouringData.totalScore,
          grade: ColouringData.grade,
          remark: ColouringData.remark,
        },
      ],
      HealthHabit: [
        // ...English,
        {
          test: HealthHabitData.test,
          exam: HealthHabitData.exam,
          totalScore: HealthHabitData.totalScore,
          grade: HealthHabitData.grade,
          remark: HealthHabitData.remark,
        },
      ],
      PreScience: [
        // ...English,
        {
          test: PreScienceData.test,
          exam: PreScienceData.exam,
          totalScore: PreScienceData.totalScore,
          grade: PreScienceData.grade,
          remark: PreScienceData.remark,
        },
      ],
      PracticalLife: [
        // ...English,
        {
          test: PracticalLifeData.test,
          exam: PracticalLifeData.exam,
          totalScore: PracticalLifeData.totalScore,
          grade: PracticalLifeData.grade,
          remark: PracticalLifeData.remark,
        },
      ],
      Rhymes: [
        // ...English,
        {
          test: RhymesData.test,
          exam: RhymesData.exam,
          totalScore: RhymesData.totalScore,
          grade: RhymesData.grade,
          remark: RhymesData.remark,
        },
      ],
      SensorialActivity: [
        // ...English,
        {
          test: SensorialActivityData.test,
          exam: SensorialActivityData.exam,
          totalScore: SensorialActivityData.totalScore,
          grade: SensorialActivityData.grade,
          remark: SensorialActivityData.remark,
        },
      ],
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(PreNurseryresultApi, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setUser("");
          setTerm(" ");
          setYear(" ");
          setHmRemark("");
          setPosition(" ");
          setSchoolRegNumber(" ");
          setTotalScore(Number);
          setTotalGrade(" ");
          setTotalAverage(" ");
          setClasses(" ");
          setRemark(" ");
          setNumberInClass(Number);
          console.log(res.data);
          toast.success("post sucessful");
          navigate("/pre-nurseryResult");
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
  // const updateTotalScoreNumeracy = () => {
  //   setNumeracyData(NumeracyData.test + NumeracyData.exam);
  // };
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
                    Input Nursery 1 Result of
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
                        Numeracy
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="col-md-6 mb-2 mt-2 ">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Test/C.A"
                            type="number"
                            name="test"
                            value={NumeracyData.test}
                            onChange={handleInputChangeNumeracy}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Exam"
                            name="exam"
                            type="number"
                            value={NumeracyData.exam}
                            onChange={handleInputChangeNumeracy}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-2"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          {/* {NumeracyData.totalScore} */}
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Score"
                            type="number"
                            name="totalScore"
                            value={NumeracyData.totalScore}
                            onChange={handleInputChangeNumeracy}
                            // onChange={() =>
                            //   setNumeracyData(
                            //     NumeracyData.test + NumeracyData.exam
                            //   )
                            // }
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Grade"
                            name="grade"
                            type="text"
                            value={NumeracyData.grade}
                            onChange={handleInputChangeNumeracy}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            name="remark"
                            label="Remark"
                            type="text"
                            value={NumeracyData.remark}
                            onChange={handleInputChangeNumeracy}
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///maths */}
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
                        Literacy
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="col-md-6 mb-2 mt-2 ">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            type="number"
                            label="Test/C.A"
                            name="test"
                            value={LiteracyData.test}
                            onChange={handleInputChangeLiteracy}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Exam"
                            name="exam"
                            type="number"
                            value={LiteracyData.exam}
                            onChange={handleInputChangeLiteracy}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-2"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Score"
                            type="number"
                            name="totalScore"
                            value={LiteracyData.totalScore}
                            onChange={handleInputChangeLiteracy}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Grade"
                            name="grade"
                            type="text"
                            value={LiteracyData.grade}
                            onChange={handleInputChangeLiteracy}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            name="remark"
                            label="Remark"
                            type="text"
                            value={LiteracyData.remark}
                            onChange={handleInputChangeLiteracy}
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///maths end input */}
                    {/* ///HealthSceince */}
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
                        Colouring
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="col-md-6 mb-2 mt-2 ">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Test/C.A"
                            type="number"
                            name="test"
                            value={ColouringData.test}
                            onChange={handleInputChangeColouring}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Exam"
                            name="exam"
                            type="number"
                            value={ColouringData.exam}
                            onChange={handleInputChangeColouring}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-2"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Score"
                            type="number"
                            name="totalScore"
                            value={ColouringData.totalScore}
                            onChange={handleInputChangeColouring}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Grade"
                            name="grade"
                            type="text"
                            value={ColouringData.grade}
                            onChange={handleInputChangeColouring}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            name="remark"
                            label="Remark"
                            type="text"
                            value={ColouringData.remark}
                            onChange={handleInputChangeColouring}
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///Health science end input */}
                    {/* ///Basic Sceince */}
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
                        Health Habit
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="col-md-6 mb-2 mt-2 ">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Test/C.A"
                            type="number"
                            name="test"
                            value={HealthHabitData.test}
                            onChange={handleInputChangeHealthHabit}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Exam"
                            name="exam"
                            type="number"
                            value={HealthHabitData.exam}
                            onChange={handleInputChangeHealthHabit}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-2"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Score"
                            type="number"
                            name="totalScore"
                            value={HealthHabitData.totalScore}
                            onChange={handleInputChangeHealthHabit}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Grade"
                            name="grade"
                            type="text"
                            value={HealthHabitData.grade}
                            onChange={handleInputChangeHealthHabit}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            name="remark"
                            label="Remark"
                            type="text"
                            value={HealthHabitData.remark}
                            onChange={handleInputChangeHealthHabit}
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///Basic Science end input */}
                    {/* ///AgricSceince */}
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
                        Pre Science
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="col-md-6 mb-2 mt-2 ">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Test/C.A"
                            type="number"
                            name="test"
                            value={PreScienceData.test}
                            onChange={handleInputChangePreScience}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Exam"
                            name="exam"
                            type="number"
                            value={PreScienceData.exam}
                            onChange={handleInputChangePreScience}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-2"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Score"
                            type="number"
                            name="totalScore"
                            value={PreScienceData.totalScore}
                            onChange={handleInputChangePreScience}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Grade"
                            name="grade"
                            type="text"
                            value={PreScienceData.grade}
                            onChange={handleInputChangePreScience}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            name="remark"
                            label="Remark"
                            type="text"
                            value={PreScienceData.remark}
                            onChange={handleInputChangePreScience}
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* /// Agric Sceince end input */}
                    {/* ///Social Habit */}
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
                        Practical Life
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="col-md-6 mb-2 mt-2 ">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Test/C.A"
                            type="number"
                            name="test"
                            value={PracticalLifeData.test}
                            onChange={handleInputChangePracticalLife}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Exam"
                            name="exam"
                            type="number"
                            value={PracticalLifeData.exam}
                            onChange={handleInputChangePracticalLife}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-2"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Score"
                            type="number"
                            name="totalScore"
                            value={PracticalLifeData.totalScore}
                            onChange={handleInputChangePracticalLife}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Grade"
                            name="grade"
                            type="text"
                            value={PracticalLifeData.grade}
                            onChange={handleInputChangePracticalLife}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            name="remark"
                            label="Remark"
                            type="text"
                            value={PracticalLifeData.remark}
                            onChange={handleInputChangePracticalLife}
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///Social Habit end input */}
                    {/* ///Rhymes */}
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
                        Rhymes
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="col-md-6 mb-2 mt-2 ">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Test/C.A"
                            type="number"
                            name="test"
                            value={RhymesData.test}
                            onChange={handleInputChangeRhymes}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Exam"
                            name="exam"
                            type="number"
                            value={RhymesData.exam}
                            onChange={handleInputChangeRhymes}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-2"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Score"
                            type="number"
                            name="totalScore"
                            value={RhymesData.totalScore}
                            onChange={handleInputChangeRhymes}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Grade"
                            name="grade"
                            type="text"
                            value={RhymesData.grade}
                            onChange={handleInputChangeRhymes}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            name="remark"
                            label="Remark"
                            type="text"
                            value={RhymesData.remark}
                            onChange={handleInputChangeRhymes}
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///Rhymes end input */}
                    {/* ///Writing */}
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
                        Sensorial Activity
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="col-md-6 mb-2 mt-2 ">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Test/C.A"
                            type="number"
                            name="test"
                            value={SensorialActivityData.test}
                            onChange={handleInputChangeSensorialActivity}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Exam"
                            name="exam"
                            type="number"
                            value={SensorialActivityData.exam}
                            onChange={handleInputChangeSensorialActivity}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-2"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Score"
                            type="number"
                            name="totalScore"
                            value={SensorialActivityData.totalScore}
                            onChange={handleInputChangeSensorialActivity}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Grade"
                            name="grade"
                            type="text"
                            value={SensorialActivityData.grade}
                            onChange={handleInputChangeSensorialActivity}
                          />
                        </div>
                        <div
                          className="col-md-6 mb-2 mt-1"
                          // style={{
                          //   marginLeft: "auto",
                          //   marginRight: "auto",
                          // }}
                        >
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            name="remark"
                            label="Remark"
                            type="text"
                            value={SensorialActivityData.remark}
                            onChange={handleInputChangeSensorialActivity}
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///Writing end input */}

                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="TotalScore"
                      label="Total Score"
                      type="number"
                      name="TotalScore"
                      autoComplete="classes"
                      autoFocus
                      value={TotalScore}
                      onChange={(e) => setTotalScore(parseInt(e.target.value))}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="TotalAverage"
                      label="Total Average"
                      name="TotalAverage"
                      autoComplete="TotalAverage"
                      autoFocus
                      value={TotalAverage}
                      onChange={(e) => setTotalAverage(e.target.value)}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="TotalGrade"
                      label="Total Grade"
                      name="TotalGrade"
                      autoComplete="TotalGrade"
                      autoFocus
                      value={TotalGrade}
                      onChange={(e) => setTotalGrade(e.target.value)}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="Position"
                      label="Position"
                      name="Position"
                      autoComplete="Position"
                      autoFocus
                      value={Position}
                      onChange={(e) => setPosition(e.target.value)}
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
                      value={numberInClass}
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
                      value={schoolRegNumber}
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
                        <MenuItem value="Nursery-1">Pre-Nursery</MenuItem>
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
                        <MenuItem value="2023">2023</MenuItem>
                        <MenuItem value="2024">2024</MenuItem>
                        <MenuItem value="2025">2025</MenuItem>
                        <MenuItem value="2026">2026</MenuItem>
                        <MenuItem value="2027">2027</MenuItem>
                        <MenuItem value="2028">2028</MenuItem>
                        <MenuItem value="2029">2029</MenuItem>
                        <MenuItem value="2030">2030</MenuItem>
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

export default InputPreNurseryResult;
