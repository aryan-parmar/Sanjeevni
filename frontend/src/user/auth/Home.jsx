import React from "react";
import { Theme } from "../../components/Theme";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Theme>
        <div className="container pt-10">
          <Typography
            variant="h3"
            component="h2"
            color="primary.contrastText"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mt: { mobile: "35vh", tablet: 5, laptop: 5 },
              mb: 2.5,
              textShadow: "0px 5px 4px rgba(0, 0, 0, 0.36)",
              fontFamily: "Poppins, sans-serif",
              letterSpacing: "0.1rem",
            }}
          >
            Sanjeevni
          </Typography>
          <Typography
            variant="h6"
            color="primary.contrastText"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "0.9rem",
              fontStyle: "italic",
              letterSpacing: "0.1rem",
              textAlign: "center",
              textShadow: "0px 5px 4px rgba(0, 0, 0, 0.36)",
              mb: 15,
            }}
          >
            "Digitalizing Health, Empowering Lives."
          </Typography>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-10">
            <Button
              variant="contained"
              sx={{
                width: "250px !important",
                background: "#f4f4f4",
                color: "#000",
              }}
              onClick={() => navigate("/user/register")}
            >
              Register
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "250px !important",
                background: "transparent !important",
                backdropFilter: "blur(50px)",
                border: "2px solid #f4f4f4",
                color: "#fff",
              }}
              onClick={() => navigate("/user/login")}
            >
              Login
            </Button>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Home;
