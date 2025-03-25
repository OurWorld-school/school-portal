import React, { useState } from "react";
import "./UserProfiles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { UpdateUserApi, UserApi } from "../../data/Api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
import CircularIndeterminate from "../../components/Loading/Progress";

function UserProfileScreen() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [firstName, setFirstName] = useState("");
  const [passportPhoto, setPassportPhoto] = useState("");
  const [lastName, setLastName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [schoolRegNumber, setSchoolRegNumber] = useState("");
  const [contactAdress, setContAdress] = useState("");
  const [currentClass, setCurrentClass] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Student");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<any>({});
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(UserApi + userId);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setUserData(data);
    };

    fetchPosts();
  }, [userId]);
  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };
  const uploadimage = async (e: any) => {
    const file = e.target.files[0];
    const base64: any = await convert2base64(file);
    setPassportPhoto(base64);
    // setImage({ ...image, image: base64 });
    console.log(base64);
    // const reader = new FileReader();
  };
  const convert2base64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: any = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      contactAdress: contactAdress,
      schoolRegNumber: schoolRegNumber,
      passportPhoto: passportPhoto,

      userType: userType,
      currentClass: currentClass,
      password: password,
      confirmPassword: confirmPassword,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .put(UpdateUserApi + userId, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setFirstName("");
          setSchoolRegNumber("");
          setLastName("");
          setPhoneNumber("");
          setContAdress("");
          setPassportPhoto("");
          setUserType("");

          setPassword("");
          setConfirmPassword("");
          setCurrentClass("");
          // localStorage.setItem("userId", res.data._id);

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/login");
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
    <>
      <TopNavBar />
      <Header />
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
            Edit Profile
          </h1>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                <img
                  src={userData?.passportPhoto}
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
              </div>
            </div>

            <div className="col-md-9 personal-info">
              <div className="alert alert-info alert-dismissable">
                <a className="panel-close close" data-dismiss="alert">
                  *
                </a>
                <i className="fa fa-coffee ml-4"></i>
                If You Haven't Created a <strong>Login Passowrd</strong>, Create
                your Password Here.
              </div>
              <h3 className="mt-2 mb-4 font-bold">Personal info</h3>

              <form
                className="form-horizontal"
                role="form"
                onSubmit={submitHandler}
              >
                <div className="form-group">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        fullWidth
                        id="firstName"
                        value={firstName || userData?.firstName || ""}
                        onChange={(e) => setFirstName(e.target.value)}
                        label="Surname"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        value={userData?.lastName || lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="regNumber"
                        label="School Reg Number"
                        name=""
                        autoComplete="phoneNumber"
                        value={userData?.schoolRegNumber || schoolRegNumber}
                        onChange={(e) => setSchoolRegNumber(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        sx={
                          {
                            //   m: 1,
                            // width: 370,
                          }
                        }
                        className="form-select-div-s"
                      >
                        <InputLabel id="demo-multiple-name-label">
                          Class
                        </InputLabel>

                        <Select
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          fullWidth
                          // MenuProps={MenuProps}
                          // multiple
                          value={userData?.currentClass || currentClass}
                          onChange={(e) => setCurrentClass(e.target.value)}
                          // input={<OutlinedInput label="Name" />}
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
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="phoneNumber"
                        label="Contact Phone Number"
                        name="phoneNumber"
                        autoComplete="phoneNumber"
                        value={userData?.phoneNumber || phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="contact address"
                        label="Contact Adress"
                        name="contact adress"
                        autoComplete="contact adress"
                        value={userData?.contactAdress || contactAdress}
                        onChange={(e) => setContAdress(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl
                        fullWidth
                        // sx={{ m: 1 }}
                        variant="outlined"
                        // className="input-label-input-divs"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          // id="outlined-adornment-password"
                          // type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          fullWidth
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        fullWidth
                        // sx={{ m: 1 }}
                        variant="outlined"
                        // className="input-label-input-divs"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Confirm Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          fullWidth
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                    </Grid>

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
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <Footer />
    </>
  );
}
export default UserProfileScreen;
