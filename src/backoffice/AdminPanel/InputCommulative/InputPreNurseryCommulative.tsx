import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  PreNurseryCommulativeApi,
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
// import "./InputResult.css";
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
const InputPreNurseryCommulative = () => {
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

  const [NumeracyData, setNumeracyData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [LiteracyData, setLiteracyData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [ColouringData, setColouringData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [HealthHabitData, setHealthHabitData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [PreScienceData, setPreScienceData] = useState({
    total1stTermScore: 0,
    total2ndTermScore: 0,
    total3rdTermScore: 0,
    totalScore: 0,
    totalAverage: 0,
    grade: "",
    remark: "",
  });
  const [PracticalLifeData, setPracticalLifeData] = useState({
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
  const [SensorialActivityData, setSensorialActivityData] = useState({
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
      if (subject.Numeracy) {
        GrandTotal += subject.Numeracy.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.Literacy) {
        GrandTotal += subject.Literacy.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.Colouring) {
        GrandTotal += subject.Colouring.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.HealthHabit) {
        GrandTotal += subject.HealthHabit.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.PreScience) {
        GrandTotal += subject.PreScience.reduce(
          (sum: any, item: any) => sum + item.totalScore,
          0
        );
        count += 1;
      }
      if (subject.PracticalLife) {
        GrandTotal += subject.PracticalLife.reduce(
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
      if (subject.SensorialActivity) {
        GrandTotal += subject.SensorialActivity.reduce(
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
    setTotalScore(GrandTotal);
    calculateTotalGrade();
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

  const handleInputChange = (
    subject:
      | "NumeracyData"
      | "LiteracyData"
      | "ColouringData"
      | "HealthHabitData"
      | "PreScienceData"
      | "PracticalLifeData"
      | "RhymesData"
      | "SensorialActivityData",
    type: "test" | "exam" | "grade" | "remark",
    value: number
  ) => {
    switch (subject) {
      case "NumeracyData":
        setNumeracyData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "LiteracyData":
        setLiteracyData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "ColouringData":
        setColouringData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "HealthHabitData":
        setHealthHabitData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "PreScienceData":
        setPreScienceData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "PracticalLifeData":
        setPracticalLifeData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "RhymesData":
        setRhymesData((prev: any) => ({ ...prev, [type]: value }));
        break;
      case "SensorialActivityData":
        setSensorialActivityData((prev: any) => ({ ...prev, [type]: value }));
        break;
    }
  };
  const [NumeracyAverage, setNumeracyAverage] = useState<number>(0);
  const [LiteracyAverage, setLiteracyAverage] = useState<number>(0);
  const [ColouringAverage, setColouringAverage] = useState<number>(0);
  const [HealthHabitAverage, setHealthHabitAverage] = useState<number>(0);
  const [PreScienceAverage, setPreScienceAverage] = useState<number>(0);
  const [PracticalLifeAverage, setPracticalLifeAverage] = useState<number>(0);
  const [RhymesAverage, setRhymesAverage] = useState<number>(0);
  const [SensorialActivityAverage, setSensorialActivityAverage] =
    useState<number>(0);

  const calculateNumeracyDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.Numeracy.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (NumeracyAverage >= 70 && NumeracyAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (NumeracyAverage >= 60 && NumeracyAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (NumeracyAverage >= 50 && NumeracyAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (NumeracyAverage >= 40 && NumeracyAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (NumeracyAverage >= 0 && NumeracyAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setNumeracyAverage(count > 0 ? totalScore / count : 0);
    setNumeracyData({ ...NumeracyData, totalScore, grade, remark });
  };
  const calculateLiteracyDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.Literacy.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (LiteracyAverage >= 70 && LiteracyAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (LiteracyAverage >= 60 && LiteracyAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (LiteracyAverage >= 50 && LiteracyAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (LiteracyAverage >= 40 && LiteracyAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (LiteracyAverage >= 0 && LiteracyAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setLiteracyData({ ...LiteracyData, totalScore, grade, remark });
    setLiteracyAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateColouringDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.Colouring.forEach((item: any) => {
        totalScore += item.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (ColouringAverage >= 70 && ColouringAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (ColouringAverage >= 60 && ColouringAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (ColouringAverage >= 50 && ColouringAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (ColouringAverage >= 40 && ColouringAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (ColouringAverage >= 0 && ColouringAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setColouringData({
      ...ColouringData,
      totalScore,
      grade,
      remark,
    });
    setColouringAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateHealthHabitDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.HealthHabit.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (HealthHabitAverage >= 70 && HealthHabitAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (HealthHabitAverage >= 60 && HealthHabitAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (HealthHabitAverage >= 50 && HealthHabitAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (HealthHabitAverage >= 40 && HealthHabitAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (HealthHabitAverage >= 0 && HealthHabitAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setHealthHabitData({
      ...HealthHabitData,
      totalScore,
      grade,
      remark,
    });
    setHealthHabitAverage(count > 0 ? totalScore / count : 0);
  };
  const calculatePreScienceDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.PreScience.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (PreScienceAverage >= 70 && PreScienceAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (PreScienceAverage >= 60 && PreScienceAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (PreScienceAverage >= 50 && PreScienceAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (PreScienceAverage >= 40 && PreScienceAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (PreScienceAverage >= 0 && PreScienceAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setPreScienceData({ ...PreScienceData, totalScore, grade, remark });
    setPreScienceAverage(count > 0 ? totalScore / count : 0);
  };
  const calculatePracticalLifeDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.PracticalLife.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (PracticalLifeAverage >= 70 && PracticalLifeAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (PracticalLifeAverage >= 60 && PracticalLifeAverage <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (PracticalLifeAverage >= 50 && PracticalLifeAverage <= 59) {
      grade = "C";
      remark = "Good";
    } else if (PracticalLifeAverage >= 40 && PracticalLifeAverage <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (PracticalLifeAverage >= 0 && PracticalLifeAverage <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setPracticalLifeData({ ...PracticalLifeData, totalScore, remark, grade });
    setPracticalLifeAverage(count > 0 ? totalScore / count : 0);
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
    setRhymesData({ ...RhymesData, totalScore, grade, remark });
    setRhymesAverage(count > 0 ? totalScore / count : 0);
  };
  const calculateSensorialActivityDataTotal = () => {
    let totalScore = 0;
    let count = 0;
    subjectMarks.forEach((item: any) => {
      item.SensorialActivity.forEach((englishMark: any) => {
        totalScore += englishMark.totalScore;
        count += 1;
      });
    });
    let grade = "";
    let remark = "";
    if (SensorialActivityAverage >= 70 && SensorialActivityAverage <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (
      SensorialActivityAverage >= 60 &&
      SensorialActivityAverage <= 69
    ) {
      grade = "B";
      remark = "Very Good";
    } else if (
      SensorialActivityAverage >= 50 &&
      SensorialActivityAverage <= 59
    ) {
      grade = "C";
      remark = "Good";
    } else if (
      SensorialActivityAverage >= 40 &&
      SensorialActivityAverage <= 49
    ) {
      grade = "D";
      remark = "Pass";
    } else if (
      SensorialActivityAverage >= 0 &&
      SensorialActivityAverage <= 39
    ) {
      grade = "F";
      remark = "Fail";
    }
    setSensorialActivityData({
      ...SensorialActivityData,
      totalScore,
      grade,
      remark,
    });
    setSensorialActivityAverage(count > 0 ? totalScore / count : 0);
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
    const extractNumeracyTotalScores = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.Numeracy?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermNumeracy = extractNumeracyTotalScores("1st-Term");
    const total2ndTermNumeracy = extractNumeracyTotalScores("2nd-Term");
    const total3rdTermNumeracy = extractNumeracyTotalScores("3rd-Term");

    const extractLiteracyTotalScores = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.Literacy?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermLiteracy = extractLiteracyTotalScores("1st-Term");
    const total2ndTermLiteracy = extractLiteracyTotalScores("2nd-Term");
    const total3rdTermLiteracy = extractLiteracyTotalScores("3rd-Term");
    const extractTotalScoresColouring = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.Colouring?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermColouring = extractTotalScoresColouring("1st-Term");
    const total2ndTermColouring = extractTotalScoresColouring("2nd-Term");
    const total3rdTermColouring = extractTotalScoresColouring("3rd-Term");
    const extractTotalScoresHealthHabit = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.HealthHabit?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermHealthHabit = extractTotalScoresHealthHabit("1st-Term");
    const total2ndTermHealthHabit = extractTotalScoresHealthHabit("2nd-Term");
    const total3rdTermHealthHabit = extractTotalScoresHealthHabit("3rd-Term");
    const extractTotalScoresPreScience = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.PreScience?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermPreScience = extractTotalScoresPreScience("1st-Term");
    const total2ndTermPreScience = extractTotalScoresPreScience("2nd-Term");
    const total3rdTermPreScience = extractTotalScoresPreScience("3rd-Term");
    const extractTotalScoresPracticalLife = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.PracticalLife?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermPracticalLife =
      extractTotalScoresPracticalLife("1st-Term");
    const total2ndTermPracticalLife =
      extractTotalScoresPracticalLife("2nd-Term");
    const total3rdTermPracticalLife =
      extractTotalScoresPracticalLife("3rd-Term");
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
    const extractTotalScoresSensorialActivity = (term: string) => {
      const termData = subjectMarks?.filter((item: any) => item?.term === term);
      let totalScore = 0;
      termData?.forEach((item: any) => {
        item?.SensorialActivity?.forEach((subject: any) => {
          totalScore += subject?.totalScore || 0;
        });
      });
      return totalScore;
    };

    const total1stTermSensorialActivity =
      extractTotalScoresSensorialActivity("1st-Term");
    const total2ndTermSensorialActivity =
      extractTotalScoresSensorialActivity("2nd-Term");
    const total3rdTermSensorialActivity =
      extractTotalScoresSensorialActivity("3rd-Term");
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
      Numeracy: [
        // ...English,
        {
          total1stTermScore: total1stTermNumeracy,
          total2ndTermScore: total2ndTermNumeracy,
          total3rdTermScore: total3rdTermNumeracy,
          totalScore: NumeracyData.totalScore,
          totalAverage: NumeracyAverage,
          grade: NumeracyData.grade,
          remark: NumeracyData.remark,
        },
      ],

      Literacy: [
        // ...English,
        {
          total1stTermScore: total1stTermLiteracy,
          total2ndTermScore: total2ndTermLiteracy,
          total3rdTermScore: total3rdTermLiteracy,
          totalScore: LiteracyData.totalScore,
          totalAverage: LiteracyAverage,
          grade: LiteracyData.grade,
          remark: LiteracyData.remark,
        },
      ],
      Colouring: [
        // ...English,
        {
          total1stTermScore: total1stTermColouring,
          total2ndTermScore: total2ndTermColouring,
          total3rdTermScore: total3rdTermColouring,
          totalScore: ColouringData.totalScore,
          totalAverage: ColouringAverage,
          grade: ColouringData.grade,
          remark: ColouringData.remark,
        },
      ],
      HealthHabit: [
        // ...English,
        {
          total1stTermScore: total1stTermHealthHabit,
          total2ndTermScore: total2ndTermHealthHabit,
          total3rdTermScore: total3rdTermHealthHabit,
          totalScore: HealthHabitData.totalScore,
          totalAverage: HealthHabitAverage,
          grade: HealthHabitData.grade,
          remark: HealthHabitData.remark,
        },
      ],
      PreScience: [
        // ...English,
        {
          total1stTermScore: total1stTermPreScience,
          total2ndTermScore: total2ndTermPreScience,
          total3rdTermScore: total3rdTermPreScience,
          totalScore: PreScienceData.totalScore,
          totalAverage: PreScienceAverage,
          grade: PreScienceData.grade,
          remark: PreScienceData.remark,
        },
      ],
      PracticalLife: [
        // ...English,
        {
          total1stTermScore: total1stTermPracticalLife,
          total2ndTermScore: total2ndTermPracticalLife,
          total3rdTermScore: total3rdTermPracticalLife,
          totalScore: PracticalLifeData.totalScore,
          totalAverage: PracticalLifeAverage,
          grade: PracticalLifeData.grade,
          remark: PracticalLifeData.remark,
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
      SensorialActivity: [
        // ...English,
        {
          total1stTermScore: total1stTermSensorialActivity,
          total2ndTermScore: total2ndTermSensorialActivity,
          total3rdTermScore: total3rdTermSensorialActivity,
          totalScore: SensorialActivityData.totalScore,
          totalAverage: SensorialActivityAverage,
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
      .post(PreNurseryCommulativeApi, data, headers)

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
          // toast.success("post sucessful");
          navigate("/pre-nursery-view-commulative");
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
  const [subjectMarks, setSubjectMarks] = useState<any>([]);
  const [startYear, setStartYear] = useState<number>(2024);
  const [endYear, setEndYear] = useState<number>(2025);
  const [startTerm, setStartTerm] = useState<string>("1st-Term");
  const [endTerm, setEndTerm] = useState<string>("3rd-Term");
  console.log(subjectMarks);
  useEffect(() => {
    try {
      axios.get(PreNurseryresultApi).then((response) => {
        // Calculate total scores for each term
        // setLoader(false);

        // setSubjectMarks(
        //   response.data.filter(
        //     (item: any) =>
        //       // item?.classes === "Pre-Nursery" &&
        //       item.year >= startYear &&
        //       item.year <= endYear &&
        //       item?.user?._id === id
        //   )
        // );
        setSubjectMarks(
          response.data.filter(
            (item: any) =>
              [
                "Pre-Nursery",
                "Pre-Nursery-Unity",
                "Pre-Nursery-Success",
              ].includes(item?.classes) &&
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

  useEffect(() => {
    calculateNumeracyDataTotal();
    calculateLiteracyDataTotal();
    calculateColouringDataTotal();
    calculateHealthHabitDataTotal();
    calculatePreScienceDataTotal();
    calculatePracticalLifeDataTotal();
    calculateRhymesDataTotal();
    calculateSensorialActivityDataTotal();
    calculateResultTotalScore();
    calculateResultTotalScore();
    calculateTotalGrade();
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
                    Input Pre Nursery Result of
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
                        Numeracy
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.Numeracy?.map((item: any, index: any) => (
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
                                          "NumeracyData",
                                          "test",
                                          +e.target.value
                                        )
                                      }
                                      onBlur={calculateNumeracyDataTotal}
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
                              {item?.Numeracy?.map((item: any, index: any) => (
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
                                          "NumeracyData",
                                          "test",
                                          +e.target.value
                                        )
                                      }
                                      onBlur={calculateNumeracyDataTotal}
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
                              {item?.Numeracy?.map((item: any, index: any) => (
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
                                          "NumeracyData",
                                          "test",
                                          +e.target.value
                                        )
                                      }
                                      onBlur={calculateNumeracyDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateNumeracyDataTotal}
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
                            value={NumeracyData.totalScore}
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
                            value={NumeracyAverage.toFixed(2)}
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
                            onChange={(e: any) =>
                              handleInputChange(
                                "NumeracyData",
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
                            value={NumeracyData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "NumeracyData",
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
                        Literacy
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.Literacy?.map((item: any, index: any) => (
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
                                      onBlur={calculateLiteracyDataTotal}
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
                              {item?.Literacy?.map((item: any, index: any) => (
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
                                      onBlur={calculateLiteracyDataTotal}
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
                              {item?.Literacy?.map((item: any, index: any) => (
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
                                          "LiteracyData",
                                          "test",
                                          +e.target.value
                                        )
                                      }
                                      onBlur={calculateLiteracyDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateLiteracyDataTotal}
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
                            value={LiteracyData.totalScore}
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
                            value={LiteracyAverage.toFixed(2)}
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
                            value={LiteracyData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "LiteracyData",
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
                            value={LiteracyData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "LiteracyData",
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
                        Colouring
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.Colouring?.map((item: any, index: any) => (
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
                                      onBlur={calculateColouringDataTotal}
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
                              {item?.Colouring?.map((item: any, index: any) => (
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
                                      onBlur={calculateColouringDataTotal}
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
                              {item?.Colouring?.map((item: any, index: any) => (
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
                                          "ColouringData",
                                          "test",
                                          +e.target.value
                                        )
                                      }
                                      onBlur={calculateColouringDataTotal}
                                    />
                                  </div>
                                </>
                              ))}
                            </>
                          ))}
                        <div className="col-md-6 mb-2 mt-2">
                          <Button
                            variant="contained"
                            onClick={calculateColouringDataTotal}
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
                            value={ColouringData.totalScore}
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
                            value={ColouringAverage.toFixed(2)}
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
                            value={ColouringData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "ColouringData",
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
                            value={ColouringData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "ColouringData",
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
                        Health Habit
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.HealthHabit?.map(
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
                                        onBlur={calculateHealthHabitDataTotal}
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
                              {item?.HealthHabit?.map(
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
                                        onBlur={calculateHealthHabitDataTotal}
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
                              {item?.HealthHabit?.map(
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
                                        onBlur={calculateHealthHabitDataTotal}
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
                            onClick={calculateHealthHabitDataTotal}
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
                            value={HealthHabitData.totalScore}
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
                            value={HealthHabitAverage.toFixed(2)}
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
                            onChange={(e: any) =>
                              handleInputChange(
                                "HealthHabitData",
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
                            value={HealthHabitData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "HealthHabitData",
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
                        Pre Science
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.PreScience?.map(
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
                                        onBlur={calculatePreScienceDataTotal}
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
                              {item?.PreScience?.map(
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
                                        onBlur={calculatePreScienceDataTotal}
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
                              {item?.PreScience?.map(
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
                                            "PreScienceData",
                                            "test",
                                            +e.target.value
                                          )
                                        }
                                        onBlur={calculatePreScienceDataTotal}
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
                            onClick={calculatePreScienceDataTotal}
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
                            value={PreScienceData.totalScore}
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
                            value={PreScienceAverage.toFixed(2)}
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
                            onChange={(e: any) =>
                              handleInputChange(
                                "PreScienceData",
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
                            value={PreScienceData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "PreScienceData",
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
                        Practical Life
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.PracticalLife?.map(
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
                                        onBlur={calculatePracticalLifeDataTotal}
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
                              {item?.PracticalLife?.map(
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
                                        onBlur={calculatePracticalLifeDataTotal}
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
                              {item?.PracticalLife?.map(
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
                                        onBlur={calculatePracticalLifeDataTotal}
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
                            onClick={calculatePracticalLifeDataTotal}
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
                            value={PracticalLifeData.totalScore}
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
                            value={PracticalLifeAverage.toFixed(2)}
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
                            value={PracticalLifeData.grade}
                            onChange={(e: any) =>
                              handleInputChange(
                                "PracticalLifeData",
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
                            value={PracticalLifeData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "PracticalLifeData",
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
                                      label="3rd Term Total"
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
                        {subjectMarks
                          ?.filter((item: any) => item?.term === "1st-Term")
                          .map((item: any) => (
                            <>
                              {item?.SensorialActivity?.map(
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
                                          calculateSensorialActivityDataTotal
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
                              {item?.SensorialActivity?.map(
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
                                          calculateSensorialActivityDataTotal
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
                              {item?.SensorialActivity?.map(
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
                                        onBlur={
                                          calculateSensorialActivityDataTotal
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
                            onClick={calculateSensorialActivityDataTotal}
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
                            value={SensorialActivityData.totalScore}
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
                            value={SensorialActivityAverage.toFixed(2)}
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
                            onChange={(e: any) =>
                              handleInputChange(
                                "SensorialActivityData",
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
                            value={SensorialActivityData.remark}
                            onChange={(e: any) =>
                              handleInputChange(
                                "SensorialActivityData",
                                "remark",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* ///Writing end input */}

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
                        <MenuItem value={userDatas?.currentClass}>
                          {" "}
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

export default InputPreNurseryCommulative;
