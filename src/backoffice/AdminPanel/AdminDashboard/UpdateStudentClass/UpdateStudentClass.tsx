import React, { useState } from "react";
import "../../../../css/Input.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  IconButton,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormLabel,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@material-ui/core/Grid";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import AdminLayout from "../../AdminLayout";
import { UpdateUserApi, UpdateUserCurrentClassApi } from "../../../../data/Api";
import CircularIndeterminate from "../../../../components/Loading/Progress";

const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function UpdateStudentClass() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [currentClass, setCurrentClass] = useState("");

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<any>({});

  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };

  /////
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: any = {
      currentClass: currentClass,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .put(UpdateUserCurrentClassApi + id, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setCurrentClass("");
          // localStorage.setItem("userId", res.data._id);

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/admin");
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
      <div className="profile-main-div">
        <CssBaseline />
        <div className="container bootstrap snippets bootdey">
          <h1
            className="text-primary mt-5 text-center mb-4 font-extrabold"
            style={{
              fontSize: "30px",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            Update Student Class
          </h1>
          <div className="card rounded-3">
            <div className="card-body p-4 p-md-5">
              {/* <div className="row"> */}
              <div className="col-md-9 personal-info">
                <form
                  className="form-horizontal"
                  role="form"
                  onSubmit={submitHandler}
                >
                  <div className="col-md-6 mb-4">
                    <FormControl
                      className="input-label-input-divs"
                      sx={{ m: 1, width: 370 }}
                    >
                      <InputLabel id="demo-multiple-name-label">
                        Student Current Class
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        className="input-label-input-divs-select"
                        fullWidth
                        // multiple
                        value={currentClass}
                        onChange={(e) => setCurrentClass(e.target.value)}
                        // input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                      >
                        <MenuItem value="Pre-Nursery">Pre-Nursery</MenuItem>
                        <MenuItem value="Nursery-1">Nursery-1</MenuItem>
                        <MenuItem value="Nursery-2">Nursery-2</MenuItem>
                        <MenuItem value="Nursery-3">Nursery-3</MenuItem>
                        <MenuItem value="Basic-1">Basic-1</MenuItem>
                        <MenuItem value="Basic-2">Basic-2</MenuItem>
                        <MenuItem value="Basic-3">Basic-3</MenuItem>
                        <MenuItem value="Basic-4">Basic-4</MenuItem>
                        <MenuItem value="Basic-5">Basic-5</MenuItem>
                        <MenuItem value="Basic-6">Basic-6</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="allowExtraEmails"
                          color="primary"
                          required
                        />
                      }
                      label="I am pledging that all the informations i entered are correct."
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
                        style={{
                          color: "white",
                          borderColor: "greenyellow",
                          backgroundColor: "green",
                        }}
                      >
                        Update Profile
                      </Button>
                      <ToastContainer />
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
export default UpdateStudentClass;
