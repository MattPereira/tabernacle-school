import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";

import { googleApiKey } from "../../secrets";
import SectionTitle from "../../common/SectionTitle";

import { Container, Box, Button } from "@mui/material";

import Showcase from "../../common/Showcase/Showcase";
import PageNav from "../../common/PageNav/";
import Athletics from "./Athletics";
import Daycare from "./Daycare";
import Outreach from "./Outreach";

export default function Campus() {
  return (
    <div>
      <Showcase title="Campus" />
      <PageNav sections={["Calendar", "Athletics", "Daycare", "Outreach"]} />
      <SchoolCalendar />
      <Athletics />
      <Daycare />
      <Outreach />
    </div>
  );
}

function SchoolCalendar() {
  //FULL CALENDAR DOCS: https://fullcalendar.io/docs#toc

  return (
    <Box id="Calendar" sx={{ py: 5 }}>
      <SectionTitle title="Calendar" />
      <Container sx={{ py: 5 }}>
        <FullCalendar
          plugins={[googleCalendarPlugin, dayGridPlugin]}
          googleCalendarApiKey={googleApiKey}
          events={{ googleCalendarId: "tabernacle.school1@gmail.com" }}
        />
        <Box sx={{ textAlign: "end", mt: 3 }}>
          <Button
            component="a"
            href="https://drive.google.com/file/d/1GZ1bmXDNX4m3_PeZMA5e6ley9Z3n_RjU/view?usp=sharing"
            variant="contained"
          >
            See All Events
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

// function Athletics() {}
