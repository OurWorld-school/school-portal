import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminLayout from "../AdminLayout";
import axios from "axios";
import { UserApi } from "../../../data/Api";
import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "@mui/material/Button";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

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

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function AdminUsers() {
  const [viewUser, setViewUser] = React.useState<string[]>([]);
  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(UserApi);
      console.log(data);
      const sortedData = data;
      // const foundData = data.find((item) => item.artist === artist);
      setViewUser(sortedData);
    };

    fetchPosts();
  }, []);
  return (
    <AdminLayout>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
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
            {viewUser?.map((row: any) => (
              <StyledTableRow key={row.name}>
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
                  {row?.currentClass}
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
                  <Button className="btn-sm">
                    <BsFillBookmarkCheckFill />{" "}
                  </Button>
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
