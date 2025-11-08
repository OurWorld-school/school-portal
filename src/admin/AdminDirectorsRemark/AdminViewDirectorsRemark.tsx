import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminDashboard/AdminLayout";
import Table from "react-bootstrap/Table";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularIndeterminate from "../../components/Loading/Progress";
import { DirectorsRemarkApi } from "../../APiData/Api";
import { schoolInfo } from "../../store/Info";

const AdminViewDirectorsRemark = () => {
  const [remarks, setRemarks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedRemarkId, setSelectedRemarkId] = useState<string | null>(null);

  // ✅ Fetch all Director's Remarks for current school
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(DirectorsRemarkApi)
        .then((response) => {
          const filtered = response.data.filter(
            (item: any) => item?.schoolName?._id === schoolInfo
          );
          setRemarks(filtered);
        })
        .catch((error) =>
          console.error("Error fetching director's remarks:", error)
        );
    }
  }, [schoolInfo]);

  // ✅ Open Delete Modal
  const handleShowDelete = (remarkId: string) => {
    setSelectedRemarkId(remarkId);
    setShowDelete(true);
  };

  // ✅ Close Delete Modal
  const handleCloseDelete = () => {
    setShowDelete(false);
    setSelectedRemarkId(null);
  };

  // ✅ Delete Remark
  const handleDelete = async () => {
    if (!selectedRemarkId) return;
    try {
      setLoading(true);
      await axios.delete(
        `${DirectorsRemarkApi}/${selectedRemarkId}/${schoolInfo}`
      );
      toast.success("Director's Remark deleted successfully!");
      setRemarks((prev) => prev.filter((r) => r._id !== selectedRemarkId));
      setShowDelete(false);
      setLoading(false);
    } catch (error) {
      console.error("Error deleting remark:", error);
      toast.error("Failed to delete director's remark.");
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
              <th>Grade Name</th>
              <th>Grade Range</th>
              <th>Director’s Remark</th>
              <th>Edit Remark</th>
              <th>Delete Remark</th>
            </tr>
          </thead>
          <tbody>
            {remarks
              ?.sort((a, b) => a.gradeName.localeCompare(b.gradeName))
              ?.map((row) => (
                <tr key={row._id}>
                  <td>{row.schoolName?.name?.replace(/_/g, " ")}</td>
                  <td>{row.gradeName}</td>
                  <td>{row.gradeRange}</td>
                  <td>{row.gradeRemark}</td>
                  <td>
                    <Link to={`/update-directors-remark/${row._id}`}>
                      <Button className="btn-sm">
                        <FaEdit color="blue" />
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      className="btn-sm"
                      onClick={() => handleShowDelete(row._id)}
                    >
                      <FaTrash color="red" />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        {/* ✅ Delete Confirmation Modal */}
        <Modal show={showDelete} onHide={handleCloseDelete} centered>
          <Modal.Header closeButton>
            <Modal.Title>Delete Director’s Remark</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6 className="text-center">
              Are you sure you want to delete this remark?
            </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn-sm"
              style={{ color: "blue" }}
              onClick={handleCloseDelete}
            >
              Cancel
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

export default AdminViewDirectorsRemark;
