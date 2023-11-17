import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@material-ui/core";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  Basic1resultApi,
  Basic2resultApi,
  Basic4resultApi,
  Nursery1CheckresultApi,
  Nursery1resultApi,
  Nursery2resultApi,
  PreNurseryresultApi,
} from "../../../data/Api";
import CircularIndeterminate from "../../../components/Loading/Progress";
import TopNavBar from "../../../components/TopNavBar/TopNavBar";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

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
// function getStyles( personName: string[], theme: Theme) {
//   return {
//     fontWeight:

//   };
// }
interface Props {
  //   apiData: any;
}
const CheckBasic4Result: React.FC<Props> = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const theme = useTheme();
  // State to store the selected option
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");
  const [resultData, setResultData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  // State to store the API response
  const [apiData, setApiData] = useState(null);
  //   const DisplayData = apiData;
  // Function to handle the select input change
  const handleSelectChange = (e: any) => {
    setSelectedYear(e.target.value);
  };
  const handleSelectTermChange = (e: any) => {
    setSelectedTerm(e.target.value);
  };
  // Function to make the API GET request

  const fetchApiData = () => {
    setLoading(true);
    // Make your API GET request here using a library like Axios or the built-in fetch API
    // Replace 'YOUR_API_ENDPOINT' with the actual API URL
    fetch(
      `https://ourworldintschool.onrender.com/api/basic4result/results/${userId}/${selectedYear}/${selectedTerm}`
    )
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
        navigate(
          `/my-results-basic4/${selectedYear}/${userId}/${selectedTerm}`
        );
        console.log(data);
        toast.success("Result sucessful");
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        setLoading(false);
        // navigate("/Basic2-result");
        toast.error("No result found");
      });
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(Basic4resultApi);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setResultData(data);
    };

    fetchPosts();
  }, []);
  return (
    <>
      <TopNavBar />
      <Header />
      <div>
        <div className="check-result-flex-div">
          <div className="check-result-col-div">
            <div className="guideline-div">
              <h3 className="tip-h3">Tips</h3>
              <ul className="ul-list-style">
                <li>
                  Obtain your Registration Code from your schools / Director
                </li>
                <li>
                  Obtain a scratch card from your school or a verified vendor
                </li>
                <li>
                  Scratch off the covered / sealed area to reveal the card pin
                </li>
                <li>
                  Enter the Pin and Serial number and other details required
                </li>
                <li>
                  Click on the » Check result button (located at the bottom)
                </li>
              </ul>
            </div>
          </div>
          <div className="select-check-div">
            <div>
              <h2>Result Checker</h2>
              <div className="form-control-div">
                {" "}
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">Year</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    // multiple
                    // value={personName}
                    onChange={handleSelectChange}
                    value={selectedYear}
                    // input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="2023">2023</MenuItem>
                    {/* {resultData?.map((item: any) => (
                    <>
                      <MenuItem value={item?.year}>{item?.year} </MenuItem>
                    </>
                  ))} */}
                  </Select>
                </FormControl>
              </div>
              <div className="form-control-div">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">Term</InputLabel>

                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    // multiple
                    value={selectedTerm}
                    onChange={handleSelectTermChange}
                    // input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="1st-Term">1st Term</MenuItem>
                    <MenuItem value="2nd-Term">2nd Term</MenuItem>
                    <MenuItem value="3rd-Term">3rd Term</MenuItem>
                    {/* {resultData?.map((item: any) => (
                    <>
                      <MenuItem value={item?.term}>{item?.term} </MenuItem>
                    </>
                  ))} */}
                  </Select>
                </FormControl>
              </div>
              {loading ? (
                <CircularIndeterminate />
              ) : (
                <div>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      border: "greenyellow",
                      width: "45%",
                      marginTop: "25px",
                    }}
                    className="proceed-btn"
                    onClick={fetchApiData}
                  >
                    Check Result
                  </Button>
                  <ToastContainer />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckBasic4Result;
