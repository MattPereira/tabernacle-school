import athletics from "../../../assets/images/campus/athletics.jpg";
import SectionTitle from "../../../common/SectionTitle";
import { Container, Box, Grid } from "@mui/material";

const Athletics = () => {
  return (
    <Box id="Athletics" sx={{ py: 5, bgcolor: "background.alternate" }}>
      <SectionTitle title="Athletics" />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item md={6}>
            <div className="mb-5">
              <p className="lead">
                The focus behind the athletic program at Tabernacle is to
                instill Christ-centered character traits within the lives of our
                student athletes. While the program includes training to enhance
                the ability of the student and education to develop a better
                understanding of sports, at the end of each day, we strive to
                glorify Him in all that we do.
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-center mb-3 fw-bold ">Physical Education</h4>
              <p className="text-start lead">
                Tabernacle provides Physical Education daily to Kindergarten
                through Eighth grade students. Our program gets students moving
                while introducing them to different sports and other physical
                activities. Special events include the Punt, Pass, and Kick
                competition and Track and Field Day.
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-center mb-3 fw-bold ">Sports Programs</h4>
              <p className="lead">
                Tabernacle offers sports programs for boys and girls in junior
                high. Tryout information, practice days and the league schedule
                can be found on our sports calendar.The Tigers are part of the
                Bay Area Christian School Athletic League. For more information
                on BACSAL visit <a href="bascal.org">bacsal.org</a>.
              </p>
            </div>
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
};

export default Athletics;
