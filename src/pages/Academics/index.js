import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav/";
import Preschool from "./Preschool/";
import Elementary from "./Elementary/";
import JuniorHigh from "./JuniorHigh/";
import Distance from "./Distance/";
import CommonCore from "./CommonCore";
import ExpectedLearning from "./ExpectedLearning";

import { useEffect } from "react";

const Academics = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Showcase title="Academics" />
      <PageNav
        sections={[
          "Preschool",
          "Elementary",
          "Junior High",
          "Distance",
          "Common Core",
        ]}
      />
      <Preschool />
      <Elementary />
      <JuniorHigh />
      <Distance />
      <CommonCore />
      <ExpectedLearning />
    </div>
  );
};

export default Academics;
