import { Showcase, PageNav } from "@/components/common";

import Preschool from "@/components/academics/Preschool";
import Elementary from "@/components/academics/Elementary";
import MiddleSchool from "@/components/academics/MiddleSchool";
import TestResults from "@/components/academics/TestResults";
import CommonCore from "@/components/academics/CommonCore";
import ExpectedLearningResults from "@/components/academics/ExpectedLearningResults";

export default function AcademicsPage() {
  return (
    <div>
      <Showcase title="Academics" image="/academics/banner.jpg" />
      <PageNav
        sections={[
          "Preschool",
          "Elementary",
          "Middle School",
          "Test Results",
          "Common Core",
        ]}
      />
      <Preschool />
      <Elementary />
      <MiddleSchool />
      <TestResults />
      <CommonCore />
      <ExpectedLearningResults />
    </div>
  );
}
