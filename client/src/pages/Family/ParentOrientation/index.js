import { Link } from "react-router-dom";
import { Typography, Container, Grid, Box, Button } from "@mui/material";

export default function ParentOrientation() {
  return (
    <>
      <Typography variant="h2" align="center" sx={{ pt: 10 }}>
        Parent Orientation
      </Typography>
      <section>
        <Container sx={{ py: 10 }}>
          <Grid container justifyContent="center" spacing={4} sx={{ mb: 5 }}>
            <Grid item xs={12} md={10} lg={8} xl={6}>
              <Typography variant="p">
                We are excited to have you back on campus for the 2023-2024
                school year. No children on campus on parent orientation day
                please. Meetings will take place in your child's classrooms.
                Please see the slideshow below for highlighted information for
                the school year. For more information please see the{" "}
                <Link to="/family">family page</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={10} lg={8} xl={6}>
              <table className="table table-bordered bg-white">
                <thead>
                  <tr className="table-dark text-white">
                    <th scope="col">Time</th>
                    <th scope="col">Grades</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">10:00 AM</th>
                    <td>Kindergarten & TK</td>
                  </tr>
                  <tr>
                    <th scope="row">11:00 AM</th>
                    <td>1st - 2nd Grades</td>
                  </tr>
                  <tr>
                    <th scope="row">1:00 PM</th>
                    <td colSpan="2">3rd - 5th Grades</td>
                  </tr>
                  <tr>
                    <th scope="row">2:00 PM</th>
                    <td colSpan="2">6th - 8th Grade</td>
                  </tr>
                </tbody>
              </table>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
            <Button
              variant="contained"
              href="/pdfs/information/parent-orientation.pdf"
              target="_blank"
              sx={{ borderRadius: "30px", px: 3 }}
            >
              See Slideshow
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <iframe
              title="orientation"
              src="/pdfs/information/parent-orientation.pdf"
              width="100%"
              height="800px"
            ></iframe>
          </Box>
        </Container>
      </section>
    </>
  );
}
