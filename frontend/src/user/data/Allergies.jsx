import React, { useEffect } from "react";
import { Theme } from "../../components/Theme";
import {
  TextField,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Fab,
} from "@mui/material";
import apiPost from "../../utilities/apiCall";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChatIcon from "@mui/icons-material/Chat";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { apiCheckLogin } from "../../utilities/apiCall";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Allergies = () => {
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
  }, [a]);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  const speakHindi = () => {
    const utterance = new SpeechSynthesisUtterance(
      "कृपया अपनी एलर्जी निर्दिष्ट करें"
    );
    utterance.lang = "hi-IN";
    speechSynthesis.speak(utterance);
  };
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
            Please Specify your Allergies
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
                id="allergies"
              >
                Allergies
              </InputLabel>
              <Select
                labelId="blood-group"
                label="Allergies"
                id="allergies"
                onChange={(e) => {
                  setAllergies(e.target.value);
                }}
                sx={{
                  borderRadius: "15px",
                  "& fieldset": {
                    border: "2px solid gray",
                  },
                }}
                defaultValue=""
              >
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
                <MenuItem value={"unsure"}>Unsure</MenuItem>
              </Select>
            </FormControl>
            {allergies === "yes" ? (
              <>
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
                    id="allergies"
                  >
                    Severity
                  </InputLabel>
                  <Select
                    labelId="blood-group"
                    label="Allergies"
                    id="allergies"
                    onChange={(e) => {
                      setSeverity(e.target.value);
                    }}
                    sx={{
                      borderRadius: "15px",
                      "& fieldset": {
                        border: "2px solid gray",
                      },
                    }}
                    defaultValue=""
                  >
                    <MenuItem value={"mild"}>Mild</MenuItem>
                    <MenuItem value={"moderate"}>Moderate</MenuItem>
                    <MenuItem value={"severe"}>Severe</MenuItem>
                  </Select>
                </FormControl>
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
                    id="allergies"
                  >
                    Experienced Allergic Reactions?
                  </InputLabel>
                  <Select
                    labelId="blood-group"
                    label="Experienced Allergic Reactions? &nbsp; &nbsp; &nbsp;"
                    id="Experienced Allergic Reactions?"
                    onChange={(e) => {
                      setEAR(e.target.value);
                    }}
                    sx={{
                      borderRadius: "15px",
                      "& fieldset": {
                        border: "2px solid gray",
                      },
                    }}
                    defaultValue=""
                  >
                    <MenuItem value={"yes"}>Yes</MenuItem>
                    <MenuItem value={"no"}>No</MenuItem>
                  </Select>
                </FormControl>
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
                    id="allergies"
                  >
                    Diagnose the Allergy?
                  </InputLabel>
                  <Select
                    labelId="blood-group"
                    label="Experienced Allergic Reactions? &nbsp; &nbsp; &nbsp;"
                    id="Experienced Allergic Reactions?"
                    onChange={(e) => {
                      setDTA(e.target.value);
                    }}
                    sx={{
                      borderRadius: "15px",
                      "& fieldset": {
                        border: "2px solid gray",
                      },
                    }}
                    defaultValue=""
                  >
                    <MenuItem value={"yes"}>Yes</MenuItem>
                    <MenuItem value={"no"}>No</MenuItem>
                  </Select>
                </FormControl>
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
                id="allergies"
              >
                Type of Allergy
              </InputLabel>
              <Select
                labelId="blood-group"
                label="Type of Allergy &nbsp; &nbsp; &nbsp;"
                id="Type of Allergy"
                onChange={(e) => {
                  setType(e.target.value);
                }}
                sx={{
                  borderRadius: "15px",
                  "& fieldset": {
                    border: "2px solid gray",
                  },
                }}
                defaultValue=""
              >
                <MenuItem value={"dust"}>Dust</MenuItem>
                <MenuItem value={"pollen"}>Pollen</MenuItem>
                <MenuItem value={"other"}>Food</MenuItem>
                <MenuItem value={"other"}>Medicine</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>
                {type === false ||
                type === "dust" ||
                type === "pollen" ? null : (
                  <>
                    <TextField
                      label="Please Specify"
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
