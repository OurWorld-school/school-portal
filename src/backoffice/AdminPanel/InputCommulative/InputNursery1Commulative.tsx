import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Nursery1CommulativeApi,
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
interface SubjectTextFields {
  test: number;
  exam: number;
  totalScore?: number; // optional, as it will be calculated
}
const InputNursery1Commulative = () => {
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
  const [SocialHabitData, setSocialHabitData] = useState({
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
  const [AgricScienceData, setAgricScienceData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [WritingData, setWritingData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [RhymesData, setRhymesData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [HealthScienceData, setHealthScienceData] = useState({
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
  const [CreativeArtData, setCreativeArtData] = useState({
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
      if (subject.SocialHabit) {
        GrandTotal += subject.SocialHabit.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.AgricScience) {
        GrandTotal += subject.AgricScience.reduce(
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
      if (subject.HealthScience) {
        GrandTotal += subject.HealthScience.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.Rhymes) {
        GrandTotal += subject.Rhymes.reduce(
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

      if (subject.Writing) {
        GrandTotal += subject.Writing.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.CreativeArt) {
        GrandTotal += subject.CreativeArt.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
    });
    let totalAverageScore = count > 0 ? GrandTotal / count : 0;
    if (totalAverageScore > 0.5) {
      totalAverageScore = Math.round(totalAverageScore); // Round the average
    }
    setTotalAverage(parseFloat(totalAverageScore.toFixed(2)));
    // setTotalAverage(parseFloat(GrandTotalAverage.toFixed(2)));
    setTotalScore(GrandTotal);
    calculateTotalGrade();
  };

  const handleInputChange = (
    subject:
      | "EnglishData"
      | "MathsData"
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
      case "EnglishData":
        setEnglishData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "MathsData":
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
      case "SocialHabitData":
        setSocialHabitData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "CreativeArtData":
        setCreativeArtData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "PhonicsData":
        setPhonicsData((prev: any) => ({ ...prev, [type]: value }));
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
  const [EnglishAverage, setEnglishAverage] = useState<number>(0);
  const [MathsAverage, setMathsAverage] = useState<number>(0);
  const [BasicScienceAverage, setBasicScienceAverage] = useState<number>(0);

  const [SocialHabitAverage, setSocialHabitAverage] = useState<number>(0);
  const [CRKAverage, setCRKAverage] = useState<number>(0);
  const [HealthScienceAverage, setHealthScienceAverage] = useState<number>(0);
  const [PhonicsAverage, setPhonicsAverage] = useState<number>(0);

  const [RhymesAverage, setRhymesAverage] = useState<number>(0);
  const [AgricScienceAverage, setAgricScienceAverage] = useState<number>(0);
  const [CreativeArtAverage, setCreativeArtAverage] = useState<number>(0);
  const [WritingAverage, setWritingAverage] = useState<number>(0);
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
  const calculateSocialHabitDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.SocialHabit.forEach((item: any) => {
        totalScore += item.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (SocialHabitAverage >= 70 && SocialHabitAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (SocialHabitAverage >= 60 && SocialHabitAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (SocialHabitAverage >= 50 && SocialHabitAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (SocialHabitAverage >= 40 && SocialHabitAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (SocialHabitAverage >= 0 && SocialHabitAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setSocialHabitData({
      ...SocialHabitData,
      totalScore,
      grade,
      remark,
    });
    setSocialHabitAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateHealthScienceDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.HealthScience.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (HealthScienceAverage >= 70 && HealthScienceAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (HealthScienceAverage >= 60 && HealthScienceAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (HealthScienceAverage >= 50 && HealthScienceAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (HealthScienceAverage >= 40 && HealthScienceAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (HealthScienceAverage >= 0 && HealthScienceAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setHealthScienceData({
      ...HealthScienceData,
      totalScore,
      grade,
      remark,
    });
    setHealthScienceAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateAgricScienceDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.AgricScience.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (AgricScienceAverage >= 70 && AgricScienceAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (AgricScienceAverage >= 60 && AgricScienceAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (AgricScienceAverage >= 50 && AgricScienceAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (AgricScienceAverage >= 40 && AgricScienceAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (AgricScienceAverage >= 0 && AgricScienceAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setAgricScienceData({ ...AgricScienceData, totalScore, grade, remark });
    setAgricScienceAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateRhymesDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.Rhymes.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (RhymesAverage >= 70 && RhymesAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (RhymesAverage >= 60 && RhymesAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (RhymesAverage >= 50 && RhymesAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (RhymesAverage >= 40 && RhymesAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (RhymesAverage >= 0 && RhymesAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setRhymesData({ ...RhymesData, totalScore, remark, grade });
    setRhymesAverage(count > 0 ? totalScore / count : 0);
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
  const calculateWritingDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.Writing.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (WritingAverage >= 70 && WritingAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (WritingAverage >= 60 && WritingAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (WritingAverage >= 50 && WritingAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (WritingAverage >= 40 && WritingAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (WritingAverage >= 0 && WritingAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setWritingData({ ...WritingData, totalScore, grade, remark });
    setWritingAverage(count > 0 ? totalScore / count : 0);
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
    const extractTotalScoresRhymes = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.Rhymes?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermRhymes = extractTotalScoresRhymes("1st-Term");
    const total2ndTermRhymes = extractTotalScoresRhymes("2nd-Term");
    const total3rdTermRhymes = extractTotalScoresRhymes("3rd-Term");
    const extractTotalScoresAgricScience = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.AgricScience?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermAgricScience = extractTotalScoresAgricScience("1st-Term");
    const total2ndTermAgricScience = extractTotalScoresAgricScience("2nd-Term");
    const total3rdTermAgricScience = extractTotalScoresAgricScience("3rd-Term");
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
    const extractTotalScoresHealthScience = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.HealthScience?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermHealthScience =
      extractTotalScoresHealthScience("1st-Term");
    const total2ndTermHealthScience =
      extractTotalScoresHealthScience("2nd-Term");
    const total3rdTermHealthScience =
      extractTotalScoresHealthScience("3rd-Term");
    const extractTotalScoresWriting = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.Writing?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermWriting = extractTotalScoresWriting("1st-Term");
    const total2ndTermWriting = extractTotalScoresWriting("2nd-Term");
    const total3rdTermWriting = extractTotalScoresWriting("3rd-Term");
    const extractTotalScoresSocialHabit = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.SocialHabit?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermSocialHabit = extractTotalScoresSocialHabit("1st-Term");
    const total2ndTermSocialHabit = extractTotalScoresSocialHabit("2nd-Term");
    const total3rdTermSocialHabit = extractTotalScoresSocialHabit("3rd-Term");
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

      SocialHabit: [
        // ...English,
        {
          total1stTermScore: total1stTermSocialHabit,
          total2ndTermScore: total2ndTermSocialHabit,
          total3rdTermScore: total3rdTermSocialHabit,
          totalScore: SocialHabitData.totalScore,
          totalAverage: SocialHabitAverage,
          grade: SocialHabitData.grade,
          remark: SocialHabitData.remark,
        },
      ],
      Writing: [
        {
          total1stTermScore: total1stTermWriting,
          total2ndTermScore: total2ndTermWriting,
          total3rdTermScore: total3rdTermWriting,

          totalScore: WritingData.totalScore,
          totalAverage: WritingAverage,
          grade: WritingData.grade,
          remark: WritingData.remark,
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

      Rhymes: [
        // ...English,
        {
          total1stTermScore: total1stTermRhymes,
          total2ndTermScore: total2ndTermRhymes,
          total3rdTermScore: total3rdTermRhymes,

          totalScore: RhymesData.totalScore,
          totalAverage: RhymesAverage,
          grade: RhymesData.grade,
          remark: RhymesData.remark,
        },
      ],
      AgricScience: [
        // ...English,
        {
          total1stTermScore: total1stTermAgricScience,
          total2ndTermScore: total2ndTermAgricScience,
          total3rdTermScore: total3rdTermAgricScience,

          totalScore: AgricScienceData.totalScore,
          totalAverage: AgricScienceAverage,
          grade: AgricScienceData.grade,
          remark: AgricScienceData.remark,
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

      HealthScience: [
        // ...English,
        {
          total1stTermScore: total1stTermHealthScience,
          total2ndTermScore: total2ndTermHealthScience,
          total3rdTermScore: total3rdTermHealthScience,

          totalScore: HealthScienceData.totalScore,
          totalAverage: HealthScienceAverage,
          grade: HealthScienceData.grade,
          remark: HealthScienceData.remark,
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
      .post(Nursery1CommulativeApi, data, headers)

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
          navigate("/nusery1-view-commulative");
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
  const [startYear, setStartYear] = useState<number>(2024);
  const [endYear, setEndYear] = useState<number>(2025);
  const [startTerm, setStartTerm] = useState<string>("1st-Term");
  const [endTerm, setEndTerm] = useState<string>("3rd-Term");
  console.log(subjectMarks);
  useEffect(() => {
    try {
      axios.get(Nursery1resultApi).then((response) => {
        // Calculate total scores for each term
        // setLoader(false);

        setSubjectMarks(
          response.data.filter(
            (item: any) =>
              item?.classes === "Nursery-1" &&
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
    calculateSocialHabitDataTotal();
    calculateCreativeArtDataTotal();
    calculateAgricScienceDataTotal();
    calculateHealthScienceDataTotal();
    calculateWritingDataTotal();
    calculateMathsDataTotal();
    calculateRhymesDataTotal();

    calculateResultTotalScore();

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
                                        label="3rd Term Total"
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
                                        label="3rd Term Total"
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
                                      label="3rd Term Total"
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
                                        label="3rd Term Total"
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
                        Social Habit
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.SocialHabit?.map(
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
                                        onBlur={calculateSocialHabitDataTotal}
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
                              {item?.SocialHabit?.map(
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
                                        onBlur={calculateSocialHabitDataTotal}
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
                              {item?.SocialHabit?.map(
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
                                        label="3rd Term Total"
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={calculateSocialHabitDataTotal}
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
                            onClick={calculateSocialHabitDataTotal}
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
                            value={SocialHabitData.totalScore}
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
                            value={SocialHabitAverage.toFixed(2)}
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
                        Health Science
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.HealthScience?.map(
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
                                        onBlur={calculateHealthScienceDataTotal}
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
                              {item?.HealthScience?.map(
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
                                        onBlur={calculateHealthScienceDataTotal}
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
                              {item?.HealthScience?.map(
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
                                        label="3rd Term Total"
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={calculateHealthScienceDataTotal}
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
                            onClick={calculateHealthScienceDataTotal}
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
                            value={HealthScienceData.totalScore}
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
                            value={HealthScienceAverage.toFixed(2)}
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
                        Agricultural Science
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.AgricScience?.map(
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
                                        onBlur={calculateAgricScienceDataTotal}
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
                              {item?.AgricScience?.map(
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
                                        onBlur={calculateAgricScienceDataTotal}
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
                              {item?.AgricScience?.map(
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
                                        label="3rd Term Total"
                                        // label={`Term ${index + 1} TotalScore`}
                                        type="number"
                                        name={`test-${index}`}
                                        value={item?.totalScore}
                                        onBlur={calculateAgricScienceDataTotal}
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
                            onClick={calculateAgricScienceDataTotal}
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
                            value={AgricScienceData.totalScore}
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
                            value={AgricScienceAverage.toFixed(2)}
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
                        Rhymes
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.Rhymes?.map((item: any, index: any) => (
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
                                      onBlur={calculateRhymesDataTotal}
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
                              {item?.Rhymes?.map((item: any, index: any) => (
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
                                      onBlur={calculateRhymesDataTotal}
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
                              {item?.Rhymes?.map((item: any, index: any) => (
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
                                      // label={`Term ${index + 1} TotalScore`}
                                      type="number"
                                      name={`test-${index}`}
                                      value={item?.totalScore}
                                      onBlur={calculateRhymesDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateRhymesDataTotal}
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
                            value={RhymesData.totalScore}
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
                            value={RhymesAverage.toFixed(2)}
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
                              {item?.Writing?.map((item: any, index: any) => (
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
                                      onBlur={calculateWritingDataTotal}
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
                              {item?.Writing?.map((item: any, index: any) => (
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
                                      onBlur={calculateWritingDataTotal}
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
                              {item?.Writing?.map((item: any, index: any) => (
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
                                      label="3rd Term Total"
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
                                      onBlur={calculateWritingDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateWritingDataTotal}
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
                            value={WritingData.totalScore}
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
                            value={WritingAverage.toFixed(2)}
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
                        <MenuItem value="Nursery-1">Nursery 1</MenuItem>
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

export default InputNursery1Commulative;
