import React, { useEffect } from "react";
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
  MenuItem,
  Button,
} from "@mui/material";
import apiPost from "../../utilities/apiCall";
import { useNavigate } from "react-router-dom";

const Allergies = () => {
  const navigate = useNavigate();
  const [allergies, setAllergies] = React.useState("no");
  const [severity, setSeverity] = React.useState("no");
  const [eAR, setEAR] = React.useState();
  const [dTA, setDTA] = React.useState();
  const [type, setType] = React.useState(false);
  let [data, setData] = React.useState();
  function submit(e) {
    e.preventDefault();
    let formFields = {};
    if (allergies === "no") {
      formFields = {
        has_allergies: allergies,
      };
    } else {
      formFields = {
        has_allergies: allergies,
        severity: severity,
        eAR,
        dTA,
        type,
      };
      apiPost("update/form", { formFields, formNum: 1 }, setData);
    }
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
        <div className="h-[100vh]">
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
            Allergies
          </Typography>
          <p
            style={{
              textAlign: "center",
            }}
          >
            //Get Started by Completing your Profile
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-14 pb-32">
            <label className="p-0 m-0 translate-y-5 font-bold">
              Any allergies
            </label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              id="allergies"
              onChange={(e) => {
                setAllergies(e.target.value);
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
            {allergies === "yes" ? (
              <>
                <label className="p-0 m-0 translate-y-5 font-bold">
                  Severity
                </label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  id="allergies"
                  onChange={(e) => {
                    setSeverity(e.target.value);
                  }}
                  sx={{
                    gap: "0px 20px",
                    marginTop: "20px",
                    justifyContent: "center",
                  }}
                >
                  <FormControlLabel
                    value="mild"
                    control={<Radio />}
                    label="Mild"
                  />
                  <FormControlLabel
                    value="moderate"
                    control={<Radio />}
                    label="Moderate"
                  />
                  <FormControlLabel
                    value="severe"
                    control={<Radio />}
                    label="Severe"
                  />
                </RadioGroup>
                <label className="p-0 m-0 translate-y-5 font-bold">
                  Experienced Allergic Run
                </label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  id="allergies"
                  onChange={(e) => {
                    setEAR(e.target.value);
                  }}
                  sx={{
                    gap: "0px 20px",
                    marginTop: "20px",
                    justifyContent: "center",
                  }}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <label className="p-0 m-0 translate-y-5 font-bold">
                  Diagnosed the allergy
                </label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  id="allergies"
                  onChange={(e) => {
                    setDTA(e.target.value);
                  }}
                  sx={{
                    gap: "0px 20px",
                    marginTop: "20px",
                    justifyContent: "center",
                  }}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <label className="p-0 m-0 translate-y-5 font-bold">
                  Type of allergy
                </label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  id="allergies"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  sx={{
                    gap: "0px 20px",
                    marginTop: "20px",
                    justifyContent: "center",
                  }}
                >
                  <FormControlLabel
                    value="dust"
                    control={<Radio />}
                    label="Dust"
                  />
                  <FormControlLabel
                    value="pollen"
                    control={<Radio />}
                    label="Pollen"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
                {type === false ||
                type === "dust" ||
                type === "pollen" ? null : (
                  <>
                    <TextField
                      label="Others"
                      variant="outlined"
                      placeholder="specify"
                      id="height"
                      onChange={(e) => setType(e.target.value)}
                    />
                  </>
                )}
              </>
            ) : null}
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

export default Allergies;
