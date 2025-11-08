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
import { DirectorsRemarkApi, getAllSchools } from "../../APiData/Api";
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

export default function UpdateAdminDirectorsRemark() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams(); // 🆔 remark ID from route param

  const [schoolName, setSchoolName] = useState(schoolInfo);
  const [schools, setSchools] = useState<any[]>([]);
  const [gradeName, setGradeName] = useState("");
  const [gradeRange, setGradeRange] = useState("");
  const [gradeRemark, setGradeRemark] = useState("");
  const [loading, setLoading] = useState(false);

  // 🧠 Fetch Schools
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

  // 🧠 Fetch existing remark data by ID
  useEffect(() => {
    const fetchRemark = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${DirectorsRemarkApi}/${id}`);
        const remark = res.data;
        setSchoolName(remark.schoolName);
        setGradeName(remark.gradeName);
        setGradeRange(remark.gradeRange);
        setGradeRemark(remark.gradeRemark);
      } catch (error) {
        toast.error("Failed to load remark data.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchRemark();
  }, [id]);

  // 🟢 Update handler
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
      const res = await axios.put(`${DirectorsRemarkApi}/update/${id}`, data, {
        headers,
      });
      setLoading(false);

      if (res.data) {
        toast.success("Director's Remark updated successfully!");
        navigate("/view-directors-remark");
      } else {
        toast.error("Unexpected server response");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error: Unable to update remark. Try again.");
    }
  };

  return (
    <AdminLayout>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Update Director’s Result Grade & Remark
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

              {/* 📊 Grade Range */}
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

              {/* 💬 Director’s Remark */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={5}
                  id="gradeRemark"
                  label="Director’s Remark"
                  value={gradeRemark}
                  onChange={(e) => setGradeRemark(e.target.value)}
                />
              </Grid>

              {/* 🟢 Update */}
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
                    Update Remark
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
