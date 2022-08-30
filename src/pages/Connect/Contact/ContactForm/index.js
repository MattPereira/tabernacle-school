import { Form, Button, Alert } from "react-bootstrap";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { contactServiceId } from "../../../../secrets";

const ContactForm = () => {
  const form = useRef();

  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        contactServiceId,
        "template_ikpibjh",
        form.current,
        "heIj4fGneSLnzTwDG"
      )
      .then(
        () => {
          setStatus(true);
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          setStatus(false);
        }
      );
  };
  return (
    <div>
      <h3 className="mb-3 fs-2 text-center">Send a Message</h3>
      {status === true ? (
        <Alert variant="success">
          Message successfully sent! Tabernacle School's registrar will respond
          soon!
        </Alert>
      ) : status === false ? (
        <Alert variant="danger">
          Failed to send the message, please call{" "}
          <a href="tel:9256859169">(925) 685-9169</a> or email us directly at{" "}
          <a href="mailto:info@tbs.org">info@tbs.org</a>
        </Alert>
      ) : null}
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

          <Form.Control type="subject" name="subject" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label className="fw-bold">Message</Form.Label>
          <Form.Control as="textarea" rows="5" name="message" required />
        </Form.Group>
        <div className="text-end">
          <Button variant="primary" type="submit" className="text-white">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
