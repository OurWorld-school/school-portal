import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import AdminLayout from "../AdminDashboard/AdminLayout";
import CircularIndeterminate from "../../components/Loading/Progress";
import { CutOffMarkApi, getAllSchools } from "../../APiData/Api";
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

export default function AdminCreateMark() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [schoolName, setSchoolName] = useState(schoolInfo);
  const [schools, setSchools] = useState<any[]>([]);
  const [name, setName] = useState(""); // Test/Exam
  const [cutOffMark, setCutOffMark] = useState(""); // Grade value
  const [loading, setLoading] = useState(false);

  // 🧠 Fetch school info
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(getAllSchools)
        .then((response) => {
          setSchools(
            response.data.filter((item: any) => item._id === schoolInfo)
          );
        })
        .catch((error) => {
          console.error("Error fetching schools:", error);
        });
    }
  }, [schoolInfo]);

  // 🧾 Submit handler
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      schoolName: schoolName,
      name: name,
      cutOffMark: cutOffMark,
    };

    const headers = {
      "Content-Type": "application/json",
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
    };

    try {
      const res = await axios.post(CutOffMarkApi, data, { headers });
      setLoading(false);

      if (res.data) {
        toast.success("Cut-off mark created successfully!");
        setName("");
        setCutOffMark("");
        navigate("/view-marks");
      } else {
        toast.error("Unexpected server response");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      toast.error("Error: Unable to create cut-off mark.");
    }
  };

  return (
    <AdminLayout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Create Subject C/A & Exam Grade
          </Typography>

          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container spacing={2}>
              {/* 🏫 School Name */}
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

              {/* 🧮 Test/Exam Type */}
              <Grid item xs={12}>
                <TextField
                  select
                  required
                  fullWidth
                  id="type"
                  label="Select Type"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="Test">C.A / Test</MenuItem>
                  <MenuItem value="Exam">Exam</MenuItem>
                </TextField>
              </Grid>

              {/* 🎯 Grade / Cut-Off Mark */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="cutOffMark"
                  label="Grade (e.g., 30)"
                  value={cutOffMark}
                  onChange={(e) => setCutOffMark(e.target.value)}
                  placeholder="Enter cut-off mark"
                />
              </Grid>

              {/* ✅ Submit Button */}
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
                    Create
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
