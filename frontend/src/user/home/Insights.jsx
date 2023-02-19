import React, { useEffect } from "react";
import { Theme } from "../../components/Theme";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChatIcon from "@mui/icons-material/Chat";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import TranslateIcon from "@mui/icons-material/Translate";
import { Typography } from "@mui/material";
import Graph1 from "../../assets/graph1.png";
import Graph2 from "../../assets/graph2.png";
import Graph3 from "../../assets/graph3.png";

const Graph = (props) => {
  return (
    <>
      <div className="w-[90vw] h-[auto] my-16 rounded-lg mx-auto -translate-x-2   ">
        <img src={props.image} />
      </div>
    </>
  );
};

const Insights = () => {
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
              <TranslateIcon
                sx={{
                  fontSize: "2rem",
                  position: "absolute",
                  top: "1.5rem",
                  right: "8rem",
                  cursor: "pointer",
                }}
                onClick={speakHindi}
              />
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
                  right: "4.5rem",
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
            Health Insights
          </Typography>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Health Insights based on User Profile
          </p>
          <Graph image={Graph1}/>
          <Graph image={Graph2}/>
          <Graph image={Graph3}/>
        </div>
      </Theme>
    </>
  );
};

export default Insights;
