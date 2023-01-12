import { Row, Col, Table } from "react-bootstrap";
import { Container, Box } from "@mui/material";
import SectionTitle from "../../../common/SectionTitle";
import { useTheme } from "@mui/material/styles";

const preschool = { annual: 7850, monthly: 785 };
const elementary = { annual: 7150, monthly: 715 };
const juniorHigh = { annual: 79000, monthly: 795 };

const Tuition = () => {
  const theme = useTheme();
  return (
    <Box
      id="Tuition"
      className="py-5"
      sx={{ bgcolor: "background.alternate", py: 5 }}
    >
      <Container>
        <SectionTitle title="Tuition & Fees" />

        <Row className="row my-5">
          <Col xl={6}>
            <h4 className="text-center fw-bold">2023-24 Tuition</h4>

            <Table bordered hover className="bg-white">
              <thead>
                <tr className="text-center table-dark">
                  <th>Child</th>
                  <th>Annual Plan</th>
                  <th scope="">PIF Discount</th>
                  <th scope="">Monthly Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  <th colSpan="4">Preschool & Transitional Kindergarten</th>
                </tr>
                <tr className="text-center">
                  <td>1st</td>
                  <td>${preschool.annual}</td>
                  <td>${preschool.annual - 150}</td>
                  <td>${preschool.monthly}</td>
                </tr>
                <tr className="text-center">
                  <td>2nd</td>
                  <td>${preschool.annual - 550}</td>
                  <td>${preschool.annual - 150 - 550}</td>
                  <td>${preschool.monthly - 55}</td>
                </tr>
                <tr className="text-center">
                  <td>3rd</td>
                  <td>${preschool.annual - 550}</td>
                  <td>${preschool.annual - 150 - 550}</td>
                  <td>${preschool.monthly - 55}</td>
                </tr>
                <tr
                  style={{
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  <th colSpan="4">Grades K-5</th>
                </tr>
                <tr className="text-center">
                  <td>1st</td>
                  <td>${elementary.annual}</td>
                  <td>${elementary.annual - 150}</td>
                  <td>${elementary.monthly}</td>
                </tr>
                <tr className="text-center">
                  <td>2nd</td>
                  <td>${elementary.annual - 550}</td>
                  <td>${elementary.annual - 150 - 550}</td>
                  <td>${elementary.monthly - 55}</td>
                </tr>
                <tr className="text-center">
                  <td>3rd</td>
                  <td>${elementary.annual - 550}</td>
                  <td>${elementary.annual - 150 - 550}</td>
                  <td>${elementary.monthly - 55}</td>
                </tr>
                <tr
                  style={{
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  <th colSpan="4">Grades 6 - 8</th>
                </tr>
                <tr className="text-center">
                  <td>1st</td>
                  <td>${juniorHigh.annual}</td>
                  <td>${juniorHigh.annual - 150}</td>
                  <td>${juniorHigh.monthly}</td>
                </tr>
                <tr className="text-center">
                  <td>2nd</td>
                  <td>${juniorHigh.annual - 550}</td>
                  <td>${juniorHigh.annual - 150 - 550}</td>
                  <td>${juniorHigh.monthly - 55}</td>
                </tr>
                <tr className="text-center">
                  <td>3rd</td>
                  <td>${juniorHigh.annual - 550}</td>
                  <td>${juniorHigh.annual - 150 - 550}</td>
                  <td>${juniorHigh.monthly - 55}</td>
                </tr>
              </tbody>
            </Table>
            <p>
              *Tuition payments begin 8/1/2023 and end 5/1/2024. Payment for PIF
              discount is due by 8/10/2023
            </p>
            <h4 className="text-center fw-bold">Annual Fees</h4>
            <Table bordered className="align-middle mb-5 bg-white">
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
                  <td>TK & Preschool Consumables</td>
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
            </Table>
            <p>
              *Classroom placement is secured upon payment of registration and
              consumalbe fee and first month's tuition.
            </p>
            <p>
              *Registration is non-refundable. Consumable fee is non-refundable
              after June 1st or at time of enrollment for new students. First
              month's tuition is non-refundable.
            </p>
          </Col>
          <Col xl={6}>
            <h4 className="text-center fw-bold">Other Fees</h4>
            <Table bordered className="mb-5 bg-white">
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
                  <td>$40</td>
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
                  <td>$25</td>
                  <td>Per check</td>
                </tr>
                <tr>
                  <td>Academic Assessment</td>
                  <td>$50</td>
                  <td>For new students only</td>
                </tr>
              </tbody>
            </Table>
            <h4 className="text-center fw-bold">Daycare Fees</h4>
            <Table bordered className="bg-white">
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
            </Table>
            <p>
              *Daycare is open 7:00AM - 8:00AM and 3:30PM-6:00PM. See school{" "}
              <a href="/campus#calendar">calendar</a> for closures.
            </p>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Tuition;
