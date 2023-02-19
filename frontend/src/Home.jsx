import React from "react";
import { Theme } from "./components/Theme";
import { useNavigate } from "react-router-dom";
import { apiCheckLogin } from "./utilities/apiCall";

const Home = () => {
  let navigate = useNavigate();
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
    }
  }, [a]);
  return (
    <>
      <Theme></Theme>
    </>
  );
};

export default Home;
