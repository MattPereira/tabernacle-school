import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import Faculty from "./Faculty";
import GiftProgram from "./GiftProgram";
import LiveProgram from "./LiveProgram";

import History from "./History";
import Values from "./Values";

import aboutShowcaseImg from "../../assets/images/showcase/about.jpg";

export default function AboutPage() {
  return (
    <div>
      <Showcase title="About" image={aboutShowcaseImg} />
      <PageNav
        sections={[
          "History",
          "Faculty",
          "Values",
          "Gift Program",
          "Live Program",
        ]}
      />
      <History />
      <Faculty />
      <Values />
      <GiftProgram />
      <LiveProgram />
    </div>
  );
}
