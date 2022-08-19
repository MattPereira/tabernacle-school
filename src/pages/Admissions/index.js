import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav";

import Tour from "./Tour";
import Tuition from "./Tuition";

const Admissions = () => {
  return (
    <div>
      <Showcase title="ADMISSIONS" />
      <PageNav sections={["Tuition & Fees", "Schedule Tour"]} />
      <Tuition />
      <Tour />
    </div>
  );
};

export default Admissions;
