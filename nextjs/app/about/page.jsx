import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import Faculty from "./Faculty";
import GiftProgram from "./GiftProgram";
import LiveProgram from "./LiveProgram";
import History from "./History";
import Values from "./Values";

export default function AboutPage() {
  return (
    <div>
      <Showcase title="About" image="/about/showcase.jpg" />
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
