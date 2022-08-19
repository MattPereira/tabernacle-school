import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./index.scss";

import { Row, Col, Button, Form, Container } from "react-bootstrap";

const Visit = () => {
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
    <>
      <section id="Schedule" className="py-5 bg-light">
        <h2 className="text-center section-title display-2 pt-5">
          Schedule Tour
        </h2>
        <hr className="section-hr mb-5" />
        <Container className="py-5">
          <Row className="justify-content-center align-items-center">
            <Col lg={7} className="mb-5">
              <div>
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
