import { Route, Routes, Navigate } from "react-router-dom";

import { ScrollToTop, Header, Footer } from "./components";

/***** The main pages accessible via the navbar *****/
import Homepage from "./pages/page";
import About from "./pages/about/page";
import ProfilePage from "./pages/about/[email]/page";
import AdmissionsPage from "./pages/admissions/page";
import Academics from "./pages/academics/page";
import Campus from "./pages/campus/page";
import Connect from "./pages/connect/page";
import Family from "./pages/family/page";

/***** The pages accessible through family page's information section */
import ParentOrientation from "./pages/family/parent-orientation/page";
import FactsHelp from "./pages/family/facts/page";
import SupplyList from "./pages/family/supply-list/page";
import Discipline from "./pages/family/discipline/page";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop>
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
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
