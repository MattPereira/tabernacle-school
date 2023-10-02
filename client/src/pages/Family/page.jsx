import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import familyShowcase from "../../assets/images/showcase/family.jpg";

import FamilyForms from "./Forms";
import Services from "./Services";
import Information from "./Information";

export default function Family() {
  return (
    <div>
      <Showcase title="Family" image={familyShowcase} />
      <PageNav sections={["Information", "Services", "Forms"]} />
      <Information />
      <Services />
      <FamilyForms />
    </div>
  );
}
