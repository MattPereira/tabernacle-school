import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import Resources from "./Resources";
import Information from "./Information";
import TigerLife from "./TigerLife";
import Forms from "./Forms";
import AmazonSmile from "./AmazonSmile";

const Family = () => {
  return (
    <div>
      <Showcase title="Family" />
      <PageNav sections={["Information", "Resources", "Forms", "Tiger Life"]} />
      <Information />
      <Resources />

      <Forms />
      <TigerLife />

      <AmazonSmile />
    </div>
  );
};

export default Family;
