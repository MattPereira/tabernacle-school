import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import admissionsShowcase from "../../assets/images/showcase/admissions.jpg";

import ScheduleTour from "./tour";
import Tuition from "./tuition";

export default function Admissions() {
  return (
    <div>
      <Showcase title="Admissions" image={admissionsShowcase} />
      <PageNav sections={["Schedule Tour", "Tuition & Fees"]} />
      <ScheduleTour />
      <Tuition />
    </div>
  );
}
