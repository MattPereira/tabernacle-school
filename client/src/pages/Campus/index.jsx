// External Imports
import { useState, useEffect } from "react";
import axios from "axios";

// Internal Imports
import SectionTitle from "../../components/SectionTitle";
import SectionWrapper from "../../components/SectionWrapper";
import campusShowcase from "../../assets/images/showcase/campus.jpg";
import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import athletics from "../../assets/images/campus/athletics.jpg";
import friends from "../../assets/images/campus/friends-feeding.jpg";
import thanksgiving from "../../assets/images/campus/thanksgiving-food.jpg";
import christmas from "../../assets/images/campus/operation-christmas.jpg";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Table, TableHead, TableRow } from "../../components/Table";

// prettier-ignore
import {Container,Box,Grid,Typography,Paper,FormControl,Select,MenuItem,Modal} from "@mui/material";

export default function Campus() {
  return (
    <div>
      <Showcase title="Campus" image={campusShowcase} />
      <PageNav
        sections={[
          // "Calendar",
          "Facilities",
          "Athletics",
          "Daycare",
          "Outreach",
        ]}
      />
      {/* <SchoolCalendar /> */}
      <Facilities />
      <Daycare />

      <Athletics />
      <Outreach />
    </div>
  );
}

// New plan for calendar: use Google Calendar API to fetch events from the school calendar
// https://developers.google.com/calendar/quickstart/js
// build my own UI for the calendar's events

// function SchoolCalendar() {}

function Facilities() {
  const [categoryList, setCategoryList] = useState(null);
  const [selection, setSelection] = useState("Track and Field");
  const [facility, setFacility] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentImgData, setCurrentImgData] = useState(null);

  const handleOpen = ({ caption, url }) => {
    setCurrentImgData({ caption, url });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setSelection(event.target.value);
    setFacility(null);
  };

  useEffect(
    function getFacilityPhotos() {
      async function getPhotos() {
        try {
          const categoryData = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/facilities`
          );

          const list = categoryData.data.data.map(
            (category) => category.attributes.name
          );

          setCategoryList(list);

          const response = await axios.get(
            `${
              import.meta.env.VITE_BASE_URL
            }/api/facilities?filters[name][$eqi]=${selection}&populate=*`
          );

          setFacility(response.data.data[0].attributes);
        } catch (error) {
          console.log(error);
        }
      }
      getPhotos();
    },
    [selection]
  );

  if (!categoryList) return <LoadingSpinner />;

  return (
    <SectionWrapper>
      <SectionTitle title="Facilities" />
      <Grid container spacing={4} alignItems="center" sx={{ mb: 5 }}>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Typography variant="p">
            Tabernacle school is committed to maintaining and improving campus
            infrastructure for the benefit of our students. Take a virtual tour
            right here!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Typography variant="h5" gutterBottom>
            Select a Category
          </Typography>

          <FormControl fullWidth>
            <Select
              id="area-select"
              value={selection ? selection : categoryList[0]}
              onChange={handleChange}
              sx={{ "& .MuiSelect-select": { bgcolor: "white" } }}
            >
              {categoryList.map((category) => {
                return (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {facility ? (
        <>
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
                    onClick={() => handleOpen({ url: url, caption: caption })}
                    component="img"
                    src={url}
                    sx={{
                      width: "100%",
                      objectFit: "cover",
                      height: { xs: "125px", md: "200px", lg: "225px" },
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  />
                  {/* <Typography variant="p">{caption}</Typography> */}
                </Grid>
              );
            })}
          </Grid>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              onClick={handleClose}
              sx={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <Box
                component="img"
                src={currentImgData ? currentImgData.url : null}
                sx={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Box>
          </Modal>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </SectionWrapper>
  );
}

function Athletics() {
  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Athletics" />
      <Container>
        <Box sx={{ mb: 5 }}>
          <Typography variant="p">
            The focus behind the athletic program at Tabernacle is to instill
            Christ-centered character traits within the lives of our student
            athletes. While the program includes training to enhance the ability
            of the student and education to develop a better understanding of
            sports, at the end of each day, we strive to glorify Him in all that
            we do.
          </Typography>
        </Box>
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid item md={6}>
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
          <Grid
            item
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={athletics}
              sx={{
                maxHeight: "500px",
                maxWidth: "100%",
                borderRadius: "30px",
              }}
              alt="Child running on track"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Daycare() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.alternate" }}>
      <SectionTitle title="Daycare" />
      <Container>
        <Box sx={{ mb: 7 }}>
          <Typography variant="p">
            Tabernacle daycare is available to any enrolled student age 3 years
            9 months to a graduated eighth grader through August after
            graduation. Our program is child centered. The caring and
            compassionate staff build a family like atmosphere in which your
            children will thrive. Relationships among families, children and
            staff are the heart of the program.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              component="img"
              src="/images/daycare.jpg"
              sx={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="mb-5">
              <h5 className="mb-2 text-2xl text-center font-gothic font-bold">
                Hours of Operation
              </h5>

              <Table className="bg-white">
                <TableHead headers={["Type", "Hours", "Days"]} />
                <tbody>
                  <TableRow
                    data={["Summer", "6:45 am - 6:00 pm", "Monday - Friday"]}
                  />
                  <TableRow
                    data={[
                      "Before School",
                      "6:45 am - 8:00 am",
                      "Monday - Friday",
                    ]}
                  />
                  <TableRow
                    data={[
                      "After School",
                      "3:15 pm – 6:00 pm",
                      "Monday - Friday",
                    ]}
                  />
                </tbody>
              </Table>
            </div>
            <div className="mb-5">
              <h5 className="mb-2 text-2xl text-center font-gothic font-bold">
                Rates
              </h5>
              <Table className="bg-white">
                <TableHead headers={["Type", "Rate", "Per"]} />
                <tbody>
                  <TableRow data={["Drop-In", "$10", "Hour"]} />
                  <TableRow data={["Full-Time Summer", "$700", "Month"]} />
                  <TableRow data={["Full-Time School Year", "$200", "Month"]} />
                </tbody>
              </Table>
            </div>
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
    <Box sx={{ py: 8, bgcolor: "background.alternate" }}>
      <SectionTitle title="Outreach" />
      <Container>
        <Grid container spacing={4} sx={{ py: 5 }}>
          {outreachPrograms.map((program) => (
            <Grid item xs={12} md={6} lg={4} key={program.title}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: "20px",
                  height: "100%",
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

                <Box sx={{ px: 3, py: 2 }}>
                  <Box sx={{ mb: 1 }}>
                    <a rel="noreferrer" href={program.url} target="_blank">
                      <Typography variant="h6">{program.title}</Typography>
                    </a>
                  </Box>
                  <Typography variant="p">{program.description}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
