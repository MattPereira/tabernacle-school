import { Container, Row, Col } from "react-bootstrap";

import ContactAccordion from "./ContactAccordion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="Contact" className="py-5">
      <h2 className="display-4 text-center mb-3 pt-5">Contact Us</h2>
      <hr className="section-hr mb-md-5" />
      <Container className="py-5">
        <Row className="justify-content-around">
          <Col lg={5}>
            <ContactForm />
          </Col>
          <Col lg={5}>
            <ContactAccordion />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
