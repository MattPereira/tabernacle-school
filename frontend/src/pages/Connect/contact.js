import { useForm } from "react-hook-form";
import { useState } from "react";

import { Accordion, Table } from "react-bootstrap";

import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
  FormControl,
} from "@mui/material";
import SectionTitle from "../../components/SectionTitle";

import { facultyData } from "../../data/facultyData.js";

export default function Contact() {
  return (
    <Box sx={{ py: 8 }}>
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
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/handleContactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (response.ok) {
        reset();
        setStatus("success");
        setStatusMessage(res.message);
      } else {
        setStatus("error");
        setStatusMessage("Server Error. Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" align="center">
          Send Message
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <FormControl fullWidth>
          <TextField
            error={errors.name ? true : false}
            id="name"
            name="name"
            label="Your Name"
            variant="outlined"
            type="text"
            helperText={errors.name ? errors.name.message : " "}
            {...register("name", { required: "*Please tell us your name" })}
            required
          />

          <TextField
            error={errors.email ? true : false}
            id="email"
            name="email"
            label="Your Email"
            variant="outlined"
            type="email"
            helperText={errors.email?.message || " "}
            required
            {...register("email", {
              required: "*Please provide an email address so we can respond",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "*Please enter a valid email address",
              },
            })}
          />

          <TextField
            error={errors.subject ? true : false}
            id="subject"
            name="subject"
            label="Subject"
            variant="outlined"
            type="text"
            required
            helperText={errors.subject ? errors.subject.message : " "}
            {...register("subject", {
              required: "*Please enter a subject for your message",
            })}
          />

          <TextField
            error={!!errors.message}
            id="message"
            name="message"
            label="Message"
            required
            multiline
            minRows={5}
            variant="outlined"
            helperText={errors.message ? errors.message.message : " "}
            {...register("message", { required: "*Please enter a message" })}
          />
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Box sx={{ flexGrow: 1, mr: 2 }}>
            {status && <Alert severity={status}>{statusMessage}</Alert>}
          </Box>
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
