import { Showcase, PageNav } from "@/components/common";

import Faculty from "@/components/about/Faculty";
import History from "@/components/about/History";
import Values from "@/components/about/Values";
import GiftProgram from "@/components/about/GiftProgram";
import LiveProgram from "@/components/about/LiveProgram";

async function getFacultyData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/staff-groups?populate[staff_members][populate][0]=profile_picture`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function AboutPage() {
  const facultyResponse = await getFacultyData();
  const facultyData = facultyResponse.data;

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
      <Faculty facultyData={facultyData} />
      <Values />
      <GiftProgram />
      <LiveProgram />
    </div>
  );
}
