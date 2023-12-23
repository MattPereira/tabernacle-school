import { Showcase, PageNav } from "@/components/common";

import Contact from "@/components/connect/Contact";
import Location from "@/components/connect/Location";
import Employment from "@/components/connect/Employment";

export default function ConnectPage() {
  return (
    <div>
      <Showcase title={"Connect"} image="/connect/banner.jpg" />
      <PageNav sections={["Contact", "Employment", "Location"]} />
      <Contact />
      <Employment />
      <Location />
    </div>
  );
}
