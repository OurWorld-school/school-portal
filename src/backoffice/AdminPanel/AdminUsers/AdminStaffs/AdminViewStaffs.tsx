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

import { FaCheckSquare, FaEdit, FaTrash } from "react-icons/fa";
import Button from "@mui/material/Button";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserApi } from "../../../../data/Api";
import AdminLayout from "../../AdminLayout";

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

export default function AdminViewStaffs() {
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
    const filtered = viewUser.filter((item: any) => item.userType === "staff");
    setFilteredData(filtered);
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
              <th>User Type</th>
              <th>User Role</th>
              <th>Phone Number</th>
              <th>Contact Address</th>
              <th>Email</th>
              <th>Assign Role</th>
              <th>Assign Admin</th>
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
                <td>{row?.userType}</td>
                <td>{row?.roles}</td>
                <td>{row?.phoneNumber}</td>
                <td>{row?.contactAdress}</td>
                <td>{row?.email}</td>
                <td>
                  {" "}
                  <Link to={`/post-nursery2result/${row?._id}`}>
                    <Button className="btn-sm">
                      <FaEdit />{" "}
                    </Button>
                  </Link>{" "}
                </td>
                <td>
                  {" "}
                  <Link to={`/updateusserclassby-admin/${row?._id}`}>
                    <Button className="btn-sm">
                      <FaCheckSquare />{" "}
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
