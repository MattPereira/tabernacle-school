import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import Contact from "./contact";

import { Container, Box, Grid, Typography, Button } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import employmentImg from "../../assets/images/connect/employment.jpg";
import connectShowcase from "../../assets/images/showcase/connect.jpg";

export default function ConnectPage() {
  return (
    <div>
      <Showcase title={"Connect"} image={connectShowcase} />
      <PageNav sections={["Contact", "Employment", "Location"]} />
      <Contact />
      <Employment />
      <Location />
    </div>
  );
}

function Employment() {
  return (
    <Box id="Employment" sx={{ py: 5, bgcolor: "background.alternate" }}>
      <SectionTitle title="Employment" />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <Box
              component="img"
              src={employmentImg}
              alt="join our team"
              sx={{ width: "100%", borderRadius: "30px", mb: 3 }}
            />

            <Box sx={{ mb: 3 }}>
              <Typography variant="p">
                We are hiring! Tabernacle School is hiring substitute teachers
                and support staff for the 2022-2023 school year. All elementary
                and middle school teaching staff must hold a bachelor's degree
                from an accredited university and be able to sign the school
                Statement of Faith. Tabernacle School is an evangelical
                Christian school focused on providing an excellent Christ
                centered education in spiritual, academic and extracurricular
                subjects. Our teachers and staff help students acquire the
                skills and attitudes necessary to be Faithful Followers of Jesus
                Christ, Life-Long Learners, Citizens of Character and Academic
                Achievers.{" "}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button
                component="a"
                href="https://drive.google.com/file/d/155waZK-5Jq3IwcDit2wTdlNtBAxpqeKW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  fontFamily: "Didact Gothic",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                Employment Application
              </Button>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5">
                Now Hiring Preschool Teachers!
              </Typography>
              <Typography variant="p">
                Tabernacle Preschool is looking for part time candidates who
                have at least six ECE units. Please contact Betty Mason at{" "}
                <a href="mailto:ElizabethM@tbs.org">ElizabethM@tbs.org</a> or{" "}
                <a href="tel:925-685-9169">925-685-9169</a> for more
                information. Applications may also be picked up in school
                office.
              </Typography>
            </Box>

            <Typography variant="h5">Required Application Materials</Typography>
            <Typography variant="p">
              <ol>
                <li>Completed employment application.</li>
                <li>Current Resume</li>
                <li>Copy of College Transcripts (For Faculty Positions)</li>
                <li>Three letters of reference</li>
              </ol>
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5">Spiritual Requirements</Typography>
              <Typography variant="p">
                Must be a professing believer of Jesus Christ and attend a
                Christ-centered church.
              </Typography>
            </Box>

            <Typography variant="h5">Equal Opportunity Employer</Typography>
            <Typography variant="p">
              Tabernacle School is an equal opportunity employer, dedicated to a
              policy of non-discrimination in employment on any basis including
              age, sex, color, race, creed, national origin, marital status,
              political belief or disability. Federal law prohibits the
              employment of unauthorized aliens. All persons hired must submit
              satisfactory proof of employment authorization and identity within
              three (3) days of being hired. Failure to submit such proof within
              the required time shall result in immediate employment
              termination.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Location() {
  return (
    <Box id="Location" sx={{ py: 5 }}>
      <SectionTitle title="Location" />

      <Container sx={{ py: 5 }}>
        <Grid container spacing={2}>
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
