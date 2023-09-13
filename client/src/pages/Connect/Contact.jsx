import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import LoadingSpinner from "../../components/LoadingSpinner";

import { SectionTitle, SectionWrapper, Input, Toast } from "../../components";

import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Alert,
  FormControl,
} from "@mui/material";

export default function Contact() {
  return (
    <SectionWrapper>
      <SectionTitle title="Contact" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SendMessageForm />
        </div>
        <div>
          <StaffDirectory />
        </div>
      </div>
    </SectionWrapper>
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
      const response = await fetch("/api/send-contact-email", {
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
        setStatusMessage(res.status);
      } else {
        setStatus("error");
        setStatusMessage(res.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" align="center">
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
  const [staffData, setStaffData] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(function fetchStaffData() {
    async function fetchData() {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BASE_URL
          }/api/staff-groups?_sort=id&populate=*`
        );

        const { data } = await response.json();

        setStaffData(data);
      } catch {
        console.log("error");
      }
    }
    fetchData();
  }, []);

  if (!staffData) return <LoadingSpinner />;

  staffData.sort((a, b) => a.id - b.id);
  const staffOptions = staffData.map((group) => group.attributes.name);

  let staffMembers;
  if (selected) {
    const selectedGroup = staffData.filter(
      (group) => group.attributes.name === selected
    )[0];

    const staffMembersData = selectedGroup.attributes.staff_members.data;

    staffMembers = staffMembersData.map((member) => ({
      id: member.id,
      name: member.attributes.name,
      titleShort: member.attributes.title_short,
      email: member.attributes.email,
    }));
  }

  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" align="center">
          Staff Directory
        </Typography>
      </Box>

      <Box
        sx={{
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {selected ? (
          <Box>
            <table style={{ width: "100%" }}>
              <tbody>
                {staffMembers.map((member) => (
                  <tr key={member.name}>
                    <td style={{ padding: "7px 2px" }}>
                      <Typography
                        variant="p"
                        sx={{ fontSize: { xs: "14px", md: "18px" } }}
                      >
                        {member.name}
                      </Typography>
                    </td>
                    <td>
                      <Typography
                        variant="p"
                        sx={{ fontSize: { xs: "14px", md: "18px" } }}
                      >
                        {member.titleShort}
                      </Typography>
                    </td>
                    <td>
                      <Typography
                        variant="p"
                        sx={{ fontSize: { xs: "14px", md: "18px" } }}
                        component="a"
                      >
                        {member.email}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Box sx={{ display: "flex", justifyContent: "end", mt: 3 }}>
              <Typography
                variant="p"
                onClick={() => setSelected(null)}
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "primary.main",
                }}
              >
                See all staff
              </Typography>
            </Box>
          </Box>
        ) : (
          <Grid container spacing="10">
            {staffOptions.map((option) => {
              let shortName;

              if (option === "Middle School") {
                shortName = "Jr High";
              } else if (option === "Physical Education") {
                shortName = "Phys Ed";
              } else {
                shortName = option;
              }

              return (
                <Grid item xs={6} key={option}>
                  <Button
                    variant="outlined"
                    onClick={() => setSelected(option)}
                    sx={{
                      borderRadius: "15px",
                      width: "100%",
                      fontFamily: "didact gothic",
                      fontWeight: "normal",
                      bgcolor: "background.alternate",
                      border: "none",
                      color: "black",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                        border: "none",
                      },
                    }}
                  >
                    {shortName}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </div>
  );
}
