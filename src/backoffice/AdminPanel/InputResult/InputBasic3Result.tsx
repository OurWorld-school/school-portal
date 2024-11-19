import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Basic1resultApi,
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
const InputBasic3Result = () => {
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
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [MathsData, setMathsData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [VerbalReasoningData, setVerbalReasoningData] = useState<any>({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [QuantitativeReasoningData, setQuantitativeReasoningData] = useState({
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
  const [NationalValuesData, setNationalValuesData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [CRKData, setCRKData] = useState({
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
  const [HistoryData, setHistoryData] = useState({
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
  const [FrenchData, setFrenchData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const [IgboData, setIgboData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
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
    test: Number,
    exam: Number,
    totalScore: Number,
    grade: "",
    remark: "",
  });
  const [HandWritingData, setHandWritingData] = useState({
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });
  const calculateResultTotalAverage = () => {
    // const average = total / Object.keys(scores).length;
    // setGrandAverage(average);
    const GrandTotalAverage = TotalScore / 14;
    // NumeracyData.test +
    // NumeracyData.exam +
    // LiteracyData.test +
    // LiteracyData.exam / 2;

    setTotalAverage(parseFloat(GrandTotalAverage.toFixed(2)));
  };
  const calculateResultTotalScore = () => {
    const GrandTotal =
      EnglishData.test +
      EnglishData.exam +
      MathsData.test +
      MathsData.exam +
      BasicScienceData.test +
      BasicScienceData.exam +
      PhonicsData.test +
      PhonicsData.exam +
      VerbalReasoningData.test +
      VerbalReasoningData.exam +
      QuantitativeReasoningData.test +
      QuantitativeReasoningData.exam +
      PVCData.test +
      PVCData.exam +
      HandWritingData.test +
      HandWritingData.exam +
      HistoryData.test +
      HistoryData.exam +
      IgboData.test +
      IgboData.exam +
      // ComputerData.test +
      // ComputerData.exam +
      NationalValuesData.test +
      NationalValuesData.exam +
      CreativeArtData.test +
      CreativeArtData.exam +
      FrenchData.test +
      FrenchData.exam +
      CRKData.test +
      CRKData.exam;
    setTotalScore(GrandTotal);
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
      case "HandWritingData":
        setHandWritingData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "PhonicsData":
        setPhonicsData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "PVCData":
        setPVCData((prev: any) => ({ ...prev, [type]: value }));
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
  const calculateEnglishDataTotal = () => {
    const totalScore = EnglishData.test + EnglishData.exam;
    let grade = "";
    let remark = "";
    if (EnglishData.totalScore >= 70 && EnglishData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (EnglishData.totalScore >= 60 && EnglishData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (EnglishData.totalScore >= 50 && EnglishData.totalScore <= 59) {
      grade = "C";
      remark = "Credit";
    } else if (EnglishData.totalScore >= 40 && EnglishData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (EnglishData.totalScore >= 0 && EnglishData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setEnglishData({ ...EnglishData, totalScore, grade, remark });
  };
  const calculateMathsDataTotal = () => {
    const totalScore = MathsData.test + MathsData.exam;
    let grade = "";
    let remark = "";
    if (MathsData.totalScore >= 70 && MathsData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (MathsData.totalScore >= 60 && MathsData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (MathsData.totalScore >= 50 && MathsData.totalScore <= 59) {
      grade = "C";
      remark = "Credit";
    } else if (MathsData.totalScore >= 40 && MathsData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (MathsData.totalScore >= 0 && MathsData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setMathsData({ ...MathsData, totalScore, grade, remark });
  };
  const calculateVerbalReasoningDataTotal = () => {
    const totalScore = VerbalReasoningData.test + VerbalReasoningData.exam;
    let grade = "";
    let remark = "";
    if (
      VerbalReasoningData.totalScore >= 70 &&
      VerbalReasoningData.totalScore <= 100
    ) {
      grade = "A";
      remark = "Excellent";
    } else if (
      VerbalReasoningData.totalScore >= 60 &&
      VerbalReasoningData.totalScore <= 69
    ) {
      grade = "B";
      remark = "Very Good";
    } else if (
      VerbalReasoningData.totalScore >= 50 &&
      VerbalReasoningData.totalScore <= 59
    ) {
      grade = "C";
      remark = "Credit";
    } else if (
      VerbalReasoningData.totalScore >= 40 &&
      VerbalReasoningData.totalScore <= 49
    ) {
      grade = "D";
      remark = "Pass";
    } else if (
      VerbalReasoningData.totalScore >= 0 &&
      VerbalReasoningData.totalScore <= 39
    ) {
      grade = "F";
      remark = "Fail";
    }
    setVerbalReasoningData({
      ...VerbalReasoningData,
      totalScore,
      grade,
      remark,
    });
  };
  const calculateQuantitativeReasoningDataTotal = () => {
    const totalScore =
      QuantitativeReasoningData.test + QuantitativeReasoningData.exam;
    let grade = "";
    let remark = "";
    if (
      QuantitativeReasoningData.totalScore >= 70 &&
      QuantitativeReasoningData.totalScore <= 100
    ) {
      grade = "A";
      remark = "Excellent";
    } else if (
      QuantitativeReasoningData.totalScore >= 60 &&
      QuantitativeReasoningData.totalScore <= 69
    ) {
      grade = "B";
      remark = "Very Good";
    } else if (
      QuantitativeReasoningData.totalScore >= 50 &&
      QuantitativeReasoningData.totalScore <= 59
    ) {
      grade = "C";
      remark = "Credit";
    } else if (
      QuantitativeReasoningData.totalScore >= 40 &&
      QuantitativeReasoningData.totalScore <= 49
    ) {
      grade = "D";
      remark = "Pass";
    } else if (
      QuantitativeReasoningData.totalScore >= 0 &&
      QuantitativeReasoningData.totalScore <= 39
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
  };
  const calculateHistoryDataTotal = () => {
    const totalScore = HistoryData.test + HistoryData.exam;
    let grade = "";
    let remark = "";
    if (HistoryData.totalScore >= 70 && HistoryData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (HistoryData.totalScore >= 60 && HistoryData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (HistoryData.totalScore >= 50 && HistoryData.totalScore <= 59) {
      grade = "C";
      remark = "Credit";
    } else if (HistoryData.totalScore >= 40 && HistoryData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (HistoryData.totalScore >= 0 && HistoryData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setHistoryData({ ...HistoryData, totalScore, grade, remark });
  };
  const calculateHandWritingDataTotal = () => {
    const totalScore = HandWritingData.test + HandWritingData.exam;
    let grade = "";
    let remark = "";
    if (HandWritingData.totalScore >= 70 && HandWritingData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (
      HandWritingData.totalScore >= 60 &&
      HandWritingData.totalScore <= 69
    ) {
      grade = "B";
      remark = "Very Good";
    } else if (
      HandWritingData.totalScore >= 50 &&
      HandWritingData.totalScore <= 59
    ) {
      grade = "C";
      remark = "Credit";
    } else if (
      HandWritingData.totalScore >= 40 &&
      HandWritingData.totalScore <= 49
    ) {
      grade = "D";
      remark = "Pass";
    } else if (
      HandWritingData.totalScore >= 0 &&
      HandWritingData.totalScore <= 39
    ) {
      grade = "F";
      remark = "Fail";
    }
    setHandWritingData({ ...HandWritingData, totalScore, grade, remark });
  };
  const calculateNationalValuesDataTotal = () => {
    const totalScore = NationalValuesData.test + NationalValuesData.exam;
    let grade = "";
    let remark = "";
    if (
      NationalValuesData.totalScore >= 70 &&
      NationalValuesData.totalScore <= 100
    ) {
      grade = "A";
      remark = "Excellent";
    } else if (
      NationalValuesData.totalScore >= 60 &&
      NationalValuesData.totalScore <= 69
    ) {
      grade = "B";
      remark = "Very Good";
    } else if (
      NationalValuesData.totalScore >= 50 &&
      NationalValuesData.totalScore <= 59
    ) {
      grade = "C";
      remark = "Credit";
    } else if (
      NationalValuesData.totalScore >= 40 &&
      NationalValuesData.totalScore <= 49
    ) {
      grade = "D";
      remark = "Pass";
    } else if (
      NationalValuesData.totalScore >= 0 &&
      NationalValuesData.totalScore <= 39
    ) {
      grade = "F";
      remark = "Fail";
    }
    setNationalValuesData({ ...NationalValuesData, totalScore, remark, grade });
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
      remark = "Credit";
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
      remark = "Credit";
    } else if (PhonicsData.totalScore >= 40 && PhonicsData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (PhonicsData.totalScore >= 0 && PhonicsData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setPhonicsData({ ...PhonicsData, totalScore, grade, remark });
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
      remark = "Credit";
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
  const calculateFrenchDataTotal = () => {
    const totalScore = FrenchData.test + FrenchData.exam;
    let grade = "";
    let remark = "";
    if (FrenchData.totalScore >= 70 && FrenchData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (FrenchData.totalScore >= 60 && FrenchData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (FrenchData.totalScore >= 50 && FrenchData.totalScore <= 59) {
      grade = "C";
      remark = "Credit";
    } else if (FrenchData.totalScore >= 40 && FrenchData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (FrenchData.totalScore >= 0 && FrenchData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setFrenchData({ ...FrenchData, totalScore, grade, remark });
  };
  const calculateCRKDataTotal = () => {
    const totalScore = CRKData.test + CRKData.exam;
    let grade = "";
    let remark = "";
    if (CRKData.totalScore >= 70 && CRKData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (CRKData.totalScore >= 60 && CRKData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (CRKData.totalScore >= 50 && CRKData.totalScore <= 59) {
      grade = "C";
      remark = "Credit";
    } else if (CRKData.totalScore >= 40 && CRKData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (CRKData.totalScore >= 0 && CRKData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setCRKData({ ...CRKData, totalScore, grade, remark });
  };
  const calculatePVCDataTotal = () => {
    const totalScore = PVCData.test + PVCData.exam;
    let grade = "";
    let remark = "";
    if (PVCData.totalScore >= 70 && PVCData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (PVCData.totalScore >= 60 && PVCData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (PVCData.totalScore >= 50 && PVCData.totalScore <= 59) {
      grade = "C";
      remark = "Credit";
    } else if (PVCData.totalScore >= 40 && PVCData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (PVCData.totalScore >= 0 && PVCData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setPVCData({ ...PVCData, totalScore, grade, remark });
  };
  const calculateIgboDataTotal = () => {
    const totalScore = IgboData.test + IgboData.exam;
    let grade = "";
    let remark = "";
    if (IgboData.totalScore >= 70 && IgboData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (IgboData.totalScore >= 60 && IgboData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (IgboData.totalScore >= 50 && IgboData.totalScore <= 59) {
      grade = "C";
      remark = "Credit";
    } else if (IgboData.totalScore >= 40 && IgboData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (IgboData.totalScore >= 0 && IgboData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setIgboData({ ...IgboData, totalScore, grade, remark });
  };
  // const calculateComputerDataTotal = () => {
  //   const totalScore = ComputerData.test + ComputerData.exam;
  //   let grade = "";
  //   let remark = "";
  //   if (ComputerData.totalScore >= 70 && ComputerData.totalScore <= 100) {
  //     grade = "A";
  //     remark = "Excellent";
  //   } else if (ComputerData.totalScore >= 60 && ComputerData.totalScore <= 69) {
  //     grade = "B";
  //     remark = "Very Good";
  //   } else if (ComputerData.totalScore >= 50 && ComputerData.totalScore <= 59) {
  //     grade = "C";
  //     remark = "Good";
  //   } else if (ComputerData.totalScore >= 40 && ComputerData.totalScore <= 49) {
  //     grade = "D";
  //     remark = "Pass";
  //   } else if (ComputerData.totalScore >= 0 && ComputerData.totalScore <= 39) {
  //     grade = "F";
  //     remark = "Fail";
  //   }
  //   setComputerData({ ...ComputerData, totalScore, grade, remark });
  // };
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
      English: [
        // ...English,
        {
          test: EnglishData.test,
          exam: EnglishData.exam,
          totalScore: EnglishData.totalScore,
          grade: EnglishData.grade,
          remark: EnglishData.remark,
        },
      ],

      Mathematics: [
        // ...English,
        {
          test: MathsData.test,
          exam: MathsData.exam,
          totalScore: MathsData.totalScore,
          grade: MathsData.grade,
          remark: MathsData.remark,
        },
      ],
      HandWriting: [
        {
          test: HandWritingData.test,
          exam: HandWritingData.exam,
          totalScore: HandWritingData.totalScore,
          grade: HandWritingData.grade,
          remark: HandWritingData.remark,
        },
      ],
      VerbalReasoning: [
        // ...English,
        {
          test: VerbalReasoningData.test,
          exam: VerbalReasoningData.exam,
          totalScore: VerbalReasoningData.totalScore,
          grade: VerbalReasoningData.grade,
          remark: VerbalReasoningData.remark,
        },
      ],
      QuantitativeReasoning: [
        // ...English,
        {
          test: QuantitativeReasoningData.test,
          exam: QuantitativeReasoningData.exam,
          totalScore: QuantitativeReasoningData.totalScore,
          grade: QuantitativeReasoningData.grade,
          remark: QuantitativeReasoningData.remark,
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
      CRK: [
        // ...English,
        {
          test: CRKData.test,
          exam: CRKData.exam,
          totalScore: CRKData.totalScore,
          grade: CRKData.grade,
          remark: CRKData.remark,
        },
      ],
      Igbo: [
        // ...English,
        {
          test: IgboData.test,
          exam: IgboData.exam,
          totalScore: IgboData.totalScore,
          grade: IgboData.grade,
          remark: IgboData.remark,
        },
      ],
      PVC: [
        // ...English,
        {
          test: PVCData.test,
          exam: PVCData.exam,
          totalScore: PVCData.totalScore,
          grade: PVCData.grade,
          remark: PVCData.remark,
        },
      ],
      French: [
        // ...English,
        {
          test: FrenchData.test,
          exam: FrenchData.exam,
          totalScore: FrenchData.totalScore,
          grade: FrenchData.grade,
          remark: FrenchData.remark,
        },
      ],
      History: [
        // ...English,
        {
          test: HistoryData.test,
          exam: HistoryData.exam,
          totalScore: HistoryData.totalScore,
          grade: HistoryData.grade,
          remark: HistoryData.remark,
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
      Computer: [
        // ...English,
        {
          test: ComputerData.test,
          exam: ComputerData.exam,
          totalScore: ComputerData.totalScore,
          grade: ComputerData.grade,
          remark: ComputerData.remark,
        },
      ],
      NationalValues: [
        // ...English,
        {
          test: NationalValuesData.test,
          exam: NationalValuesData.exam,
          totalScore: NationalValuesData.totalScore,
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
      .post(Basic3resultApi, data, headers)

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
                    Input Basic 3 Result of
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
                            value={EnglishData.test}
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
                            value={EnglishData.exam}
                            onBlur={calculateEnglishDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "EnglishData",
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
                            value={EnglishData.totalScore}
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
                            value={MathsData.test}
                            onBlur={calculateMathsDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "MathsData",
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
                            value={MathsData.exam}
                            onBlur={calculateMathsDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "MathsData",
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
                            value={MathsData.totalScore}
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
                            onBlur={calculateBasicScienceDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "BasicScienceData",
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
                            value={BasicScienceData.exam}
                            onBlur={calculateBasicScienceDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "BasicScienceData",
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
                            value={BasicScienceData.totalScore}
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
                            value={VerbalReasoningData.test}
                            onBlur={calculateVerbalReasoningDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "VerbalReasoningData",
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
                            value={VerbalReasoningData.exam}
                            onBlur={calculateVerbalReasoningDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "VerbalReasoningData",
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
                            value={VerbalReasoningData.totalScore}
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
                            value={QuantitativeReasoningData.test}
                            onBlur={calculateQuantitativeReasoningDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "QuantitativeReasoningData",
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
                            value={QuantitativeReasoningData.exam}
                            onBlur={calculateQuantitativeReasoningDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "QuantitativeReasoningData",
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
                            value={QuantitativeReasoningData.totalScore}
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
                            value={NationalValuesData.test}
                            onBlur={calculateNationalValuesDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "NationalValuesData",
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
                            value={NationalValuesData.exam}
                            onBlur={calculateNationalValuesDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "NationalValuesData",
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
                            value={NationalValuesData.totalScore}
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
                            value={HistoryData.test}
                            onBlur={calculateHistoryDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "HistoryData",
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
                            value={HistoryData.exam}
                            onBlur={calculateHistoryDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "HistoryData",
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
                            value={HistoryData.totalScore}
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
                            value={CRKData.test}
                            onBlur={calculateCRKDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "CRKData",
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
                            value={CRKData.exam}
                            onBlur={calculateCRKDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "CRKData",
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
                            value={CRKData.totalScore}
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
                            value={PVCData.test}
                            onBlur={calculatePVCDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "PVCData",
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
                            value={PVCData.exam}
                            onBlur={calculatePVCDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "PVCData",
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
                            value={PVCData.totalScore}
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
                            value={IgboData.test}
                            onBlur={calculateIgboDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "IgboData",
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
                            value={IgboData.exam}
                            onBlur={calculateIgboDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "IgboData",
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
                            value={IgboData.totalScore}
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
                            value={FrenchData.test}
                            onBlur={calculateFrenchDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "FrenchData",
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
                            value={FrenchData.exam}
                            onBlur={calculateFrenchDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "FrenchData",
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
                            value={FrenchData.totalScore}
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
                            value={HandWritingData.test}
                            onBlur={calculateHandWritingDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "HandWritingData",
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
                            value={HandWritingData.exam}
                            onBlur={calculateHandWritingDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "HandWritingData",
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
                            value={HandWritingData.totalScore}
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
                    {/* ///Writing */}
                    {/* <Dropdown>
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
                        Computer
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
                            value={ComputerData.test}
                            onBlur={calculateComputerDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "ComputerData",
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
                            value={ComputerData.exam}
                            onBlur={calculateComputerDataTotal}
                            onChange={(e) =>
                              handleInputChange(
                                "ComputerData",
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
                            value={ComputerData.totalScore}
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
                            value={ComputerData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "ComputerData",
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
                            value={ComputerData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "ComputerData",
                                "remark",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown> */}
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

export default InputBasic3Result;
