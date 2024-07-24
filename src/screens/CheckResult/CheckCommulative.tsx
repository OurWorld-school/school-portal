import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckResult.css";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@material-ui/core";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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
const CheckCommulative = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    if (userId) {
      navigate("/check-commulative");
    } else {
      navigate("/login");
    }
  }, [userId]);
  const ScratchCardId = localStorage.getItem("ScratchCardId");
  useEffect(() => {
    if (ScratchCardId) {
      navigate("/check-commulative");
    } else {
      navigate("/online-result");
    }
  }, [userId]);
  const handleButtonClick = () => {
    // You can define your navigation logic based on the selectedValue here
    if (selectedValue === "Nursery1-commulative") {
      navigate("/Nursery1-commulative"); // Navigate to a specific route based on the selected value
    } else if (selectedValue === "Nursery2-commulative") {
      navigate("/Nursery2-commulative");
    } else if (selectedValue === "PreNursery-commulative") {
      navigate("/PreNursery-commulative");
    } else if (selectedValue === "Nursery3-commulative") {
      navigate("/Nursery3-commulative");
    } else if (selectedValue === "Basic1-commulative") {
      navigate("/Basic1-commulative");
    } else if (selectedValue === "Basic2-commulative") {
      navigate("/Basic2-commulative");
    } else if (selectedValue === "Basic3-commulative") {
      navigate("/Basic3-commulative");
    } else if (selectedValue === "Basic4-commulative") {
      navigate("/Basic4-commulative");
    } else if (selectedValue === "Basic5-commulative") {
      navigate("/Basic5-commulative");
    } else if (selectedValue === "Basic6-commulative") {
      navigate("/Basic6-commulative");
    }
  };
  const [hasReloaded, setHasReloaded] = useState<boolean>(false);

  useEffect(() => {
    const hasReloadedFromStorage = sessionStorage.getItem("hasReloaded");
    if (!hasReloadedFromStorage) {
      // Perform the reload
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    } else {
      // Update the state to avoid further reloads
      setHasReloaded(true);
    }
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
              <h2>Select Your Class</h2>
              <div className="form-control-div">
                {" "}
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">Select</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    // multiple
                    // value={personName}
                    onChange={handleSelectChange}
                    // input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="PreNursery-commulative">
                      Pre Nursery
                    </MenuItem>
                    <MenuItem value="Nursery1-commulative">Nursery 1</MenuItem>
                    <MenuItem value="Nursery2-commulative">Nursery 2</MenuItem>
                    <MenuItem value="Nursery3-commulative">Nursery 3</MenuItem>
                    <MenuItem value="Basic1-commulative">Basic 1</MenuItem>
                    <MenuItem value="Basic2-commulative">Basic 2</MenuItem>
                    <MenuItem value="Basic3-commulative">Basic 3</MenuItem>
                    <MenuItem value="Basic4-commulative">Basic 4</MenuItem>
                    <MenuItem value="Basic5-commulative">Basic 5</MenuItem>
                    <MenuItem value="Basic6-commulative">Basic 6</MenuItem>
                  </Select>
                </FormControl>
              </div>
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
                  onClick={handleButtonClick}
                >
                  Proceed
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
};

export default CheckCommulative;
