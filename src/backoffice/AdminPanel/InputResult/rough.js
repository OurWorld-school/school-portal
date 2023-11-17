// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { Nursery1resultApi, UserApi } from "../../../data/Api";
// import { Nursery1Data } from "../../../data/Data.Type";
// import CircularIndeterminate from "../../../components/Loading/Progress";
// import AdminLayout from "../AdminLayout";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";
// import { Dropdown } from "react-bootstrap";
// import "./InputResult.css";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
// import { TextField, Button } from "@mui/material";
// const ITEM_HEIGHT = 100;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };
// const InputNursery1result = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [user, setUser] = useState(id);
//   console.log(id);
//   const [term, setTerm] = useState("");
//   const [year, setYear] = useState("");
//   const [TotalScore, setTotalScore] = useState(Number);
//   const [TotalAverage, setTotalAverage] = useState("");
//   const [Position, setPosition] = useState("");
//   const [numberInClass, setNumberInClass] = useState(Number);
//   const [TotalGrade, setTotalGrade] = useState("");
//   //  const [Signature, setSignature]=useState('')
//   const [classes, setClasses] = useState("");
//   const [remark, setRemark] = useState("");

//   const [schoolRegNumber, setSchoolRegNumber] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [userDatas, setUserDatas] = useState<any | null>(null);
//   const handleLoader = () => {
//     setLoading(true);

//     // Perform any other actions that need to be done when the button is clicked
//   };
//   // const [englishData, setEnglishData] = useState({
//   //   English: [],
//   // });
//   const [formData, setFormData] = useState({
//     test: 0,
//     exam: 0,
//     totalScore: 0,
//     grade: "",
//     remark: "",
//   });
//   const [mathsData, setMathsData] = useState({
//     test: 0,
//     exam: 0,
//     totalScore: 0,
//     grade: "",
//     remark: "",
//   });
//   const [SocialHabitData, setSocialHabitData] = useState({
//     test: 0,
//     exam: 0,
//     totalScore: 0,
//     grade: "",
//     remark: "",
//   });
//   const [BasicScienceData, setBasicScienceData] = useState({
//     test: 0,
//     exam: 0,
//     totalScore: 0,
//     grade: "",
//     remark: "",
//   });
//   const [AgricScienceData, setAgricScienceData] = useState({
//     test: 0,
//     exam: 0,
//     totalScore: 0,
//     grade: "",
//     remark: "",
//   });
//   const [RhymesData, setRhymesData] = useState({
//     test: 0,
//     exam: 0,
//     totalScore: 0,
//     grade: "",
//     remark: "",
//   });
//   const [WritingData, setWritingData] = useState({
//     test: 0,
//     exam: 0,
//     totalScore: 0,
//     grade: "",
//     remark: "",
//   });
//   const [HealthScienceData, setHealthScienceData] = useState({
//     test: 0,
//     exam: 0,
//     totalScore: 0,
//     grade: "",
//     remark: "",
//   });
//   const handleInputChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleInputChangeMaths = (e: any) => {
//     const { name, value } = e.target;
//     setMathsData({ ...mathsData, [name]: value });
//   };
//   const handleInputChangeHealth = (e: any) => {
//     const { name, value } = e.target;
//     setHealthScienceData({ ...HealthScienceData, [name]: value });
//   };
//   const handleInputChangeBasic = (e: any) => {
//     const { name, value } = e.target;
//     setBasicScienceData({ ...BasicScienceData, [name]: value });
//   };
//   const handleInputChangeAgric = (e: any) => {
//     const { name, value } = e.target;
//     setAgricScienceData({ ...AgricScienceData, [name]: value });
//   };
//   const handleInputChangeRhymes = (e: any) => {
//     const { name, value } = e.target;
//     setRhymesData({ ...RhymesData, [name]: value });
//   };
//   const handleInputChangeWriting = (e: any) => {
//     const { name, value } = e.target;
//     setWritingData({ ...WritingData, [name]: value });
//   };
//   const handleInputChangeSocialHabit = (e: any) => {
//     const { name, value } = e.target;
//     setSocialHabitData({ ...SocialHabitData, [name]: value });
//   };
//   React.useEffect(() => {
//     const fetchPosts = async () => {
//       const { data } = await axios.get(UserApi + id);
//       console.log(data);
//       // const foundData = data.find((item) => item.artist === artist);
//       setUserDatas(data);
//     };

//     fetchPosts();
//   }, [id]);

