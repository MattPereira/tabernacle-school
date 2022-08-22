import React from "react";

import events from "../../../assets/images/family/information/calendar.pdf";

import { Container, Col, Row } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";

const SchoolCalendar = () => {
  //GOOGLE API KEY : AIzaSyBvYyqG8cjiq7D0oBz5akpG96qi40iWJfA
  //CALENDAR ID : tabernacle.school1@gmail.com
  //PUBLIC URL : https://calendar.google.com/calendar/embed?src=tabernacle.school1%40gmail.com&ctz=America%2FLos_Angeles
  //FULL CALENDAR DOCS: https://fullcalendar.io/docs#toc
  return (
    <section id="Calendar" className="py-5">
      <h2 className="display-4 text-center mb-3 pt-5">Calendar</h2>
      <hr className="section-hr mb-md-3" />
      <Container className="py-5">
        <Row className="justify-content-center text-end">
          <Col lg={10} xl={8}>
            <FullCalendar
              plugins={[googleCalendarPlugin, dayGridPlugin]}
              googleCalendarApiKey="AIzaSyBvYyqG8cjiq7D0oBz5akpG96qi40iWJfA"
              events={{ googleCalendarId: "tabernacle.school1@gmail.com" }}
            />
            <a
              href={events}
              className="btn btn-primary text-white fw-bold mt-5"
            >
              All Events
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SchoolCalendar;
