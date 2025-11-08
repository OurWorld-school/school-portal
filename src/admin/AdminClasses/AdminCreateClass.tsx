// import React, { useEffect, useState } from "react";
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
import AdminLayout from "../AdminDashboard/AdminLayout";
import CircularIndeterminate from "../../components/Loading/Progress";
import "react-toastify/dist/ReactToastify.css";
import { ClassApi, getAllSchools } from "../../APiData/Api";
import { schoolInfo } from "../../store/Info";
import { useEffect, useState } from "react";

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

export default function AdminCreateClass() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [schoolName, setSchoolName] = useState(schoolInfo);
  const [schools, setSchools] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  // 🧠 Fetch schools on mount
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

  //  Submit handler
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = { schoolName, name };
      const headers = {
        "Content-Type": "application/json",
        "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      };

      const res = await axios.post(ClassApi, data, { headers });
      setLoading(false);

      if (res.data) {
        toast.success("Class created successfully!");
        setName("");
        navigate("/view-class");
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Error: Can't create class. Check network or inputs.");
    }
  };

  return (
    <AdminLayout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Create a Class
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

              {/* 🏷️ Class Name */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="className"
                  label="Class Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter class name"
                />
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
