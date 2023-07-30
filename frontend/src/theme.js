import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Cubano",
      letterSpacing: "0.15rem",
    },
    h2: {
      fontFamily: "Copse",
      fontSize: "3rem",
    },
    h3: {
      fontFamily: "Didact Gothic",
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "Copse",
    },
    h5: {
      fontFamily: "Didact Gothic",
      fontWeight: "bold",
    },
    h6: {
      fontFamily: "Didact Gothic",
      fontWeight: "bold",
    },
    p: {
      fontFamily: "Didact Gothic",
      fontSize: "20px",
    },
  },
  palette: {
    primary: {
      main: "#1565c0",
    },
    background: {
      alternate: "#eeeeee",
    },
    secondary: {
      main: "#c0ac15",
    },
    dark: {
      main: "#212121",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Didact Gothic",
          fontSize: "1.25rem",
          fontWeight: "bold",
          "&:hover": {
            color: "white",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
