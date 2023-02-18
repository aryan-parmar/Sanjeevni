import React, { useEffect } from "react";
import { Theme } from "../../components/Theme";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Fab,
} from "@mui/material";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ChatIcon from "@mui/icons-material/Chat";
import Sanjeevni from "../../assets/sanjeevnicard.png";
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import EditIcon from '@mui/icons-material/Edit';

const Account = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  const speakHindi = () => {
    const utterance = new SpeechSynthesisUtterance(
      "आपके यहाँ अपने व्यक्तिगत अनुकूलित संजीवनी आईडी के साथ आपका उपयोगकर्ता डेटा मिलेगा"
    );
    utterance.lang = "hi-IN";
    speechSynthesis.speak(utterance);
  };
  return (
    <>
      <Theme>
        <div className="min-h-[100vh]">
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
                defaultValue={"en"}
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
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Your Profile
          </Typography>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Check Your Data here, Secured and Safe
          </p>
          <div className="mx-auto w-[90vw] mt-20 mb-20 h-auto">
            <img src={Sanjeevni} />
          </div>
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
            <Fab
              sx={{
                margin: 1,
                background:
                  "linear-gradient(91.47deg, #48ADF7 0.58%, #0061A7 95.65%)",
                width: "60px",
                height: "60px",
              }}
              download
            >
              <InstallMobileIcon
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
              onClick={() => navigate("/user/profile")}
            >
              <EditIcon
                sx={{
                  color: "#fff",
                  fontSize: "1.75rem",
                }}
              />
            </Fab>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Account;
