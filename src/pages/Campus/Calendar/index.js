import React from "react";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import { googleApiKey } from "../../../secrets";
import SectionTitle from "../../../common/SectionTitle";

import { Container, Box } from "@mui/material";

const SchoolCalendar = () => {
  //CALENDAR ID : tabernacle.school1@gmail.com
  //FULL CALENDAR DOCS: https://fullcalendar.io/docs#toc

  console.log("SECRET", googleApiKey);
  return (
    <section id="Calendar" className="py-5">
      <SectionTitle title="Calendar" />
      <Container sx={{ py: 5 }}>
        <FullCalendar
          plugins={[googleCalendarPlugin, dayGridPlugin]}
          googleCalendarApiKey={googleApiKey}
          events={{ googleCalendarId: "tabernacle.school1@gmail.com" }}
        />
        <Box sx={{ textAlign: "end" }}>
          <a
            href="https://drive.google.com/file/d/1GZ1bmXDNX4m3_PeZMA5e6ley9Z3n_RjU/view?usp=sharing"
            className="btn btn-primary text-white fw-bold mt-5"
          >
            See All Events
          </a>
        </Box>
      </Container>
    </section>
  );
};

export default SchoolCalendar;