//   const submitHandler = (e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     const data: any = {
//       user: user,
//       classes: classes,
//       year: year,
//       TotalScore: TotalScore,
//       TotalGrade: TotalGrade,
//       TotalAverage: TotalAverage,
//       Position: Position,
//       term: term,
//       remark: remark,
//       numberInClass: numberInClass,
//       schoolRegNumber: schoolRegNumber,
//       English: [
//         // ...English,
//         {
//           test: formData.test,
//           exam: formData.exam,
//           totalScore: formData.totalScore,
//           grade: formData.grade,
//           remark: formData.remark,
//         },
//       ],

//       Mathematics: [
//         // ...English,
//         {
//           test: mathsData.test,
//           exam: mathsData.exam,
//           totalScore: mathsData.totalScore,
//           grade: mathsData.grade,
//           remark: mathsData.remark,
//         },
//       ],
//       SocialHabit: [
//         // ...English,
//         {
//           test: SocialHabitData.test,
//           exam: SocialHabitData.exam,
//           totalScore: SocialHabitData.totalScore,
//           grade: SocialHabitData.grade,
//           remark: SocialHabitData.remark,
//         },
//       ],
//       HealthScience: [
//         // ...English,
//         {
//           test: HealthScienceData.test,
//           exam: HealthScienceData.exam,
//           totalScore: HealthScienceData.totalScore,
//           grade: HealthScienceData.grade,
//           remark: HealthScienceData.remark,
//         },
//       ],
//       BasicScience: [
//         // ...English,
//         {
//           test: BasicScienceData.test,
//           exam: BasicScienceData.exam,
//           totalScore: BasicScienceData.totalScore,
//           grade: BasicScienceData.grade,
//           remark: BasicScienceData.remark,
//         },
//       ],
//       AgricScience: [
//         // ...English,
//         {
//           test: AgricScienceData.test,
//           exam: AgricScienceData.exam,
//           totalScore: AgricScienceData.totalScore,
//           grade: AgricScienceData.grade,
//           remark: AgricScienceData.remark,
//         },
//       ],
//       Rhymes: [
//         // ...English,
//         {
//           test: RhymesData.test,
//           exam: RhymesData.exam,
//           totalScore: RhymesData.totalScore,
//           grade: RhymesData.grade,
//           remark: RhymesData.remark,
//         },
//       ],
//       Writing: [
//         // ...English,
//         {
//           test: WritingData.test,
//           exam: WritingData.exam,
//           totalScore: WritingData.totalScore,
//           grade: WritingData.grade,
//           remark: WritingData.remark,
//         },
//       ],
//     };

//     const headers: any = {
//       "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
//       "Content-Type": "application/json",
//       // Accept: "application/json",
//       // body: JSON.stringify(data),
//     };

//     axios
//       .post(Nursery1resultApi, data, headers)

//       .then((res) => {
//         console.log(res.data);
//         setLoading(false);
//         if (res.data) {
//           setUser("");
//           setTerm(" ");
//           setYear(" ");
//           setPosition(" ");
//           setSchoolRegNumber(" ");
//           setTotalScore(Number);
//           setTotalGrade(" ");
//           setTotalAverage(" ");
//           setClasses(" ");
//           setRemark(" ");
//           setNumberInClass(Number);
//           console.log(res.data);
//           toast.success("post sucessful");
//           navigate("/");
//         } else {
//           toast.error(res.data.error);
//         }
//       })
//       .catch((err) => {
//         setLoading(false);
//         toast.error(
//           "Failed to create a post, check your network connection or input the correct textfields"
//         );
//       });
//   };

