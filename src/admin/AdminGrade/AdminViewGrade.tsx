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
import { GradeApi } from "../../APiData/Api";
import { schoolInfo } from "../../store/Info";

const AdminViewGrades = () => {
  const navigate = useNavigate();
  const [grades, setGrades] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedGradeId, setSelectedGradeId] = useState<string | null>(null);

  // 🧠 Fetch grades for this school
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(GradeApi)
        .then((response) => {
          const filtered = response.data.filter(
            (item: any) => item?.schoolName?._id === schoolInfo
          );
          setGrades(filtered);
        })
        .catch((error) => console.error("Error fetching grades:", error));
    }
  }, [schoolInfo]);

  // 🗑️ Handle delete click — show modal
  const handleShowDeleteModal = (gradeId: string) => {
    setSelectedGradeId(gradeId);
    setShowDeleteModal(true);
  };

  // ❌ Close modal
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedGradeId(null);
  };

  // ✅ Confirm delete
  const handleDelete = async () => {
    if (!selectedGradeId) return;

    try {
      setLoading(true);
      await axios.delete(`${GradeApi}/${selectedGradeId}/${schoolInfo}`);
      toast.success("Grade deleted successfully!");
      setShowDeleteModal(false);

      // update UI instantly
      setGrades((prev) => prev.filter((g) => g._id !== selectedGradeId));

      setSelectedGradeId(null);
      setLoading(false);
    } catch (error) {
      console.error("Error deleting grade:", error);
      toast.error("Failed to delete grade.");
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div style={{ margin: "30px auto" }}>
        <h4 className="text-center mb-4">All Grades</h4>

        <Table responsive striped bordered hover>
          <thead
            style={{
              backgroundColor: "rgb(229, 50, 56)",
              color: "white",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            <tr>
              <th>School Name</th>
              <th>Grade Name</th>
              <th>Grade Range</th>
              <th>Grade Remark</th>
              <th>Update/Edit Grade</th>
              <th>Delete Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-muted">
                  No grades found for this school.
                </td>
              </tr>
            ) : (
              grades
                ?.sort((a, b) => a.gradeName.localeCompare(b.gradeName))
                ?.map((row) => (
                  <tr key={row._id}>
                    <td>{row?.schoolName?.name?.replace(/_/g, " ")}</td>
                    <td>{row?.gradeName}</td>
                    <td>{row?.gradeRange}</td>
                    <td>{row?.gradeRemark}</td>
                    <td className="text-center">
                      <Button
                        className="btn-sm"
                        variant="outline-primary"
                        onClick={() => navigate(`/update-grade/${row._id}`)}
                      >
                        <FaEdit />
                      </Button>
                    </td>
                    <td className="text-center">
                      <Button
                        className="btn-sm"
                        variant="outline-danger"
                        onClick={() => handleShowDeleteModal(row._id)}
                      >
                        <FaTrash color="red" />
                      </Button>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </Table>

        {/* 🧾 Delete Confirmation Modal */}
        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Delete Grade</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6 className="text-center">
              Are you sure you want to delete this grade?
            </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn-sm"
              onClick={handleCloseDeleteModal}
            >
              Cancel
            </Button>
            {loading ? (
              <CircularIndeterminate />
            ) : (
              <Button
                variant="danger"
                className="btn-sm"
                onClick={handleDelete}
              >
                <FaTrash color="white" /> Delete
              </Button>
            )}
          </Modal.Footer>
        </Modal>

        <ToastContainer />
      </div>
    </AdminLayout>
  );
};

export default AdminViewGrades;
