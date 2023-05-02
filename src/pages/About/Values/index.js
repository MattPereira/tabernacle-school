import value1 from "../../../assets/images/about/values/value1.jpg";
import value2 from "../../../assets/images/about/values/value2.jpg";
import SectionTitle from "../../../components/SectionTitle";

import { Container, Typography, Box, Grid } from "@mui/material";

const Values = () => {
  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Values" />
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          <Grid item lg={6}>
            <Box
              component="img"
              src={value1}
              sx={{ width: "100%", borderRadius: "30px", mb: 3 }}
              alt=""
            />
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" align="center">
              Truth Centered
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="p">
                Committed to education which will mold students’ hearts and
                minds to effectively impact their lives forever.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" align="center">
                Excellence Based
              </Typography>
              <Typography variant="p">
                Vitally engaged in producing life-long learners through teaching
                and modeling self-discipline. We identify each student’s unique
                God-given intelligence, through awards assemblies and
                instruction. We begin to outline the future and build their
                skills by introducing them to professions that match their
                abilities.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item lg={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" align="center">
                Relationally Engaged
              </Typography>
              <div>
                <Typography variant="p">
                  Dedicated to loving and nurturing students. Tabernacle School
                  has a foundational character program which teacher morals and
                  ethics. Every child knows that they will be a servant leader.
                </Typography>
              </div>
            </Box>
            <div className="">
              <Typography variant="h5" align="center">
                Evangelically Focused
              </Typography>
              <Typography variant="p">
                Passionate about knowing Jesus and making Him known. Inclusive
                in our outreach. We have families from every religion; we have
                those who are not connected with anyone. Through our interview
                process, we explain that JESUS is the central figure of our
                school. He is a Person, not a religion. We explain very honestly
                that their children will be taught to believe in Jesus and to
                love Him. We do not present ourselves as religious Christians,
                rather, we are followers of Jesus.
              </Typography>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Box
              component="img"
              src={value2}
              sx={{ width: "100%", borderRadius: "30px" }}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Values;
