import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav/";
import Preschool from "./Preschool/";
import Elementary from "./Elementary/";
import JuniorHigh from "./JuniorHigh/";
import Distance from "./Distance/";
import CommonCore from "./CommonCore";
import ExpectedLearning from "./ExpectedLearning";

const Academics = () => {
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
