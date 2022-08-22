import { useEffect } from "react";

import PhotoCarousel from "./PhotoCarousel";
import Statement from "./Statement";
import GradeLevels from "./GradeLevels";
import Testimonials from "./Testimonials";
import Accreditations from "./Accreditations";

const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <PhotoCarousel />
      <Statement />
      <GradeLevels />
      <Testimonials />
      <Accreditations />
    </div>
  );
};

export default Home;
