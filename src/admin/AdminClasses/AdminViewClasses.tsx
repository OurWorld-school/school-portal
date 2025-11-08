import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminDashboard/AdminLayout";
import Table from "react-bootstrap/Table";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularIndeterminate from "../../components/Loading/Progress";
import { ClassApi } from "../../APiData/Api";
import { schoolInfo } from "../../store/Info";

const AdminViewClasses = () => {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showUp, setShowUp] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);

  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(ClassApi)
        .then((response) => {
          const filtered = response.data.filter(
            (item: any) => item?.schoolName?._id === schoolInfo
          );
          setUsersData(filtered);
        })
        .catch((error) => console.error("Error fetching classes:", error));
    }
  }, [schoolInfo]);

  const handleShowUp = (classId: string) => {
    setSelectedClassId(classId);
    setShowUp(true);
  };

  const handleCloseShowUp = () => {
    setShowUp(false);
    setSelectedClassId(null);
  };

  const handleDelete = async () => {
    if (!selectedClassId) return;

    try {
      setLoading(true);
      await axios.delete(`${ClassApi}/${selectedClassId}/${schoolInfo}`);
      toast.success("Class deleted successfully!");
      setShowUp(false);

      // update UI without reload
      setUsersData((prev) => prev.filter((c) => c._id !== selectedClassId));

      setSelectedClassId(null);
      setLoading(false);
    } catch (error) {
      console.error("Error deleting class:", error);
      toast.error("Failed to delete class.");
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div style={{ margin: "30px auto" }}>
        <Table responsive striped bordered>
          <thead
            style={{
              backgroundColor: "rgb(229, 50, 56)",
              color: "white",
              fontWeight: "500",
            }}
          >
            <tr>
              <th>School Name</th>
              <th>Class Name</th>
              <th>Update/Edit Class</th>
              <th>Delete Class</th>
            </tr>
          </thead>
          <tbody>
            {usersData
              ?.sort((a, b) => a?.name.localeCompare(b?.name))
              ?.map((row) => (
                <tr key={row._id}>
                  <td>{row.schoolName?.name?.replace(/_/g, " ")}</td>
                  <td>{row.name?.replace(/_/g, " ")}</td>
                  <td>
                    <Link to={`/update-class/${row._id}`}>
                      <Button className="btn-sm">
                        <FaEdit color="blue" />
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      className="btn-sm"
                      onClick={() => handleShowUp(row._id)}
                    >
                      <FaTrash color="red" />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        {/* ✅ Single Modal outside the map */}
        <Modal show={showUp} onHide={handleCloseShowUp} centered>
          <Modal.Header closeButton>
            <Modal.Title>Delete Class</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6 className="text-center">Do you really want to delete?</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleCloseShowUp}
              variant="secondary"
              className="btn-sm"
              style={{ color: "blue" }}
            >
              Close
            </Button>
            {loading ? (
              <CircularIndeterminate />
            ) : (
              <Button
                variant="danger"
                onClick={handleDelete}
                style={{ color: "red" }}
              >
                <FaTrash color="red" /> Delete
              </Button>
            )}
          </Modal.Footer>
        </Modal>

        <ToastContainer />
      </div>
    </AdminLayout>
  );
};

export default AdminViewClasses;