//   return (
//     <AdminLayout>
//       <section className="h-100 h-custom" style={{ backgroundColor: "white" }}>
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-lg-8 col-xl-6">
//               <div className="card rounded-3">
//                 <div className="card-body p-4 p-md-5">
//                   <h3
//                     className="  d-flex justify-content-center"
//                     style={{ fontSize: "x-large", fontWeight: "600" }}
//                   >
//                     Input Nursery 1 Result of
//                   </h3>
//                   <div
//                     className="text-center mb-4"
//                     style={{ fontSize: "x-large", fontWeight: "600" }}
//                   >
//                     <span
//                       style={{
//                         marginLeft: "3px",
//                         marginRight: "3px",
//                         color: "green",
//                       }}
//                     >
//                       {userDatas?.firstName}{" "}
//                     </span>
//                     <span className="ml-3" style={{ color: "green" }}>
//                       {userDatas?.lastName}{" "}
//                     </span>
//                   </div>
//                   <p
//                     className="d-flex justify-content-center"
//                     style={{ marginLeft: "15px" }}
//                   >
//                     *pls select your subject and input result*
//                   </p>
//                   <div className="mt-5">
//                     <h3>Subjects</h3>
//                   </div>
//                   <form onSubmit={submitHandler}>
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
//                         English
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={formData.test}
//                             onChange={handleInputChange}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={formData.exam}
//                             onChange={handleInputChange}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={formData.totalScore}
//                             onChange={handleInputChange}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={formData.grade}
//                             onChange={handleInputChange}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={formData.remark}
//                             onChange={handleInputChange}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             type="number"
//                             label="Test/C.A"
//                             name="test"
//                             value={mathsData.test}
//                             onChange={handleInputChangeMaths}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={mathsData.exam}
//                             onChange={handleInputChangeMaths}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={mathsData.totalScore}
//                             onChange={handleInputChangeMaths}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={mathsData.grade}
//                             onChange={handleInputChangeMaths}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={mathsData.remark}
//                             onChange={handleInputChangeMaths}
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
//                         Health Science
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={HealthScienceData.test}
//                             onChange={handleInputChangeHealth}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={HealthScienceData.exam}
//                             onChange={handleInputChangeHealth}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={HealthScienceData.totalScore}
//                             onChange={handleInputChangeHealth}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={HealthScienceData.grade}
//                             onChange={handleInputChangeHealth}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={HealthScienceData.remark}
//                             onChange={handleInputChangeHealth}
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
//                         Basic Science
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={BasicScienceData.test}
//                             onChange={handleInputChangeBasic}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={BasicScienceData.exam}
//                             onChange={handleInputChangeBasic}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={BasicScienceData.totalScore}
//                             onChange={handleInputChangeBasic}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={BasicScienceData.grade}
//                             onChange={handleInputChangeBasic}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={BasicScienceData.remark}
//                             onChange={handleInputChangeBasic}
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
//                         Agricultural Science
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={AgricScienceData.test}
//                             onChange={handleInputChangeAgric}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={AgricScienceData.exam}
//                             onChange={handleInputChangeAgric}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={AgricScienceData.totalScore}
//                             onChange={handleInputChangeAgric}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={AgricScienceData.grade}
//                             onChange={handleInputChangeAgric}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={AgricScienceData.remark}
//                             onChange={handleInputChangeAgric}
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
//                         Social Habit
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={SocialHabitData.test}
//                             onChange={handleInputChangeSocialHabit}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={SocialHabitData.exam}
//                             onChange={handleInputChangeSocialHabit}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={SocialHabitData.totalScore}
//                             onChange={handleInputChangeSocialHabit}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={SocialHabitData.grade}
//                             onChange={handleInputChangeSocialHabit}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={SocialHabitData.remark}
//                             onChange={handleInputChangeSocialHabit}
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
//                         Rhymes
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={RhymesData.test}
//                             onChange={handleInputChangeRhymes}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={RhymesData.exam}
//                             onChange={handleInputChangeRhymes}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={RhymesData.totalScore}
//                             onChange={handleInputChangeRhymes}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={RhymesData.grade}
//                             onChange={handleInputChangeRhymes}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={RhymesData.remark}
//                             onChange={handleInputChangeRhymes}
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
//                         Writing
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <div className="col-md-6 mb-2 mt-2 ">
//                           <TextField
//                             style={{
//                               width: "150px",
//                               marginLeft: "4px",
//                             }}
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Test/C.A"
//                             type="number"
//                             name="test"
//                             value={WritingData.test}
//                             onChange={handleInputChangeWriting}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Exam"
//                             name="exam"
//                             type="number"
//                             value={WritingData.exam}
//                             onChange={handleInputChangeWriting}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Total Score"
//                             type="number"
//                             name="totalScore"
//                             value={WritingData.totalScore}
//                             onChange={handleInputChangeWriting}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             label="Grade"
//                             name="grade"
//                             type="text"
//                             value={WritingData.grade}
//                             onChange={handleInputChangeWriting}
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
//                             required
//                             rows={4}
//                             id="outlined-required"
//                             name="remark"
//                             label="Remark"
//                             type="text"
//                             value={WritingData.remark}
//                             onChange={handleInputChangeWriting}
//                           />
//                         </div>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                     {/* ///Writing end input */}

