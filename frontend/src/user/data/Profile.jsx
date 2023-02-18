import React, { useEffect, useRef } from "react";
import { Theme } from "../../components/Theme";
import {
  Typography,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Fab,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

const forms = [
  {
    title: "personal profile",
    route: "personal",
    complete: false,
  },
  {
    title: "allergies profile",
    route: "allergies",
    complete: false,
  },
  {
    title: "illnesses profile",
    route: "illnesses",
    complete: false,
  },
  {
    title: "history profile",
    route: "history",
    complete: false,
  },
  {
    title: "vaccination profile",
    route: "vaccination",
    complete: false,
  },
  {
    title: "surgeries profile",
    route: "surgeries",
    complete: false,
  },
  {
    title: "insurance profile",
    route: "insurance",
    complete: false,
  },
  {
    title: "emergency profile",
    route: "emergency",
    complete: false,
  },
];

const Card = (props) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: "325px",
          height: "75px",
          background: !props.complete
            ? "linear-gradient(91.47deg, rgba(72, 173, 247, 0.39) 0.58%, rgba(0, 97, 167, 0.39) 95.65%)"
            : "linear-gradient(91.47deg, rgba(50, 253, 70, 0.5) 0.58%, rgba(17, 174, 3, 0.5) 95.65%)",
          border: "2px solid #0465AB",
          borderRadius: "13px",
        }}
      >
        <div className="flex justify-between items-center">
          <Typography
            variant="h4"
            component="h2"
            color="primary.contrastText"
            sx={{
              fontSize: "1.25rem",
              color: "#000",
              textAlign: "left",
              pt: 2.5,
              pl: 2,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {t(props.title)}
          </Typography>
          <svg
            style={{
              marginTop: "1.25rem",
              marginRight: 20,
            }}
            className="w-7 rotate-180"
            fill="#0061af"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={() => navigate(`/user/profile/${props.route}`)}
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
      </Paper>
    </>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  const speakHindi = () => {
    const utterance = new SpeechSynthesisUtterance("प्रोफ़ाइल पूरा करके शुरू करें");
    utterance.lang = "hi-IN";
    speechSynthesis.speak(utterance);
  };
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
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                }}
                sx={{
                  borderRadius: "15px",

                  "& fieldset": {
                    height: "45px",
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
            {t("complete your profile")}
          </Typography>
          <p
            style={{
              textAlign: "center",
            }}
          >
            {t("get started profile")}
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
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 pb-10">
            {forms.map((data) => (
              <Card
                key={data.route}
                title={data.title}
                route={data.route}
                complete={data.complete}
              />
            ))}
            <Button
              variant="contained"
              sx={{ mt: 5 }}
              onClick={() => navigate("/user/dashboard")}
            >
              {t("complete profile")}
            </Button>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Profile;
