import React, { useState } from "react";
import { Theme } from "../../components/Theme";
import { Typography, Button } from "@mui/material";
import otpSVG from "../../assets/otpSVG.svg";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import apiPost from "../../utilities/apiCall";

const Verification = () => {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const [data, setData] = useState("");
  let { phone, type } = useParams();
  function submit(e) {
    e.preventDefault();
    if (OTP && phone) {
      if (type === "verification") {
        apiPost(
          "auth/verify",
          {
            Phone: phone,
            code: OTP,
          },
          setData
        );
      } else if (type === "2fa") {
        apiPost(
          "auth/2fa",
          {
            Phone: phone,
            code: OTP,
          },
          setData
        );
      }
    } else {
      alert("Please fill all the fields");
    }
  }
  React.useEffect(() => {
    if (data) {
      if (!data.err) {
        navigate("/user/dashboard");
      }
    }
  }, [data]);
  return (
    <>
      <Theme>
        <div className="overflow-hidden">
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
              mt: { mobile: 8, tablet: 5, laptop: 5 },
              mb: 1,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            OTP Verification
          </Typography>
          <div className="flex flex-col justify-center items-center mt-5">
            <img
              src={otpSVG}
              alt="illustration"
              className=" w-[65vw] sm:hidden"
            />
          </div>
          <Typography
            variant="h4"
            component="h2"
            color="primary.contrastText"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "900",
              color: "#000",
              textAlign: "left",
              mt: { mobile: 4, tablet: 5, laptop: 5 },
              mb: 1,
              ml: 4,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Enter OTP
          </Typography>
          <div className="w-full flex justify-start mt-2 ml-8">
            <p className="text-[15px]">
              A 6 digit OTP has been sent to you via SMS
            </p>
          </div>
          <div className="pl-8 pr-12 flex flex-col items-between gap-3 mt-10">
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              secure
              inputStyles={{
                width: "2.8rem",
                height: "2.8rem",
                borderRadius: "0.5rem",
                border: "1px solid #0061af",
                color: "#000",
                fontSize: "1.5rem",
                textAlign: "center",
                fontFamily: "Poppins, sans-serif",
                marginRight: "0.6rem",
              }}
            />
            <ResendOTP onResendClick={() => console.log("Resend clicked")} />
            <Button
              variant="contained"
              sx={{ mt: 5 }}
              onClick={(e) => submit(e)}
            >
              Verify
            </Button>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Verification;
