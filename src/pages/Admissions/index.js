import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav";

import Tour from "./Tour";
import Tuition from "./Tuition";

const Admissions = () => {
  return (
    <div>
      <Showcase title="Admissions" />
      <PageNav sections={["Schedule Tour", "Tuition & Fees"]} />
      <Tour />
      <Tuition />
    </div>
  );
};

export default Admissions;
