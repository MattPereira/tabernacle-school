import { Showcase, PageNav } from "@/components/common";

import Contact from "@/components/connect/Contact";
import Location from "@/components/connect/Location";
import Employment from "@/components/connect/Employment";

async function getDirectoryData() {
  const endpointUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/staff-groups?_sort=id&populate=*`;
  const res = await fetch(endpointUrl);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ConnectPage() {
  const directoryResponse = await getDirectoryData();
  const directoryData = directoryResponse.data;

  return (
    <div>
      <Showcase title={"Connect"} image="/connect/banner.jpg" />
      <PageNav sections={["Contact", "Employment", "Location"]} />
      <Contact directoryData={directoryData} />
      <Employment />
      <Location />
    </div>
  );
}
