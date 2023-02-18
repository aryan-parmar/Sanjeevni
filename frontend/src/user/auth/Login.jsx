import React, { useEffect, useRef } from "react";
import { Theme } from "../../components/Theme";
import { Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import apiPost from "../../utilities/apiCall";
import { useTranslation } from 'react-i18next';

const Login = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  let [data, setData] = React.useState(null);
  let phone = useRef();
  let password = useRef();
  useEffect(()=>{
    i18n.changeLanguage('hi')
  },[])
  function submit(e) {
    e.preventDefault();
    if (phone.current.value && password.current.value) {
      apiPost(
        "auth/login",
        {
          Phone: phone.current.value,
          Password: password.current.value,
        },
        setData
      );
    } else {
      alert("Please fill all the fields");
    }
  }
  React.useEffect(() => {
    if (data) {
      if (!data.err) {
        navigate("/user/verification/" + phone.current.value+ "/2fa");
      }
    }
  }, [data]);
  return (
    <>
      <Theme>
        <div className="container pt-20 overflow-hidden">
          <svg
            className="w-7 absolute inset-0 mt-5 ml-5"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={() => window.history.back()}
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          <div className="bg-[#f5f5f5] rounded-3xl flex flex-col justify-start items-center h-[90vh] mt-[10vh]">
            <Typography
              variant="h4"
              component="h2"
              color="primary.contrastText"
              sx={{
                fontSize: "2.25rem",
                fontWeight: "900",
                color: "#000",
                textAlign: "center",
                mt: { mobile: 10, tablet: 5, laptop: 5 },
                mb: 1,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {t('welcome')}
            </Typography>
            <Typography
              variant="h6"
              color="primary.contrastText"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1rem",
                color: "#000",
                letterSpacing: "0.1rem",
                textAlign: "center",
                mb: 5,
              }}
            >
              {t("Login to your account")}
            </Typography>
            <TextField
              label={t("Phone Number")}
              variant="outlined"
              type={"number"}
              inputRef={phone}
            />
            <TextField
              label={t("Password")}
              variant="outlined"
              type="password"
              inputRef={password}
            />
            <div className="w-[310px] flex justify-end mt-1">
              <p className="text-[15px]">{t("Forgot Password")}?</p>
            </div>
            <Button
              variant="contained"
              sx={{
                mt: 8,
              }}
              onClick={(e) => submit(e)}
            >
              {t("Login")}
            </Button>
            <div className="w-[310px] flex justify-center mt-2">
              <p className="text-[15px]">
                {t("Don't have an account")}?{" "}
                <Link
                  to="/user/register"
                  style={{
                    color: "#0061af",
                  }}
                >
                  {t("Register")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Login;
