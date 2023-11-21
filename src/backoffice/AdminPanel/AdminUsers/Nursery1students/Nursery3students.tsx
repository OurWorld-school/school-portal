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
import { UserApi } from "../../../../data/Api";
import AdminLayout from "../../AdminLayout";
import { Link } from "react-router-dom";

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

export default function Nursery3students() {
  const [viewUser, setViewUser] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        UserApi
        //     {
        //     params: {
        //       currentClass: "Basic-1",
        //     },
        //   }
      );
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setViewUser(data);
    };

    fetchPosts();
  }, []);
  React.useEffect(() => {
    // Filter the data based on genre "afrobeat"
    const filtered = viewUser.filter(
      (item: any) => item.currentClass === "Nursery-3"
    );
    setFilteredData(
      filtered.sort((a: any, b: any) => a.firstName.localeCompare(b.firstName))
    );
    console.log(filtered);
  }, [viewUser]);

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
              <th>Phone Number</th>
              <th>Contact Address</th>
              <th>Email</th>
              <th>Input Result</th>
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
                  <Link to={`/post-nursery3result/${row?._id}`}>
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
