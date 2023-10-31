import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
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

export default function Nursery1students() {
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
      (item: any) => item.currentClass === "Nursery-1"
    );
    setFilteredData(filtered);
    console.log(filtered);
  }, [viewUser]);

  return (
    <AdminLayout>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead style={{ backgroundColor: "green" }}>
            <TableRow sx={{ bgcolor: "green" }}>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Class</StyledTableCell>
              <StyledTableCell align="right">School Reg No</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Contact Address</StyledTableCell>
              {/* <StyledTableCell align="right">Edith Profile</StyledTableCell> */}
              <StyledTableCell align="right">Input Result</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData?.map((row: any, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{ width: "5%", height: "5%" }}
                >
                  <img
                    src={row?.passportPhoto}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row?.firstName}
                </StyledTableCell>
                <StyledTableCell align="right">{row?.lastName}</StyledTableCell>
                <StyledTableCell align="right">
                  <span>{row?.currentClass.replace(/-/g, " ")}</span>
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row?.schoolRegNumber}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row?.phoneNumber}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row?.contactAdress}
                </StyledTableCell>
                <StyledTableCell>
                  <Link to={`/post-nursery1-result/${row?._id}`}>
                    <Button className="btn-sm">
                      <BsFillBookmarkCheckFill />{" "}
                    </Button>
                  </Link>
                </StyledTableCell>
                <StyledTableCell>
                  <Button className="btn-sm">
                    <FaEdit />
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    //   variant="danger"
                    className="btn-sm"
                  >
                    <FaTrash />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
}
