import { Showcase, PageNav } from "@/components/common";
import {
  Faculty,
  GiftProgram,
  LiveProgram,
  History,
  Values,
} from "@/components/about";

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
