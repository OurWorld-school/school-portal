import React, { useState } from "react";

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
import {
  AssignUserRolesApi,
  UpdateUserApi,
  UpdateUserCurrentClassApi,
} from "../../../../data/Api";
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
function AssignRoles() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [roles, setRoles] = useState("");

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
      roles: roles,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .put(AssignUserRolesApi + id, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setRoles("");
          // localStorage.setItem("userId", res.data._id);

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/admin-layout");
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
            Assign Staff Roles
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
                  <FormControl sx={{ m: 1, width: 370 }}>
                    <InputLabel id="demo-multiple-name-label">
                      Assign Staff Roles
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      fullWidth
                      // multiple
                      value={roles}
                      onChange={(e) => setRoles(e.target.value)}
                      // input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                    >
                      <MenuItem value="Form-Teacher">Form-Teacher</MenuItem>
                      <MenuItem value="Form-Teacher">Staff</MenuItem>
                    </Select>
                  </FormControl>

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
export default AssignRoles;
