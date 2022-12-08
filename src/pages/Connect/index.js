import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav";
import Contact from "./Contact";
import Location from "./Location";
import Employment from "./Employment";

const Connect = () => {
  return (
    <div>
      <Showcase title={"Connect"} />
      <PageNav sections={["Contact", "Employment", "Location"]} />
      <Contact />
      <Employment />
      <Location />
    </div>
  );
};

export default Connect;
