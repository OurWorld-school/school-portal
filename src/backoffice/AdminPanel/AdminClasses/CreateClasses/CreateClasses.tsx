import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import "../../../../screens/RegisterationScreen/Register.css";
import { createClassApi } from "../../../../data/Api";
import AdminLayout from "../../AdminLayout";
import CircularIndeterminate from "../../../../components/Loading/Progress";

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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    borderColor: "greenyellow",
    backgroundColor: "green",
  },
}));
const ITEM_HEIGHT = 800;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function CreateClasses() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };

  //////

  /////
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: any = {
      name: name,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(createClassApi, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setName("");

          //   localStorage.setItem("isAdmin", res.data.isAdmin);
          console.log(res.data);
          toast.success("post sucessful");
          navigate("/getClasses");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          "Failed to create a post, check your network connection or input the correct textfields"
        );
      });
  };
  return (
    <AdminLayout>
      {/* <TopNavBar />
      <Header /> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Create a Class
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Class Name"
                  autoFocus
                />
              </Grid>

              {loading ? (
                <CircularIndeterminate />
              ) : (
                <div>
                  <Button
                    type="submit"
                    onSubmit={handleLoader}
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                  >
                    Create
                  </Button>
                  <ToastContainer />
                </div>
              )}
            </Grid>
          </form>
        </div>
      </Container>
      {/* <Footer /> */}
    </AdminLayout>
  );
}
