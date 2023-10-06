import campusShowcase from "../../assets/images/showcase/campus.jpg";
import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";

import Facilities from "./Facilities";
import Daycare from "./Daycare";
import Athletics from "./Athletics";
import Outreach from "./Outreach";

export default function Campus() {
  return (
    <div>
      <Showcase title="Campus" image={campusShowcase} />
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
