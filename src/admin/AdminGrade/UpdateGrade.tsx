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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminLayout from "../AdminDashboard/AdminLayout";
import CircularIndeterminate from "../../components/Loading/Progress";
import "react-toastify/dist/ReactToastify.css";
import { GradeApi, getAllSchools } from "../../APiData/Api";
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

export default function AdminUpdateGrade() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // gradeId from URL

  const [schoolName, setSchoolName] = useState(schoolInfo);
  const [schools, setSchools] = useState<any[]>([]);
  const [gradeName, setGradeName] = useState("");
  const [gradeRange, setGradeRange] = useState("");
  const [gradeRemark, setGradeRemark] = useState("");
  const [loading, setLoading] = useState(false);

  // 🧠 Fetch schools for the current admin
  useEffect(() => {
    if (schoolInfo) {
      axios
        .get(getAllSchools)
        .then((response) => {
          setSchools(
            response.data.filter((item: any) => item._id === schoolInfo)
          );
        })
        .catch((error) => console.error("Error fetching schools:", error));
    }
  }, [schoolInfo]);

  // 🧩 Fetch existing grade details by ID
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axios
      .get(`${GradeApi}/${id}`)
      .then((res) => {
        const grade = res.data;
        setSchoolName(grade.schoolName?._id || grade.schoolName);
        setGradeName(grade.gradeName);
        setGradeRange(grade.gradeRange);
        setGradeRemark(grade.gradeRemark);
      })
      .catch((err) => {
        console.error("Error fetching grade:", err);
        toast.error("Failed to load grade details.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  // 🟢 Handle Update
  const updateHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      schoolName,
      gradeName,
      gradeRange,
      gradeRemark,
    };

    const headers = {
      "Content-Type": "application/json",
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
    };

    try {
      const res = await axios.put(`${GradeApi}update/${id}`, data, {
        headers,
      });
      setLoading(false);

      if (res.data) {
        toast.success("Grade updated successfully!");
        navigate("/view-grade");
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        "Error: Unable to update grade. Please check inputs or network."
      );
    }
  };

  return (
    <AdminLayout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Update Grade
          </Typography>

          <form className={classes.form} onSubmit={updateHandler}>
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

              {/* 🅰️ Grade Name */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="gradeName"
                  label="Grade Name"
                  value={gradeName}
                  onChange={(e) => setGradeName(e.target.value)}
                />
              </Grid>

              {/* 📈 Grade Range */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="gradeRange"
                  label="Grade Range"
                  value={gradeRange}
                  onChange={(e) => setGradeRange(e.target.value)}
                />
              </Grid>

              {/* 💬 Grade Remark */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="gradeRemark"
                  label="Grade Remark"
                  value={gradeRemark}
                  onChange={(e) => setGradeRemark(e.target.value)}
                />
              </Grid>

              {/* 🟢 Update Button */}
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
                    Update Grade
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
