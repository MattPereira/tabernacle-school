import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav";
import Introduction from "./Introduction";
import History from "./History";
import Faculty from "./Faculty";

const About = () => {
  return (
    <div>
      <Showcase title="ABOUT" />
      <PageNav
        sections={["History", "Faculty", "Values", "Vision", "Programs"]}
      />
      <Introduction />
      <History />
      <Faculty />
    </div>
  );
};

export default About;
