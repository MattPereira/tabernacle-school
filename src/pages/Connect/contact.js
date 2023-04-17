import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Accordion, Table } from "react-bootstrap";

import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import SectionTitle from "../../components/SectionTitle";

import { facultyData } from "../../data/facultyData.js";

import { contactServiceId } from "../../secrets";

export default function Contact() {
  return (
    <Box sx={{ py: 6 }}>
      <SectionTitle title="Contact" />
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={10} md={6}>
            <SendMessageForm />
          </Grid>
          <Grid item xs={12} sm={10} md={6}>
            <StaffDirectory />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function SendMessageForm() {
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
        <Typography variant="h5" align="center">
          Send Message
        </Typography>
      </Box>

      {status === true ? (
        <Alert severity="success">
          Message successfully sent! Tabernacle School's registrar will respond
          soon!
        </Alert>
      ) : status === false ? (
        <Alert severity="danger">
          Failed to send the message, please call{" "}
          <a href="tel:9256859169">(925) 685-9169</a> or email us directly at{" "}
          <a href="mailto:info@tbs.org">info@tbs.org</a>
        </Alert>
      ) : null}
      <form ref={form} onSubmit={sendEmail}>
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
      </form>
    </div>
  );
}

function StaffDirectory() {
  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" align="center">
          Staff Directory
        </Typography>
      </Box>

      <Accordion>
        {facultyData
          .filter((level) => level["grade"] !== "Board of Directors")
          .map((level, idx) => (
            <Accordion.Item eventKey={`${idx}`} key={level["grade"]}>
              <Accordion.Header>{level["grade"]}</Accordion.Header>
              <Accordion.Body>
                <Table>
                  <tbody>
                    {level["grade"] === "Elementary"
                      ? level.groups.map((group) => {
                          return group.staff.map((staff, idx) => (
                            <tr key={staff["name"]}>
                              <td>{staff["name"]}</td>
                              <td>{staff["title"]}</td>
                              <td>
                                <a href={`mailto:${staff["email"]}`}>
                                  {staff["email"]}
                                </a>
                              </td>
                            </tr>
                          ));
                        })
                      : level["staff"].map((staff, idx) => (
                          <tr key={staff["name"]}>
                            <td>{staff["name"]}</td>
                            <td>{staff["title"]}</td>
                            <td>
                              <a href={`mailto:${staff["email"]}`}>
                                {staff["email"]}
                              </a>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>
    </div>
  );
}
