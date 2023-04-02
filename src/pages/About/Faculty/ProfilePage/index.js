import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Spinner } from "react-bootstrap";
import { Typography, Box, Container, Grid } from "@mui/material";

const ProfilePage = () => {
  const [staff, setStaff] = useState(null);
  const { id } = useParams();

  //ID IS CURRENTLY THE EMAIL ADDRESS, WILL EVENTUALLY CHANGE TO INTEGER ID NUMBER

  //https://tabernacle-school-strapi.herokuapp.com/api

  // const BASE_URL = "http://localhost:1337";
  const BASE_URL = "https://tabernacle-backend.herokuapp.com";

  useEffect(
    function getAllStaff() {
      async function getStaff() {
        setStaff(
          await axios.get(
            `${BASE_URL}/api/staff-members?filters[email][$eqi]=${id}&populate=%2A`
          )
        );
      }
      getStaff();
    },
    [id]
  );

  // Handles waiting for the async response from the API call
  if (!staff)
    return (
      <div className="loading-screen text-center">
        <Spinner animation="border" variant="primary" />
        <div className="text-center fs-4 loading-text text-primary">
          Loading Profile Page
        </div>
      </div>
    );

  console.log(staff);

  const { description, name, title_long, photos, profile_picture, email } =
    staff.data.data[0].attributes;

  console.log(staff.data.data[0].attributes);

  const profile_picture_url = profile_picture.data.attributes.url;

  console.log(typeof description);

  console.log("photos", photos);

  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h1">{name}</Typography>

        <Typography variant="h4" gutterBottom>
          {title_long}
        </Typography>

        <a href={`mailto:${email}`} className="lead fs-4">
          {email}
        </a>
      </Box>

      <Grid container alignItems="center" spacing={2} sx={{ mb: 5 }}>
        <Grid item xs={12} lg={6} textAlign="center">
          <Box
            component="img"
            src={`${profile_picture_url}`}
            alt="profile pic"
            sx={{
              width: { xs: "275px", sm: "325px", md: "400px", lg: "500px" },
              height: { xs: "275px", sm: "325px", md: "400px", lg: "500px" },
              borderRadius: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="p">{description}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="center">
        {photos.data &&
          photos.data.map((photo, idx) => (
            <Grid key={photo.id} item xs={12} sm={6} lg={6} textAlign="center">
              <Box
                component="img"
                src={`${photo.attributes.url}`}
                sx={{ width: "100%", borderRadius: "30px" }}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default ProfilePage;
