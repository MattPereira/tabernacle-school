import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import familyShowcase from "../../assets/images/showcase/family.jpg";

import FamilyForms from "./forms";
import Services from "./services";
import Information from "./information";

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
