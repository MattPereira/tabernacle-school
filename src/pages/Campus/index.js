// External Imports
import { useState, useEffect } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import { styled } from "@mui/material/styles";

// Internal Imports
import { googleApiKey } from "../../secrets";
import SectionTitle from "../../components/SectionTitle";
import campusShowcase from "../../assets/images/showcase/campus.jpg";

import {
  Container,
  Box,
  Grid,
  Typography,
  Paper,
  Link,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";

import athletics from "../../assets/images/campus/athletics.jpg";

import friends from "../../assets/images/campus/friends-feeding.jpg";
import thanksgiving from "../../assets/images/campus/thanksgiving-food.jpg";
import christmas from "../../assets/images/campus/operation-christmas.jpg";

import daycareImg from "../../assets/images/campus/daycare.jpg";

export default function Campus() {
  return (
    <div>
      <Showcase title="Campus" image={campusShowcase} />
      <PageNav
        sections={[
          "Calendar",
          "Facilities",
          "Athletics",
          "Daycare",
          "Outreach",
        ]}
      />
      <SchoolCalendar />
      <Facilities />
      <Athletics />
      <Daycare />
      <Outreach />
    </div>
  );
}

function SchoolCalendar() {
  //FULL CALENDAR DOCS: https://fullcalendar.io/docs#toc

  return (
    <Box sx={{ py: 6 }}>
      <SectionTitle title="Calendar" />
      <Container>
        <FullCalendar
          plugins={[googleCalendarPlugin, dayGridPlugin]}
          googleCalendarApiKey={googleApiKey}
          events={{ googleCalendarId: "tabernacle.school1@gmail.com" }}
        />
      </Container>
    </Box>
  );
}

function Facilities() {
  const [name, setName] = useState("Playground 1");
  const [facility, setFacility] = useState(null);

  const BASE_URL = "https://tabernacle-backend.herokuapp.com";

  const handleChange = (event) => {
    setName(event.target.value);
    setFacility(null);
  };

  useEffect(
    function getFacilityPhotos() {
      async function getPhotos() {
        try {
          const response = await axios.get(
            `${BASE_URL}/api/facilities?filters[name][$eqi]=${name}&populate=*`
          );

          setFacility(response.data.data[0].attributes);
        } catch (error) {
          console.log(error);
        }
      }
      getPhotos();
    },
    [name]
  );

  // Handles waiting for the async response from the API call
  const showLoadingSpinner = (
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

  return (
    <Box sx={{ py: 6, bgcolor: "background.alternate" }}>
      <SectionTitle title="Facilities" />
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
          <FormControl sx={{ width: "500px" }}>
            <InputLabel id="demo-simple-select-label">Selection</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={name}
              label="Selection"
              onChange={handleChange}
            >
              <MenuItem value="Playground 1" selected={true}>
                Playground 1
              </MenuItem>
              <MenuItem value="Playground 2">Playground 2</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {facility ? (
          <>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h3">{facility.title}</Typography>
              <Typography variant="p">{facility.description}</Typography>
            </Box>

            <Grid container spacing={2}>
              {facility.photos.data.map((photo) => {
                const { url, caption } = photo.attributes;
                return (
                  <Grid
                    item
                    key={photo.id}
                    xs={6}
                    md={6}
                    lg={4}
                    sx={{ textAlign: "center" }}
                  >
                    <Box
                      component="img"
                      src={url}
                      sx={{
                        width: "100%",
                        objectFit: "cover",
                        height: { xs: "125px", md: "200px", lg: "300px" },
                        borderRadius: "10px",
                      }}
                    />
                    <Typography variant="p">{caption}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </>
        ) : (
          showLoadingSpinner
        )}
      </Container>
    </Box>
  );
}

function Athletics() {
  return (
    <Box sx={{ py: 6 }}>
      <SectionTitle title="Athletics" />
      <Container>
        <Grid container spacing={5} alignItems="center">
          <Grid item md={6}>
            <Box sx={{ mb: 5 }}>
              <Typography variant="p">
                The focus behind the athletic program at Tabernacle is to
                instill Christ-centered character traits within the lives of our
                student athletes. While the program includes training to enhance
                the ability of the student and education to develop a better
                understanding of sports, at the end of each day, we strive to
                glorify Him in all that we do.
              </Typography>
            </Box>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h5" textAlign="center" gutterBottom>
                Physical Education
              </Typography>
              <Typography variant="p">
                Tabernacle provides Physical Education daily to Kindergarten
                through Eighth grade students. Our program gets students moving
                while introducing them to different sports and other physical
                activities. Special events include the Punt, Pass, and Kick
                competition and Track and Field Day.
              </Typography>
            </Box>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h5" textAlign="center" gutterBottom>
                Sports Programs
              </Typography>
              <Typography variant="p">
                Tabernacle offers sports programs for boys and girls in junior
                high. Tryout information, practice days and the league schedule
                can be found on our sports calendar.The Tigers are part of the
                Bay Area Christian School Athletic League. For more information
                on BACSAL visit <a href="bascal.org">bacsal.org</a>.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              component="img"
              src={athletics}
              sx={{ width: "100%", borderRadius: "30px" }}
              alt="Child running on track"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Daycare() {
  const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
    fontWeight: "bold",
    color: "white",
  }));

  return (
    <Box sx={{ py: 6, bgcolor: "background.alternate" }}>
      <SectionTitle title="Daycare" />
      <Container>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item lg={6}>
            <Box
              component="img"
              src={daycareImg}
              sx={{
                width: "100%",
                borderRadius: "30px",
                objectFit: "cover",
                height: "300px",
                mb: 3,
              }}
            />
            <Box sx={{ mb: 3 }}>
              <Typography variant="p">
                Tabernacle daycare is available to any enrolled student age 3
                years 9 months to a graduated eighth grader through August after
                graduation. Our program is child centered. The caring and
                compassionate staff build a family like atmosphere in which your
                children will thrive. Relationships among families, children and
                staff are the heart of the program.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={8} lg={6}>
            <Typography variant="h5" textAlign="center" gutterBottom>
              Hours
            </Typography>
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{ mb: 3, border: "1px solid black" }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "grey.900" }}>
                    <StyledHeaderCell>Type</StyledHeaderCell>
                    <StyledHeaderCell>Hours</StyledHeaderCell>
                    <StyledHeaderCell>Days</StyledHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Summer</TableCell>
                    <TableCell>6:45 am - 6:00 pm</TableCell>
                    <TableCell>Monday - Friday</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Before School</TableCell>
                    <TableCell>6:45 am – 8:00 am</TableCell>
                    <TableCell>Monday - Friday</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>After School</TableCell>
                    <TableCell>3:15 pm – 6:00 pm</TableCell>
                    <TableCell>Monday - Friday</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="h5" textAlign="center" gutterBottom>
              Rates
            </Typography>
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{ border: "1px solid #212121" }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "grey.900" }}>
                    <StyledHeaderCell>Type</StyledHeaderCell>
                    <StyledHeaderCell>Rate</StyledHeaderCell>
                    <StyledHeaderCell>Per</StyledHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Drop-In</TableCell>
                    <TableCell>$10</TableCell>
                    <TableCell>Hour</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Full-Time Summer</TableCell>
                    <TableCell>$700</TableCell>
                    <TableCell>Month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Full-Time School Year</TableCell>
                    <TableCell>$200</TableCell>
                    <TableCell>Month</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Outreach() {
  const outreachPrograms = [
    {
      title: "Friends Feeding Friends",
      description:
        "An outreach ministry that serves the homeless and low income people in our community in loving memory of Sarah Deniston.",
      image: friends,
      url: "http://gsconcord.com/outreach-ministries/friends-feeding-friends/",
    },
    {
      title: "Thanksgiving Food Drive",
      description:
        "Tabernacle partners with the Food Bank of Contra Costa and Solano during November to collect healthy and nonperishable foods.",
      image: thanksgiving,
      url: "https://www.foodbankccs.org/give-help/host-a-drive.html",
    },
    {
      title: "Operation Christmas Child",
      description:
        "Partner with Samaritan's Purse to provide Christmas gifts to children in need around the world.",
      image: christmas,
      url: "https://www.samaritanspurse.org/what-we-do/operation-christmas-child/",
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <SectionTitle title="Outreach" />
      <Container>
        <Grid container spacing={4}>
          {outreachPrograms.map((program) => (
            <Grid item xs={12} md={6} lg={4} key={program.title}>
              <Link
                href={program.url}
                target="_blank"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "30px",
                    height: "100%",
                    border: "1px solid #212121",

                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  <Box>
                    <Box
                      component="img"
                      src={program.image}
                      sx={{
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "30px",
                        height: "225px",
                        objectPosition: "center",
                      }}
                      alt=""
                    />
                  </Box>

                  <Box sx={{ p: 3 }}>
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {program.title}
                      </Typography>
                    </Box>
                    <Typography variant="p">{program.description}</Typography>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
