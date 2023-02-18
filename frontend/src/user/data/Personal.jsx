import React from "react";
import { Theme } from "../../components/Theme";
import {
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  FormControl,
  InputLabel,
  MenuItem
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  return (
    <>
      <Theme>
        <div className="">
          <svg
            className="w-7 absolute inset-0 mt-5 ml-5"
            fill="#0061af"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={() => window.history.back()}
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          <Typography
            variant="h4"
            component="h2"
            color="primary.contrastText"
            sx={{
              fontSize: "2rem",
              fontWeight: "900",
              color: "#000",
              textAlign: "center",
              pt: { mobile: 11, tablet: 5, laptop: 5 },
              mb: 1,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Personal Details
          </Typography>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Get Started by Completing your Profile
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-14 pb-14">
            <TextField label="Full Name&nbsp;&nbsp;" variant="outlined" />
            <TextField
              label="Age&nbsp;&nbsp;"
              variant="outlined"
              type={"date"}
            />
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{
                gap: "0px 20px",
                marginTop: "20px",
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            <TextField label="Adress&nbsp;&nbsp;" variant="outlined" />
            <FormControl sx={{
              width: "325px",
              mt: 2,
            }}>
              <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Blood Group"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Personal;
