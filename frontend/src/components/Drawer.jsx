import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from "@mui/material";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
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
              mt: 10,
              mb: 5,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Eshan Trivedi
          </Typography>
      <List>
        {['My Profile','SOS-Emergency' , 'Hospitals', 'Inventory', 'Insights', 'Government Help', 'Consult Doctor', 'Government Policies'].map((text, index) => (
          <ListItem key={text} sx={{
                paddingX: "1.5rem",
                paddingY: "0.25rem",
                fontSize: "1.5rem",
          }}>
            <ListItemButton>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography
            variant="h4"
            component="h2"
            color="primary.contrastText"
            sx={{
              fontSize: "1.25rem",
              color: "#000",
              textAlign: "center",
              mt: 5,
              mb: 5,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Log Out
          </Typography>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
        <MenuIcon onClick={toggleDrawer(anchor, true)} sx={{
            fontSize: "2.5rem",
            position: "absolute",
            top: "1rem",
            left: "1rem",
            cursor: "pointer",
            
        }}/>
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