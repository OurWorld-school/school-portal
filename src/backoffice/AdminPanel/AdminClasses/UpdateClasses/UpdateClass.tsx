import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import AdminLayout from "../../AdminLayout";
import CircularIndeterminate from "../../../../components/Loading/Progress";
import { updateClassApi } from "../../../../data/Api";
import { makeStyles } from "@material-ui/core/styles";
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
const UpdateClasses = () => {
  const { id } = useParams();
  const classes = useStyles();

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLoader = () => {
    setLoading(true);
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
      .put(updateClassApi + id, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setName("");

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/getClasses");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Error Can't create class");
      });
  };

  return (
    <AdminLayout>
      <div className="register-main">
        <div className="container">
          <div className="title">Update Class</div>
          <div className="content">
            <form action="#" onSubmit={submitHandler}>
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
                      Update
                    </Button>
                    <ToastContainer />
                  </div>
                )}
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UpdateClasses;
