import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";
import { Dropdown } from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button } from "@mui/material";
import {
  Nursery1resultApi,
  UpdateNursery1resultApi,
  UserApi,
} from "../../../../data/Api";
import AdminLayout from "../../AdminLayout";
import CircularIndeterminate from "../../../../components/Loading/Progress";
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
const UpdateNursery1result = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  //   const [user, setUser] = useState(id);
  console.log(id);
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
  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };
  // const [englishData, setEnglishData] = useState({
  //   English: [],
  // });

  const [formData, setFormData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [mathsData, setMathsData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [SocialHabitData, setSocialHabitData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [BasicScienceData, setBasicScienceData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [AgricScienceData, setAgricScienceData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [WritingData, setWritingData] = useState({
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
  const [PhonicsData, setPhonicsData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [CreativeArtData, setCreativeArtData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [HealthScienceData, setHealthScienceData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const calculateResultTotalAverage = () => {
    // const average = total / Object.keys(scores).length;
    // setGrandAverage(average);
    const GrandTotalAverage = TotalScore / 10;
    // NumeracyData.test +
    // NumeracyData.exam +
    // LiteracyData.test +
    // LiteracyData.exam / 2;

    setTotalAverage(parseFloat(GrandTotalAverage.toFixed(2)));
  };
  const calculateResultTotalScore = () => {
    const GrandTotal =
      formData.test +
      formData.exam +
      mathsData.test +
      mathsData.exam +
      HealthScienceData.test +
      HealthScienceData.exam +
      WritingData.test +
      WritingData.exam +
      AgricScienceData.test +
      AgricScienceData.exam +
      BasicScienceData.test +
      BasicScienceData.exam +
      RhymesData.test +
      RhymesData.exam +
      CreativeArtData.test +
      CreativeArtData.exam +
      PhonicsData.test +
      PhonicsData.exam +
      SocialHabitData.test +
      SocialHabitData.exam;
    setTotalScore(GrandTotal);
  };
  const handleInputChange = (
    subject:
      | "formData"
      | "mathsData"
      | "WritingData"
      | "BasicScienceData"
      | "AgricScienceData"
      | "SocialHabitData"
      | "RhymesData"
      | "HealthScienceData"
      | "CreativeArtData"
      | "PhonicsData",
    type: "test" | "exam" | "grade" | "remark",
    value: number
  ) => {
    switch (subject) {
      case "formData":
        setFormData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "mathsData":
        setMathsData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "BasicScienceData":
        setBasicScienceData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "HealthScienceData":
        setHealthScienceData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "AgricScienceData":
        setAgricScienceData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "WritingData":
        setWritingData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "RhymesData":
        setRhymesData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "PhonicsData":
        setPhonicsData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "CreativeArtData":
        setCreativeArtData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "SocialHabitData":
        setSocialHabitData((prev: any) => ({ ...prev, [type]: value }));
        break;
    }
  };
  // const handleInputChangeTotalScore = (e: any) => {
  //   const { name, value } = e.target;
  //   setTotalScore({
  //     ...TotalScore,
  //     [name]: parseInt(value, 10) || 0,
  //   });
  // };
  const calculateTotalGrade = () => {
    let newGrade = "";
    if (TotalAverage >= 70 && TotalAverage <= 100) {
      newGrade = "A";
    } else if (TotalAverage >= 60 && TotalAverage <= 69) {
      newGrade = "B";
    } else if (TotalAverage >= 50 && TotalAverage <= 59) {
      newGrade = "C";
    } else if (TotalAverage >= 40 && TotalAverage <= 49) {
      newGrade = "D";
    } else if (TotalAverage >= 0 && TotalAverage <= 39) {
      newGrade = "F";
    }
    setTotalGrade(newGrade);
  };
  const calculateformDataTotal = () => {
    const totalScore = formData.test + formData.exam;
    let grade = "";
    let remark = "";
    if (formData.totalScore >= 70 && formData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (formData.totalScore >= 60 && formData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (formData.totalScore >= 50 && formData.totalScore <= 59) {
      grade = "C";
      remark = "Good";
    } else if (formData.totalScore >= 40 && formData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (formData.totalScore >= 0 && formData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setFormData({ ...formData, totalScore, grade, remark });
  };

  const calculatemathsDataTotal = () => {
    const totalScore = mathsData.test + mathsData.exam;
    let grade = "";
    let remark = "";
    if (mathsData.totalScore >= 70 && mathsData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (mathsData.totalScore >= 60 && mathsData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (mathsData.totalScore >= 50 && mathsData.totalScore <= 59) {
      grade = "C";
      remark = "Good";
    } else if (mathsData.totalScore >= 40 && mathsData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (mathsData.totalScore >= 0 && mathsData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setMathsData({ ...mathsData, totalScore, grade, remark });
  };

  const calculateBasicScienceDataTotal = () => {
    const totalScore = BasicScienceData.test + BasicScienceData.exam;
    let grade = "";
    let remark = "";
    if (
      BasicScienceData.totalScore >= 70 &&
      BasicScienceData.totalScore <= 100
    ) {
      grade = "A";
      remark = "Excellent";
    } else if (
      BasicScienceData.totalScore >= 60 &&
      BasicScienceData.totalScore <= 69
    ) {
      grade = "B";
      remark = "Very Good";
    } else if (
      BasicScienceData.totalScore >= 50 &&
      BasicScienceData.totalScore <= 59
    ) {
      grade = "C";
      remark = "Good";
    } else if (
      BasicScienceData.totalScore >= 40 &&
      BasicScienceData.totalScore <= 49
    ) {
      grade = "D";
      remark = "Pass";
    } else if (
      BasicScienceData.totalScore >= 0 &&
      BasicScienceData.totalScore <= 39
    ) {
      grade = "F";
      remark = "Fail";
    }
    setBasicScienceData({ ...BasicScienceData, totalScore, grade, remark });
  };

  const calculateHealthScienceDataTotal = () => {
    const totalScore = HealthScienceData.test + HealthScienceData.exam;
    let grade = "";
    let remark = "";
    if (
      HealthScienceData.totalScore >= 70 &&
      HealthScienceData.totalScore <= 100
    ) {
      grade = "A";
      remark = "Excellent";
    } else if (
      HealthScienceData.totalScore >= 60 &&
      HealthScienceData.totalScore <= 69
    ) {
      grade = "B";
      remark = "Very Good";
    } else if (
      HealthScienceData.totalScore >= 50 &&
      HealthScienceData.totalScore <= 59
    ) {
      grade = "C";
      remark = "Good";
    } else if (
      HealthScienceData.totalScore >= 40 &&
      HealthScienceData.totalScore <= 49
    ) {
      grade = "D";
      remark = "Pass";
    } else if (
      HealthScienceData.totalScore >= 0 &&
      HealthScienceData.totalScore <= 39
    ) {
      grade = "F";
      remark = "Fail";
    }
    setHealthScienceData({ ...HealthScienceData, totalScore, grade, remark });
  };

  const calculateSocialHabitDataTotal = () => {
    const totalScore = SocialHabitData.test + SocialHabitData.exam;
    let grade = "";
    let remark = "";
    if (SocialHabitData.totalScore >= 70 && SocialHabitData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (
      SocialHabitData.totalScore >= 60 &&
      SocialHabitData.totalScore <= 69
    ) {
      grade = "B";
      remark = "Very Good";
    } else if (
      SocialHabitData.totalScore >= 50 &&
      SocialHabitData.totalScore <= 59
    ) {
      grade = "C";
      remark = "Good";
    } else if (
      SocialHabitData.totalScore >= 40 &&
      SocialHabitData.totalScore <= 49
    ) {
      grade = "D";
      remark = "Pass";
    } else if (
      SocialHabitData.totalScore >= 0 &&
      SocialHabitData.totalScore <= 39
    ) {
      grade = "F";
      remark = "Fail";
    }
    setSocialHabitData({ ...SocialHabitData, totalScore, grade, remark });
  };
  const calculateCreativeArtDataTotal = () => {
    const totalScore = CreativeArtData.test + CreativeArtData.exam;
    let grade = "";
    let remark = "";
    if (CreativeArtData.totalScore >= 70 && CreativeArtData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (
      CreativeArtData.totalScore >= 60 &&
      CreativeArtData.totalScore <= 69
    ) {
      grade = "B";
      remark = "Very Good";
    } else if (
      CreativeArtData.totalScore >= 50 &&
      CreativeArtData.totalScore <= 59
    ) {
      grade = "C";
      remark = "Good";
    } else if (
      CreativeArtData.totalScore >= 40 &&
      CreativeArtData.totalScore <= 49
    ) {
      grade = "D";
      remark = "Pass";
    } else if (
      CreativeArtData.totalScore >= 0 &&
      CreativeArtData.totalScore <= 39
    ) {
      grade = "F";
      remark = "Fail";
    }
    setCreativeArtData({ ...CreativeArtData, totalScore, grade, remark });
  };
  const calculatePhonicsDataTotal = () => {
    const totalScore = PhonicsData.test + PhonicsData.exam;
    let grade = "";
    let remark = "";
    if (PhonicsData.totalScore >= 70 && PhonicsData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (PhonicsData.totalScore >= 60 && PhonicsData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (PhonicsData.totalScore >= 50 && PhonicsData.totalScore <= 59) {
      grade = "C";
      remark = "Good";
    } else if (PhonicsData.totalScore >= 40 && PhonicsData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (PhonicsData.totalScore >= 0 && PhonicsData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setPhonicsData({ ...PhonicsData, totalScore, grade, remark });
  };
  const calculateWritingDataTotal = () => {
    const totalScore = WritingData.test + WritingData.exam;
    let grade = "";
    let remark = "";
    if (WritingData.totalScore >= 70 && WritingData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (WritingData.totalScore >= 60 && WritingData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (WritingData.totalScore >= 50 && WritingData.totalScore <= 59) {
      grade = "C";
      remark = "Good";
    } else if (WritingData.totalScore >= 40 && WritingData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (WritingData.totalScore >= 0 && WritingData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setWritingData({ ...WritingData, totalScore, grade, remark });
  };

  const calculateRhymesTotal = () => {
    const totalScore = RhymesData.test + RhymesData.exam;
    let grade = "";
    let remark = "";
    if (RhymesData.totalScore >= 70 && RhymesData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (RhymesData.totalScore >= 60 && RhymesData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (RhymesData.totalScore >= 50 && RhymesData.totalScore <= 59) {
      grade = "C";
      remark = "Good";
    } else if (RhymesData.totalScore >= 40 && RhymesData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (RhymesData.totalScore >= 0 && RhymesData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setRhymesData({ ...RhymesData, totalScore, grade, remark });
  };

  const calculateAgricScienceDataTotal = () => {
    const totalScore = AgricScienceData.test + AgricScienceData.exam;
    let grade = "";
    let remark = "";
    if (
      AgricScienceData.totalScore >= 70 &&
      AgricScienceData.totalScore <= 100
    ) {
      grade = "A";
      remark = "Excellent";
    } else if (
      AgricScienceData.totalScore >= 60 &&
      AgricScienceData.totalScore <= 69
    ) {
      grade = "B";
      remark = "Very Good";
    } else if (
      AgricScienceData.totalScore >= 50 &&
      AgricScienceData.totalScore <= 59
    ) {
      grade = "C";
      remark = "Good";
    } else if (
      AgricScienceData.totalScore >= 40 &&
      AgricScienceData.totalScore <= 49
    ) {
      grade = "D";
      remark = "Pass";
    } else if (
      AgricScienceData.totalScore >= 0 &&
      AgricScienceData.totalScore <= 39
    ) {
      grade = "F";
      remark = "Fail";
    }
    setAgricScienceData({ ...AgricScienceData, totalScore, grade, remark });
  };
  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(Nursery1resultApi + id);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setUserDatas(data);
    };

    fetchPosts();
  }, [id]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    // calculateResultTotalScore();
    // calculateResultTotalAverage();
    const data: any = {
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
      English: [
        // ...English,
        {
          test: formData.test,
          exam: formData.exam,
          totalScore: formData.totalScore,
          grade: formData.grade,
          remark: formData.remark,
        },
      ],

      Mathematics: [
        // ...English,
        {
          test: mathsData.test,
          exam: mathsData.exam,
          totalScore: mathsData.totalScore,
          grade: mathsData.grade,
          remark: mathsData.remark,
        },
      ],
      SocialHabit: [
        // ...English,
        {
          test: SocialHabitData.test,
          exam: SocialHabitData.exam,
          totalScore: SocialHabitData.totalScore,
          grade: SocialHabitData.grade,
          remark: SocialHabitData.remark,
        },
      ],
      HealthScience: [
        // ...English,
        {
          test: HealthScienceData.test,
          exam: HealthScienceData.exam,
          totalScore: HealthScienceData.totalScore,
          grade: HealthScienceData.grade,
          remark: HealthScienceData.remark,
        },
      ],
      BasicScience: [
        // ...English,
        {
          test: BasicScienceData.test,
          exam: BasicScienceData.exam,
          totalScore: BasicScienceData.totalScore,
          grade: BasicScienceData.grade,
          remark: BasicScienceData.remark,
        },
      ],
      AgricScience: [
        // ...English,
        {
          test: AgricScienceData.test,
          exam: AgricScienceData.exam,
          totalScore: AgricScienceData.totalScore,
          grade: AgricScienceData.grade,
          remark: AgricScienceData.remark,
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
      CreativeArt: [
        // ...English,
        {
          test: CreativeArtData.test,
          exam: CreativeArtData.exam,
          totalScore: CreativeArtData.totalScore,
          grade: CreativeArtData.grade,
          remark: CreativeArtData.remark,
        },
      ],
      Phonics: [
        // ...English,
        {
          test: PhonicsData.test,
          exam: PhonicsData.exam,
          totalScore: PhonicsData.totalScore,
          grade: PhonicsData.grade,
          remark: PhonicsData.remark,
        },
      ],
      Writing: [
        // ...English,
        {
          test: WritingData.test,
          exam: WritingData.exam,
          totalScore: WritingData.totalScore,
          grade: WritingData.grade,
          remark: WritingData.remark,
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
      .put(UpdateNursery1resultApi + id, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          //   setUser("");
          setTerm(" ");
          setYear(" ");
          setHmRemark("");
          setPosition(" ");
          setSchoolRegNumber(" ");
          setTotalScore(Number);
          setTotalGrade(" ");
          setTotalAverage(Number);
          setClasses(" ");
          setRemark(" ");
          setNumberInClass(Number);
          console.log(res.data);
          toast.success("post sucessful");
          navigate("/nusery1Result");
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
                      src={userDatas?.user?.passportPhoto}
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
                    Update/Edit Nursery 1 Result of
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
                      {userDatas?.user?.firstName}{" "}
                    </span>
                    <span className="ml-3" style={{ color: "green" }}>
                      {userDatas?.user?.lastName}{" "}
                    </span>
                  </div>
                  <div
                    className="text-center mb-2"
                    style={{ color: "green", fontWeight: "600" }}
                  >
                    {userDatas?.user?.schoolRegNumber}{" "}
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
                        English Language
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
                            value={formData.test}
                            onChange={(e) =>
                              handleInputChange(
                                "formData",
                                "test",
                                +e.target.value
                              )
                            }
                            // onChange={handleInputChangeNumeracy}
                            onBlur={calculateformDataTotal}
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
                            value={formData.exam}
                            onChange={(e) =>
                              handleInputChange(
                                "formData",
                                "exam",
                                +e.target.value
                              )
                            }
                            // onChange={handleInputChangeNumeracy}
                            onBlur={calculateformDataTotal}
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
                            value={formData.totalScore}
                            onBlur={calculateResultTotalScore}
                            // onChange={handleInputChangeLiteracy}
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
                            value={formData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "formData",
                                "grade",
                                e.target.value
                              )
                            }
                            // onChange={handleInputChangeNumeracy}
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
                            value={formData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "formData",
                                "remark",
                                e.target.value
                              )
                            }
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
                        Mathematics
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
                            value={mathsData.test}
                            onChange={(e) =>
                              handleInputChange(
                                "mathsData",
                                "test",
                                +e.target.value
                              )
                            }
                            // onChange={handleInputChangeLiteracy}
                            onBlur={calculatemathsDataTotal}
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
                            value={mathsData.exam}
                            onChange={(e) =>
                              handleInputChange(
                                "mathsData",
                                "exam",
                                +e.target.value
                              )
                            }
                            // onChange={handleInputChangeLiteracy}
                            onBlur={calculatemathsDataTotal}
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
                            value={mathsData.totalScore}
                            onBlur={calculateResultTotalScore}
                            // onChange={handleInputChangeLiteracy}
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
                            value={mathsData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "mathsData",
                                "grade",
                                e.target.value
                              )
                            }
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
                            value={mathsData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "mathsData",
                                "remark",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///maths end input */}
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
                        Basic Science
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
                            value={BasicScienceData.test}
                            onChange={(e) =>
                              handleInputChange(
                                "BasicScienceData",
                                "test",
                                +e.target.value
                              )
                            }
                            onBlur={calculateBasicScienceDataTotal}
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
                            value={BasicScienceData.exam}
                            onChange={(e) =>
                              handleInputChange(
                                "BasicScienceData",
                                "exam",
                                +e.target.value
                              )
                            }
                            onBlur={calculateBasicScienceDataTotal}
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
                            value={BasicScienceData.totalScore}
                            onBlur={calculateResultTotalScore}
                            // onChange={handleInputChangeColouring}
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
                            value={BasicScienceData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "BasicScienceData",
                                "grade",
                                e.target.value
                              )
                            }
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
                            value={BasicScienceData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "BasicScienceData",
                                "remark",
                                e.target.value
                              )
                            }
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
                        Health Science
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
                            value={HealthScienceData.test}
                            onChange={(e) =>
                              handleInputChange(
                                "HealthScienceData",
                                "test",
                                +e.target.value
                              )
                            }
                            onBlur={calculateHealthScienceDataTotal}
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
                            value={HealthScienceData.exam}
                            onChange={(e) =>
                              handleInputChange(
                                "HealthScienceData",
                                "exam",
                                +e.target.value
                              )
                            }
                            onBlur={calculateHealthScienceDataTotal}
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
                            value={HealthScienceData.totalScore}
                            onBlur={calculateResultTotalScore}
                            // onChange={handleInputChangeHealthHabit}
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
                            value={HealthScienceData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "HealthScienceData",
                                "grade",
                                e.target.value
                              )
                            }
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
                            value={HealthScienceData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "HealthScienceData",
                                "remark",
                                e.target.value
                              )
                            }
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
                        Social Habit
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
                            value={SocialHabitData.test}
                            onBlur={calculateSocialHabitDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "SocialHabitData",
                                "test",
                                +e.target.value
                              )
                            }
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
                            value={SocialHabitData.exam}
                            onChange={(e) =>
                              handleInputChange(
                                "SocialHabitData",
                                "exam",
                                +e.target.value
                              )
                            }
                            onBlur={calculateSocialHabitDataTotal}
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
                            value={SocialHabitData.totalScore}
                            onBlur={calculateResultTotalScore}
                            // onChange={handleInputChangePreScience}
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
                            value={SocialHabitData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "SocialHabitData",
                                "grade",
                                e.target.value
                              )
                            }
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
                            value={SocialHabitData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "SocialHabitData",
                                "remark",
                                e.target.value
                              )
                            }
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
                        Writing
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
                            value={WritingData.test}
                            onChange={(e) =>
                              handleInputChange(
                                "WritingData",
                                "test",
                                +e.target.value
                              )
                            }
                            onBlur={calculateWritingDataTotal}
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
                            value={WritingData.exam}
                            onChange={(e) =>
                              handleInputChange(
                                "WritingData",
                                "exam",
                                +e.target.value
                              )
                            }
                            onBlur={calculateWritingDataTotal}
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
                            value={WritingData.totalScore}
                            onBlur={calculateResultTotalScore}
                            // onChange={handleInputChangePracticalLife}
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
                            value={WritingData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "WritingData",
                                "grade",
                                e.target.value
                              )
                            }
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
                            value={WritingData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "WritingData",
                                "remark",
                                e.target.value
                              )
                            }
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
                            onChange={(e) =>
                              handleInputChange(
                                "RhymesData",
                                "test",
                                +e.target.value
                              )
                            }
                            onBlur={calculateRhymesTotal}
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
                            onChange={(e) =>
                              handleInputChange(
                                "RhymesData",
                                "exam",
                                +e.target.value
                              )
                            }
                            onBlur={calculateRhymesTotal}
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
                            onBlur={calculateResultTotalScore}
                            // onChange={handleInputChangeRhymes}
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
                            onChange={(e: any) =>
                              handleInputChange(
                                "RhymesData",
                                "grade",
                                e.target.value
                              )
                            }
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
                            onChange={(e: any) =>
                              handleInputChange(
                                "RhymesData",
                                "remark",
                                e.target.value
                              )
                            }
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
                        Agric Science
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
                            value={AgricScienceData.test}
                            onChange={(e) =>
                              handleInputChange(
                                "AgricScienceData",
                                "test",
                                +e.target.value
                              )
                            }
                            onBlur={calculateAgricScienceDataTotal}
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
                            value={AgricScienceData.exam}
                            onChange={(e) =>
                              handleInputChange(
                                "AgricScienceData",
                                "exam",
                                +e.target.value
                              )
                            }
                            onBlur={calculateAgricScienceDataTotal}
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
                            value={AgricScienceData.totalScore}
                            onBlur={calculateResultTotalScore}
                            // onChange={handleInputChangeSensorialActivity}
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
                            value={AgricScienceData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "AgricScienceData",
                                "grade",
                                e.target.value
                              )
                            }
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
                            value={AgricScienceData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "AgricScienceData",
                                "remark",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
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
                        Phonics
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
                            value={PhonicsData.test}
                            onBlur={calculatePhonicsDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "PhonicsData",
                                "test",
                                +e.target.value
                              )
                            }
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
                            value={PhonicsData.exam}
                            onBlur={calculatePhonicsDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "PhonicsData",
                                "exam",
                                +e.target.value
                              )
                            }
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
                            value={PhonicsData.totalScore}
                            onBlur={calculateResultTotalScore}
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
                            value={PhonicsData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "PhonicsData",
                                "grade",
                                e.target.value
                              )
                            }
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
                            value={PhonicsData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "PhonicsData",
                                "remark",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///Writing end input */}
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
                        Creative Art
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
                            value={CreativeArtData.test}
                            onBlur={calculateCreativeArtDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "CreativeArtData",
                                "test",
                                +e.target.value
                              )
                            }
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
                            value={CreativeArtData.exam}
                            onBlur={calculateCreativeArtDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "CreativeArtData",
                                "exam",
                                +e.target.value
                              )
                            }
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
                            value={CreativeArtData.totalScore}
                            onBlur={calculateResultTotalScore}
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
                            value={CreativeArtData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "CreativeArtData",
                                "grade",
                                e.target.value
                              )
                            }
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
                            value={CreativeArtData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "CreativeArtData",
                                "remark",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///HealthSceince */}
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      // id="TotalScore"
                      label="Total Score"
                      // type="number"
                      // name="TotalScore"
                      // autoComplete="TotalScore"
                      // autoFocus
                      value={TotalScore}
                      aria-readonly
                      onBlur={calculateResultTotalAverage}
                      onChange={(e) =>
                        setTotalScore(parseInt(e.target.value, 10))
                      }
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
                      onBlur={calculateTotalGrade}
                      onChange={(e) =>
                        setTotalAverage(parseInt(e.target.value, 10))
                      }
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

export default UpdateNursery1result;
