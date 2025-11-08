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
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import AdminLayout from "../AdminDashboard/AdminLayout";
import CircularIndeterminate from "../../components/Loading/Progress";
import { schoolInfo } from "../../store/Info";
import {
  ClassApi,
  UpdateStudentClassApi,
  getAllSchools,
} from "../../APiData/Api";

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

export default function AdminUpdateStudentClass() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();
  const [schoolName, setSchoolName] = useState(schoolInfo);
  const [currentClass, setCurrentClass] = useState("");
  const [classesList, setClassesList] = useState<any[]>([]);
  const [schools, setSchools] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 🧠 Fetch schools (filtering by logged-in user's schoolInfo)
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(getAllSchools)
        .then((response) => {
          setSchools(
            response.data.filter((item: any) => item?._id === schoolInfo)
          );
        })
        .catch((error) => {
          console.error("Error fetching schools:", error);
        });
    }
  }, [schoolInfo]);

  // 🧠 Fetch classes for selected school
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(ClassApi)
        .then((response) => {
          setClassesList(
            response.data.filter(
              (item: any) => item.schoolName?._id === schoolInfo
            )
          );
        })
        .catch((error) => {
          console.error("Error fetching classes:", error);
        });
    }
  }, [schoolInfo]);

  // ✅ Submit update
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = { currentClass };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.put(UpdateStudentClassApi + id, data, {
        headers,
      });
      setLoading(false);

      if (res.data) {
        setCurrentClass("");
        toast.success("Student class updated successfully!");
        navigate("/all-students");
      } else {
        toast.error("Unexpected server response");
      }
    } catch (err) {
      setLoading(false);
      toast.error(
        "Failed to update student class. Check your network or inputs."
      );
    }
  };

  return (
    <AdminLayout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Update Student Class
          </Typography>

          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container spacing={2}>
              {/* 🏫 School Name Display */}
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
                        {school?.name.replace(/_/g, " ")}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  id="schoolName"
                  label="School"
                  variant="outlined"
                  value={schoolInfo}
                  disabled
                >
                  <MenuItem value="">Select Student School</MenuItem>
                  {schools.map((school) => (
                    <MenuItem key={school._id} value={school._id}>
                      {school?.name.replace(/_/g, " ")}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid> */}

              {/* 🏷️ Current Class Selection */}
              <Grid item xs={12}>
                <TextField
                  select
                  required
                  fullWidth
                  id="currentClass"
                  label="Select New Class"
                  value={currentClass}
                  onChange={(e) => setCurrentClass(e.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="">Select Student Class</MenuItem>
                  {classesList
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((cls) => (
                      <MenuItem key={cls._id} value={cls._id}>
                        {cls?.name.replace(/_/g, " ")}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>

              {/* 🔘 Submit Button */}
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
