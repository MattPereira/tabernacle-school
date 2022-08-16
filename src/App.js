import { Route, Routes, Navigate } from "react-router-dom";

import "./App.scss";
import "./custom.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./common/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Campus from "./pages/Campus";
import Contact from "./pages/Contact";
import Family from "./pages/Family";
import Footer from "./common/Footer";

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
          <Route path="/family" element={<Family />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
