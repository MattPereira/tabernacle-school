import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import admissionsShowcase from "../../assets/images/showcase/admissions.jpg";

import ScheduleTour from "./Tour";
import Tuition from "./Tuition";

export default function AdmissionsPage() {
  return (
    <div>
      <Showcase title="Admissions" image={admissionsShowcase} />
      <PageNav sections={["Schedule Tour", "Tuition & Fees"]} />
      <ScheduleTour />
      <Tuition />
    </div>
  );
}
