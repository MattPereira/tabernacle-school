import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  Typography,
  Box,
  Container,
  Grid,
  CircularProgress,
} from "@mui/material";

const ProfilePage = () => {
  const [staff, setStaff] = useState(null);
  const { id } = useParams();

  useEffect(
    function getAllStaff() {
      async function getStaff() {
        setStaff(
          await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/staff-members?filters[email][$eqi]=${id}&populate=%2A`
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
      <Box
        sx={{
          display: "flex",
          height: "50vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  const { description, name, title_long, photos, profile_picture, email } =
    staff.data.data[0].attributes;

  const profile_picture_url = profile_picture.data.attributes.url;

  return (
    <Box>
      <Box sx={{ py: { xs: 5, lg: 10 } }}>
        <Container>
          <Box sx={{ mb: { xs: 5, lg: 10 }, textAlign: "center" }}>
            <Typography variant="h2">{name}</Typography>
            <Typography component="a" variant="p" href={`mailto:${email}`}>
              {email}
            </Typography>
          </Box>

          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} lg={4} textAlign="center">
              <Box
                sx={{
                  width: 250,
                  height: 250,
                  borderRadius: "50%",
                  overflow: "hidden",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={`${profile_picture_url}`}
                  alt="profile pic"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
              <Typography variant="h5">{title_long}</Typography>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Typography variant="p">{description}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ pb: 10, pt: 3 }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "start",
            flexWrap: "nowrap",
            overflowX: "auto",
            px: 2,
          }}
        >
          {photos.data &&
            photos.data.map((photo, idx) => (
              <Box
                component="img"
                src={`${photo.attributes.url}`}
                sx={{
                  maxHeight: "350px",
                  borderRadius: "15px",
                }}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
