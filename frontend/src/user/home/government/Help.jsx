import React, { useEffect } from "react";
import { Theme } from "../../../components/Theme";
import {
  TextField,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Fab
} from "@mui/material";
import apiPost from "../../../utilities/apiCall";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

const Help = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  const speakHindi = () => {
    const utterance = new SpeechSynthesisUtterance(
      "अपने व्यक्तिगत विवरण भरें"
    );
    utterance.lang = "hi-IN";
    speechSynthesis.speak(utterance);
  };
  const dob = React.useRef();
  let gender = "";
  const address = React.useRef();
  const blood_group = React.useRef();
  let diet = "";
  const height = React.useRef();
  const weight = React.useRef();
  var smoker = "";
  var alcoholic = "";
  let [data, setData] = React.useState();
  function submit(e) {
    e.preventDefault();
    const formFields = {
      dob: dob.current.value,
      gender: gender,
      address: address.current.value,
      blood_group: blood_group.current.value,
      diet: diet,
      height: height.current.value,
      weight: weight.current.value,
      smoker: smoker,
      alcoholic: alcoholic,
    };
    apiPost("update/form", { formFields, formNum: 0 }, setData);
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
        <div>
          <div className="absolute top-0 right-0 m-5">
            <FormControl
              sx={{
                width: "150px",
              }}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  fontSize: 16,
                }}
              >
                Lang
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Lang"
                defaultValue={'en'}
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                }}
                sx={{
                  borderRadius: "15px",

                  "& fieldset": {
                    height: "50px",
                    border: "2px solid gray",
                  },
                }}
              >
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"hi"}>Hindi</MenuItem>
              </Select>
            </FormControl>
          </div>
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
              pt: { mobile: 15, tablet: 5, laptop: 5 },
              mb: 1,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Government Help
          </Typography>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Seek Medical help from the Government
          </p>
          <div className="w-[100vw] flex justify-center mt-5">
            <Fab
              sx={{
                margin: 1,
                background:
                  "linear-gradient(91.47deg, #48ADF7 0.58%, #0061A7 95.65%)",
                width: "60px",
                height: "60px",
              }}
            >
              <RecordVoiceOverIcon
                onClick={speakHindi}
                sx={{
                  color: "#fff",
                  fontSize: "1.75rem",
                }}
              />
            </Fab>
            <Fab
              sx={{
                margin: 1,
                background:
                  "linear-gradient(91.47deg, #48ADF7 0.58%, #0061A7 95.65%)",
                width: "60px",
                height: "60px",
              }}
              onClick={() => navigate("/user/chatbot")}
            >
              <ChatIcon
                sx={{
                  color: "#fff",
                  fontSize: "1.75rem",
                }}
              />
            </Fab>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-10 pb-20">
            <FormControl
              sx={{
                width: "325px",
                mt: 2,
              }}
            >
              <InputLabel
                sx={{
                  fontSize: 18,
                }}
                id="blood-group"
              >
                Type of Assistance
              </InputLabel>
              <Select
                labelId="blood-group"
                label="Type of Assistance"
                id="blood_group"
                inputRef={blood_group}
                sx={{
                  borderRadius: "15px",
                  "& fieldset": {
                    border: "2px solid gray",
                  },
                }}
                defaultValue=""
              >
                <MenuItem value={"A+"}>Financial</MenuItem>
                <MenuItem value={"A-"}>Medical</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Please Specify&nbsp;&nbsp;"
              variant="outlined"
              placeholder="in Kilograms"
              id="weight"
              inputRef={weight}
            />
            <TextField
              label="Reason for Assistance&nbsp;&nbsp;"
              variant="outlined"
              placeholder="in CentiMeters"
              id="height"
              inputRef={height}
            />
            <FormControl
              sx={{
                width: "325px",
                mt: 2,
              }}
            >
              <InputLabel
                sx={{
                  fontSize: 18,
                }}
                id="blood-group"
              >
                Recieving other Help?
              </InputLabel>
              <Select
                labelId="blood-group"
                label="Recieving other Help?"
                id="blood_group"
                inputRef={blood_group}
                sx={{
                  borderRadius: "15px",
                  "& fieldset": {
                    border: "2px solid gray",
                  },
                }}
                defaultValue=""
              >
                <MenuItem value={"A+"}>Yes</MenuItem>
                <MenuItem value={"A-"}>No</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Monthly Income&nbsp;&nbsp;"
              variant="outlined"
              placeholder="in Thousands"
              id="height"
              inputRef={height}
            />    
            <TextField
              label="Additional Comments&nbsp;&nbsp;"
              variant="outlined"
              placeholder="in Thousands"
              id="height"
              inputRef={height}
            />           
            <Button
              variant="contained"
              sx={{ mt: 10 }}
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

export default Help;
