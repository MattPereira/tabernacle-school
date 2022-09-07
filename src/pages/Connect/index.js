import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav";
import Contact from "./Contact";
import Location from "./Location";
import Employment from "./Employment";

const Connect = () => {
  return (
    <div>
      <Showcase title={"Connect"} />
      <PageNav sections={["Contact Us", "Location", "Employment"]} />
      <Contact />
      <Location />
      <Employment />
    </div>
  );
};

export default Connect;
