import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav";
import History from "./History";
import Faculty from "./Faculty";
import Values from "./Values";
import Vision from "./Vision";
import GiftProgram from "./GiftProgram";
import LiveProgram from "./LiveProgram";

const About = () => {
  return (
    <div>
      <Showcase title="About" />
      <PageNav
        sections={["History", "Faculty", "Programs", "Values", "Vision"]}
      />
      <History />
      <Faculty />
      <LiveProgram />
      <GiftProgram />
      <Values />
      <Vision />
    </div>
  );
};

export default About;
