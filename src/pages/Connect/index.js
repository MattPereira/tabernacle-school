import { useEffect } from "react";

import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav";
import Contact from "./Contact";
import Location from "./Location";
import Employment from "./Employment";

const Connect = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
