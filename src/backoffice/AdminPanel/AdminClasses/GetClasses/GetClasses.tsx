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
import { ToastContainer, toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "@mui/material/Button";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { createClassApi, deleteClassApi, UserApi } from "../../../../data/Api";
import AdminLayout from "../../AdminLayout";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
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

export default function GetClasses() {
  const navigate = useNavigate();
  const [viewData, setViewData] = React.useState([]);
  const [deleteItem, setDeleteItem] = React.useState([]);
  const [showUp, setShowUp] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(createClassApi);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setViewData(data);
    };

    fetchPosts();
  }, []);
  const handleShowUp = () => {
    setShowUp(true);
  };
  const handleCloseShowUp = () => setShowUp(false);
  const handleDelete = async (id: any) => {
    setLoading(true);
    await axios.delete(`${deleteClassApi}/${id}/`);

    setDeleteItem(deleteItem.filter((p: any, row: any) => p._id !== row._id));
    setLoading(false);
    navigate("/getClasses");
    window.location.reload();
  };
  return (
    <AdminLayout>
      <h3 className="text-center mb-4 mt-4">
        View All {viewData?.length} Classes
      </h3>
      <Container>
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
                <th>Class Name</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {viewData?.map((row: any, index) => (
                <tr key={index}>
                  <td>{row?.name}</td>

                  <td>
                    {" "}
                    <Link to={`/update-class/${row?._id}`}>
                      <Button className="btn-sm">
                        <FaEdit />{" "}
                      </Button>
                    </Link>{" "}
                    <Button className="btn-sm" onClick={() => handleShowUp()}>
                      <FaTrash color="red" />{" "}
                    </Button>
                  </td>
                  <Modal show={showUp} onHide={handleCloseShowUp} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Delete Class</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <h6 className="text-center">
                        Do you really want to delete?
                      </h6>
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
                            onClick={() => handleDelete(row?._id)}
                            type="submit"
                          >
                            <FaTrash color="red" /> Delete
                          </Button>
                          <ToastContainer />
                        </div>
                      )}
                    </Modal.Footer>
                  </Modal>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </AdminLayout>
  );
}
