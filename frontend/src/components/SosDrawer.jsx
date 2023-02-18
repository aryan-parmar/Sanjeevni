import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SOS from "../assets/sos.png";

export default function SosDrawer() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        paddingY: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Typography
            variant="h4"
            component="h2"
            color="primary.contrastText"
            sx={{
                fontSize: "1.5rem",
                color: "#000",
                textAlign: "center",
                m: 2,
                mb: 4,
                fontFamily: "Poppins, sans-serif",
            }}
        >
            Emergency Message Sent
        </Typography>
      <Button variant="contained" className="ml-[50vw]">
        Cancel
      </Button>
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="my-5 w-full">
            <img
              onClick={toggleDrawer(anchor, true)}
              style={{
                marginLeft: "50vw",
                transform: "translateX(-50%)",
                width: "50%",
                height: "auto",
              }}
              src={SOS}
            />
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
