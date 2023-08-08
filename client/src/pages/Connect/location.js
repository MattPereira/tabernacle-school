import { Container, Box, Grid, Typography } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";

export default function Location() {
  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Location" />
      <Container>
        <Grid container spacing={2} sx={{ mb: { xs: 2, lg: 5 } }}>
          <Grid item xs={12} lg={9}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                paddingTop: "56.25%",
              }}
            >
              <iframe
                title="tabernacle location"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=4380%20Concord%20Blvd%20Concord,%20CA%2094521&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Grid container>
              <Grid item lg={12} md={6} sm={6} xs={6}>
                <Box sx={{ mb: 5 }}>
                  <Typography variant="h6">CAMPUS ADDRESS</Typography>
                  <p>
                    4380 Concord Blvd
                    <br />
                    Concord, CA 94521
                  </p>
                </Box>
                <Box sx={{ mb: 5 }}>
                  <Typography variant="h6">FRONT OFFICE</Typography>
                  <p>
                    8:30AM - 4:00PM
                    <br />
                    (925) 685-9169
                  </p>
                </Box>
              </Grid>
              <Grid item lg={12} md={6} sm={6} xs={6}>
                <div className="mb-5">
                  <Typography variant="h6">SCHOOL HOURS</Typography>
                  <p>8:00AM - 3:15PM</p>
                </div>
                <div className="mb-5">
                  <Typography variant="h6">DAYCARE HOURS</Typography>
                  <p>
                    6:45 am – 8:00 am
                    <br />
                    3:15 pm – 6:00 pm
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
