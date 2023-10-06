import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import connectShowcase from "../../assets/images/showcase/connect.jpg";

import Contact from "./Contact";
import Location from "./Location";
import Employment from "./Employment";

export default function ConnectPage() {
  return (
    <div>
      <Showcase title={"Connect"} image={connectShowcase} />
      <PageNav sections={["Contact", "Employment", "Location"]} />
      <Contact />
      <Employment />
      <Location />
    </div>
  );
}
