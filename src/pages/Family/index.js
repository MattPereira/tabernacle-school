import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav/";
import Portals from "./Portals";
import Information from "./Information";
import TigerLife from "./TigerLife";
import Forms from "./Forms";
import AmazonSmile from "./AmazonSmile";

const Family = () => {
  return (
    <div>
      <Showcase title="Family" />
      <PageNav sections={["Portals", "Information", "Tiger Life", "Forms"]} />
      <Portals />
      <Information />
      <TigerLife />
      <Forms />
      <AmazonSmile />
    </div>
  );
};

export default Family;
