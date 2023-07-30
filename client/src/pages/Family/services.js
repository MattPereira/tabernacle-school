import ignitia from "../../assets/images/family/ignitia.png";
import choiceLunch from "../../assets/images/family/choice-lunch.png";
import facts from "../../assets/images/family/facts-logo.png";

import { Container, Grid, Box, Typography, Paper } from "@mui/material";

import SectionTitle from "../../components/SectionTitle";

const services = [
  {
    title: "Facts Management",
    description:
      "Facts provides tools and solutions to private K-12 schools that elevate the education experience for administrators, teachers, and families.",
    image: facts,
    url: "https://logins2.renweb.com/logins/ParentsWeb-Login.aspx",
  },
  {
    title: "Ignitia",
    description:
      "A versatile online Christian curriculum and learning management system with dynamic, Christ-centered lessons",
    image: ignitia,
    url: "https://tabernacleca.ignitiaschools.com/owsoo/login/auth",
  },
  {
    title: "ChoiceLunch",
    description:
      "Choicelunch individually packages your child’s lunch for safe delivery and easy distribution at school.",
    image: choiceLunch,
    url: "https://www.choicelunch.com/",
  },
];

export default function Services() {
  return (
    <Box sx={{ pt: 8, pb: 12, bgcolor: "background.alternate" }}>
      <SectionTitle title="Services" />
      <Container>
        <Grid container spacing={4}>
          {services.map((resource) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={resource.title}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: "30px",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    p: 5,
                  }}
                >
                  <Box
                    component="img"
                    src={resource.image}
                    sx={{ width: "100%" }}
                    alt=""
                  />
                </Box>

                <Box sx={{ p: 3 }}>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="h6" component="a" href={resource.url}>
                      {resource.title}
                    </Typography>
                  </Box>

                  <Typography variant="p">{resource.description}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
