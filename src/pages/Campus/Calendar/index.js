import { Container } from "react-bootstrap";

const Calendar = () => {
  return (
    <section id="calendar" className="py-5">
      <Container className="mb-5 text-center">
        <h2 className="display-4 text-center mb-3 pt-5">Calendar</h2>
        <hr className="section-hr mb-md-5" />
        <div className="d-none d-md-flex justify-content-center py-5">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showCalendars=0&showPrint=0&showNav=1&showTitle=0&showTabs=1&showTz=0&src=dGFiZXJuYWNsZS5zY2hvb2wxQGdtYWlsLmNvbQ&color=%23F09300"
            style={{ borderWidth: "0" }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="tabernacle-calendar"
          ></iframe>
        </div>
        <div className="py-5 text-center">
          <a
            href="/images/pdfs/Calendar-22-23.pdf"
            className="fs-3 btn btn-primary text-white"
          >
            <i className="fas fa-calendar-alt"></i>
            <strong>PDF Download</strong>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Calendar;
