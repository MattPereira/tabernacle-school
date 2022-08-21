import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav";

import Tour from "./Tour";
import Tuition from "./Tuition";

import { useEffect } from "react";

const Admissions = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Showcase title="Admissions" />
      <PageNav sections={["Tuition & Fees", "Schedule Tour"]} />
      <Tuition />
      <Tour />
    </div>
  );
};

export default Admissions;
