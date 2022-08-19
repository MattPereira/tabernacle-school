import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav/";
import Calendar from "./Calendar";
import Athletics from "./Athletics";
import Daycare from "./Daycare";
import Outreach from "./Outreach";

const Campus = () => {
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
