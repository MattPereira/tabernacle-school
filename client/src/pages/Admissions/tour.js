import { useForm } from "react-hook-form";

import SectionTitle from "../../components/SectionTitle";

import tourImg from "../../assets/images/about/gift/display.jpg";

import { styled } from "@mui/material/styles";
import { useState } from "react";

import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  Alert,
} from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "5px",
}));

export default function ScheduleTourForm() {
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
      const response = await fetch("/api/handleAdmissionsForm", {
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

  // put mui styles here instead of in the return statement

  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Schedule Tour" />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Box
              component="img"
              src={tourImg}
              sx={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="p">
                Request a tour of our campus by filling out the form below or
                calling us at <a href="tel:9256859169">925.685.9169</a>
              </Typography>
            </Box>

            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl fullWidth sx={{ height: "100%" }}>
                <StyledTextField
                  error={errors.name ? true : false}
                  id="name"
                  name="name"
                  label="Your Name"
                  variant="outlined"
                  type="text"
                  helperText={errors.name ? errors.name.message : " "}
                  required
                  {...register("name", {
                    required: "*Please tell us your name",
                  })}
                />

                <StyledTextField
                  error={errors.email ? true : false}
                  id="email"
                  name="email"
                  label="Your Email"
                  variant="outlined"
                  type="email"
                  helperText={errors.email?.message || " "}
                  required
                  {...register("email", {
                    required:
                      "*Please provide an email address so we can contact you",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "*Please enter a valid email address",
                    },
                  })}
                />

                <StyledTextField
                  error={errors.message ? true : false}
                  id="message"
                  name="message"
                  label="Your Availability*"
                  multiline
                  minRows={5}
                  helperText={errors.message ? errors.message.message : " "}
                  {...register("message", {
                    required:
                      "*Please let us know when you are available to visit",
                  })}
                  variant="outlined"
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
