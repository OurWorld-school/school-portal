import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { Dropdown } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { Basic1CommulativeApi, UpdateBasic1CommulativeApi } from "../../../data/Api";

interface SubjectResult {
  grade: string;
  remark: string;
}

interface ResultData {
  _id: string;
  English: SubjectResult[];
  Mathematics: SubjectResult[];
  CRK: SubjectResult[];
  VerbalReasoning: SubjectResult[];
  QuantitativeReasoning: SubjectResult[];
  BasicScience: SubjectResult[];
  Phonics: SubjectResult[];
  French: SubjectResult[];
  Computer: SubjectResult[];
  NationalValues: SubjectResult[];
  CreativeArt: SubjectResult[];
  HandWriting: SubjectResult[];
  History: SubjectResult[];
  Igbo: SubjectResult[];
  PVC: SubjectResult[];
  Writing: SubjectResult[];
  TotalGrade: string;
  Remark: string;
  HmRemark: string;
  Position: string;
  numberInClass: string;
  Signature: string;
}

const UpdateBasic1CumulativeResult = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resultData, setResultData] = useState<ResultData | null>(null);

  const subjects: (keyof ResultData)[] = [
    "English",
    "Mathematics",
    "CRK",
    "VerbalReasoning",
    "QuantitativeReasoning",
    "BasicScience",
    "Phonics",
    "French",
    "Computer",
    "NationalValues",
    "CreativeArt",
    "HandWriting",
    "History",
    "Igbo",
    "PVC",
    "Writing",
  ];

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await axios.get(`${Basic1CommulativeApi}/${id}`);
        setResultData(res.data);
      } catch (err) {
        console.error("Error fetching result:", err);
      }
    };

    fetchResult();
  }, [id]);

  const handleSubjectChange = (
    subject: keyof ResultData,
    index: number,
    field: keyof SubjectResult,
    value: string
  ) => {
    if (!resultData) return;
    const updatedSubject = [...(resultData[subject] as SubjectResult[])];
    updatedSubject[index][field] = value;
    setResultData({ ...resultData, [subject]: updatedSubject });
  };

  const handleGeneralChange = (field: keyof ResultData, value: string) => {
    if (!resultData) return;
    setResultData({ ...resultData, [field]: value });
  };

  const handleSubmit = async () => {
    if (!resultData) return;

    try {
      await axios.put(`${UpdateBasic1CommulativeApi}/${id}`, resultData);
      alert("Result updated successfully");
      navigate("/all-results");
    } catch (err) {
      console.error("Failed to update result:", err);
      alert("Update failed");
    }
  };

  if (!resultData) return <div>Loading...</div>;

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Update Basic 1 Cumulative Result</h2>

      {subjects.map((subject) => (
        <Dropdown key={subject} className="mb-4">
          <Dropdown.Toggle
            variant="success"
            id={`dropdown-${subject}`}
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid green",
            }}
          >
            {subject}
          </Dropdown.Toggle>

          <Dropdown.Menu className="p-3">
            {(resultData[subject] as SubjectResult[]).map((entry, index) => (
              <div key={`${subject}-${index}`} className="mb-3">
                <TextField
                  label="Grade"
                  variant="outlined"
                  value={entry.grade}
                  onChange={(e) =>
                    handleSubjectChange(subject, index, "grade", e.target.value)
                  }
                  className="me-2"
                />
                <TextField
                  label="Remark"
                  variant="outlined"
                  value={entry.remark}
                  onChange={(e) =>
                    handleSubjectChange(
                      subject,
                      index,
                      "remark",
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ))}

      <div className="mb-3">
        <TextField
          fullWidth
          label="Total Grade"
          variant="outlined"
          value={resultData.TotalGrade}
          onChange={(e) => handleGeneralChange("TotalGrade", e.target.value)}
        />
      </div>
      <div className="mb-3">
        <TextField
          fullWidth
          label="Position"
          variant="outlined"
          value={resultData.Position}
          onChange={(e) => handleGeneralChange("Position", e.target.value)}
        />
      </div>
      <div className="mb-3">
        <TextField
          fullWidth
          label="Number In Class"
          variant="outlined"
          value={resultData.numberInClass}
          onChange={(e) => handleGeneralChange("numberInClass", e.target.value)}
        />
      </div>
      <div className="mb-3">
        <TextField
          fullWidth
          label="Remark"
          variant="outlined"
          value={resultData.Remark}
          onChange={(e) => handleGeneralChange("Remark", e.target.value)}
        />
      </div>
      <div className="mb-3">
        <TextField
          fullWidth
          label="HM Remark"
          variant="outlined"
          value={resultData.HmRemark}
          onChange={(e) => handleGeneralChange("HmRemark", e.target.value)}
        />
      </div>
      <div className="mb-3">
        <TextField
          fullWidth
          label="Signature"
          variant="outlined"
          value={resultData.Signature}
          onChange={(e) => handleGeneralChange("Signature", e.target.value)}
        />
      </div>

      <div className="text-center">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update Result
        </Button>
      </div>
    </div>
  );
};

export default UpdateBasic1CumulativeResult;
