import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav";
import Introduction from "./Introduction";
import History from "./History";
import Faculty from "./Faculty";
import Values from "./Values";
import Vision from "./Vision";
import GiftProgram from "./GiftProgram";
import LiveProgram from "./LiveProgram";

const About = () => {
  return (
    <div>
      <Showcase title="About" extra="Us" />
      <PageNav
        sections={["History", "Faculty", "Values", "Vision", "Programs"]}
      />
      <Introduction />
      <History />
      <Faculty />
      <Values />
      <Vision />
      <GiftProgram />
      <LiveProgram />
    </div>
  );
};

export default About;
