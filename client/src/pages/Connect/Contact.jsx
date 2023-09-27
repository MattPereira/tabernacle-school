import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

import LoadingSpinner from "../../components/LoadingSpinner";

import {
  SectionTitle,
  SectionWrapper,
  TextField,
  Toast,
  Button as TwButton,
} from "../../components";

import { Button, Grid, Typography, Box } from "@mui/material";

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
  const [status, setStatus] = useState({ type: null, message: null });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setStatus({ type: "info", message: "Sending..." });
    let response;
    try {
      response = await axios.post("/api/send-contact-email", data);
      reset(); // clear form inputs
      setStatus({ type: "success", message: response.data.message });
    } catch (error) {
      setStatus({ type: "error", message: error.response.data.message });
    }
  };

  return (
    <div>
      <div className="mb-5">
        <h4 className="font-copse text-3xl text-center">Send Message</h4>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          type="text"
          placeholder="enter your name"
          register={register}
          validations={{ required: "Please provide your name" }}
          errors={errors.name}
        />
        <TextField
          id="email"
          label="Email"
          type="text"
          placeholder="enter your email"
          register={register}
          validations={{ required: "Please provide your email" }}
          errors={errors.email}
        />
        <TextField
          id="message"
          label="Message"
          type="textarea"
          placeholder="enter your message"
          register={register}
          validations={{
            required: "Please provide a message",
            maxLength: 1000,
          }}
          errors={errors.message}
        />
        <div className="flex">
          <TwButton
            type="submit"
            className="w-full"
            disabled={status.type === "info"}
          >
            Submit
          </TwButton>
        </div>
        {status.type && (
          <div className="mt-5">
            <Toast variant={status.type} message={status.message} />
          </div>
        )}
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
      <div className="mb-10">
        <h4 className="font-copse text-3xl text-center">Staff Directory</h4>
      </div>
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
                      py: 2,
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
