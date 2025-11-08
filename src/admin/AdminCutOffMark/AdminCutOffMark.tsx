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
import { CutOffMarkApi } from "../../APiData/Api";
import { schoolInfo } from "../../store/Info";

const AdminCutOffMark = () => {
  const navigate = useNavigate();
  const [cutOffMarks, setCutOffMarks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMarkId, setSelectedMarkId] = useState<string | null>(null);

  // ✅ Fetch cutoff marks by school
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(CutOffMarkApi)
        .then((response) => {
          const filtered = response.data.filter(
            (item: any) => item?.schoolName?._id === schoolInfo
          );
          setCutOffMarks(filtered);
        })
        .catch((error) => console.error("Error fetching cutoff marks:", error));
    }
  }, [schoolInfo]);

  // ✅ Handle delete modal open/close
  const handleShowDeleteModal = (markId: string) => {
    setSelectedMarkId(markId);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedMarkId(null);
  };

  // ✅ Handle delete
  const handleDelete = async () => {
    if (!selectedMarkId) return;
    try {
      setLoading(true);
      await axios.delete(`${CutOffMarkApi}/${selectedMarkId}/${schoolInfo}`);
      toast.success("Cut-off mark deleted successfully!");

      // Update table UI
      setCutOffMarks((prev) =>
        prev.filter((item) => item._id !== selectedMarkId)
      );

      setShowDeleteModal(false);
      setSelectedMarkId(null);
    } catch (error) {
      console.error("Error deleting cut-off mark:", error);
      toast.error("Failed to delete cut-off mark.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div style={{ margin: "30px auto" }}>
        <h4 className="mb-3 fw-bold text-center">All Cut-Off Marks</h4>
        <Table responsive striped bordered hover>
          <thead
            style={{
              backgroundColor: "rgb(229, 50, 56)",
              color: "white",
              fontSize: "medium",
              fontWeight: "500",
            }}
          >
            <tr>
              <th>School Name</th>
              <th>Class Name</th>
              <th>Cut-Off Mark</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cutOffMarks.length > 0 ? (
              cutOffMarks
                .sort((a, b) => a?.name.localeCompare(b?.name))
                .map((row) => (
                  <tr key={row._id}>
                    <td>{row?.schoolName?.name?.replace(/_/g, " ")}</td>
                    <td>{row?.name}</td>
                    <td>{row?.cutOffMark}</td>
                    <td>
                      <Button
                        className="btn-sm"
                        onClick={() =>
                          navigate(`/update-cutoffmark/${row._id}`)
                        }
                      >
                        <FaEdit color="blue" />
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="btn-sm"
                        onClick={() => handleShowDeleteModal(row._id)}
                      >
                        <FaTrash color="red" />
                      </Button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center text-muted">
                  No cut-off marks available.
                </td>
              </tr>
            )}
          </tbody>
        </Table>

        {/* ✅ Delete Confirmation Modal */}
        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Delete Cut-Off Mark</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6 className="text-center">Do you really want to delete this?</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleCloseDeleteModal}
              variant="secondary"
              className="btn-sm"
              style={{ color: "blue" }}
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
                style={{ color: "red" }}
              >
                <FaTrash /> Delete
              </Button>
            )}
          </Modal.Footer>
        </Modal>

        <ToastContainer />
      </div>
    </AdminLayout>
  );
};

export default AdminCutOffMark;
