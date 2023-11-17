import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "react-bootstrap/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { TextField } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "@mui/material/Button";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

import { Link } from "react-router-dom";

import AdminLayout from "../../AdminLayout";
import {
  Basic1resultApi,
  Basic2resultApi,
  Basic3resultApi,
  Nursery2resultApi,
  Nursery3resultApi,
  UpdatePosiionBasic3resultApi,
} from "../../../../data/Api";
import CircularIndeterminate from "../../../../components/Loading/Progress";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export default function AdminBasic3Result() {
  const [viewResult, setViewResult] = React.useState([]);
  const [viewResult2, setViewResult2] = React.useState([]);
  const [viewResult3, setViewResult3] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [filteredData2, setFilteredData2] = React.useState([]);
  const [filteredData3, setFilteredData3] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        Basic3resultApi
        //     {
        //     params: {
        //       currentClass: "Basic-1",
        //     },
        //   }
      );
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setViewResult(data);
    };

    fetchPosts();
  }, []);
  React.useEffect(() => {
    // Filter the data based on genre "afrobeat"
    const filtered = viewResult.filter((item: any) => item.term === "1st-Term");
    setFilteredData(filtered);
    console.log(filtered);
  }, [viewResult]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        Basic3resultApi
        //     {
        //     params: {
        //       currentClass: "Basic-1",
        //     },
        //   }
      );
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setViewResult2(data);
    };

    fetchPosts();
  }, []);
  React.useEffect(() => {
    // Filter the data based on genre "afrobeat"
    const filtered2 = viewResult.filter(
      (item: any) => item.term === "2nd-Term"
    );
    setFilteredData2(filtered2);
    console.log(filtered2);
  }, [viewResult2]);
  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        Basic3resultApi
        //     {
        //     params: {
        //       currentClass: "Basic-1",
        //     },
        //   }
      );
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setViewResult3(data);
    };

    fetchPosts();
  }, []);
  React.useEffect(() => {
    // Filter the data based on genre "afrobeat"
    const filtered3 = viewResult.filter(
      (item: any) => item.term === "3rd-Term"
    );
    setFilteredData3(filtered3);
    console.log(filtered3);
  }, [viewResult3]);
  const [show, setShow] = React.useState(false);

  const [Position, setPosition] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      .put(
        UpdatePosiionBasic3resultApi + viewResult.map((item: any) => item._id),
        data,
        headers
      )

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
  return (
    <AdminLayout>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
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
              <th>Update Result</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((row: any, index) => (
              <tr key={index}>
                <td style={{ width: "5%", height: "5%" }}>
                  <img
                    src={row?.user?.passportPhoto}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />{" "}
                </td>
                <td>{row?.user?.firstName}</td>
                <td>{row?.user?.lastName}</td>
                <td>{row?.classes}</td>
                <td>{row?.schoolRegNumber}</td>
                <td>{row?.term}</td>
                <td>{row?.year}</td>
                <td>{row?.TotalScore}</td>
                <td>{row?.TotalAverage}</td>
                <td>{row?.TotalGrade}</td>

                <td>{row?.Position}</td>
                <td>{row?.numberInClass} </td>
                <td>{row?.Remark}</td>
                <td>{row?.HmRemark}</td>
                <td>
                  {" "}
                  <Button className="btn-sm" onClick={handleShow}>
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
                  <Link to={`/view-basic3-student-result/${row?._id}`}>
                    <Button className="btn-sm">
                      <BsFillBookmarkCheckFill />{" "}
                    </Button>
                  </Link>{" "}
                </td>
                <td>
                  {" "}
                  <Link to={`/view-basic3-student-result-update/${row?._id}`}>
                    <Button className="btn-sm">
                      <FaEdit />
                    </Button>
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="mt-5">
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
                <th>Update Result</th>
              </tr>
            </thead>
            <tbody>
              {filteredData2?.map((row: any, index) => (
                <tr key={index}>
                  <td style={{ width: "5%", height: "5%" }}>
                    <img
                      src={row?.user?.passportPhoto}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </td>
                  <td>{row?.user?.firstName}</td>
                  <td>{row?.user?.lastName}</td>
                  <td>{row?.classes}</td>
                  <td>{row?.schoolRegNumber}</td>
                  <td>{row?.term}</td>
                  <td>{row?.year}</td>
                  <td>{row?.TotalScore}</td>
                  <td>{row?.TotalAverage}</td>
                  <td>{row?.TotalGrade}</td>

                  <td>{row?.Position}</td>
                  <td>{row?.numberInClass} </td>
                  <td>{row?.Remark}</td>
                  <td>{row?.HmRemark}</td>
                  <td>
                    {" "}
                    <Button className="btn-sm" onClick={handleShow}>
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
                    <Link to={`/view-basic3-student-result/${row?._id}`}>
                      <Button className="btn-sm">
                        <BsFillBookmarkCheckFill />{" "}
                      </Button>
                    </Link>{" "}
                  </td>
                  <td>
                    {" "}
                    <Link to={`/view-basic3-student-result-update/${row?._id}`}>
                      <Button className="btn-sm">
                        <FaEdit />
                      </Button>
                    </Link>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="mt-5">
          {" "}
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
                <th>Assign Poition</th>
                <th>View Result Details</th>
                <th>Update Result</th>
              </tr>
            </thead>
            <tbody>
              {filteredData3?.map((row: any, index) => (
                <tr key={index}>
                  <td style={{ width: "5%", height: "5%" }}>
                    <img
                      src={row?.user?.passportPhoto}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />{" "}
                  </td>
                  <td>{row?.user?.firstName}</td>
                  <td>{row?.user?.lastName}</td>
                  <td>{row?.classes}</td>
                  <td>{row?.schoolRegNumber}</td>
                  <td>{row?.term}</td>
                  <td>{row?.year}</td>
                  <td>{row?.TotalScore}</td>
                  <td>{row?.TotalAverage}</td>
                  <td>{row?.TotalGrade}</td>

                  <td>{row?.Position}</td>
                  <td>{row?.numberInClass} </td>
                  <td>{row?.Remark}</td>
                  <td>{row?.HmRemark}</td>
                  <td>
                    {" "}
                    <Button className="btn-sm" onClick={handleShow}>
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
                    <Link to={`/view-basic3-student-result/${row?._id}`}>
                      <Button className="btn-sm">
                        <BsFillBookmarkCheckFill />{" "}
                      </Button>
                    </Link>{" "}
                  </td>
                  <td>
                    {" "}
                    <Link to={`/view-basic3-student-result-update/${row?._id}`}>
                      <Button className="btn-sm">
                        <FaEdit />
                      </Button>
                    </Link>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
