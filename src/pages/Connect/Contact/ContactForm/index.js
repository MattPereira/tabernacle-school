import { Form, Alert } from "react-bootstrap";

import { Typography, TextField, Box, Button } from "@mui/material";
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
      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" align="center">
          Send Message
        </Typography>
      </Box>

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
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          type="text"
          required
          sx={{
            width: "100%",
            mb: 3,
          }}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          required
          sx={{
            width: "100%",
            mb: 3,
          }}
        />

        <TextField
          id="subject"
          name="subject"
          label="Subject"
          variant="outlined"
          type="text"
          required
          sx={{
            width: "100%",
            mb: 3,
          }}
        />

        <TextField
          id="message"
          name="message"
          label="Message"
          required
          multiline
          minRows={5}
          variant="outlined"
          sx={{
            width: "100%",
            mb: 3,
          }}
        />
        <div className="text-end">
          <Button
            variant="contained"
            sx={{
              fontWeight: "bold",
              fontFamily: "Didact Gothic",
              textTransform: "none",
              fontSize: "1.2rem",
            }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
