import React, { useEffect, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminLayout from "../AdminDashboard/AdminLayout";
import CircularIndeterminate from "../../components/Loading/Progress";
import "react-toastify/dist/ReactToastify.css";
import {
  ClassApi,
  getAllSchools,
  SubjectsApi,
  UpdateSubjectsApi,
} from "../../APiData/Api";
import { schoolInfo } from "../../store/Info";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "darkgreen",
    },
  },
}));

export default function UpdateSubjects() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();

  const [schoolName, setSchoolName] = useState(schoolInfo);
  const [schools, setSchools] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [classesList, setClassesList] = useState<any[]>([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [loading, setLoading] = useState(false);

  // 🧠 Fetch schools
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(getAllSchools)
        .then((res) => {
          setSchools(res.data.filter((item: any) => item._id === schoolInfo));
        })
        .catch((err) => console.error("Error fetching schools:", err));
    }
  }, [schoolInfo]);

  // 🧠 Fetch classes for school
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(ClassApi)
        .then((res) => {
          setClassesList(
            res.data.filter((cls: any) => cls?.schoolName?._id === schoolInfo)
          );
        })
        .catch((err) => console.error("Error fetching classes:", err));
    }
  }, [schoolInfo]);

  // 🧠 Fetch subject details (optional if you want to prefill)
  useEffect(() => {
    if (id) {
      axios
        .get(`${SubjectsApi}${id}`)
        .then((res) => {
          const subject = res.data;
          setName(subject?.name);
          setSelectedClass(subject?.classes?._id || "");
        })
        .catch((err) => console.error("Error fetching subject details:", err));
    }
  }, [id]);

  // 🧩 Submit handler
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        schoolName,
        name,
        classes: selectedClass,
      };

      const headers = {
        "Content-Type": "application/json",
        "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      };

      const res = await axios.put(`${UpdateSubjectsApi}${id}`, data, {
        headers,
      });
      setLoading(false);

      if (res.data) {
        toast.success("Subject updated successfully!");
        setName("");
        setSelectedClass("");
        navigate("/view-subjects");
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Error: Can't update subject. Check network or inputs.");
    }
  };

  return (
    <AdminLayout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Update / Edit Subject
          </Typography>

          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container spacing={2}>
              {/* School Name */}
              <Grid item xs={12}>
                <TextField
                  select
                  required
                  fullWidth
                  id="schoolName"
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
              <Grid item xs={12}>
                <TextField
                  select
                  required
                  fullWidth
                  id="class"
                  label="Select Class"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  variant="outlined"
                >
                  {classesList
                    ?.sort((a, b) => a?.name.localeCompare(b.name))
                    .map((cls) => (
                      <MenuItem key={cls._id} value={cls._id}>
                        {cls?.name.replace(/_/g, " ")}
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
                  id="subjectName"
                  label="Subject Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter subject name"
                />
              </Grid>

              {/* Submit Button */}
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
                    Update
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>

          <ToastContainer />
        </div>
      </Container>
    </AdminLayout>
  );
}
