import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.scss";

import { Row, Col, Button, Form, Container, Alert } from "react-bootstrap";

import { scheduleServiceId } from "../../../secrets";

const Visit = () => {
  const form = useRef();

  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        scheduleServiceId,
        "template_7b0dke8",
        form.current,
        "JmFz1hF-3wfdGY2oT"
      )
      .then(
        () => {
          setStatus(true);
          window.location.reload(false);
        },
        (error) => {
          setStatus(false);
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section id="Schedule" className="py-5 bg-light">
        <h2 className="text-center section-title display-2 pt-5">
          Schedule Tour
        </h2>
        <hr className="section-hr mb-md-3" />
        <Container className="py-5">
          <Row className="justify-content-center align-items-center">
            <Col lg={6} className="mb-5">
              {/* <p className="lead">
                To schedule a tour, please call{" "}
                <a href="tel:9256859169">925.685.9169</a> or email our
                registrars at &nbsp;
                <a href="mailto:Lisam@tbs.org">Lisam@tbs.org</a> and{" "}
                <a href="mailto:Lesleyn@tbs.org">Lesleyn@tbs.org</a>.
              </p> */}
              {status === true ? (
                <Alert variant="success">
                  Message successfully sent! Tabernacle School's registrar will
                  respond soon!
                </Alert>
              ) : status === false ? (
                <Alert variant="danger">
                  Failed to send the message, please call{" "}
                  <a href="tel:9256859169">(925) 685-9169</a> or email our
                  registrar at{" "}
                  <a href="mailto:LesleyN@tbs.org">LesleyN@tbs.org</a>
                </Alert>
              ) : null}
              <div>
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control type="text" name="name" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label className="fw-bold">Email</Form.Label>

                    <Form.Control type="email" name="email" required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label className="fw-bold">Subject</Form.Label>

                    <Form.Control
                      type="subject"
                      name="subject"
                      defaultValue="Schedule a Tour"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label className="fw-bold">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      name="message"
                      required
                    />
                  </Form.Group>
                  <div className="text-end">
                    <Button
                      variant="primary"
                      type="submit"
                      className="text-white"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Visit;
