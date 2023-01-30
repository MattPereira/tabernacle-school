import { Row, Table } from "react-bootstrap";
import SectionTitle from "../../../common/SectionTitle";
import { Container } from "@mui/material";

const Daycare = () => {
  return (
    <section id="Daycare" className="py-5">
      <SectionTitle title="Daycare" />
      <Container sx={{ py: 5 }}>
        <Row className="align-items-center">
          <div className="col-lg-6">
            <div>
              <h4 className="text-center mb-3 fs-2 fw-bold">Hours</h4>
              <Table className="table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Hours</th>
                    <th>Days</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Summer</td>
                    <td>6:45 am - 6:00 pm</td>
                    <td>Monday - Friday</td>
                  </tr>
                  <tr>
                    <td>Before School</td>
                    <td>6:45 am – 8:00 am</td>
                    <td>Monday - Friday</td>
                  </tr>
                  <tr>
                    <td>After School</td>
                    <td>3:15 pm – 6:00 pm</td>
                    <td>Monday - Friday</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="mb-5">
              <h4 className="text-center mb-3 fs-2 fw-bold">Rates</h4>
              <Table className="table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Rate</th>
                    <th>Per</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Drop-In</td>
                    <td>$10</td>
                    <td>Hour</td>
                  </tr>
                  <tr>
                    <td>Full-Time Summer</td>
                    <td>$700</td>
                    <td>Month</td>
                  </tr>
                  <tr>
                    <td>Full-Time School Year</td>
                    <td>$200</td>
                    <td>Month</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="col-lg-6">
            <p className="lead">
              Tabernacle daycare is available to any enrolled student age 3
              years 9 months to a graduated eighth grader through August after
              graduation. Our program is child centered. The caring and
              compassionate staff build a family like atmosphere in which your
              children will thrive. Relationships among families, children and
              staff are the heart of the program.
            </p>
            <p className="lead">
              We welcome you to visit Tabernacle School and see first hand the
              dedication and commitment our staff has for your children and your
              family. Many of our daycare workers are former students returning
              to their Tabernacle roots.
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Daycare;
