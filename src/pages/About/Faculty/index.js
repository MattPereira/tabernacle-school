import { Container, Row, Col } from "react-bootstrap";
import Slides from "./Slides";
import Accordion from "./FacultyAccordion";

const Faculty = () => {
  return (
    <section id="Faculty" className="py-5 bg-light">
      <h2 className="display-3 text-center pt-5">Faculty</h2>
      <hr className="section-hr mb-5" />
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xl={10}>
            <Slides />

            <Accordion />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faculty;
