import React, { useEffect } from "react";
import { Theme } from "../../components/Theme";
import TemporaryDrawer from "../../components/Drawer";
import SosDrawer from "../../components/SosDrawer";
import ChatIcon from "@mui/icons-material/Chat";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import TranslateIcon from "@mui/icons-material/Translate";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { apiCheckLogin } from "../../utilities/apiCall";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Favicon from "../../assets/favicon.svg";
import Health from "../../assets/healthcare.png";
import Doctor from "../../assets/doctor.png";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Featured = () => {
  return (
    <>
      <iframe
        className="mx-auto mb-14 rounded-lg"
        width={334}
        height={200}
        src="https://www.youtube.com/embed/Drpe91VvMXk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        className="mx-auto mb-14 rounded-lg"
        width={334}
        height={200}
        src="https://www.youtube.com/embed/jp0yCBzaMSc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

const Card = (props) => {
  return (
    <>
      <div
        className="w-[85vw] h-[auto] p-5 my-14 rounded-lg mx-auto bg-slate-400"
        style={{
          background:
            "linear-gradient(91.47deg, rgba(72, 173, 247, 0.39) 0.58%, rgba(0, 97, 167, 0.39) 95.65%)",
        }}
      >
        <div className="p-3 h-16 w-16 bg-cyan-100 border-2 border-[#0465AB] rounded-full mx-auto absolute -translate-y-12 translate-x-28">
          <img src={props.image} />
        </div>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: "1.25rem",
            fontWeight: "700",
            color: "#000",
            textAlign: "center",
            pt: { mobile: 2, tablet: 5, laptop: 5 },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <span
            style={{
              color: "#0465AB",
              fontWeight: "900",
              fontSize: "1.75rem",
              letterSpacing: "0.1rem",
            }}
          >
            {props.amount}
            <br />
          </span>{" "}
          {props.title}
        </Typography>
      </div>
    </>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  function showNotification(data) {
    new Notification(data);
  }
  let [a, setA] = React.useState(null);
  React.useEffect(() => {
    if (!a) {
      apiCheckLogin(setA);
    }
  }, []);
  React.useEffect(() => {
    if (a) {
      if (a.err) {
        navigate("/user");
      }
      else{

        if (!("Notification" in window)) {
          console.log("Browser does not support desktop notification");
        } else {
          Notification.requestPermission();
        }
        const unsubscribe = onSnapshot(collection(db, "emergency"), (data) => {
          data.docChanges().forEach((change) => {
            console.log(change);
            if (change.type === "added") {
              if (a.user.user_id !== change.doc.data().user_id)
              showNotification(
                "Emergency Alert " +
                  change.doc.data().username +
                  " has requested for help"
              );
            }
          });
        });
      }
    }
  }, [a]);
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
            <TemporaryDrawer />
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
          <div className="flex flex-col items-start ml-10">
            <Typography
              variant="h4"
              component="h2"
              color="primary.contrastText"
              sx={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#000",
                textAlign: "center",
                pt: { mobile: 15, tablet: 5, laptop: 5 },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Hi,{" "}
              <span
                style={{
                  fontWeight: "900",
                  textTransform: "capitalize",
                }}
              >
                {a && a.user ? a.user.Username : ""}
              </span>
            </Typography>
            <p
              style={{
                fontSize: "1.25rem",
                textAlign: "center",
              }}
            >
              Welcome to <span>Sanjeevni</span>
            </p>
          </div>
          <SosDrawer />
          <Card
            image={Favicon}
            amount="22+ Crore"
            title="Sanjeevni IDs Created"
          />
          <Card
            image={Health}
            amount="69+ Thousand"
            title="Health Facilities"
          />
          <Card
            image={Doctor}
            amount="16+ Thousand"
            title="Health Professionals"
          />
          <Featured />
          <div className="mx-auto flex flex-col justify-center items-center mb-10">
            <h1
              style={{
                fontSize: "1.1rem",
              }}
            >
              More Information ...
            </h1>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Dashboard;
