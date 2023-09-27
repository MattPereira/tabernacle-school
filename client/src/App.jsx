import { Box } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";

import { ScrollToTop, Header, Footer } from "./components";

/***** The main pages accessible via the navbar *****/
import Homepage from "./pages/page";
import About from "./pages/About/page";
import ProfilePage from "./pages/About/[email]/page";
import AdmissionsPage from "./pages/Admissions/page";
import Academics from "./pages/Academics/page";
import Campus from "./pages/Campus/page";
import Connect from "./pages/Connect/page";
import Family from "./pages/Family/page";

/***** The pages accessible through family page's information section */
import ParentOrientation from "./pages/Family/parent-orientation/page";
import FactsHelp from "./pages/Family/facts/page";
import SupplyList from "./pages/Family/supply-list/page";
import Discipline from "./pages/Family/discipline/page";

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ScrollToTop>
        <Box sx={{ mt: { xs: "67px", md: 0 } }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/about/:id" element={<ProfilePage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/connect" element={<Connect />} />
            <Route
              path="/family/parent-orientation"
              element={<ParentOrientation />}
            />
            <Route path="/family/facts" element={<FactsHelp />} />
            <Route path="/family/supply-list" element={<SupplyList />} />
            <Route path="/family/discipline" element={<Discipline />} />
            <Route path="/family" element={<Family />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </ScrollToTop>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
