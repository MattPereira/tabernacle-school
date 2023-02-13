import ignitia from "../../../assets/images/family/ignitia.png";
import choiceLunch from "../../../assets/images/family/choice-lunch.png";
import facts from "../../../assets/images/family/facts-logo.png";

import { Container, Grid, Paper, Box, Link, Typography } from "@mui/material";
import SectionTitle from "../../../common/SectionTitle";
import { useTheme } from "@mui/material/styles";

const Resources = () => {
  const resources = [
    {
      title: "FACTS",
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

  const theme = useTheme();

  return (
    <Box id="Resources" sx={{ py: 5, bgcolor: "background.alternate" }}>
      <SectionTitle title="Resources" />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={3}>
          {resources.map((resource) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={resource.title}>
              <Link href={resource.url} style={{ textDecoration: "none" }}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "30px",
                    height: "100%",
                    "&:hover": {
                      border: `5px solid ${theme.palette.primary.light}`,
                    },
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
                    <Typography variant="p">{resource.description}</Typography>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}

          {/* <Grid lg={4} className="mb-5">
            <a href="https://tabernacleca.ignitiaschools.com/owsoo/login/auth">
              <img src={ignitia} className="img-fluid w-50" alt="" />
            </a>
          </Grid>
          <Col lg={4} className="">
            <a href="https://www.choicelunch.com/">
              <img src={choiceLunch} className="img-fluid" alt="" />
            </a>
          </Col>
        </Row> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Resources;
