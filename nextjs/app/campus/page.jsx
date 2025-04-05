import { Showcase, PageNav } from "@/components/common";

import Facilities from "@/components/campus/Facilities";
import Daycare from "@/components/campus/Daycare";
import Athletics from "@/components/campus/Athletics";
import Outreach from "@/components/campus/Outreach";

export default async function Campus() {
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
      <Facilities />
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
