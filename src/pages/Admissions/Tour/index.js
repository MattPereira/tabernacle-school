import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Form, Alert } from "react-bootstrap";
import SectionTitle from "../../../common/SectionTitle";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

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
    <Box id="Schedule" sx={{ py: 5 }}>
      <SectionTitle title="Schedule Tour" />
      <Container sx={{ py: { xs: 0, md: 5 } }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: { xs: 5, md: 10 } }}>
              <Typography variant="p">
                Request a tour of our campus by filling out the form below or
                calling us at <a href="tel:9256859169">925.685.9169</a>
              </Typography>
            </Box>

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
                id="message"
                name="message"
                label="Preferable dates and times"
                multiline
                minRows={5}
                variant="outlined"
                sx={{
                  width: "100%",
                  mb: 3,
                }}
              />

              {/* <Form.Group className="mb-3" controlId="name">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control type="text" name="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="fw-bold">Email</Form.Label>

                  <Form.Control type="email" name="email" required />
                </Form.Group> */}

              <Form.Group controlId="subject">
                <Form.Control
                  type="hidden"
                  name="subject"
                  defaultValue="Schedule a Tour"
                  required
                />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="message">
                  <Form.Label className="fw-bold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    name="message"
                    required
                  />
                </Form.Group> */}
              {status === true ? (
                <Alert variant="success">
                  Message successfully sent! Tabernacle School's registrar will
                  respond soon!
                </Alert>
              ) : status === false ? (
                <Alert variant="danger">
                  Failed to send the message, please try again, call{" "}
                  <a href="tel:9256859169">925.685.9169</a> or send an email to
                  our registrar at{" "}
                  <a href="mailto:LesleyN@tbs.org">LesleyN@tbs.org</a>
                </Alert>
              ) : null}
              <Box sx={{ textAlign: "end" }}>
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
              </Box>
            </Form>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Visit;
