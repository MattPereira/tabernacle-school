import "./custom.scss";

import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./common/ScrollToTop";

import NavBar from "./common/NavBar/NavBar";
import Footer from "./common/Footer";

/***** The "main" pages accessible throught the navbar *****/
import Home from "./pages/Home";
import About from "./pages/About";
import ProfilePage from "./pages/About/Faculty/ProfilePage";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Campus from "./pages/Campus";
import Connect from "./pages/Connect";
import Family from "./pages/Family";
import Renweb from "./pages/Renweb";

/***** The "/family/information" Pages */
import Orientation from "./pages/Family/Information/Orientation";
import FactsHelp from "./pages/Family/Information/FactsHelp";
import SupplyList from "./pages/Family/Information/SupplyList";
import UniformGuidelines from "./pages/Family/Information/UniformGuidelines";
import Discipline from "./pages/Family/Information/Discipline";

/***** The family/tigerlife Pages */
import OrientationVideo from "./pages/Family/TigerLife/OrientationVideo";

import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

function App() {
  let theme = createTheme({
    typography: {
      h1: {
        fontFamily: "Cubano",
      },
      h2: {
        fontFamily: "Copse",
      },
      h3: {
        fontFamily: "Copse",
        fontSize: "2.5rem",
      },
      h4: {
        fontFamily: "Copse",
      },
      p: {
        fontFamily: "Didact Gothic",
        fontSize: "20px",
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/about/staff/:id" element={<ProfilePage />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/renweb" element={<Renweb />} />
          <Route
            path="/family/uniform_guidelines"
            element={<UniformGuidelines />}
          />
          <Route path="/family/orientation" element={<Orientation />} />
          <Route
            path="/family/orientation_video"
            element={<OrientationVideo />}
          />
          <Route path="/family/facts" element={<FactsHelp />} />
          <Route path="/family/supply_list" element={<SupplyList />} />
          <Route path="/family/discipline" element={<Discipline />} />
          <Route path="/family" element={<Family />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
