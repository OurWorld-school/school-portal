import React, { useEffect, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormLabel,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CircularIndeterminate from "../../components/Loading/Progress";

import {
  ProductMarketerApi,
  UpdateSchoolApi,
  countryApi,
  getAllSchools,
} from "../../APiData/Api";
import { schoolInfo } from "../../store/Info";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "../AdminDashboard/AdminLayout";

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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface Country {
  name: string;
  flag: string;
}

export default function AdminUpdateSchoolProfile() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [countries, setCountries] = useState<Country[]>([]);
  const [productMarketers, setProductMarketers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [schoolStamp, setSchoolStamp] = useState("");
  const [productMarketer, setProductMarketer] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  // Upload Stamp Image
  const uploadStamp = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const base64: any = await convertToBase64(file);
    setSchoolStamp(base64);
  };

  const convertToBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // Fetch countries, marketers, and current school info
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [schoolRes] = await Promise.all([
          // axios.get(countryApi),
          // axios.get(ProductMarketerApi),
          axios.get(`${getAllSchools}${schoolInfo}`),
        ]);

        // Countries
        // const list = countryRes.data.map((c: any) => ({
        //   name: c.name.common,
        //   flag: c.flags.png,
        // }));
        // setCountries(list);

        // // Product marketers
        // setProductMarketers(marketerRes.data);

        // School Info
        const school = schoolRes.data;
        setName(school?.name || "");
        setEmail(school?.email || "");
        setSchoolStamp(school?.schoolStamp || "");
        setProductMarketer(school?.productMarketer || "");
        setPhoneNumber(school?.phoneNumber || "");
        setSchoolType(school?.schoolType || "");
        setAddress(school?.address || "");
        setPostalCode(school?.postalCode || "");
        setCity(school?.city || "");
        setCountry(school?.country || "");
        setState(school?.state || "");
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch school details.");
      }
    };

    fetchInitialData();
  }, []);

  // Submit handler
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name,
      email,
      schoolStamp,
      productMarketer,
      schoolType,
      address,
      phoneNumber,
      postalCode,
      city,
      country,
      state,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.put(`${UpdateSchoolApi}${schoolInfo}`, data, {
        headers,
      });
      setLoading(false);
      if (res.data) {
        toast.success("School profile updated successfully!");
        navigate("/admin");
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Failed to update school. Check network or inputs.");
    }
  };

  return (
    <AdminLayout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update School Profile
          </Typography>

          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Name of School"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>School Type</InputLabel>
                  <Select
                    value={schoolType}
                    onChange={(e) => setSchoolType(e.target.value as string)}
                    label="School Type"
                  >
                    <MenuItem value="Primary">Primary School</MenuItem>
                    <MenuItem value="Secondary">Secondary School</MenuItem>
                    <MenuItem value="Primary & Secondary">
                      Primary & Secondary School
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Contact Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>

              {/* <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={country}
                    onChange={(e) => setCountry(e.target.value as string)}
                    label="Country"
                  >
                    <MenuItem value="">Select Country</MenuItem>
                    {countries
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((c, i) => (
                        <MenuItem key={i} value={c.name}>
                          {c.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid> */}

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="State / County"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <FormLabel>*Upload School Result Stamp*</FormLabel>
                <TextField
                  fullWidth
                  type="file"
                  variant="outlined"
                  onChange={uploadStamp}
                />
              </Grid>

              <Grid item xs={12}>
                {schoolStamp && (
                  <img
                    src={schoolStamp}
                    alt="School Stamp"
                    style={{
                      marginTop: 8,
                      width: "100%",
                      borderRadius: 8,
                      border: "1px solid #ccc",
                    }}
                  />
                )}
              </Grid>
            </Grid>

            {loading ? (
              <CircularIndeterminate />
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Update Profile
              </Button>
            )}
          </form>
          <ToastContainer />
        </div>
      </Container>
    </AdminLayout>
  );
}
