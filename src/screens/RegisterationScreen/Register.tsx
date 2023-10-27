import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { registerApi } from "../../data/Api";
import { UserReg } from "../../data/Data.Type";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  IconButton,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormLabel,
} from "@mui/material";
import CircularIndeterminate from "../../components/Loading/Progress";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}

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

export default function SignUp() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [passportPhoto, setPassportPhoto] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [schoolRegNumber, setSchoolRegNumber] = useState("");
  const [contactAdress, setContAdress] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("Student");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
  //////

  /////
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: UserReg = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      contactAdress: contactAdress,
      schoolRegNumber: schoolRegNumber,
      passportPhoto: passportPhoto,
      email: email,
      roles: roles,
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
      .post(registerApi, data, headers)

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
          setRoles("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");

          localStorage.setItem("userId", res.data._id);

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/booking");
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="regNumber"
                label="School Reg Number"
                name=""
                autoComplete="phoneNumber"
                value={schoolRegNumber}
                onChange={(e) => setSchoolRegNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Contact Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="contact address"
                label="Contact Adress"
                name="contact adress"
                autoComplete="contact adress"
                value={contactAdress}
                onChange={(e) => setContAdress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
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
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormLabel className="mb-2">*Passport Photograph*</FormLabel>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passport"
                // label="Passport Photo"
                id="passport"
                autoComplete="passportPhoto"
                // type={showPassword ? "text" : "password"}
                // value={passportPhoto}
                type="file"
                // accept="image/*"
                // accept=".jpeg, .png, .jpg, "
                onChange={uploadimage}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" color="primary" required />
                }
                label="I am pledging that all the all informations i entered is correct."
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
                className={classes.submit}
              >
                Sign Up
              </Button>
              <ToastContainer />
            </div>
          )}
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/staff-registeration" variant="body2">
                Are you a staff? Sign up here
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
