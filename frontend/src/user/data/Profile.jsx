import React from "react";
import { Theme } from "../../components/Theme";
import { Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const forms = [
  {
    title: "Personal Details",
    route: "personal",
  },
  {
    title: "Allergies",
    route: "allergies",
  },
  {
    title: "Chronic Illnesses",
    route: "illnesses",
  },
  {
    title: "Family History",
    route: "history",
  },
  {
    title: "Vaccination Records",
    route: "vaccination",
  },
  {
    title: "Previous Surgeries",
    route: "surgeries",
  },
  {
    title: "Insurance Details",
    route: "insurance",
  },
  {
    title: "Emergency Contacts",
    route: "emergency",
  },
];

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: "325px",
          height: "75px",
          background:
            "linear-gradient(91.47deg, rgba(72, 173, 247, 0.39) 0.58%, rgba(0, 97, 167, 0.39) 95.65%)",
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
            {props.title}
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
  return (
    <>
      <Theme>
        <div>
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
            Complete Profile
          </Typography>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Get Started by Completing your Profile
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-14 pb-14">
            {forms.map((data) => (
              <Card title={data.title} route={data.route} />
            ))}
            <Button
              variant="contained"
              sx={{ mt: 5 }}
              onClick={() => navigate("/user/dashboard")}
            >
              Complete   
            </Button>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Profile;
