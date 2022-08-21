import { Container, Row, Col } from "react-bootstrap";
import "./FurtherAction.scss";
import { HashLink } from "react-router-hash-link";

const FurtherAction = () => {
  return (
    <section id="futureAction" className=" bg-info">
      <Container className="text-center text-white py-5">
        <h2 className="text-center display-4">Further Action</h2>
        <hr className="section-hr"></hr>
        <p className="text-center mt-4 lead">
          We hope you will consider enrolling and encourage you to seek more
          information about the process.
        </p>

        <Row className="my-md-5">
          <Col md={4} className="mb-3">
            <HashLink
              to="/admissions#Schedule"
              className="btn btn-lg border border-white rounded-pill text-white further-btn"
            >
              <strong>Schedule Tour</strong>
            </HashLink>
          </Col>
          <Col md={4} className="mb-3">
            <a
              className="btn btn-lg border border-1 border-white rounded-pill text-white further-btn"
              href="https://tabernacleschool.wpcomstaging.com/contact/"
            >
              <strong>Contact Us</strong>
            </a>
          </Col>

          <Col md={4} className="mb-3">
            <HashLink
              to="/admissions#Tuition"
              className="btn btn-lg border border-white rounded-pill text-white further-btn"
            >
              <strong>Tuition & Fees</strong>
            </HashLink>
          </Col>
        </Row>
        <Row>
          <p className="text-center">
            <i>
              Tabernacle School admits students of any race, color, national and
              ethnic origin to all the rights, privileges, programs, and
              activities generally accorded or made available to students.
              Tabernacle does not discriminate on the basis of race, color,
              national and ethnic origin in administration of their educational
              policies, admissions policies, scholarship and loan programs and
              athletic and other school administered programs.
            </i>
          </p>
        </Row>
      </Container>
    </section>
  );
};

export default FurtherAction;
