import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "react-bootstrap/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FaEdit, FaLock, FaTrash } from "react-icons/fa";
import Button from "@mui/material/Button";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import {
  Basic1resultApi,
  Basic3resultApi,
  Basic4resultApi,
  Basic5resultApi,
  DeActivateBasic1resultApi,
  DeActivateBasic3resultApi,
  DeActivateBasic4resultApi,
  DeActivateBasic5resultApi,
  DeActivateNursery2CommulativeApi,
  Nursery2CommulativeApi,
  UpdatePosiionBasic1resultApi,
  UpdatePosiionBasic3resultApi,
  UpdatePosiionBasic4resultApi,
  UpdatePosiionBasic5resultApi,
  UpdatePosiionBasic6resultApi,
  UpdatePosiionNursery2CommulativeApi,
} from "../../../../data/Api";
import AdminLayout from "../../AdminLayout";
import CircularIndeterminate from "../../../../components/Loading/Progress";

import { Link } from "react-router-dom";
import Message from "../../../../components/MessageHandling/Message";
interface Data {
  // Define your data structure here
  // Example: { id: number, name: string, year: number, term: string }
}

interface Filter {
  year: number | null;
  term: string | null;
}

const Nursery2ViewCommulative: React.FC = () => {
  const [selectedYear, setSelectedYear] = React.useState("");
  const [selectedTerm, setSelectedTerm] = React.useState("");
  const [filteredresultData, setFilteredResultData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [message, setMessage] = React.useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  // State to store the API response
  const [apiData, setApiData] = React.useState<any>([]);

  // Function to handle the select input change
  const handleSelectChange = (e: any) => {
    setSelectedYear(e.target.value);
  };
  const handleSelectTermChange = (e: any) => {
    setSelectedTerm(e.target.value);
  };

  const [initialFetch, setInitialFetch] = React.useState(true);

  // Fetch data from API
  React.useEffect(() => {
    setLoader(true);
    setShowSuccess(true);
    setShowError(true);
    try {
      const fetchData = async () => {
        // Fetch data from your API
        const response = await fetch(Nursery2CommulativeApi);
        const data = await response.json();

        // Set the fetched data to the state
        setApiData(
          data
            .sort((a: any, b: any) => b.TotalAverage - a.TotalAverage)
            .filter(
              (item: any) =>
                item.year === selectedYear && item.term === selectedTerm
            )
        );
        setLoader(false);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);

        // After the initial fetch, setInitialFetch to false
        setInitialFetch(false);
      };

      // Fetch data only if it's the initial fetch or when the year and term are selected
      if (initialFetch || (selectedYear && selectedTerm)) {
        fetchData();
      }
    } catch (error) {
      setLoader(false);
      // navigate("/Basic2-result");
      setTimeout(() => {
        setShowError(false);
      }, 3000);

      console.error("Error fetching data:", error);
    }
  }, [initialFetch]);
  React.useEffect(() => {
    // Retrieve selectedYear and selectedTerm from storage
    const storedYear = localStorage.getItem("selectedYear");
    const storedTerm = localStorage.getItem("selectedTerm");

    if (storedYear) {
      setSelectedYear(storedYear);
    }

    if (storedTerm) {
      setSelectedTerm(storedTerm);
    }
  }, []);

  React.useEffect(() => {
    // Save selectedYear and selectedTerm to storage
    localStorage.setItem("selectedYear", selectedYear);
    localStorage.setItem("selectedTerm", selectedTerm);
  }, [selectedYear, selectedTerm]);
  const [show, setShow] = React.useState(false);

  const [Position, setPosition] = React.useState("");

  const handleClose = () => setShow(false);
  const [userId, setUseId] = React.useState(null);

  const handleShow = (_id: any) => {
    setShow(true);
    setUseId(_id);
  };
  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: any = {
      //   user: user,
      Position: Position,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .put(UpdatePosiionNursery2CommulativeApi + userId, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          //   setUser("");

          setPosition(" ");

          console.log(res.data);
          toast.success("post sucessful");
          // navigate("/pre-nurseryResult");
          handleClose();
          window.location.reload();
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
  /////to lock result edit
  const [showUp, setShowUp] = React.useState(false);
  const [deActivateResultEdith, setDeActivateResultEdith] =
    React.useState(true);
  const [term, setTerm] = React.useState("");
  const [year, setYear] = React.useState("");

  const [classes, setClasses] = React.useState("Basic-1");
  const handleShowUp = () => {
    setShowUp(true);
  };
  const handleCloseShowUp = () => setShowUp(false);
  const lockResultHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: any = {
      //   user: user,
      term: term,
      classes: classes,
      year: year,
      deActivateResultEdith: deActivateResultEdith,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .put(DeActivateNursery2CommulativeApi, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          //   setUser("");

          setDeActivateResultEdith(true);
          setYear("");
          setTerm("");
          setClasses("");
          console.log(res.data);
          toast.success("post sucessful");
          // navigate("/pre-nurseryResult");
          handleClose();
          window.location.reload();
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
    <>
      <AdminLayout>
        <div>
          {" "}
          <select value={selectedYear} onChange={handleSelectChange}>
            <option value="">Select Result Year</option>

            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            {/* Add more years as needed */}
          </select>
          <select value={selectedTerm} onChange={handleSelectTermChange}>
            <option value="">Select Result Term</option>

            <option value="3rd-Term">3rd Term</option>

            {/* Add more terms as needed */}
          </select>
          <>
            <button
              style={{
                border: "1px solid red",
                width: "150px",
                height: "50px",
                borderRadius: "6px",
                marginLeft: "5px",
              }}
              onClick={() => setInitialFetch(true)}
            >
              Fetch Result
            </button>
            {loader && <CircularIndeterminate />}
            <Message type="success" message="Success! Result Found" />
            <Message type="error" message="Error! No Result" />
          </>
        </div>
        <div
          style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px" }}
        >
          <Table responsive striped bordered>
            <thead
              style={{
                backgroundColor: "#e53238",
                color: "white",
                fontSize: "medium",
                fontWeight: "500",
              }}
            >
              <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Class</th>
                <th>School Reg No</th>
                <th>Term</th>
                <th>Year</th>
                <th>Total Score</th>
                <th>Total Average</th>
                <th>Total Grade</th>
                <th>Position</th>
                <th>Number In Class</th>
                <th>Form Teacher Remark</th>
                <th>Head Teacher</th>
                <th>Assign Position</th>
                <th>View Result Details</th>

                <th>Update/Edit Result Subjects</th>
                <th>Update/Edit Result Field</th>
                <th>Lock Edit Result</th>
              </tr>
            </thead>

            {/* Display fetched data */}
            <tbody>
              {apiData?.map((item: any, index: any) => (
                <>
                  <tr>
                    <td style={{ width: "5%", height: "5%" }} key={index}>
                      {item?.length < 0 ? (
                        <></>
                      ) : (
                        <>
                          <img
                            src={item?.user?.passportPhoto}
                            alt="img"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />{" "}
                        </>
                      )}
                    </td>
                    <td>{item?.user?.firstName}</td>
                    <td>{item?.user?.lastName}</td>
                    <td>{item?.classes}</td>
                    <td>{item?.schoolRegNumber}</td>
                    <td>{item?.term}</td>
                    <td>{item?.year}</td>
                    <td>{item?.TotalScore}</td>
                    <td>{item?.TotalAverage}</td>
                    <td>{item?.TotalGrade}</td>

                    <td>{item?.Position}</td>
                    <td>{item?.numberInClass} </td>
                    <td>{item?.Remark}</td>
                    <td>{item?.HmRemark}</td>
                    <td>
                      {" "}
                      <Button
                        className="btn-sm"
                        onClick={() => handleShow(item?._id)}
                      >
                        <FaEdit />{" "}
                      </Button>
                    </td>
                    {/* modal */}
                    <Modal show={show} onHide={handleClose} centered>
                      <Modal.Header closeButton>
                        <Modal.Title>Student Position</Modal.Title>
                      </Modal.Header>
                      <form onSubmit={submitHandler}>
                        <Modal.Body>
                          <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="Position"
                            label="Position"
                            name="Position"
                            autoComplete="Position"
                            autoFocus
                            value={Position}
                            onChange={(e) => setPosition(e.target.value)}
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={handleClose}>Close</Button>
                          {loading ? (
                            <CircularIndeterminate />
                          ) : (
                            <div
                              className="d-flex justify-content-center"

                              // onClick={handleLoader}
                            >
                              <Button
                                fullWidth
                                onSubmit={handleLoader}
                                type="submit"
                              >
                                Assign Position
                              </Button>
                              <ToastContainer />
                            </div>
                          )}
                        </Modal.Footer>
                      </form>
                    </Modal>
                    {/* modal */}
                    <td>
                      {" "}
                      <Link
                        to={`/view-nursery2-student-commulative/${item?._id}`}
                      >
                        <Button className="btn-sm">
                          <BsFillBookmarkCheckFill />{" "}
                        </Button>
                      </Link>{" "}
                    </td>

                    <td
                      style={{
                        textAlign: "center",
                        color: "red",
                        fontSize: "small",
                      }}
                    >
                      {item?.deActivateResultEdith === true ? (
                        <> Result Editing is locked by admin</>
                      ) : (
                        <>
                          <Link
                            to={`/view-basic1-student-result-update/${item?._id}`}
                          >
                            <Button className="btn-sm">
                              <FaEdit />
                            </Button>
                          </Link>
                        </>
                      )}{" "}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        color: "red",
                        fontSize: "small",
                      }}
                    >
                      {item?.deActivateResultEdith === true ? (
                        <> Result Editing is locked by admin</>
                      ) : (
                        <>
                          <Link
                            to={`/view-basic1-student-result-update-field/${item?._id}`}
                          >
                            <Button className="btn-sm">
                              <FaEdit />
                            </Button>
                          </Link>
                        </>
                      )}{" "}
                    </td>
                    <td>
                      <Button className="btn-sm" onClick={() => handleShowUp()}>
                        <FaLock />
                      </Button>
                    </td>

                    {/* modal */}
                    <Modal show={showUp} onHide={handleCloseShowUp} centered>
                      <Modal.Header closeButton>
                        <Modal.Title>Lock Editing of result</Modal.Title>
                      </Modal.Header>
                      <form onSubmit={lockResultHandler}>
                        <Modal.Body>
                          <select
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                          >
                            <option value="">Select Result Year</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            {/* Add more years as needed */}
                          </select>
                          <select
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                          >
                            <option value="">Select Result Term</option>
                            <option value="1st-Term">1st Term</option>
                            <option value="2nd-Term">2nd Term</option>
                            <option value="3rd-Term">3rd Term</option>

                            {/* Add more terms as needed */}
                          </select>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={handleCloseShowUp}>Close</Button>
                          {loading ? (
                            <CircularIndeterminate />
                          ) : (
                            <div
                              className="d-flex justify-content-center"

                              // onClick={handleLoader}
                            >
                              <Button
                                fullWidth
                                onSubmit={handleLoader}
                                type="submit"
                              >
                                Lock Result
                              </Button>
                              <ToastContainer />
                            </div>
                          )}
                        </Modal.Footer>
                      </form>
                    </Modal>
                    {/* modal */}
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </div>
      </AdminLayout>
    </>
  );
};

export default Nursery2ViewCommulative;
