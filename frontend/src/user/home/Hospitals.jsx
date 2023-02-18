import React, { useEffect, Component } from "react";
import { Theme } from "../../components/Theme";
import ChatIcon from "@mui/icons-material/Chat";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Typography,
  Fab,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";

const Card = ({ title, location, number, link }) => {
  return (
    <div
      className="flex justify-between w-[90vw] my-3 h-auto bg- rounded-lg shadow-lg p-3 py-5 bg-slate-200"
      style={{
        background:
          "linear-gradient(91.47deg, rgba(72, 173, 247, 0.39) 0.58%, rgba(0, 97, 167, 0.39) 95.65%)",
      }}
    >
      <div>
        <Typography
          variant="h4"
          component="h2"
          color="black"
          sx={{
            fontSize: 22,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          color="black"
          sx={{
            fontSize: 16,
          }}
        >
          {location}
        </Typography>
      </div>
      <div className="flex justify-center">
        <a href={"tel:" + number}>
          <Fab
            sx={{
              marginRight: "5px",
              background:
                "linear-gradient(91.47deg, #48ADF7 0.58%, #0061A7 95.65%)",
              width: "40px",
              height: "40px",
            }}
          >
            <CallIcon sx={{ color: "white" }} />
          </Fab>
        </a>
        <Fab
          onClick={() => {
            window.open(link);
          }}
          sx={{
            background:
              "linear-gradient(91.47deg, #48ADF7 0.58%, #0061A7 95.65%)",
            width: "40px",
            height: "40px",
          }}
        >
          <ArrowForwardIcon sx={{ color: "white" }} />
        </Fab>
      </div>
    </div>
  );
};

const Hospital = () => {
  const navigate = useNavigate();
  const speakHindi = () => {
    const utterance = new SpeechSynthesisUtterance(
      "संजीवनी में आपका स्वागत है, हम आपकी स्वास्थ्य सूचना का ट्रैक रखने और स्वस्थ रहने के लिए आपको जरूरी संसाधनों का उपयोग करने में आपकी मदद करने के लिए यहां हैं"
    );
    utterance.lang = "hi-IN";
    speechSynthesis.speak(utterance);
  };
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  return (
    <>
      <Theme>
        <div className="min-h-[100vh]">
          <div className="flex justify-between">
            <svg
              className="w-7 absolute inset-0 mt-5 ml-5"
              fill="#0061af"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              onClick={() => window.history.back()}
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <div className="flex justify-around">
              <RecordVoiceOverIcon
                sx={{
                  fontSize: "2rem",
                  position: "absolute",
                  top: "1.5rem",
                  right: "1rem",
                  cursor: "pointer",
                }}
                onClick={speakHindi}
              />
              <ChatIcon
                sx={{
                  fontSize: "2rem",
                  position: "absolute",
                  top: "1.5rem",
                  right: "5rem",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/user/chatbot")}
              />
            </div>
          </div>
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
            Hospital Portal
          </Typography>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Search Hospitals & Schedule Appointments
          </p>
          <div className="flex flex-col items-center justify-center">
            <TextField
              label="Search Hospital &nbsp;&nbsp;&nbsp;"
              variant="outlined"
              fullWidth
              sx={{
                my: 7,
                "& fieldset": {
                  borderColor: "#cfcfcf !important",
                  borderWidth: 2,
                  borderRadius: "15px !important",
                },
                "&.Mui-focused .MuiInputLabel-root": {
                  fontSize: 18,
                  color: "#cfcfcf !important",
                },
                "& .MuiInputLabel-root": {
                  fontSize: 18,
                  color: "#cfcfcf !important",
                },
                "& .MuiInputBase-input": {
                  fontSize: 18,
                  color: "#000 !important",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit" aria-label="send">
                      <SearchIcon
                        style={{
                          color: "#cfcfcf",
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Card
              title="Apollo Hospital"
              location="20mins | Churchgate, Mumbai"
              number="+91 9876543210"
              link="https://www.apollohospitals.com/"
            />
            <Card
              title="Fortis Hospital"
              location="30mins | Churchgate, Mumbai"
              number="+91 9876543210"
              link="https://www.fortishealthcare.com/"
            />
            <Card
              title="Ambani Hospital"
              location="40mins | Churchgate, Mumbai"
              number="+91 9876543210"
              link="https://www.ambanihospital.com/"
            />
            <Card
              title="Lilavati Hospital"
              location="50mins | Churchgate, Mumbai"
              number="+91 9876543210"
              link="https://www.lilavatihospital.com/"
            />
            <Card
              title="Nanavati Hospital"
              location="60mins | Churchgate, Mumbai"
              number="+91 9876543210"
              link="https://www.nanavati.org/"
            />
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Hospital;
