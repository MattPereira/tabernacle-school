import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontWeight: "700",
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
    dark: {
      main: "#212121",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          // fontSize: { xs: "1rem", md: "1.5rem" },
          fontSize: "1rem",
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
