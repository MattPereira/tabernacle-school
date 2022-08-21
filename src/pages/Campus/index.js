import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav/";
import Calendar from "./Calendar";
import Athletics from "./Athletics";
import Daycare from "./Daycare";
import Outreach from "./Outreach";

import { useEffect } from "react";

const Campus = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Showcase title="Campus" extra="Life" />
      <PageNav sections={["Calendar", "Athletics", "Daycare", "Outreach"]} />
      <Calendar />
      <Athletics />
      <Daycare />
      <Outreach />
    </div>
  );
};

export default Campus;
