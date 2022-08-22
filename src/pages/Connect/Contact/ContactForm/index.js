import { Form, Button } from "react-bootstrap";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8c5vd8g",
        "template_ikpibjh",
        form.current,
        "heIj4fGneSLnzTwDG"
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
    <div>
      <h3 className="mb-3 fs-2 text-center">Send a Message</h3>
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
