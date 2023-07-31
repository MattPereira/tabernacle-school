import { useTheme } from "@mui/material/styles";
import { Container, Box, Grid, Typography } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";

export default function Tuition() {
  const theme = useTheme();

  const tuitionPrices = [
    {
      title: "Preschool & Transitional Kindergarten",
      annual: 7850,
      monthly: 785,
    },
    { title: "Grades K-5", annual: 7500, monthly: 750 },
    { title: "Grades 6-8", annual: 7900, monthly: 790 },
  ];

  return (
    <Box sx={{ bgcolor: "background.alternate", py: 8 }}>
      <Container>
        <SectionTitle title="Tuition & Fees" />

        <Grid container spacing={4}>
          <Grid item lg={6}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5" gutterBottom textAlign="center">
                2023-24 Tuition
              </Typography>

              <table className="table table-bordered table-hover bg-white">
                <thead>
                  <tr className="text-center table-dark">
                    <th>Child</th>
                    <th>Annual Plan</th>
                    <th scope="">PIF Discount</th>
                    <th scope="">Monthly Plan</th>
                  </tr>
                </thead>

                {tuitionPrices.map((group) => {
                  return (
                    <tbody key={group.title}>
                      <tr
                        style={{
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                        }}
                      >
                        <th
                          colspan="4"
                          style={{
                            backgroundColor: theme.palette.primary.main,
                          }}
                          className="text-white"
                        >
                          {group["title"]}
                        </th>
                      </tr>
                      <tr className="text-center">
                        <td>1st</td>
                        <td>${group.annual}</td>
                        <td>${group.annual - 150}</td>
                        <td>${group.monthly}</td>
                      </tr>
                      <tr className="text-center">
                        <td>2nd</td>
                        <td>${group.annual - 550}</td>
                        <td>${group.annual - 150 - 550}</td>
                        <td>${group.monthly - 55}</td>
                      </tr>
                      <tr className="text-center">
                        <td>3rd</td>
                        <td>${group.annual - 550}</td>
                        <td>${group.annual - 150 - 550}</td>
                        <td>${group.monthly - 55}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
              <Typography>
                *Tuition payments begin 8/1/2023 and end 5/1/2024. Payment for
                PIF discount is due by 8/10/2023
              </Typography>
            </Box>
            <Typography variant="h5" gutterBottom textAlign="center">
              Annual Fees
            </Typography>
            <table className="table table-bordered table-hover bg-white">
              <thead>
                <tr className="table-dark">
                  <th>Fee</th>
                  <th>Price</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Registration</td>
                  <td>$100</td>
                  <td>
                    Accounts must be current for re-enrolling students and
                    registration fee paid by January 31
                  </td>
                </tr>
                <tr>
                  <td>Preschool Consumables</td>
                  <td>$350</td>
                  <td>
                    Fee includes curriculum, emergency kit, yearbook, and craft
                    supplies.
                  </td>
                </tr>
                <tr>
                  <td>K-8 Consumables</td>
                  <td>$375</td>
                  <td>
                    Fee includes textbooks, emergency supplies, yearbook, and
                    online resources. Maximum consumable fee per family is $850
                  </td>
                </tr>
              </tbody>
            </table>
            <Box sx={{ mb: 1 }}>
              <Typography>
                *Classroom placement is secured upon payment of registration and
                consumable fee and first month's tuition.
              </Typography>
            </Box>

            <Typography>
              *Registration is non-refundable. Consumable fee is non-refundable
              after May 1st or at time of enrollment for new students. First
              month's tuition is non-refundable.
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" gutterBottom textAlign="center">
                Other Fees
              </Typography>
              <table className="table table-bordered table-hover bg-white">
                <thead>
                  <tr className="table-dark">
                    <th>Fee</th>
                    <th>Price</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Athletic</td>
                    <td>$150</td>
                    <td>Per sport played</td>
                  </tr>
                  <tr>
                    <td>Tutoring</td>
                    <td>$50</td>
                    <td>Per hour</td>
                  </tr>
                  <tr>
                    <td>Field Trip</td>
                    <td>TBD</td>
                    <td>Per trip</td>
                  </tr>
                  <tr>
                    <td>Emergency Lunch</td>
                    <td>$7</td>
                    <td>Per lunch</td>
                  </tr>
                  <tr>
                    <td>Returned Check</td>
                    <td>$30</td>
                    <td>Per check</td>
                  </tr>
                  <tr>
                    <td>Academic Assessment</td>
                    <td>$50</td>
                    <td>For new students only</td>
                  </tr>
                </tbody>
              </table>
            </Box>
            <Typography variant="h5" gutterBottom textAlign="center">
              Daycare Fees
            </Typography>
            <table className="table table-bordered table-hover bg-white">
              <thead className="table-dark ">
                <tr>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Billed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full Time Daycare</td>
                  <td> During School Year (August - May)</td>
                  <td>$200</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>FTDC Family Plan (2) </td>
                  <td>Two child discount during school year</td>
                  <td>$350</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>FTDC Family Plan (3+)</td>
                  <td>Three or more children discount during school year</td>
                  <td>$425</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Full Time Daycare</td>
                  <td> Summer Months K-8</td>
                  <td>$700</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Summer Celebration</td>
                  <td> Incoming Kindergarteners</td>
                  <td>$800</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Summer Celebration</td>
                  <td>Hourly 9-12 am</td>
                  <td>$10</td>
                  <td>Hourly</td>
                </tr>
                <tr>
                  <td>Joyful Beginnings</td>
                  <td>Preschool</td>
                  <td>$850</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Hourly Daycare</td>
                  <td>For students not enrolled in FTDC</td>
                  <td>$10</td>
                  <td>Hourly</td>
                </tr>
                <tr>
                  <td>After Hours Daycare</td>
                  <td>After 6:00 pm (late pick-up)</td>
                  <td>$1</td>
                  <td>Minute</td>
                </tr>
              </tbody>
            </table>
            <Typography>
              *Daycare is open 6:45AM - 8:00AM and 3:30PM-6:00PM. See school{" "}
              <a href="/campus#calendar">calendar</a> for closures.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
