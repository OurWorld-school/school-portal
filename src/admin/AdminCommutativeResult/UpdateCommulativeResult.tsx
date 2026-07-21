import React, { useEffect, useState, useCallback } from "react";
import AdminLayout from "../AdminDashboard/AdminLayout";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import CircularIndeterminate from "../../components/Loading/Progress";
import {
  ClassApi,
  CommulativeApi,
  GradeApi,
  getAllSchools,
} from "../../APiData/Api";
import { schoolInfo } from "../../store/Info";
import { getGradeForScore } from "../../APiData/gradeUtils";
import "../AdminResult/CreateResult.css";

interface SubjectScore {
  _id?: string;
  subjectName: string;
  total1stTermScore: number;
  total2ndTermScore: number;
  total3rdTermScore: number;
  totalScore: number;
  totalAverage: number | string;
  grade: string;
  remark: string;
}

const UpdateCommulativeResult = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [userDatas, setUserDatas] = useState<any | null>(null);

  const [term, setTerm] = useState("");
  const [year, setYear] = useState("");
  const [classes, setClasses] = useState("");
  const [schoolRegNumber, setSchoolRegNumber] = useState("");
  const [numberInClass, setNumberInClass] = useState<number>(0);
  const [TotalScore, setTotalScore] = useState<number>(0);
  const [TotalAverage, setTotalAverage] = useState<number>(0);
  const [selectedGrades, setSelectedGrades] = useState("");
  const [Position, setPosition] = useState("");
  const [Remark, setRemark] = useState("");
  const [HmRemark, setHmRemark] = useState("");
  const [selectedSchools, setSelectedSchools] = useState<string>("");
  const [selectedClasses, setSelectedClasses] = useState<string>("");

  const [subjectsList, setSubjectsList] = useState<SubjectScore[]>([]);
  const [grades, setGrades] = useState([]);
  const [schools, setSchools] = useState([]);
  const [classD, setClassD] = useState([]);

  // Fetch cumulative result data by ID
  useEffect(() => {
    const fetchResult = async () => {
      try {
        setFetching(true);
        const { data } = await axios.get(`${CommulativeApi}${id}`);
        setUserDatas(data);

        setTerm(data.term || "");
        setYear(data.year || "");
        setClasses(data.classes || "");
        setSchoolRegNumber(data.schoolRegNumber || data?.user?.schoolRegNumber || "");
        setNumberInClass(data.numberInClass || 0);
        setTotalScore(data.TotalScore || 0);
        setTotalAverage(data.TotalAverage ? Number(data.TotalAverage) : 0);
        setSelectedGrades(data.TotalGrade || "");
        setPosition(data.Position || "");
        setRemark(data.Remark || "");
        setHmRemark(data.HmRemark || "");
        setSelectedSchools(data.schoolName || "");
        setSelectedClasses(data.classes || "");

        if (Array.isArray(data.subjects)) {
          setSubjectsList(
            data.subjects.map((s: any) => ({
              _id: s._id,
              subjectName: s.subjectName || "",
              total1stTermScore: Number(s.total1stTermScore) || 0,
              total2ndTermScore: Number(s.total2ndTermScore) || 0,
              total3rdTermScore: Number(s.total3rdTermScore) || 0,
              totalScore: Number(s.totalScore) || 0,
              totalAverage: s.totalAverage !== undefined ? s.totalAverage : 0,
              grade: s.grade || "",
              remark: s.remark || "",
            }))
          );
        }
        setFetching(false);
      } catch (error) {
        console.error("Error fetching cumulative result:", error);
        toast.error("Failed to load cumulative result data");
        setFetching(false);
      }
    };

    if (id) fetchResult();
  }, [id]);

  // Fetch grades
  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const { data } = await axios.get(GradeApi);
        setGrades(data.filter((item: any) => item?.schoolName?._id === schoolInfo));
      } catch (error) {
        console.error("Error fetching grades:", error);
      }
    };
    fetchGrades();
  }, []);

  // Fetch schools
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(getAllSchools)
        .then((response) => {
          setSchools(response.data.filter((item: any) => item._id === schoolInfo));
        })
        .catch((error) => console.error("Error fetching schools:", error));
    }
  }, []);

  // Fetch classes
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(ClassApi)
        .then((response) => {
          setClassD(response.data.filter((item: any) => item?.schoolName?._id === schoolInfo));
        })
        .catch((error) => console.error("Error fetching classes:", error));
    }
  }, []);

  // Handle subject field changes
  const handleSubjectChange = (
    index: number,
    field: keyof SubjectScore,
    value: string | number
  ) => {
    setSubjectsList((prevList) => {
      const updated = [...prevList];
      const target = { ...updated[index], [field]: value };

      // Calculate totalScore and totalAverage dynamically when term scores change
      const t1 = Number(target.total1stTermScore) || 0;
      const t2 = Number(target.total2ndTermScore) || 0;
      const t3 = Number(target.total3rdTermScore) || 0;
      target.totalScore = t1 + t2 + t3;
      target.totalAverage = parseFloat((target.totalScore / 3).toFixed(2));

      // Match grade for subject totalAverage if grades loaded
      const matched = getGradeForScore(Number(target.totalAverage), grades);
      if (matched) {
        if (!field || field === "total1stTermScore" || field === "total2ndTermScore" || field === "total3rdTermScore") {
          target.grade = matched.grade;
          target.remark = matched.remark;
        }
      }

      updated[index] = target;
      return updated;
    });
  };

  // Calculate Grand Total & Average across subjects
  const calculateGrandTotal = useCallback(() => {
    if (!subjectsList || subjectsList.length === 0) {
      setTotalScore(0);
      setTotalAverage(0);
      return;
    }

    const grandTotal = subjectsList.reduce(
      (acc, item) => acc + (Number(item.totalScore) || 0),
      0
    );

    const average = parseFloat((grandTotal / subjectsList.length).toFixed(2));

    setTotalScore(grandTotal);
    setTotalAverage(average);

    const matched = getGradeForScore(average, grades);
    if (matched) {
      setSelectedGrades(matched.grade);
      if (!Remark) setRemark(matched.remark);
    }
  }, [subjectsList, grades, Remark]);

  useEffect(() => {
    if (subjectsList.length > 0) {
      calculateGrandTotal();
    }
  }, [subjectsList, calculateGrandTotal]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      user: userDatas?.user?._id || userDatas?.user,
      school: userDatas?.school?._id || userDatas?.school,
      schoolName: selectedSchools || userDatas?.schoolName,
      classes: selectedClasses || classes,
      year: year,
      term: term,
      schoolRegNumber: schoolRegNumber,
      numberInClass: numberInClass,
      TotalScore: TotalScore,
      TotalAverage: TotalAverage,
      TotalGrade: selectedGrades,
      Position: Position,
      Remark: Remark,
      HmRemark: HmRemark,
      subjects: subjectsList.map((item) => ({
        _id: item._id,
        subjectName: item.subjectName,
        total1stTermScore: Number(item.total1stTermScore) || 0,
        total2ndTermScore: Number(item.total2ndTermScore) || 0,
        total3rdTermScore: Number(item.total3rdTermScore) || 0,
        totalScore: Number(item.totalScore) || 0,
        totalAverage: parseFloat(Number(item.totalAverage || 0).toFixed(2)),
        grade: item.grade,
        remark: item.remark,
      })),
    };

    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const res = await axios.put(`${CommulativeApi}update/${id}`, payload, { headers });

      setLoading(false);
      if (res.data) {
        toast.success("Cumulative Result updated successfully!");
        navigate("/view-commulative");
      } else {
        toast.error("Failed to update result.");
      }
    } catch (err: any) {
      setLoading(false);
      console.error("Error updating cumulative result:", err);
      toast.error(err?.response?.data?.message || "Failed to update cumulative result");
    }
  };

  if (fetching) {
    return (
      <AdminLayout>
        <div className="d-flex justify-content-center align-items-center py-5">
          <CircularIndeterminate />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="register-main">
        <div className="container py-4">
          <div className="item-center text-center mb-3">
            <h3 className="titler" style={{ fontWeight: "700" }}>Update Cumulative Result</h3>
          </div>

          <form onSubmit={submitHandler}>
            <div className="content">
              {userDatas?.user?.passportPhoto && (
                <div
                  style={{
                    width: "100px",
                    height: "12vh",
                    display: "flex",
                    margin: "0 auto 10px auto",
                  }}
                >
                  <img
                    src={userDatas?.user?.passportPhoto}
                    alt="passport"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                </div>
              )}

              <h6 className="d-flex justify-content-center" style={{ fontSize: "medium", fontWeight: "600" }}>
                Input Cumulative Result of
              </h6>
              <div className="text-center mb-2" style={{ fontSize: "x-large", fontWeight: "600" }}>
                <span style={{ color: "#5372f0", marginRight: "6px" }}>
                  {userDatas?.user?.firstName}
                </span>
                <span style={{ color: "#5372f0" }}>
                  {userDatas?.user?.lastName}
                </span>
              </div>
              <div className="text-center mb-3" style={{ color: "#5372f0", fontWeight: "600" }}>
                {userDatas?.user?.schoolRegNumber || schoolRegNumber}
              </div>
              <p className="text-center text-muted" style={{ fontSize: "small" }}>
                *Edit student cumulative subject scores and result fields below*
              </p>
            </div>

            {/* Subjects List */}
            {subjectsList.map((item, index) => (
              <div key={item._id || index} className="mb-3">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Dropdown className="dropdown-input-v w-100">
                    <Dropdown.Toggle
                      variant="success"
                      id={`dropdown-subject-${index}`}
                      style={{
                        border: "1px solid green",
                        backgroundColor: "white",
                        marginTop: "10px",
                        color: "black",
                        width: "100%",
                        maxWidth: "400px",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{item.subjectName.replace(/_/g, " ")}</span>
                      <span className="badge bg-secondary ms-2">Total: {item.totalScore}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-3" style={{ width: "100%", maxWidth: "400px" }}>
                      <div className="mb-2">
                        <TextField
                          fullWidth
                          size="small"
                          label="Subject Name"
                          type="text"
                          value={item.subjectName.replace(/_/g, " ")}
                          onChange={(e) => handleSubjectChange(index, "subjectName", e.target.value)}
                        />
                      </div>
                      <div className="row g-2 mb-2">
                        <div className="col-4">
                          <TextField
                            fullWidth
                            size="small"
                            label="1st Term"
                            type="number"
                            value={item.total1stTermScore}
                            onChange={(e) => handleSubjectChange(index, "total1stTermScore", Number(e.target.value))}
                          />
                        </div>
                        <div className="col-4">
                          <TextField
                            fullWidth
                            size="small"
                            label="2nd Term"
                            type="number"
                            value={item.total2ndTermScore}
                            onChange={(e) => handleSubjectChange(index, "total2ndTermScore", Number(e.target.value))}
                          />
                        </div>
                        <div className="col-4">
                          <TextField
                            fullWidth
                            size="small"
                            label="3rd Term"
                            type="number"
                            value={item.total3rdTermScore}
                            onChange={(e) => handleSubjectChange(index, "total3rdTermScore", Number(e.target.value))}
                          />
                        </div>
                      </div>
                      <div className="row g-2 mb-2">
                        <div className="col-6">
                          <TextField
                            fullWidth
                            size="small"
                            label="Total Score"
                            type="number"
                            value={item.totalScore}
                            onChange={(e) => handleSubjectChange(index, "totalScore", Number(e.target.value))}
                          />
                        </div>
                        <div className="col-6">
                          <TextField
                            fullWidth
                            size="small"
                            label="Total Average"
                            type="number"
                            value={item.totalAverage}
                            onChange={(e) => handleSubjectChange(index, "totalAverage", Number(e.target.value))}
                          />
                        </div>
                      </div>
                      <div className="row g-2">
                        <div className="col-6">
                          <TextField
                            fullWidth
                            size="small"
                            label="Grade"
                            type="text"
                            value={item.grade}
                            onChange={(e) => handleSubjectChange(index, "grade", e.target.value)}
                          />
                        </div>
                        <div className="col-6">
                          <TextField
                            fullWidth
                            size="small"
                            label="Remark"
                            type="text"
                            value={item.remark}
                            onChange={(e) => handleSubjectChange(index, "remark", e.target.value)}
                          />
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            ))}

            <div className="text-center my-3">
              <Button
                variant="outlined"
                color="primary"
                onClick={calculateGrandTotal}
              >
                Recalculate Cumulative Total & Average
              </Button>
            </div>

            {/* Main Result Metadata Fields */}
            <div className="mt-4">
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="TotalScore"
                label="Grand Total Score"
                type="number"
                value={TotalScore}
                onChange={(e) => setTotalScore(Number(e.target.value))}
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="TotalAverage"
                label="Grand Total Average"
                type="number"
                value={TotalAverage}
                onChange={(e) => setTotalAverage(Number(e.target.value))}
              />

              <FormControl fullWidth margin="normal">
                <InputLabel id="grade-label">Total Grade</InputLabel>
                <Select
                  labelId="grade-label"
                  value={selectedGrades}
                  label="Total Grade"
                  onChange={(e: any) => setSelectedGrades(e.target.value)}
                >
                  {grades
                    ?.sort((a: any, b: any) => a.gradeName.localeCompare(b.gradeName))
                    .map((item: any) => (
                      <MenuItem key={item._id} value={item.gradeName}>
                        {item.gradeName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="Position"
                label="Position in Class"
                type="text"
                value={Position}
                onChange={(e) => setPosition(e.target.value)}
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="numberInClass"
                label="Number In Class"
                type="number"
                value={numberInClass}
                onChange={(e) => setNumberInClass(Number(e.target.value))}
              />

              <TextField
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                fullWidth
                id="remark"
                label="Form Teacher Remark"
                value={Remark}
                onChange={(e) => setRemark(e.target.value)}
              />

              <TextField
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                fullWidth
                id="hmRemark"
                label="Head Teacher Remark"
                value={HmRemark}
                onChange={(e) => setHmRemark(e.target.value)}
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="schoolRegNumber"
                label="School Registration / Admission Number"
                value={schoolRegNumber}
                onChange={(e) => setSchoolRegNumber(e.target.value)}
              />

              <FormControl fullWidth margin="normal">
                <InputLabel id="school-select-label">School</InputLabel>
                <Select
                  labelId="school-select-label"
                  value={selectedSchools}
                  label="School"
                  onChange={(e: any) => setSelectedSchools(e.target.value)}
                >
                  {schools?.map((item: any) => (
                    <MenuItem key={item._id} value={item.name}>
                      {item.name.replace(/_/g, " ")}
                    </MenuItem>
                  ))}
                  {selectedSchools && !schools?.some((item: any) => item.name === selectedSchools) && (
                    <MenuItem value={selectedSchools}>{selectedSchools.replace(/_/g, " ")}</MenuItem>
                  )}
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel id="class-select-label">Class</InputLabel>
                <Select
                  labelId="class-select-label"
                  value={selectedClasses}
                  label="Class"
                  onChange={(e: any) => setSelectedClasses(e.target.value)}
                >
                  {classD?.map((item: any) => (
                    <MenuItem key={item._id} value={item.name}>
                      {item.name.replace(/_/g, " ")}
                    </MenuItem>
                  ))}
                  {selectedClasses && !classD?.some((item: any) => item.name === selectedClasses) && (
                    <MenuItem value={selectedClasses}>{selectedClasses.replace(/_/g, " ")}</MenuItem>
                  )}
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel id="term-select-label">Term</InputLabel>
                <Select
                  labelId="term-select-label"
                  value={term}
                  label="Term"
                  onChange={(e: any) => setTerm(e.target.value)}
                >
                  <MenuItem value="1st Term">1st Term</MenuItem>
                  <MenuItem value="1st-Term">1st Term (1st-Term)</MenuItem>
                  <MenuItem value="1st_Term">1st Term (1st_Term)</MenuItem>
                  <MenuItem value="2nd Term">2nd Term</MenuItem>
                  <MenuItem value="2nd-Term">2nd Term (2nd-Term)</MenuItem>
                  <MenuItem value="2nd_Term">2nd Term (2nd_Term)</MenuItem>
                  <MenuItem value="3rd Term">3rd Term</MenuItem>
                  <MenuItem value="3rd-Term">3rd Term (3rd-Term)</MenuItem>
                  <MenuItem value="3rd_Term">3rd Term (3rd_Term)</MenuItem>
                  {term && !["1st Term", "1st-Term", "1st_Term", "2nd Term", "2nd-Term", "2nd_Term", "3rd Term", "3rd-Term", "3rd_Term"].includes(term) && (
                    <MenuItem value={term}>{term.replace(/_/g, " ")}</MenuItem>
                  )}
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel id="year-select-label">Academic Year</InputLabel>
                <Select
                  labelId="year-select-label"
                  value={year}
                  label="Academic Year"
                  onChange={(e: any) => setYear(e.target.value)}
                >
                  <MenuItem value="2023/2024">2023/2024</MenuItem>
                  <MenuItem value="2024/2025">2024/2025</MenuItem>
                  <MenuItem value="2025/2026">2025/2026</MenuItem>
                  <MenuItem value="2026/2027">2026/2027</MenuItem>
                  <MenuItem value="2027/2028">2027/2028</MenuItem>
                  <MenuItem value="2028/2029">2028/2029</MenuItem>
                  <MenuItem value="2029/2030">2029/2030</MenuItem>
                  {year && !["2023/2024", "2024/2025", "2025/2026", "2026/2027", "2027/2028", "2028/2029", "2029/2030"].includes(year) && (
                    <MenuItem value={year}>{year}</MenuItem>
                  )}
                </Select>
              </FormControl>

              <div className="d-flex justify-content-center mt-4">
                {loading ? (
                  <CircularIndeterminate />
                ) : (
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                  >
                    Update Cumulative Result
                  </Button>
                )}
              </div>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UpdateCommulativeResult;
