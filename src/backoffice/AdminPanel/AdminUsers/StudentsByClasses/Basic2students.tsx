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

import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "@mui/material/Button";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { createClassApi, UserApi } from "../../../../data/Api";
import AdminLayout from "../../AdminLayout";
import { Link } from "react-router-dom";
import CircularIndeterminate from "../../../../components/Loading/Progress";
import Message from "../../../../components/MessageHandling/Message";

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

export default function Basic2students() {
  const [filteredData, setFilteredData] = React.useState([]);
  const [selectedClass, setSelectedClass] = React.useState("");
  const [loader, setLoader] = React.useState(false);

  const [viewData, setViewData] = React.useState([]);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(createClassApi);
      console.log(data);

      setViewData(data);
    };

    fetchPosts();
  }, []);
  const handleSelectChange = (e: any) => {
    setSelectedClass(e.target.value);
  };

  const [initialFetch, setInitialFetch] = React.useState(true);
  React.useEffect(() => {
    setLoader(true);
    setShowSuccess(true);
    setShowError(true);
    try {
      const fetchData = async () => {
        // Fetch data from your API
        const response = await fetch(UserApi);
        const data = await response.json();

        // Set the fetched data to the state
        setFilteredData(
          data
            .sort((a: any, b: any) => b.TotalAverage - a.TotalAverage)
            .filter(
              (item: any) =>
                item.currentClass === selectedClass ||
                item.currentClass === "Basic-2"
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
      if (initialFetch || selectedClass) {
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
    const storedClass = localStorage.getItem("selectedClass");

    if (storedClass) {
      setSelectedClass(storedClass);
    }
  }, []);

  React.useEffect(() => {
    // Save selectedYear and selectedTerm to storage
    localStorage.setItem("selectedClass", selectedClass);
  }, [selectedClass]);

  return (
    <AdminLayout>
      <div>
        {" "}
        <select value={selectedClass} onChange={handleSelectChange}>
          <option value="">Select Student Class</option>
          {viewData?.map((item: any, index: number) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}

          {/* Add more years as needed */}
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
      <h3 className="text-center mb-4 mt-4">
        View All {filteredData?.length} Pupils{" "}
      </h3>
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
              <th>Phone Number</th>
              <th>Contact Address</th>
              <th>Email</th>
              <th>Input Result</th>
              <th>Input Commulatives Result</th>
              <th>Update User Current Class</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((row: any, index) => (
              <tr key={index}>
                <td style={{ width: "5%", height: "5%" }}>
                  <img
                    src={row?.passportPhoto}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />{" "}
                </td>
                <td>{row?.firstName}</td>
                <td>{row?.lastName}</td>
                <td>{row?.currentClass}</td>
                <td>{row?.schoolRegNumber}</td>
                <td>{row?.phoneNumber}</td>
                <td>{row?.contactAdress}</td>
                <td>{row?.email}</td>
                <td>
                  {" "}
                  <Link to={`/post-basic2result/${row?._id}`}>
                    <Button className="btn-sm">
                      <BsFillBookmarkCheckFill />{" "}
                    </Button>
                  </Link>{" "}
                </td>
                <td>
                  {" "}
                  <Link to={`/post-basic2commulative/${row?._id}`}>
                    <Button className="btn-sm">
                      <BsFillBookmarkCheckFill />{" "}
                    </Button>
                  </Link>{" "}
                </td>
                <td>
                  {" "}
                  <Link to={`/updateusserclassby-admin/${row?._id}`}>
                    <Button className="btn-sm">
                      <FaEdit />{" "}
                    </Button>
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
}
