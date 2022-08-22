import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav";
// import Introduction from "./Introduction";
import History from "./History";
import Faculty from "./Faculty";
import Values from "./Values";
import Vision from "./Vision";
import GiftProgram from "./GiftProgram";
import LiveProgram from "./LiveProgram";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Showcase title="About" extra="Us" />
      <PageNav
        sections={["History", "Faculty", "Values", "Vision", "Programs"]}
      />
      <History />
      <Faculty />
      <Values />
      <Vision />
      <LiveProgram />
      <GiftProgram />
    </div>
  );
};

export default About;