//                     <TextField
//                       variant="outlined"
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="TotalScore"
//                       label="Total Score"
//                       type="number"
//                       name="TotalScore"
//                       autoComplete="classes"
//                       autoFocus
//                       value={TotalScore}
//                       onChange={(e) => setTotalScore(parseInt(e.target.value))}
//                     />
//                     <TextField
//                       variant="outlined"
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="TotalAverage"
//                       label="Total Average"
//                       name="TotalAverage"
//                       autoComplete="TotalAverage"
//                       autoFocus
//                       value={TotalAverage}
//                       onChange={(e) => setTotalAverage(e.target.value)}
//                     />
//                     <TextField
//                       variant="outlined"
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="TotalGrade"
//                       label="Total Grade"
//                       name="TotalGrade"
//                       autoComplete="TotalGrade"
//                       autoFocus
//                       value={TotalGrade}
//                       onChange={(e) => setTotalGrade(e.target.value)}
//                     />
//                     <TextField
//                       variant="outlined"
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="Position"
//                       label="Position"
//                       name="Position"
//                       autoComplete="Position"
//                       autoFocus
//                       value={Position}
//                       onChange={(e) => setPosition(e.target.value)}
//                     />
//                     <TextField
//                       variant="outlined"
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="numberInClass"
//                       label="Number In Class"
//                       name="numberInClass"
//                       autoComplete="numberInClass"
//                       type="number"
//                       autoFocus
//                       value={numberInClass}
//                       onChange={(e) =>
//                         setNumberInClass(parseInt(e.target.value))
//                       }
//                     />
//                     <TextField
//                       variant="outlined"
//                       margin="normal"
//                       required
//                       multiline
//                       rows={6}
//                       fullWidth
//                       type="text"
//                       id="remark"
//                       label="Result Remark"
//                       name="remark"
//                       autoComplete="remark"
//                       autoFocus
//                       value={remark}
//                       onChange={(e) => setRemark(e.target.value)}
//                     />
//                     <TextField
//                       variant="outlined"
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="schoolRegNumber"
//                       label="School Registeration/Admission Number"
//                       name="schoolRegNumber"
//                       autoComplete="schoolRegNumber"
//                       autoFocus
//                       placeholder={
//                         userDatas
//                           ? ` ${userDatas?.schoolRegNumber}`
//                           : "loading..."
//                       }
//                       style={{
//                         color: "black",
//                         fontSize: "x-large",
//                         fontWeight: "500",
//                       }}
//                       value={schoolRegNumber}
//                       onChange={(e) => setSchoolRegNumber(e.target.value)}
//                     />
//                     <FormControl sx={{ m: 1, width: 370 }}>
//                       <InputLabel id="demo-multiple-name-label">
//                         Class
//                       </InputLabel>
//                       <Select
//                         labelId="demo-multiple-name-label"
//                         id="demo-multiple-name"
//                         // multiple
//                         value={classes}
//                         onChange={(e) => setClasses(e.target.value)}
//                         // input={<OutlinedInput label="Name" />}
//                         MenuProps={MenuProps}
//                       >
//                         <MenuItem value="Nursery-1">Nursery 1</MenuItem>
//                       </Select>
//                     </FormControl>
//                     <FormControl sx={{ m: 1, width: 370 }}>
//                       <InputLabel id="demo-multiple-name-label">
//                         Term
//                       </InputLabel>
//                       <Select
//                         labelId="demo-multiple-name-label"
//                         id="demo-multiple-name"
//                         // multiple
//                         value={term}
//                         onChange={(e) => setTerm(e.target.value)}
//                         // input={<OutlinedInput label="Name" />}
//                         MenuProps={MenuProps}
//                       >
//                         <MenuItem value="1st-Term">1st Term</MenuItem>
//                         <MenuItem value="2nd-Term">2nd Term</MenuItem>
//                         <MenuItem value="3rd-Term">3rd Term</MenuItem>
//                       </Select>
//                     </FormControl>
//                     <FormControl sx={{ m: 1, width: 370 }}>
//                       <InputLabel id="demo-multiple-name-label">
//                         Year
//                       </InputLabel>
//                       <Select
//                         labelId="demo-multiple-name-label"
//                         id="demo-multiple-name"
//                         // multiple
//                         fullWidth
//                         value={year}
//                         onChange={(e) => setYear(e.target.value)}
//                         // input={<OutlinedInput label="Name" />}
//                         MenuProps={MenuProps}
//                       >
//                         <MenuItem value="2023">2023</MenuItem>
//                         <MenuItem value="2024">2024</MenuItem>
//                         <MenuItem value="2025">2025</MenuItem>
//                         <MenuItem value="2026">2026</MenuItem>
//                         <MenuItem value="2027">2027</MenuItem>
//                         <MenuItem value="2028">2028</MenuItem>
//                         <MenuItem value="2029">2029</MenuItem>
//                         <MenuItem value="2030">2030</MenuItem>
//                       </Select>
//                     </FormControl>
//                     {loading ? (
//                       <CircularIndeterminate />
//                     ) : (
//                       <div
//                         className="d-flex justify-content-center"

//                         // onClick={handleLoader}
//                       >
//                         <Button
//                           fullWidth
//                           variant="contained"
//                           onSubmit={handleLoader}
//                           type="submit"
//                         >
//                           Upload Result
//                         </Button>
//                         <ToastContainer />
//                       </div>
//                     )}
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </AdminLayout>
//   );
// };

// export default InputNursery1result;
