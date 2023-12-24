import { Showcase, PageNav } from "@/components/common";

import Facilities from "@/components/campus/Facilities";
import Daycare from "@/components/campus/Daycare";
import Athletics from "@/components/campus/Athletics";
import Outreach from "@/components/campus/Outreach";

async function getFacilitiesData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/facilities?populate=*`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Campus() {
  const facilitiesResponse = await getFacilitiesData();
  const facilitiesData = facilitiesResponse.data;

  return (
    <div>
      <Showcase title="Campus" image="/campus/banner.jpg" />
      <PageNav
        sections={[
          // "Calendar",
          "Facilities",
          "Athletics",
          "Daycare",
          "Outreach",
        ]}
      />
      {/* <SchoolCalendar /> */}
      <Facilities data={facilitiesData} />
      <Daycare />
      <Athletics />
      <Outreach />
    </div>
  );
}

// New plan for calendar: use Google Calendar API to fetch events from the school calendar
// https://developers.google.com/calendar/quickstart/js
// build my own UI for the calendar's events

function SchoolCalendar() {}
