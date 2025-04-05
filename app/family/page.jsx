import { Showcase, PageNav } from "@/components/common";

import FamilyForms from "@/components/family/Forms";
import Services from "@/components/family/Services";
import Information from "@/components/family/Information";

export default function Family() {
  return (
    <div>
      <Showcase title="Family" image="/family/banner.jpg" />
      <PageNav sections={["Information", "Services", "Forms"]} />
      <Information />
      <Services />
      <FamilyForms />
    </div>
  );
}
