import React, { useEffect } from "react";
import { Theme } from "../../../components/Theme";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChatIcon from "@mui/icons-material/Chat";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import TranslateIcon from "@mui/icons-material/Translate";
import { Typography } from "@mui/material";
import Card from "../../../components/Card";
import Education from "../../../assets/education.png";
import Programs from "../../../assets/program.png";
import Prevention from "../../../assets/prevention.png";
import Insurance from "../../../assets/insurance.png";
import Schemes from "../../../assets/schemes.png";
import Facilty from "../../../assets/facility.png";

const Dashboard = () => {
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
            Government Services
          </Typography>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Apply and Learn about Government Services
          </p>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 mt-10 pb-20">
            <Card
              title="Health Education"
              description="Education and awareness campaigns to promote health and prevent diseases. Image: People attending a health seminar or workshop"
              image={Education}
            />
            <Card
              title="National Health Programs"
              description="Government initiatives to address specific health issues faced by the population. Examples include Ayushman Bharat and National Tuberculosis "
              image={Programs}
            />
            <Card
              title="Public Health Facilities"
              description="Publicly funded facilities that provide healthcare services to the community, such as hospitals and clinics. Image: Hospital or clinic building."
              image={Facilty}
            />
            <Card
              title="Insurance Schemes"
              description="Health insurance programs designed to provide financial protection for healthcare expenses. Image: Person holding a health insurance card."
              image={Insurance}
            />
            <Card
              title="Subsidies and Cost Sharing"
              description="Government programs that provide financial assistance for healthcare services. Image: Person receiving financial assistance for medical treatment."
              image={Schemes}
            />
            <Card
              title="Disease Control & Prevention"
              description="Initiatives to prevent and control the spread of diseases through vaccination programs, awareness campaigns, and other interventions. Image: Person receiving a vaccination shot."
              image={Prevention}
            />
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Dashboard;
