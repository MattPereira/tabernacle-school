import { Showcase, PageNav } from "@/components/common";

import Faculty from "@/components/about/Faculty";
import History from "@/components/about/History";
import Values from "@/components/about/Values";
import GiftProgram from "@/components/about/GiftProgram";
import LiveProgram from "@/components/about/LiveProgram";

export default function AboutPage() {
  return (
    <div>
      <Showcase title="About" image="/about/banner.jpg" />
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
