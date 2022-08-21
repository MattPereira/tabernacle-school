import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav/";
import Portals from "./Portals";
import Information from "./Information";
import TigerLife from "./TigerLife";
import Forms from "./Forms";
import AmazonSmile from "./AmazonSmile";

import { useEffect } from "react";

const Family = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
