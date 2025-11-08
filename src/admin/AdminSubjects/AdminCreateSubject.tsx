import React, { useEffect, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import {
  ClassApi,
  DeleteSubjectsApi,
  SubjectsApi,
  getAllSchools,
} from "../../APiData/Api";
import AdminLayout from "../AdminDashboard/AdminLayout";
import CircularIndeterminate from "../../components/Loading/Progress";
import { FaEdit, FaTrash } from "react-icons/fa";
import { schoolInfo } from "../../store/Info";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "darkgreen",
    },
  },
  tableContainer: {
    marginTop: theme.spacing(6),
  },
  fetchButton: {
    border: "1px solid red",
    width: "150px",
    height: "45px",
    borderRadius: "6px",
    marginTop: theme.spacing(2),
  },
}));

export default function AdminCreateSubject() {
  const classes = useStyles();
  const navigate = useNavigate();

  // 📌 Form States
  const [schoolName, setSchoolName] = useState(schoolInfo);
  const [name, setName] = useState("");
  const [classesList, setClassesList] = useState<any[]>([]);
  const [schools, setSchools] = useState<any[]>([]);
  const [selectedClass, setSelectedClass] = useState("");

  // 📊 Data Display States
  const [subjects, setSubjects] = useState<any[]>([]);
  const [numbers, setNumbers] = useState<number[]>([]);

  // ⚙️ Other States
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState<string | null>(null);

  // 🧠 Fetch Schools
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(getAllSchools)
        .then((res) =>
          setSchools(res.data.filter((item: any) => item._id === schoolInfo))
        )
        .catch(() => toast.error("Failed to fetch schools"));
    }
  }, [schoolInfo]);

  // 🧠 Fetch Classes
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(ClassApi)
        .then((res) =>
          setClassesList(
            res.data.filter((item: any) => item.schoolName?._id === schoolInfo)
          )
        )
        .catch(() => toast.error("Failed to fetch classes"));
    }
  }, [schoolInfo]);

  // 🧾 Submit Subject
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        schoolName,
        name,
        classes: selectedClass,
      };
      const headers = {
        "Content-Type": "application/json",
        "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      };

      const res = await axios.post(SubjectsApi, payload, { headers });
      setLoading(false);

      if (res.data) {
        toast.success("Subject created successfully!");
        setName("");
        setSelectedClass("");
        fetchSubjects();
      } else {
        toast.error("Unexpected server response");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Error creating subject. Check inputs or network.");
    }
  };

  // 📥 Fetch Subjects by School & Class
  const fetchSubjects = async () => {
    setFetching(true);
    try {
      const res = await axios.get(SubjectsApi);
      const filtered = res.data.filter(
        (item: any) =>
          item?.schoolName?._id === schoolName &&
          item?.classes?._id === selectedClass
      );
      setSubjects(filtered);
      setNumbers(Array.from({ length: filtered.length }, (_, i) => i + 1));
    } catch {
      toast.error("Failed to fetch subjects");
    } finally {
      setFetching(false);
    }
  };

  // 🗑️ Handle Delete
  const handleDelete = async () => {
    if (!selectedDeleteId) return;
    setLoading(true);
    try {
      await axios.delete(DeleteSubjectsApi + selectedDeleteId);
      toast.success("Subject deleted successfully!");
      fetchSubjects();
    } catch {
      toast.error("Failed to delete subject");
    } finally {
      setLoading(false);
      setDeleteDialog(false);
    }
  };

  return (
    <AdminLayout>
      <Container component="main" maxWidth="md">
        <CssBaseline />

        <div className={classes.paper}>
          <Typography component="h1" variant="h5" gutterBottom>
            Create a Subject
          </Typography>

          {/* 🧾 Subject Form */}
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* School Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  required
                  fullWidth
                  label="School Name"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  variant="outlined"
                >
                  {schools
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((school) => (
                      <MenuItem key={school._id} value={school._id}>
                        {school.name.replace(/_/g, " ")}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>

              {/* Class */}
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  required
                  fullWidth
                  label="Class"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="">Select Class</MenuItem>
                  {classesList
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((cls) => (
                      <MenuItem key={cls._id} value={cls._id}>
                        {cls.name.replace(/_/g, " ")}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>

              {/* Subject Name */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Subject Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter subject name"
                />
              </Grid>

              {/* Submit */}
              <Grid item xs={12}>
                {loading ? (
                  <CircularIndeterminate />
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                  >
                    Create Subject
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
          <ToastContainer />

          {/* 🧮 Fetch Section */}
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                onClick={fetchSubjects}
                className={classes.fetchButton}
                color="secondary"
              >
                {fetching ? <CircularIndeterminate /> : "Fetch Subjects"}
              </Button>
            </Grid>
          </Grid>

          {/* 📋 Subject Table */}
          <TableContainer
            component={Paper}
            className={classes.tableContainer}
            elevation={3}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>School</TableCell>
                  <TableCell>Class</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Update</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subjects.map((subj, index) => (
                  <TableRow key={subj._id}>
                    <TableCell>{numbers[index]}</TableCell>
                    <TableCell>
                      {subj?.schoolName?.name.replace(/_/g, " ")}
                    </TableCell>
                    <TableCell>
                      {subj?.classes?.name.replace(/_/g, " ")}
                    </TableCell>
                    <TableCell>{subj?.name.replace(/_/g, " ")}</TableCell>
                    <TableCell>
                      <Link to={`/update-subject/${subj._id}`}>
                        <Button color="primary">
                          <FaEdit />
                        </Button>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        onClick={() => {
                          setSelectedDeleteId(subj._id);
                          setDeleteDialog(true);
                        }}
                      >
                        <FaTrash color="red" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* 🗑️ Delete Dialog */}
          <Dialog
            open={deleteDialog}
            onClose={() => setDeleteDialog(false)}
            fullWidth
            maxWidth="xs"
          >
            <DialogTitle>Delete Subject</DialogTitle>
            <DialogContent>
              <Typography>
                Are you sure you want to delete this subject?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDeleteDialog(false)}>Cancel</Button>
              <Button color="secondary" onClick={handleDelete}>
                {loading ? <CircularIndeterminate /> : "Delete"}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Container>
    </AdminLayout>
  );
}
