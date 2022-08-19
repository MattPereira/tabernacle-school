import { Container, Row, Col, Table } from "react-bootstrap";

const Tuition = () => {
  return (
    <section id="charges" className="py-5">
      <Container className="py-5">
        <h2 className="text-center section-title display-3">Tuition & Fees</h2>
        <hr className="section-hr mb-5" />
        <div className="my-5">
          <h3 className="text-center display-5 mb-5">2022-23 Rates</h3>
        </div>

        <Row className="row my-5">
          <Col xl={6}>
            <h4 className="text-center fw-bold">Tuition</h4>

            <Table bordered hover>
              <thead>
                <tr className="text-center table-dark">
                  <th>Child</th>
                  <th>Annual Plan</th>
                  <th scope="">PIF Discount</th>
                  <th scope="">Monthly Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td colspan="4" className="table-secondary">
                    Junior & Transitional Kindergarten
                  </td>
                </tr>
                <tr className="text-center">
                  <td>1st</td>
                  <td>$7,500</td>
                  <td>$7,350</td>
                  <td>$750</td>
                </tr>
                <tr className="text-center">
                  <td>2nd</td>
                  <td>$6,950</td>
                  <td>$6,800</td>
                  <td>$695</td>
                </tr>
                <tr className="text-center">
                  <td>3rd</td>
                  <td>$6,950</td>
                  <td>$6,800</td>
                  <td>$695</td>
                </tr>
                <tr className="table-secondary">
                  <td colspan="4">Grades K-5</td>
                </tr>
                <tr className="text-center">
                  <td>1st</td>
                  <td>$7,150</td>
                  <td>$7,000</td>
                  <td>$715</td>
                </tr>
                <tr className="text-center">
                  <td>2nd</td>
                  <td>$6,600</td>
                  <td>$6,450</td>
                  <td>$660</td>
                </tr>
                <tr className="text-center">
                  <td>3rd</td>
                  <td>$6,600</td>
                  <td>$6,450</td>
                  <td>$660</td>
                </tr>
                <tr className="table-secondary">
                  <td colspan="4">Grades 6-8</td>
                </tr>
                <tr className="text-center">
                  <td>1st</td>
                  <td>$7,550</td>
                  <td>$7,400</td>
                  <td>$755</td>
                </tr>
                <tr className="text-center">
                  <td>2nd</td>
                  <td>$7,000</td>
                  <td>$6,850</td>
                  <td>$700</td>
                </tr>
                <tr className="text-center">
                  <td>3rd</td>
                  <td>$7,000</td>
                  <td>$6,850</td>
                  <td>$700</td>
                </tr>
              </tbody>
            </Table>
            <p>*Tuition payments begin 8/1/2022 and end 5/1/2023</p>
            <p>
              *Classroom placement is secured upon payment of registration and
              consumalbe fee and first month's tuition.
            </p>
            <p>
              *Registration is non-refundable. Consumable fee is non-refundable
              after June 1st or at time of enrollment for new students. First
              month's tuition is non-refundable.
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
                  <td>TK/JK Consumables</td>
                  <td>$250</td>
                  <td>
                    Fee includes curriculum, emergency kit, yearbook, and craft
                    supplies.
                  </td>
                </tr>
                <tr>
                  <td>K-8 Consumables</td>
                  <td>$325</td>
                  <td>
                    Fee includes textbooks, emergency supplies, yearbook, and
                    online resources. Maximum consumable fee per family is $850
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xl={6}>
            <h4 className="text-center fw-bold">Other Fees</h4>
            <Table bordered className="mb-5">
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
                  <td>variable</td>
                  <td>Per trip</td>
                </tr>
                <tr>
                  <td>Emergency Lunch</td>
                  <td>$6</td>
                  <td>Per lunch</td>
                </tr>
                <tr>
                  <td>Bounced Checks</td>
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
            <Table bordered>
              <thead className="table-dark">
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
                  <td>$8</td>
                  <td>Hourly</td>
                </tr>
                <tr>
                  <td>After Hours Daycare</td>
                  <td>After 6:30 pm closing time (late pick-up)</td>
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
    </section>
  );
};

export default Tuition;
