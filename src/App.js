import { Route, Routes, Navigate } from "react-router-dom";

import "./App.scss";
import "./custom.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./common/NavBar/NavBar";
import Footer from "./common/Footer";

/** The NavBar Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Campus from "./pages/Campus";
import Contact from "./pages/Contact";
import Family from "./pages/Family";

/** The family/Information Pages */
import Orientation from "./pages/Family/pages/Orientation";
import FactsHelp from "./pages/Family/pages/FactsHelp";
import SupplyList from "./pages/Family/pages/SupplyList";
import UniformGuidelines from "./pages/Family/pages/UniformGuidelines";
import Discipline from "./pages/Family/pages/Discipline";

function App() {
  return (
    <div className="App page-container">
      <NavBar />
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/family/orientation" element={<Orientation />} />
          <Route path="/family/facts" element={<FactsHelp />} />
          <Route path="/family/supply_list" element={<SupplyList />} />
          <Route
            path="/family/uniform_guidelines"
            element={<UniformGuidelines />}
          />
          <Route path="/family/discipline" element={<Discipline />} />

          <Route path="/family" element={<Family />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
