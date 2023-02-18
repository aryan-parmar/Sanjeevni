import React, { useEffect, useRef } from "react";
import { Theme } from "../../components/Theme";
import {
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@mui/material";
import apiPost from "../../utilities/apiCall";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const [heart, setHeart] = React.useState("no");
  const [diabetes, setDiabetes] = React.useState("no");
  const [cancer, setCancer] = React.useState("no");
  const [bp, setBP] = React.useState("no");
  let [data, setData] = React.useState();
  function submit(e) {
    e.preventDefault();
    let formFields = {
      has_heart_disease: heart,
      has_diabetes: diabetes,
      has_cancer: cancer,
      has_blood_pressure: bp,
    };
    apiPost("update/form", { formFields, formNum: 3 }, setData);
  }

  useEffect(() => {
    if (data) {
      if (!data.err) {
        navigate("/user/profile");
      }
    }
  }, [data]);
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
            Family history
          </Typography>
          <p
            style={{
              textAlign: "center",
            }}
          >
            //Get Started by Completing your Profile
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-14 pb-32">
            <label className="text-center pl-1 pr-2 font-bold">
              any family member suffering from heart disease
            </label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              id="gender"
              onChange={(e) => {
                setHeart(e.target.value);
              }}
              sx={{
                gap: "0px 20px",
                marginTop: "20px",
                justifyContent: "center",
              }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <label className="text-center pl-1 pr-2 font-bold">
              any family member suffering from diabetes
            </label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              id="gender"
              onChange={(e) => {
                setDiabetes(e.target.value);
              }}
              sx={{
                gap: "0px 20px",
                marginTop: "20px",
                justifyContent: "center",
              }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <label className="text-center pl-1 pr-2 font-bold">
              any family member suffering from cancer
            </label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              id="gender"
              onChange={(e) => {
                setCancer(e.target.value);
              }}
              sx={{
                gap: "0px 20px",
                marginTop: "20px",
                justifyContent: "center",
              }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <label className="text-center pl-1 pr-2 font-bold">
              any family member suffering from blood pressure issues
            </label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              id="gender"
              onChange={(e) => {
                setBP(e.target.value);
              }}
              sx={{
                gap: "0px 20px",
                marginTop: "20px",
                justifyContent: "center",
              }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <Button
              variant="contained"
              sx={{ mt: 5 }}
              onClick={(e) => submit(e)}
            >
              Continue
            </Button>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default History;
