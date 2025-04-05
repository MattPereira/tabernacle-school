import { Showcase, PageNav } from "@/components/common";

import ScheduleTour from "@/components/admissions/ScheduleTour";
import Tuition from "@/components/admissions/Tuition";

export default function AdmissionsPage() {
  return (
    <div>
      <Showcase title="Admissions" image="/admissions/banner.jpg" />
      <PageNav sections={["Schedule Tour", "Tuition & Fees"]} />
      <ScheduleTour />
      <Tuition />
    </div>
  );
}
