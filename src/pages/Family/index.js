import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav/";
import Portals from "./Portals";
import Information from "./pages";

const Family = () => {
  return (
    <div>
      <Showcase title="Family" />
      <PageNav sections={["Portals", "Information", "Tiger Life", "Forms"]} />
      <Portals />
      <Information />
    </div>
  );
};

export default Family;
