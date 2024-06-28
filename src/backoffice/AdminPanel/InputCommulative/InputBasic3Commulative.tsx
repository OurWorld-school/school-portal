import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Basic1CommulativeApi,
  Basic1resultApi,
  Basic2CommulativeApi,
  Basic2resultApi,
  Basic3CommulativeApi,
  Basic3resultApi,
  Nursery1resultApi,
  Nursery3resultApi,
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
import "../InputResult/InputResult.css";
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
const InputBasic3Commulative = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState(id);
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
  const [EnglishData, setEnglishData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [MathsData, setMathsData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [VerbalReasoningData, setVerbalReasoningData] = useState<any>({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [QuantitativeReasoningData, setQuantitativeReasoningData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [BasicScienceData, setBasicScienceData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [NationalValuesData, setNationalValuesData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [CRKData, setCRKData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [CreativeArtData, setCreativeArtData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [HistoryData, setHistoryData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [PhonicsData, setPhonicsData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [FrenchData, setFrenchData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [IgboData, setIgboData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [PVCData, setPVCData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [ComputerData, setComputerData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [HandWritingData, setHandWritingData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  useEffect(() => {
    calculateResultTotalScore();
    calculateTotalGrade();
  }, []);

  const calculateResultTotalScore = () => {
    let GrandTotal = 0;
    let count = 0;
    subjectMarks.forEach((subject: any) => {
      if (subject.English) {
        GrandTotal += subject.English.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.Mathematics) {
        GrandTotal += subject.Mathematics.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.VerbalReasoning) {
        GrandTotal += subject.VerbalReasoning.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.QuantitativeReasoning) {
        GrandTotal += subject.QuantitativeReasoning.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.BasicScience) {
        GrandTotal += subject.BasicScience.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.NationalValues) {
        GrandTotal += subject.NationalValues.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.CRK) {
        GrandTotal += subject.CRK.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.Phonics) {
        GrandTotal += subject.Phonics.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.French) {
        GrandTotal += subject.French.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }

      if (subject.Igbo) {
        GrandTotal += subject.Igbo.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.PVC) {
        GrandTotal += subject.PVC.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }

      if (subject.HandWriting) {
        GrandTotal += subject.HandWriting.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
    });
    setTotalAverage(count > 0 ? GrandTotal / count : 0);
    // setTotalAverage(parseFloat(GrandTotalAverage.toFixed(2)));
    setTotalScore(GrandTotal);
    calculateTotalGrade();
  };
  const handleInputChange = (
    subject:
      | "EnglishData"
      | "MathsData"
      | "BasicScienceData"
      | "VerbalReasoningData"
      | "QuantitativeReasoningData"
      | "PVCData"
      | "IgboData"
      | "ComputerData"
      | "CreativeArtData"
      | "HistoryData"
      | "PhonicsData"
      | "NationalValuesData"
      | "FrenchData"
      | "HandWritingData"
      | "CRKData",
    type: "test" | "exam" | "grade" | "remark",
    value: number
  ) => {
    switch (subject) {
      case "EnglishData":
        setEnglishData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "MathsData":
        setMathsData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "VerbalReasoningData":
        setVerbalReasoningData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "QuantitativeReasoningData":
        setQuantitativeReasoningData((prev: any) => ({
          ...prev,
          [type]: value,
        }));
        break;
      case "BasicScienceData":
        setBasicScienceData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "NationalValuesData":
        setNationalValuesData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "PhonicsData":
        setPhonicsData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "PVCData":
        setPVCData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "HandWritingData":
        setHandWritingData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "HistoryData":
        setHistoryData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "IgboData":
        setIgboData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "ComputerData":
        setComputerData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "CRKData":
        setCRKData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "FrenchData":
        setFrenchData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "CreativeArtData":
        setCreativeArtData((prev: any) => ({ ...prev, [type]: value }));
        break;
    }
  };
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
  const [EnglishAverage, setEnglishAverage] = useState<number>(0);
  const [MathsAverage, setMathsAverage] = useState<number>(0);
  const [BasicScienceAverage, setBasicScienceAverage] = useState<number>(0);
  const [VerbalReasoningAverage, setVerbalReasoningAverage] =
    useState<number>(0);
  const [QuantitativeReasoningAverage, setQuantitativeReasoningAverage] =
    useState<number>(0);
  const [NationalValuesAverage, setNationalValuesAverage] = useState<number>(0);
  const [CRKAverage, setCRKAverage] = useState<number>(0);
  const [HistoryAverage, setHistoryAverage] = useState<number>(0);
  const [PhonicsAverage, setPhonicsAverage] = useState<number>(0);
  const [IgboAverage, setIgboAverage] = useState<number>(0);
  const [PVCAverage, setPVCAverage] = useState<number>(0);
  const [FrenchAverage, setFrenchAverage] = useState<number>(0);
  const [CreativeArtAverage, setCreativeArtAverage] = useState<number>(0);
  const [HandWritingAverage, setHandWritingAverage] = useState<number>(0);
  const calculateEnglishDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.English.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (EnglishAverage >= 70 && EnglishAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (EnglishAverage >= 60 && EnglishAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (EnglishAverage >= 50 && EnglishAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (EnglishAverage >= 40 && EnglishAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (EnglishAverage >= 0 && EnglishAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setEnglishAverage(count > 0 ? totalScore / count : 0);
    setEnglishData({ ...EnglishData, totalScore, grade, remark });
  };
  const calculateMathsDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.Mathematics.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (MathsAverage >= 70 && MathsAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (MathsAverage >= 60 && MathsAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (MathsAverage >= 50 && MathsAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (MathsAverage >= 40 && MathsAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (MathsAverage >= 0 && MathsAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setMathsData({ ...MathsData, totalScore, grade, remark });
    setMathsAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateVerbalReasoningDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.VerbalReasoning.forEach((item: any) => {
        totalScore += item.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (VerbalReasoningAverage >= 70 && VerbalReasoningAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (VerbalReasoningAverage >= 60 && VerbalReasoningAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (VerbalReasoningAverage >= 50 && VerbalReasoningAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (VerbalReasoningAverage >= 40 && VerbalReasoningAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (VerbalReasoningAverage >= 0 && VerbalReasoningAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setVerbalReasoningData({
      ...VerbalReasoningData,
      totalScore,
      grade,
      remark,
    });
    setVerbalReasoningAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateQuantitativeReasoningDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.QuantitativeReasoning.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (
      QuantitativeReasoningAverage >= 70 &&
      QuantitativeReasoningAverage <= 100
    ) {
      grade = "A";
      remark = "Excellent";
    } else if (
      QuantitativeReasoningAverage >= 60 &&
      QuantitativeReasoningAverage <= 69
    ) {
      grade = "B";
      remark = "Very Good";
    } else if (
      QuantitativeReasoningAverage >= 50 &&
      QuantitativeReasoningAverage <= 59
    ) {
      grade = "C";
      remark = "Good";
    } else if (
      QuantitativeReasoningAverage >= 40 &&
      QuantitativeReasoningAverage <= 49
    ) {
      grade = "D";
      remark = "Pass";
    } else if (
      QuantitativeReasoningAverage >= 0 &&
      QuantitativeReasoningAverage <= 39
    ) {
      grade = "F";
      remark = "Fail";
    }
    setQuantitativeReasoningData({
      ...QuantitativeReasoningData,
      totalScore,
      grade,
      remark,
    });
    setQuantitativeReasoningAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateHistoryDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.History.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (HistoryAverage >= 70 && HistoryAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (HistoryAverage >= 60 && HistoryAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (HistoryAverage >= 50 && HistoryAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (HistoryAverage >= 40 && HistoryAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (HistoryAverage >= 0 && HistoryAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setHistoryData({ ...HistoryData, totalScore, grade, remark });
    setHistoryAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateNationalValuesDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.NationalValues.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (NationalValuesAverage >= 70 && NationalValuesAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (NationalValuesAverage >= 60 && NationalValuesAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (NationalValuesAverage >= 50 && NationalValuesAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (NationalValuesAverage >= 40 && NationalValuesAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (NationalValuesAverage >= 0 && NationalValuesAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setNationalValuesData({ ...NationalValuesData, totalScore, remark, grade });
    setNationalValuesAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateCreativeArtDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.CreativeArt.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (CreativeArtAverage >= 70 && CreativeArtAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (CreativeArtAverage >= 60 && CreativeArtAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (CreativeArtAverage >= 50 && CreativeArtAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (CreativeArtAverage >= 40 && CreativeArtAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (CreativeArtAverage >= 0 && CreativeArtAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setCreativeArtData({ ...CreativeArtData, totalScore, grade, remark });
    setCreativeArtAverage(count > 0 ? totalScore / count : 0);
  };
  const calculatePhonicsDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.Phonics.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (PhonicsAverage >= 70 && PhonicsAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (PhonicsAverage >= 60 && PhonicsAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (PhonicsAverage >= 50 && PhonicsAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (PhonicsAverage >= 40 && PhonicsAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (PhonicsAverage >= 0 && PhonicsAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setPhonicsData({ ...PhonicsData, totalScore, grade, remark });
    setPhonicsAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateHandWritingDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.HandWriting.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (HandWritingAverage >= 70 && HandWritingAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (HandWritingAverage >= 60 && HandWritingAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (HandWritingAverage >= 50 && HandWritingAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (HandWritingAverage >= 40 && HandWritingAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (HandWritingAverage >= 0 && HandWritingAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setHandWritingData({ ...HandWritingData, totalScore, grade, remark });
    setHandWritingAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateBasicScienceDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.BasicScience.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (BasicScienceAverage >= 70 && BasicScienceAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (BasicScienceAverage >= 60 && BasicScienceAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (BasicScienceAverage >= 50 && BasicScienceAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (BasicScienceAverage >= 40 && BasicScienceAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (BasicScienceAverage >= 0 && BasicScienceAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setBasicScienceData({ ...BasicScienceData, totalScore, grade, remark });
    setBasicScienceAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateFrenchDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.French.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (FrenchAverage >= 70 && FrenchAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (FrenchAverage >= 60 && FrenchAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (FrenchAverage >= 50 && FrenchAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (FrenchAverage >= 40 && FrenchAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (FrenchAverage >= 0 && FrenchAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setFrenchData({ ...FrenchData, totalScore, grade, remark });
    setFrenchAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateCRKDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.CRK.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (CRKAverage >= 70 && CRKAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (CRKAverage >= 60 && CRKAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (CRKAverage >= 50 && CRKAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (CRKAverage >= 40 && CRKAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (CRKAverage >= 0 && CRKAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setCRKData({ ...CRKData, totalScore, grade, remark });
    setCRKAverage(count > 0 ? totalScore / count : 0);
  };
  const calculatePVCDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.PVC.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (PVCAverage >= 70 && PVCAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (PVCAverage >= 60 && PVCAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (PVCAverage >= 50 && PVCAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (PVCAverage >= 40 && PVCAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (PVCAverage >= 0 && PVCAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setPVCData({ ...PVCData, totalScore, grade, remark });
    setPVCAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateIgboDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.Igbo.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (IgboAverage >= 70 && IgboAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (IgboAverage >= 60 && IgboAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (IgboAverage >= 50 && IgboAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (IgboAverage >= 40 && IgboAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (IgboAverage >= 0 && IgboAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setIgboData({ ...IgboData, totalScore, grade, remark });
    setIgboAverage(count > 0 ? totalScore / count : 0);
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

    const extractTotalScores = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.English?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTerm = extractTotalScores("1st-Term");
    const total2ndTerm = extractTotalScores("2nd-Term");
    const total3rdTerm = extractTotalScores("3rd-Term");

    const extractMathematicsTotalScores = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.Mathematics?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermMathematics = extractMathematicsTotalScores("1st-Term");
    const total2ndTermMathematics = extractMathematicsTotalScores("2nd-Term");
    const total3rdTermMathematics = extractMathematicsTotalScores("3rd-Term");
    const extractTotalScoresVerbalReasoning = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.VerbalReasoning?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermVerbalReasoning =
      extractTotalScoresVerbalReasoning("1st-Term");
    const total2ndTermVerbalReasoning = extractTotalScores("2nd-Term");
    const total3rdTermVerbalReasoning =
      extractTotalScoresVerbalReasoning("3rd-Term");
    const extractTotalScoresQuantitativeReasoning = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.QuantitativeReasoning?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermQuantitativeReasoning =
      extractTotalScoresQuantitativeReasoning("1st-Term");
    const total2ndTermQuantitativeReasoning =
      extractTotalScoresQuantitativeReasoning("2nd-Term");
    const total3rdTermQuantitativeReasoning =
      extractTotalScoresQuantitativeReasoning("3rd-Term");
    const extractTotalScoresBasicScience = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.BasicScience?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermBasicScience = extractTotalScoresBasicScience("1st-Term");
    const total2ndTermBasicScience = extractTotalScoresBasicScience("2nd-Term");
    const total3rdTermBasicScience = extractTotalScoresBasicScience("3rd-Term");
    const extractTotalScoresNationalValues = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.NationalValues?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermNationalValues =
      extractTotalScoresNationalValues("1st-Term");
    const total2ndTermNationalValues =
      extractTotalScoresNationalValues("2nd-Term");
    const total3rdTermNationalValues = extractTotalScores("3rd-Term");
    const extractTotalScoresCRK = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.CRK?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermCRK = extractTotalScoresCRK("1st-Term");
    const total2ndTermCRK = extractTotalScoresCRK("2nd-Term");
    const total3rdTermCRK = extractTotalScoresCRK("3rd-Term");
    const extractTotalScoresPhonics = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.Phonics?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermPhonics = extractTotalScoresPhonics("1st-Term");
    const total2ndTermPhonics = extractTotalScoresPhonics("2nd-Term");
    const total3rdTermPhonics = extractTotalScoresPhonics("3rd-Term");
    const extractTotalScoresFrench = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.French?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermFrench = extractTotalScoresFrench("1st-Term");
    const total2ndTermFrench = extractTotalScoresFrench("2nd-Term");
    const total3rdTermFrench = extractTotalScoresFrench("3rd-Term");
    const extractTotalScoresIgbo = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.Igbo?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermIgbo = extractTotalScoresIgbo("1st-Term");
    const total2ndTermIgbo = extractTotalScoresIgbo("2nd-Term");
    const total3rdTermIgbo = extractTotalScoresIgbo("3rd-Term");
    const extractTotalScoresCreativeArt = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.CreativeArt?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermCreativeArt = extractTotalScoresCreativeArt("1st-Term");
    const total2ndTermCreativeArt = extractTotalScoresCreativeArt("2nd-Term");
    const total3rdTermCreativeArt = extractTotalScoresCreativeArt("3rd-Term");
    const extractTotalScoresPVC = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.PVC?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermPVC = extractTotalScoresPVC("1st-Term");
    const total2ndTermPVC = extractTotalScoresPVC("2nd-Term");
    const total3rdTermPVC = extractTotalScoresPVC("3rd-Term");
    const extractTotalScoresHandWriting = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.HandWriting?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermHandWriting = extractTotalScoresHandWriting("1st-Term");
    const total2ndTermHandWriting = extractTotalScoresHandWriting("2nd-Term");
    const total3rdTermHandWriting = extractTotalScoresHandWriting("3rd-Term");
    const extractTotalScoresHistory = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.History?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermHistory = extractTotalScoresHistory("1st-Term");
    const total2ndTermHistory = extractTotalScoresHistory("2nd-Term");
    const total3rdTermHistory = extractTotalScoresHistory("3rd-Term");
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
      schoolRegNumber: userDatas?.schoolRegNumber,

      English: [
        // ...English,
        {
          total1stTermScore: total1stTerm,
          total2ndTermScore: total2ndTerm,
          total3rdTermScore: total3rdTerm,
          totalScore: EnglishData.totalScore,
          totalAverage: EnglishAverage,
          grade: EnglishData.grade,
          remark: EnglishData.remark,
        },
      ],

      Mathematics: [
        // ...English,
        {
          total1stTermScore: total1stTermMathematics,
          total2ndTermScore: total2ndTermMathematics,
          total3rdTermScore: total3rdTermMathematics,

          totalScore: MathsData.totalScore,
          totalAverage: MathsAverage,
          grade: MathsData.grade,
          remark: MathsData.remark,
        },
      ],
      VerbalReasoning: [
        // ...English,
        {
          total1stTermScore: total1stTermVerbalReasoning,
          total2ndTermScore: total2ndTermVerbalReasoning,
          total3rdTermScore: total3rdTermVerbalReasoning,

          totalScore: VerbalReasoningData.totalScore,
          totalAverage: VerbalReasoningAverage,
          grade: VerbalReasoningData.grade,
          remark: VerbalReasoningData.remark,
        },
      ],
      QuantitativeReasoning: [
        // ...English,
        {
          total1stTermScore: total1stTermQuantitativeReasoning,
          total2ndTermScore: total2ndTermQuantitativeReasoning,
          total3rdTermScore: total3rdTermQuantitativeReasoning,

          totalScore: QuantitativeReasoningData.totalScore,
          totalAverage: QuantitativeReasoningAverage,
          grade: QuantitativeReasoningData.grade,
          remark: QuantitativeReasoningData.remark,
        },
      ],
      HandWriting: [
        {
          total1stTermScore: total1stTermHandWriting,
          total2ndTermScore: total2ndTermHandWriting,
          total3rdTermScore: total3rdTermHandWriting,

          totalScore: HandWritingData.totalScore,
          totalAverage: HandWritingAverage,
          grade: HandWritingData.grade,
          remark: HandWritingData.remark,
        },
      ],
      CreativeArt: [
        // ...English,
        {
          total1stTermScore: total1stTermCreativeArt,
          total2ndTermScore: total2ndTermCreativeArt,
          total3rdTermScore: total3rdTermCreativeArt,

          totalScore: CreativeArtData.totalScore,
          totalAverage: CreativeArtAverage,
          grade: CreativeArtData.grade,
          remark: CreativeArtData.remark,
        },
      ],
      Phonics: [
        // ...English,
        {
          total1stTermScore: total1stTermPhonics,
          total2ndTermScore: total2ndTermPhonics,
          total3rdTermScore: total3rdTermPhonics,

          totalScore: PhonicsData.totalScore,
          totalAverage: PhonicsAverage,
          grade: PhonicsData.grade,
          remark: PhonicsData.remark,
        },
      ],
      CRK: [
        // ...English,
        {
          total1stTermScore: total1stTermCRK,
          total2ndTermScore: total2ndTermCRK,
          total3rdTermScore: total3rdTermCRK,

          totalScore: CRKData.totalScore,
          totalAverage: CRKAverage,
          grade: CRKData.grade,
          remark: CRKData.remark,
        },
      ],
      Igbo: [
        // ...English,
        {
          total1stTermScore: total1stTermIgbo,
          total2ndTermScore: total2ndTermIgbo,
          total3rdTermScore: total3rdTermIgbo,

          totalScore: IgboData.totalScore,
          totalAverage: IgboAverage,
          grade: IgboData.grade,
          remark: IgboData.remark,
        },
      ],
      PVC: [
        // ...English,
        {
          total1stTermScore: total1stTermPVC,
          total2ndTermScore: total2ndTermPVC,
          total3rdTermScore: total3rdTermPVC,

          totalScore: PVCData.totalScore,
          totalAverage: PVCAverage,
          grade: PVCData.grade,
          remark: PVCData.remark,
        },
      ],
      French: [
        // ...English,
        {
          total1stTermScore: total1stTermFrench,
          total2ndTermScore: total2ndTermFrench,
          total3rdTermScore: total3rdTermFrench,

          totalScore: FrenchData.totalScore,
          totalAverage: FrenchAverage,
          grade: FrenchData.grade,
          remark: FrenchData.remark,
        },
      ],
      History: [
        // ...English,
        {
          total1stTermScore: total1stTermHistory,
          total2ndTermScore: total2ndTermHistory,
          total3rdTermScore: total3rdTermHistory,

          totalScore: HistoryData.totalScore,
          totalAverage: HistoryAverage,
          grade: HistoryData.grade,
          remark: HistoryData.remark,
        },
      ],
      BasicScience: [
        // ...English,
        {
          total1stTermScore: total1stTermBasicScience,
          total2ndTermScore: total2ndTermBasicScience,
          total3rdTermScore: total3rdTermBasicScience,

          totalScore: BasicScienceData.totalScore,
          totalAverage: BasicScienceAverage,
          grade: BasicScienceData.grade,
          remark: BasicScienceData.remark,
        },
      ],

      NationalValues: [
        // ...English,
        {
          total1stTermScore: total1stTermNationalValues,
          total2ndTermScore: total2ndTermNationalValues,
          total3rdTermScore: total3rdTermNationalValues,

          totalScore: NationalValuesData.totalScore,
          totalAverage: NationalValuesAverage,
          grade: NationalValuesData.grade,
          remark: NationalValuesData.remark,
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
      .post(Basic3CommulativeApi, data, headers)

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
          setTotalAverage(Number);
          setClasses(" ");
          setRemark(" ");
          setNumberInClass(Number);
          console.log(res.data);
          toast.success("post sucessful");
          navigate("/basic3CommulativeResult");
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
  const [subjectMarks, setSubjectMarks] = useState<any>([]);
  const [startYear, setStartYear] = useState<number>(2023);
  const [endYear, setEndYear] = useState<number>(2024);
  const [startTerm, setStartTerm] = useState<string>("1st-Term");
  const [endTerm, setEndTerm] = useState<string>("3rd-Term");
  console.log(subjectMarks);
  useEffect(() => {
    try {
      axios.get(Basic3resultApi).then((response) => {
        // Calculate total scores for each term
        // setLoader(false);

        setSubjectMarks(
          response.data.filter(
            (item: any) =>
              item?.classes === "Basic-3" &&
              item.year >= startYear &&
              item.year <= endYear &&
              item?.user?._id === id
          )
        );
      });
    } catch (error) {
      console.error(error, "Failed");
    }
  }, []);
  const [loader, setLoader] = useState<boolean>(true);
  const [EnglishgrandTotal, setEnglishGrandTotal] = useState(0);

  useEffect(() => {
    calculateEnglishDataTotal();
    calculateBasicScienceDataTotal();
    calculateCRKDataTotal();
    calculateCreativeArtDataTotal();
    calculateIgboDataTotal();
    calculateFrenchDataTotal();
    calculateHandWritingDataTotal();
    calculateMathsDataTotal();
    calculateNationalValuesDataTotal();
    calculateHistoryDataTotal();
    calculateQuantitativeReasoningDataTotal();
    calculateResultTotalScore();
    calculatePVCDataTotal();
    calculateVerbalReasoningDataTotal();
    calculatePhonicsDataTotal();
  }, [subjectMarks]);
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
                    Input Basic 1 Result of
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
                    *pls select your subject and input Commulative result*
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
                        English Studies
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.English?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onChange={(e) =>
                                        handleInputChange(
                                          "EnglishData",
                                          "test",
                                          +e.target.value
                                        )
                                      }
                                      onBlur={calculateEnglishDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.English?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="2nd Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onChange={(e) =>
                                        handleInputChange(
                                          "EnglishData",
                                          "test",
                                          +e.target.value
                                        )
                                      }
                                      onBlur={calculateEnglishDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.English?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onChange={(e) =>
                                        handleInputChange(
                                          "EnglishData",
                                          "test",
                                          +e.target.value
                                        )
                                      }
                                      onBlur={calculateEnglishDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateEnglishDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
                        </div>

                        <div className="col-md-6 mb-2 mt-2">
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
                            value={EnglishData.totalScore}
                            onBlur={calculateResultTotalScore}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={EnglishAverage.toFixed(2)}
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
                            value={EnglishData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "EnglishData",
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
                            value={EnglishData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "EnglishData",
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
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.Mathematics?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={calculateMathsDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.Mathematics?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="2nd Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={calculateMathsDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.Mathematics?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onChange={(e) =>
                                          handleInputChange(
                                            "EnglishData",
                                            "test",
                                            +e.target.value
                                          )
                                        }
                                        onBlur={calculateMathsDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateMathsDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
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
                            value={MathsData.totalScore}
                            onBlur={calculateResultTotalScore}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={MathsAverage.toFixed(2)}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-1">
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
                            value={MathsData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "MathsData",
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
                            value={MathsData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "MathsData",
                                "remark",
                                e.target.value
                              )
                            }
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
                        Basic Science & Technology
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.BasicScience?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={calculateBasicScienceDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.BasicScience?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="2nd Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={calculateBasicScienceDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.BasicScience?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onChange={(e) =>
                                          handleInputChange(
                                            "EnglishData",
                                            "test",
                                            +e.target.value
                                          )
                                        }
                                        onBlur={calculateBasicScienceDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateBasicScienceDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
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
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={BasicScienceAverage.toFixed(2)}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-1">
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
                        Verbal Reasoning
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.VerbalReasoning?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={
                                          calculateVerbalReasoningDataTotal
                                        }
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.VerbalReasoning?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="2nd Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={
                                          calculateVerbalReasoningDataTotal
                                        }
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.VerbalReasoning?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={
                                          calculateVerbalReasoningDataTotal
                                        }
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateVerbalReasoningDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
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
                            value={VerbalReasoningData.totalScore}
                            onBlur={calculateResultTotalScore}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={VerbalReasoningAverage.toFixed(2)}
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
                            value={VerbalReasoningData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "VerbalReasoningData",
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
                            value={VerbalReasoningData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "VerbalReasoningData",
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
                        Quantitative Reasoning
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.QuantitativeReasoning?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={
                                          calculateQuantitativeReasoningDataTotal
                                        }
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.QuantitativeReasoning?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="2nd Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={
                                          calculateQuantitativeReasoningDataTotal
                                        }
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.QuantitativeReasoning?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onChange={(e) =>
                                          handleInputChange(
                                            "EnglishData",
                                            "test",
                                            +e.target.value
                                          )
                                        }
                                        onBlur={
                                          calculateQuantitativeReasoningDataTotal
                                        }
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateQuantitativeReasoningDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
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
                            value={QuantitativeReasoningData.totalScore}
                            onBlur={calculateResultTotalScore}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={QuantitativeReasoningAverage.toFixed(2)}
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
                            value={QuantitativeReasoningData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "QuantitativeReasoningData",
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
                            value={QuantitativeReasoningData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "QuantitativeReasoningData",
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
                        National Values
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.NationalValues?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={
                                          calculateNationalValuesDataTotal
                                        }
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.NationalValues?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="2nd Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={
                                          calculateNationalValuesDataTotal
                                        }
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.NationalValues?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={
                                          calculateNationalValuesDataTotal
                                        }
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateNationalValuesDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
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
                            value={NationalValuesData.totalScore}
                            onBlur={calculateResultTotalScore}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={NationalValuesAverage.toFixed(2)}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-1">
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
                            value={NationalValuesData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "NationalValuesData",
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
                            value={NationalValuesData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "NationalValuesData",
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
                        History
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.History?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateHistoryDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.History?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="2nd Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateHistoryDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.History?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateHistoryDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateHistoryDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
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
                            value={HistoryData.totalScore}
                            onBlur={calculateResultTotalScore}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={HistoryAverage.toFixed(2)}
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
                            value={HistoryData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "HistoryData",
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
                            value={HistoryData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "HistoryData",
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
                        Phonics
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.Phonics?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculatePhonicsDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.Phonics?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="2nd Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculatePhonicsDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.Phonics?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculatePhonicsDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculatePhonicsDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
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
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={PhonicsAverage.toFixed(2)}
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
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.CreativeArt?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={calculateCreativeArtDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.CreativeArt?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="2nd Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onChange={(e) =>
                                          handleInputChange(
                                            "EnglishData",
                                            "test",
                                            +e.target.value
                                          )
                                        }
                                        onBlur={calculateCreativeArtDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.CreativeArt?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={calculateCreativeArtDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateCreativeArtDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
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
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={CreativeArtAverage.toFixed(2)}
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
                        CRK
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.CRK?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateCRKDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.CRK?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="2nd Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateCRKDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.CRK?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateCRKDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateCRKDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
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
                            value={CRKData.totalScore}
                            onBlur={calculateResultTotalScore}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={CRKAverage.toFixed(2)}
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
                            value={CRKData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "CRKData",
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
                            value={CRKData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "CRKData",
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
                        P V S (Pre Vocational Studies)
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.PVC?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculatePVCDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.PVC?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="2nd Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculatePVCDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.PVC?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculatePVCDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculatePVCDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
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
                            value={PVCData.totalScore}
                            onBlur={calculateResultTotalScore}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={PVCAverage.toFixed(2)}
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
                            value={PVCData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "PVCData",
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
                            value={PVCData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "PVCData",
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
                        Igbo Language
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.Igbo?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateIgboDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.Igbo?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="2nd Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateIgboDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.Igbo?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateIgboDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateIgboDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
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
                            value={IgboData.totalScore}
                            onBlur={calculateResultTotalScore}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={IgboAverage.toFixed(2)}
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
                            value={IgboData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "IgboData",
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
                            value={IgboData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "IgboData",
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
                        French
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.French?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateFrenchDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.French?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="2nd Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateFrenchDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.French?.map((item: any, index: any) => (
                                <>
                                  <div className="col-md-6 mb-2 mt-2 ">
                                    <TextField
                                      style={{
                                        width: "150px",
                                        marginLeft: "4px",
                                      }}
                                      required
                                      rows={4}
                                      id={`outlined-required-${index}`}
                                      label="1st Term Total "
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateFrenchDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateFrenchDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
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
                            value={FrenchData.totalScore}
                            onBlur={calculateResultTotalScore}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={FrenchAverage.toFixed(2)}
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
                            value={FrenchData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "FrenchData",
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
                            value={FrenchData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "FrenchData",
                                "remark",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///Writing end input */}
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
                        Hand Writing
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.HandWriting?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={calculateHandWritingDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "2nd-Term")
                          .map((item: any) => (
                            <>
                              {item?.HandWriting?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="2nd Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={calculateHandWritingDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "3rd-Term")
                          .map((item: any) => (
                            <>
                              {item?.HandWriting?.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="col-md-6 mb-2 mt-2 ">
                                      <TextField
                                        style={{
                                          width: "150px",
                                          marginLeft: "4px",
                                        }}
                                        required
                                        rows={4}
                                        id={`outlined-required-${index}`}
                                        label="1st Term Total "
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onChange={(e) =>
                                          handleInputChange(
                                            "EnglishData",
                                            "test",
                                            +e.target.value
                                          )
                                        }
                                        onBlur={calculateHandWritingDataTotal}
                                      />
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateHandWritingDataTotal}
                          >
                            Generate Subject TotalScore
                          </Button>
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
                            value={HandWritingData.totalScore}
                            onBlur={calculateResultTotalScore}
                          />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                          <TextField
                            style={{
                              width: "150px",
                              marginLeft: "4px",
                            }}
                            required
                            rows={4}
                            id="outlined-required"
                            label="Total Average"
                            type="number"
                            name="totalScore"
                            value={HandWritingAverage.toFixed(2)}
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
                            value={HandWritingData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "HandWritingData",
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
                            value={HandWritingData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "HandWritingData",
                                "remark",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Button
                      variant="contained"
                      className="mt-4"
                      onClick={calculateResultTotalScore}
                    >
                      Click To Generate TotalScore & Average
                    </Button>
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
                      onBlur={calculateResultTotalScore}
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
                      value={TotalAverage.toFixed(2)}
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
                    {/* <TextField
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
                    /> */}
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
                      value={userDatas?.schoolRegNumber}
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
                        <MenuItem value="Basic-3">Basic-3</MenuItem>
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

export default InputBasic3Commulative;
