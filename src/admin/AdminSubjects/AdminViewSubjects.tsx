import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminDashboard/AdminLayout";
import Table from "react-bootstrap/Table";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CircularIndeterminate from "../../components/Loading/Progress";
import {
  ClassApi,
  DeleteSubjectsApi,
  StaffsApi,
  SubjectsApi,
  getAllSchools,
} from "../../APiData/Api";
import { schoolInfo } from "../../store/Info";

const AdminViewSubjects = () => {
  const navigate = useNavigate();

  const [selectedSchool, setSelectedSchool] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [subjects, setSubjects] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [schools, setSchools] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(
    null
  );

  // ✅ Fetch all schools belonging to logged-in schoolInfo
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(getAllSchools)
        .then((res) =>
          setSchools(res.data.filter((s: any) => s._id === schoolInfo))
        )
        .catch((err) => console.error("Error fetching schools:", err));
    }
  }, [schoolInfo]);

  // ✅ Fetch classes for school
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(ClassApi)
        .then((res) =>
          setClasses(
            res.data.filter((c: any) => c.schoolName?._id === schoolInfo)
          )
        )
        .catch((err) => console.error("Error fetching classes:", err));
    }
  }, [schoolInfo]);

  // ✅ Fetch subjects based on selected school and class
  const fetchSubjects = async () => {
    if (!selectedSchool || !selectedClass) {
      toast.warning("Please select both school and class.");
      return;
    }
    setFetching(true);
    try {
      const res = await axios.get(SubjectsApi);
      const filtered = res.data.filter(
        (item: any) =>
          item?.schoolName?._id === selectedSchool &&
          item?.classes?._id === selectedClass
      );
      setSubjects(filtered);
    } catch (err) {
      console.error("Error fetching subjects:", err);
      toast.error("Failed to fetch subjects.");
    } finally {
      setFetching(false);
    }
  };

  // ✅ Delete subject logic
  const handleDelete = async () => {
    if (!selectedSubjectId) return;

    try {
      setLoading(true);
      await axios.delete(`${DeleteSubjectsApi}${selectedSubjectId}`);
      setSubjects((prev) => prev.filter((s) => s._id !== selectedSubjectId));
      toast.success("Subject deleted successfully!");
      setShowDeleteModal(false);
      setSelectedSubjectId(null);
    } catch (err) {
      console.error("Error deleting subject:", err);
      toast.error("Failed to delete subject.");
    } finally {
      setLoading(false);
    }
  };

  const handleShowDeleteModal = (id: string) => {
    setSelectedSubjectId(id);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedSubjectId(null);
  };

  return (
    <AdminLayout>
      <div style={{ margin: "30px auto", width: "95%" }}>
        <h4 className="mb-4 fw-bold text-danger">View Subjects</h4>

        {/* ✅ Filters */}
        <div className="d-flex gap-3 align-items-center flex-wrap mb-4">
          <select
            className="form-select"
            style={{ width: "250px" }}
            value={selectedSchool}
            onChange={(e) => setSelectedSchool(e.target.value)}
          >
            <option value="">Select School</option>
            {schools
              ?.sort((a: any, b: any) => a.name.localeCompare(b.name))
              .map((s: any) => (
                <option key={s._id} value={s._id}>
                  {s.name.replace(/_/g, " ")}
                </option>
              ))}
          </select>

          <select
            className="form-select"
            style={{ width: "250px" }}
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select Class</option>
            {classes
              ?.sort((a: any, b: any) => a.name.localeCompare(b.name))
              .map((c: any) => (
                <option key={c._id} value={c._id}>
                  {c.name.replace(/_/g, " ")}
                </option>
              ))}
          </select>

          <Button
            variant="outline-danger"
            onClick={fetchSubjects}
            disabled={fetching}
            style={{ height: "45px" }}
          >
            {fetching ? "Fetching..." : "Fetch Subjects"}
          </Button>
        </div>

        {/* ✅ Subjects Table */}
        <Table responsive striped bordered>
          <thead
            style={{
              backgroundColor: "rgb(229, 50, 56)",
              color: "white",
              fontWeight: "500",
            }}
          >
            <tr>
              <th>#</th>
              <th>School Name</th>
              <th>Class</th>
              <th>Subject Name</th>
              <th>Update/Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {subjects.length > 0 ? (
              subjects
                ?.sort((a, b) => a.name.localeCompare(b.name))
                ?.map((row, index) => (
                  <tr key={row._id}>
                    <td>{index + 1}</td>
                    <td>{row?.schoolName?.name?.replace(/_/g, " ")}</td>
                    <td>{row?.classes?.name?.replace(/_/g, " ")}</td>
                    <td>{row?.name?.replace(/_/g, " ")}</td>
                    <td>
                      <Link to={`/update-subject/${row._id}`}>
                        <Button className="btn-sm">
                          <FaEdit color="blue" />
                        </Button>
                      </Link>
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
                <td colSpan={6} className="text-center py-3">
                  No subjects found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>

        {/* ✅ Delete Modal */}
        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Delete Subject</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6 className="text-center">
              Are you sure you want to delete this subject?
            </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleCloseDeleteModal}
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
                style={{ color: "white" }}
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

export default AdminViewSubjects;
