import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface SubjectScore {
  test: number;
  exam: number;
  totalScore?: number;
  grade?: string;
  remark?: string;
}

interface ResultData {
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

const UpdateBasic1Result: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [resultData, setResultData] = useState<ResultData>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch existing result data
    const fetchResult = async () => {
      try {
        const response = await axios.get(
          `https://ourworldintschool.onrender.com/api/basic1result/${id}`
        );
        setResultData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load result data");
        setLoading(false);
      }
    };

    fetchResult();
  }, [id]);

  const handleInputChange = (
    subject: string,
    index: number,
    field: string,
    value: string | number
  ) => {
    setResultData((prevData) => {
      const updatedSubject =
        prevData[subject as keyof ResultData]?.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        ) || [];

      return { ...prevData, [subject]: updatedSubject };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/basic1result/update/${id}`,
        resultData
      );
      alert("Result updated successfully");
    } catch (err) {
      alert("Failed to update result");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Update Result</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(resultData).map(([subject, scores]) =>
          Array.isArray(scores) ? (
            <div key={subject}>
              <h3>{subject}</h3>
              {scores.map((score, index) => (
                <div key={index}>
                  <label>Test:</label>
                  <input
                    type="number"
                    value={score.test}
                    onChange={(e) =>
                      handleInputChange(
                        subject,
                        index,
                        "test",
                        Number(e.target.value)
                      )
                    }
                  />
                  <label>Exam:</label>
                  <input
                    type="number"
                    value={score.exam}
                    onChange={(e) =>
                      handleInputChange(
                        subject,
                        index,
                        "exam",
                        Number(e.target.value)
                      )
                    }
                  />
                  <label>Grade:</label>
                  <input
                    type="text"
                    value={score.grade || ""}
                    onChange={(e) =>
                      handleInputChange(subject, index, "grade", e.target.value)
                    }
                  />
                  <label>Remark:</label>
                  <input
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
              ))}
            </div>
          ) : null
        )}
        <button type="submit">Update Result</button>
      </form>
    </div>
  );
};

export default UpdateBasic1Result;

// {/* <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         English Studies
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             // required
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={EnglishData.test || ""}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "EnglishData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                             onBlur={calculateEnglishDataTotal}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             // required
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={EnglishData.exam || ""}
//                             onBlur={calculateEnglishDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "EnglishData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           {/* {NumeracyData.totalScore} */}
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             // required
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={EnglishData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             // required
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={EnglishData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "EnglishData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             // required
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={EnglishData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "EnglishData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///maths */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         Mathematics
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             type="number"
//                             label="Test/C.A"
//                             name="test"
//                             value={MathsData.test || ""}
//                             onBlur={calculateMathsDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "MathsData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={MathsData.exam || ""}
//                             onBlur={calculateMathsDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "MathsData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={MathsData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={MathsData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "MathsData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={MathsData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "MathsData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///maths end input */}
//                     {/* ///HealthSceince */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         Basic Science & Technology
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={BasicScienceData.test || ""}
//                             onBlur={calculateBasicScienceDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "BasicScienceData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={BasicScienceData.exam || ""}
//                             onBlur={calculateBasicScienceDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "BasicScienceData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={BasicScienceData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={BasicScienceData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "BasicScienceData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={BasicScienceData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "BasicScienceData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///Health science end input */}
//                     {/* ///Basic Sceince */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         Verbal Reasoning
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={VerbalReasoningData.test || ""}
//                             onBlur={calculateVerbalReasoningDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "VerbalReasoningData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={VerbalReasoningData.exam || ""}
//                             onBlur={calculateVerbalReasoningDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "VerbalReasoningData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={VerbalReasoningData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={VerbalReasoningData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "VerbalReasoningData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={VerbalReasoningData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "VerbalReasoningData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///Basic Science end input */}
//                     {/* ///AgricSceince */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         Quantitative Reasoning
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={QuantitativeReasoningData.test || ""}
//                             onBlur={calculateQuantitativeReasoningDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "QuantitativeReasoningData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={QuantitativeReasoningData.exam || ""}
//                             onBlur={calculateQuantitativeReasoningDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "QuantitativeReasoningData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={QuantitativeReasoningData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={QuantitativeReasoningData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "QuantitativeReasoningData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={QuantitativeReasoningData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "QuantitativeReasoningData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* /// Agric Sceince end input */}
//                     {/* ///Social Habit */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         National Values
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={NationalValuesData.test || ""}
//                             onBlur={calculateNationalValuesDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "NationalValuesData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={NationalValuesData.exam || ""}
//                             onBlur={calculateNationalValuesDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "NationalValuesData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={NationalValuesData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={NationalValuesData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "NationalValuesData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={NationalValuesData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "NationalValuesData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///Social Habit end input */}
//                     {/* ///Rhymes */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         History
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={HistoryData.test || ""}
//                             onBlur={calculateHistoryDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "HistoryData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={HistoryData.exam || ""}
//                             onBlur={calculateHistoryDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "HistoryData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={HistoryData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={HistoryData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "HistoryData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={HistoryData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "HistoryData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///Rhymes end input */}
//                     {/* ///Writing */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         Phonics
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={PhonicsData.test || ""}
//                             onBlur={calculatePhonicsDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "PhonicsData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={PhonicsData.exam || ""}
//                             onBlur={calculatePhonicsDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "PhonicsData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={PhonicsData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={PhonicsData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "PhonicsData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={PhonicsData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "PhonicsData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///Writing end input */}
//                     {/* ///Writing */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         Creative Art
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={CreativeArtData.test || ""}
//                             onBlur={calculateCreativeArtDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "CreativeArtData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={CreativeArtData.exam || ""}
//                             onBlur={calculateCreativeArtDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "CreativeArtData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={CreativeArtData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={CreativeArtData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "CreativeArtData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={CreativeArtData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "CreativeArtData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///Writing end input */}
//                     {/* ///Writing */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         CRK
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={CRKData.test || ""}
//                             onBlur={calculateCRKDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "CRKData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={CRKData.exam || ""}
//                             onBlur={calculateCRKDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "CRKData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={CRKData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={CRKData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "CRKData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={CRKData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "CRKData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///Writing end input */}
//                     {/* ///Writing */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         P V S (Pre Vocational Studies)
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={PVCData.test || ""}
//                             onBlur={calculatePVCDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "PVCData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={PVCData.exam || ""}
//                             onBlur={calculatePVCDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "PVCData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={PVCData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={PVCData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "PVCData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={PVCData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "PVCData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///Writing end input */}
//                     {/* ///Writing */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         Igbo Language
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={IgboData.test || ""}
//                             onBlur={calculateIgboDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "IgboData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={IgboData.exam || ""}
//                             onBlur={calculateIgboDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "IgboData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={IgboData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={IgboData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "IgboData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={IgboData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "IgboData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///Writing end input */}
//                     {/* ///Writing */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         French
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={FrenchData.test || ""}
//                             onBlur={calculateFrenchDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "FrenchData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={FrenchData.exam || ""}
//                             onBlur={calculateFrenchDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "FrenchData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={FrenchData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={FrenchData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "FrenchData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={FrenchData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "FrenchData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///Writing end input */}
//                     <Dropdown>
//                       <Dropdown.Toggle
//                         variant="success"
//                         id="dropdown-basic"
//                         style={{
//                           border: "1px solid green",
//                           backgroundColor: "white",
//                           marginTop: "15px",
//                           color: "black",
//                         }}
//                         className="result-input-elect-nursery1"
//                       >
//                         Hand Writing
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={HandWritingData.test || ""}
//                             onBlur={calculateHandWritingDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "HandWritingData",
//                                 "test",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={HandWritingData.exam || ""}
//                             onBlur={calculateHandWritingDataTotal}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 "HandWritingData",
//                                 "exam",
//                                 +e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-2"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={HandWritingData.totalScore}
//                             onBlur={calculateResultTotalScore}
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={HandWritingData.grade}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "HandWritingData",
//                                 "grade",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                         <div
//                           className="col-md-6 mb-2 mt-1"
//                           // style={{
//                           //   marginLeft: "auto",
//                           //   marginRight: "auto",
//                           // }}
//                         >
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={HandWritingData.remark}
//                             onChange={(e: any) =>
//                               handleInputChange(
//                                 "HandWritingData",
//                                 "remark",
//                                 e.target.value
//                               )
//                             }
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown> */}
