import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Cubano",
    },
    h2: {
      fontFamily: "Copse",
    },
    h3: {
      fontFamily: "Didact Gothic",
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "Copse",
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
    background: {
      alternate: "#eeeeee",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
