import { Showcase, PageNav } from "../../components";

import academicsShowcaseImg from "../../assets/images/showcase/academics.jpg";

import Preschool from "./Preschool";
import Elementary from "./Elementary";
import MiddleSchool from "./MiddleSchool";
import DistanceLearning from "./DistanceLearning";
import CommonCore from "./CommonCore";
import ExpectedLearningResults from "./ExpectedLearningResults";

export default function AcademicsPage() {
  return (
    <div>
      <Showcase title="Academics" image={academicsShowcaseImg} />
      <PageNav
        sections={[
          "Preschool",
          "Elementary",
          "Middle School",
          "Distance Learning",
          "Common Core",
        ]}
      />
      <Preschool />
      <Elementary />
      <MiddleSchool />
      <DistanceLearning />
      <CommonCore />
      <ExpectedLearningResults />
    </div>
  );
}
