import { Container, Box, Grid, Typography, Button } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";

export default function Employment() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.alternate" }}>
      <SectionTitle title="Employment" />
      <Container>
        <Box sx={{ mb: 5 }}>
          <Typography variant="p">
            We are hiring! Tabernacle School is hiring substitute teachers and
            support staff for the 2023-2024 school year. All elementary and
            middle school teaching staff must hold a bachelor's degree from an
            accredited university and be able to sign the school Statement of
            Faith. Tabernacle School is an evangelical Christian school focused
            on providing an excellent Christ centered education in spiritual,
            academic and extracurricular subjects. Our teachers and staff help
            students acquire the skills and attitudes necessary to be Faithful
            Followers of Jesus Christ, Life-Long Learners, Citizens of Character
            and Academic Achievers.{" "}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Button
            component="a"
            href="https://drive.google.com/file/d/155waZK-5Jq3IwcDit2wTdlNtBAxpqeKW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              fontFamily: "Didact Gothic",
              borderRadius: "30px",
              px: 3,
              fontSize: "1.2rem",
            }}
          >
            Download Application
          </Button>
        </Box>
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5">Open Positions</Typography>
              <Typography variant="p">
                Tabernacle School is looking for a part time middle school
                science teacher for the current 2023-2024 school year. All
                applicants must hold a bachelor's degree from an accredited
                university and be able to sign the school Statement of Faith.
                Please contact Lesley Nutting at{" "}
                <a href="mailto:LesleyN@tbs.org">LesleyN@tbs.org</a> or call{" "}
                <a href="tel:925-685-9169">925-685-9169</a> for more
                information. Applications may also be picked up in the school's
                front office.
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
          </Grid>
          <Grid item lg={6}>
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
