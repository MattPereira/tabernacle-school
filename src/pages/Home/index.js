import PhotoCarousel from "./PhotoCarousel";
import Statement from "./Statement";
import GradeLevels from "./GradeLevels";
import Testimonials from "./Testimonials";
import Accreditations from "./Accreditations";

const Home = () => {
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
