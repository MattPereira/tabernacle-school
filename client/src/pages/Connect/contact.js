import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import LoadingSpinner from "../../components/LoadingSpinner";

import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import SectionTitle from "../../components/SectionTitle";

export default function Contact() {
  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Contact" />
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={10} lg={6}>
            <SendMessageForm />
          </Grid>
          <Grid item xs={12} sm={10} lg={6}>
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
  const [selected, setSelected] = useState("Select Grade");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  useEffect(function fetchStaffData() {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/staff-groups?populate=*`
        );

        const { data } = await response.json();

        setStaffData(data);
        // setSelected("Administration");
      } catch {
        console.log("error");
      }
    }
    fetchData();
  }, []);

  if (!staffData) return <LoadingSpinner />;

  const staffOptions = staffData.map((group) => group.attributes.name);

  const selectedGroup = selected
    ? staffData.filter((group) => group.attributes.name === selected)[0]
    : null;

  // We will now check if selectedGroup is defined before accessing its properties
  const staffMembersData = selectedGroup
    ? selectedGroup.attributes.staff_members.data
    : [];

  const staffMembers = staffMembersData.map((member) => ({
    id: member.id,
    name: member.attributes.name,
    titleShort: member.attributes.title_short,
    email: member.attributes.email,
  }));

  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" align="center">
          Staff Directory
        </Typography>
      </Box>

      <FormControl fullWidth variant="standard" sx={{ mb: 3 }}>
        <Select
          id="faculty-select"
          value={selected}
          onChange={handleChange}
          sx={{
            fontFamily: "didact gothic",
            fontSize: "1.25rem",
            fontWeight: "bold",
            pb: 1,
          }}
        >
          <MenuItem
            value="Select Grade"
            sx={{ fontFamily: "didact gothic", fontSize: "1.5rem" }}
          >
            Select Grade
          </MenuItem>

          {staffOptions.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{ fontFamily: "didact gothic", fontSize: "1.5rem" }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selected !== "Select Grade" ? (
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
      ) : (
        <Grid container spacing="6">
          {staffOptions.map((option) => (
            <Grid item xs={6} key={option}>
              <Button
                variant="outlined"
                onClick={() => setSelected(option)}
                sx={{
                  borderRadius: "25px",
                  width: "100%",
                  "&:hover": {
                    bgcolor: "primary.main",
                  },
                }}
              >
                {option}
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
