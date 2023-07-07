import { Box } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

/***** The "main" pages accessible throught the navbar *****/
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ProfilePage from "./pages/About/Faculty/ProfilePage";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Campus from "./pages/Campus";
import Connect from "./pages/Connect";
import Family from "./pages/Family";

/***** The "/family/information" Pages */
import Orientation from "./pages/Family/Information/Orientation";
import FactsHelp from "./pages/Family/Information/FactsHelp";
import SupplyList from "./pages/Family/Information/SupplyList";
import Discipline from "./pages/Family/Information/Discipline";

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ScrollToTop>
        <Box sx={{ mt: { xs: "67px", md: 0 } }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/about/staff/:id" element={<ProfilePage />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/family/orientation" element={<Orientation />} />
            <Route path="/family/facts" element={<FactsHelp />} />
            <Route path="/family/supply-list" element={<SupplyList />} />
            <Route path="/family/discipline" element={<Discipline />} />
            <Route path="/family" element={<Family />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </ScrollToTop>
      <ScrollToTopButton />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
