import googleClassroom from "../../../assets/images/academics/google-classroom.png";
import ignitia from "../../../assets/images/academics/ignitia.png";
import SectionTitle from "../../../common/SectionTitle";
import { Container, Box, Grid, Paper, Typography } from "@mui/material";

const Distance = () => {
  return (
    <Box id="Distance Learning" sx={{ py: 5, bgcolor: "background.alternate" }}>
      <SectionTitle title="Distance Learning" />
      <Container sx={{ pb: 10 }}>
        <Box sx={{ mb: 8, mt: 3 }}>
          <Typography variant="p">
            In case of a resurgence in Coronavirus cases and potential school
            closure, Tabernacle has implemented a Distance Learning Program
            using Google Classroom. Each student has been assigned to a Google
            classroom. Middle School students engaging in distance learning will
            access their curriculum using Ignitia, a Web-based learning
            environment featuring a media-rich, online curriculum.
          </Typography>
        </Box>
        <Grid container spacing={5} justifyContent="space-around">
          <Grid item md={6} lg={5}>
            <Paper sx={{ borderRadius: "30px", height: "100%" }} elevation={0}>
              <Box sx={{ p: 5, textAlign: "center" }}>
                <Box
                  component="img"
                  src={googleClassroom}
                  sx={{ width: "75%" }}
                  alt=""
                />
              </Box>
              <Box sx={{ p: 3 }}>
                <Typography variant="h5">Google Classroom</Typography>
                <Typography variant="p">
                  A blended learning platform developed by Google for
                  educational institutions that aims to simplify creating,
                  distributing, and grading assignments.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6} lg={5}>
            <Paper sx={{ borderRadius: "30px", height: "100%" }} elevation={0}>
              <Box sx={{ px: 5, pt: 5, textAlign: "center" }}>
                <Box
                  component="img"
                  src={ignitia}
                  sx={{ width: "75%" }}
                  alt=""
                />
              </Box>
              <Box sx={{ p: 3 }}>
                <Typography variant="h5">Ignitia</Typography>
                <Typography variant="p">
                  A versatile online Christian curriculum and learning
                  management system with dynamic, Christ-centered lessons and
                  interactive features designed to serve teachers and students
                  in elementary, middle, and high school.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Distance;
