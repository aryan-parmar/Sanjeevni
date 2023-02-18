import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 500,
      laptop: 1024,
      desktop: 1200,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          width: "325px",
          height: "50px",
          fontSize: "20px",
          fontWeight: "700",
          textTransform: "none",
          letterSpacing: "0.1rem",
          borderRadius: "15px",
          background:
            "linear-gradient(91.47deg, #48ADF7 0.58%, #0061A7 95.65%);",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "17.5px auto",
          width: "325px",
          height: "40px",
          borderRadius: "15px",
          "& .MuiOutlinedInput-root": {
            padding: "0px 10px",
            "& fieldset": {
              borderColor: "grey",
              borderWidth: 2,
              borderRadius: "15px !important",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0061A7",
            },
          },
          "& .MuiInputBase-input": {
            fontSize: 18,
            color: "black",
          },
          "& .MuiInputLabel-root": {
            fontSize: 18,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          width: "325px",
          borderRadius: "15px",
          borderColor: "grey !important",
          borderWidth: "2 !important",
          borderRadius: "15px !important",
          "& .MuiOutlinedInput-root": {
            padding: "0px 10px",
            "& .fieldset": {

            },
            "&.Mui-focused fieldset": {
              borderColor: "#0061A7",
            },
          },
          "& .MuiInputBase-input": {
            fontSize: 18,
            color: "black",
          },
          "& .MuiInputLabel-root": {
            fontSize: 18,
          },
        },
      },
    },
  },
});

export function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
