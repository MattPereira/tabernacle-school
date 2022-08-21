import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7qwuduh",
        "template_7b0dke8",
        form.current,
        "JmFz1hF-3wfdGY2oT"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <section id="Contact" className="py-5">
      <h2 className="display-4 text-center mb-3 pt-5">Contact Us</h2>
      <hr className="section-hr mb-md-5" />
      <Container className="py-5">
        <Row className="justify-content-around">
          <Col lg={5}>
            <h3 className="mb-3 fs-2 text-center">Send a Message</h3>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>

                <Form.Control type="email" name="email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="5" name="message" required />
              </Form.Group>
              <div className="text-end">
                <Button variant="primary" type="submit" className="text-white">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={5}>
            <h3 className="mb-3 fs-2 text-center">Contact our Staff</h3>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Preschool</Accordion.Header>
                <Accordion.Body>Name/Grade/Email</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Elementary</Accordion.Header>
                <Accordion.Body>Name/Grade/Email</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Junior High</Accordion.Header>
                <Accordion.Body>Name/Grade/Email</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Electives</Accordion.Header>
                <Accordion.Body>Name/Grade/Email</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Administration</Accordion.Header>
                <Accordion.Body>Name/Grade/Email</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
