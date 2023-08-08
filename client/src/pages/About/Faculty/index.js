// import Slides from "./Slides";
import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router-dom";
// prettier-ignore
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useEffect, useState } from "react";
import axios from "axios";

// faculty slideshow
// import Carousel from "react-material-ui-carousel";
// import slide1 from "../../../assets/images/about/slides/slide1.jpg";
// import slide2 from "../../../assets/images/about/slides/slide2.jpg";
// import slide3 from "../../../assets/images/about/slides/slide3.jpg";
// import slide4 from "../../../assets/images/about/slides/slide4.jpg";
// import slide5 from "../../../assets/images/about/slides/slide5.jpg";
// import slide6 from "../../../assets/images/about/slides/slide6.jpg";

export default function Faculty() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.alternate" }}>
      <SectionTitle title="Faculty" />
      <Container>
        {/* <Slides /> */}
        <SelectGrade />
      </Container>
    </Box>
  );
}

function SelectGrade() {
  const [facultyData, setFacultyData] = useState(null);
  const [selection, setSelection] = useState(null);
  const theme = useTheme();

  useEffect(function fetchFacultyData() {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/staff-groups?populate[staff_members][populate][0]=profile_picture`
        );

        setFacultyData(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  if (!facultyData) return <LoadingSpinner />;

  facultyData.sort((a, b) => a.id - b.id);
  const facultyOptions = facultyData.map((group) => group.attributes.name);

  const facultyObj = facultyData.reduce((acc, curr) => {
    acc[curr.attributes.name] = curr.attributes;
    return acc;
  }, {});

  console.log("selection", facultyObj[selection]);

  return (
    <Box>
      <Box sx={{ mb: 5, textAlign: "center" }}>
        <Typography variant="p">
          Choose a grade level and select a faculty member to see their profile
          page.
        </Typography>
      </Box>
      <Box
        sx={{
          minHeight: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {selection ? (
          <Box>
            <Typography
              variant="h4"
              sx={{ textDecoration: "underline" }}
              textAlign="center"
            >
              {facultyObj[selection].name}
            </Typography>
            <Grid container spacing={4} sx={{ py: 5 }}>
              {facultyObj[selection].staff_members.data.map((member) => {
                const {
                  email,
                  name,
                  profile_picture,
                  title_short: titleShort,
                } = member.attributes;

                const profilePicture = profile_picture.data.attributes.url;
                return (
                  <Grid
                    item
                    key={member.id}
                    xs={6}
                    sm={6}
                    lg={3}
                    sx={{ textAlign: "center" }}
                  >
                    <Link
                      to={`/about/staff/${email}`}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.text.primary,
                      }}
                    >
                      <Box sx={{ mb: 1 }}>
                        <Typography variant="p" sx={{ whiteSpace: "nowrap" }}>
                          {name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: 150,
                          height: 150,
                          borderRadius: "50%",
                          overflow: "hidden",
                          mx: "auto",
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          src={profilePicture}
                        />
                      </Box>
                      <Typography variant="p">{titleShort}</Typography>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
            <Box sx={{ textAlign: "end" }}>
              <Typography
                variant="p"
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: theme.palette.primary.main,
                }}
                onClick={() => setSelection(null)}
              >
                See all faculty
              </Typography>
            </Box>
          </Box>
        ) : (
          <Grid container spacing="20">
            {facultyOptions.map((option) => {
              let shortName;

              if (option === "Middle School") {
                shortName = "Jr High";
              } else if (option === "Physical Education") {
                shortName = "Phys Ed";
              } else {
                shortName = option;
              }

              return (
                <Grid
                  item
                  xs={6}
                  lg={4}
                  key={option}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => setSelection(option)}
                    sx={{
                      borderRadius: "15px",
                      width: "100%",
                      color: "black",
                      borderColor: "black",
                      fontFamily: "didact gothic",
                      fontWeight: "normal",
                      py: 3,
                      "&:hover": {
                        bgcolor: "black",
                        color: "white",
                        borderColor: "black",
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
    </Box>
  );
}
