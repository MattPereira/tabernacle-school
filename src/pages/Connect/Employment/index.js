import { Container, Row, Col } from "react-bootstrap";
import application from "../../../assets/images/connect/application.pdf";
import employment from "../../../assets/images/connect/employment.jpg";

const Employment = () => {
  return (
    <section id="Employment" className="py-5">
      <h2 className="text-center display-4 pt-5">Employment</h2>
      <hr className="section-hr mb-md-4" />
      <Container className="py-5">
        <Row>
          <Col lg={6}>
            <Row className="justify-content-center">
              <Col lg={10}>
                <img
                  src={employment}
                  alt="join our team"
                  className="img-fluid mb-4 rounded"
                />
              </Col>
            </Row>

            <h5 className="fw-bold">Now Hiring Preschool Teachers!</h5>
            <ul>
              <li>
                Tabernacle Preschool is looking for part time candidates who
                have at least six ECE units.
              </li>
              <li>
                Please contact Betty Mason at{" "}
                <a href="mailto:ElizabethM@tbs.org">ElizabethM@tbs.org</a> or{" "}
                <a href="tel:925-685-9169">925-685-9169</a> for more information
              </li>
              <li>
                Applications may be picked up in school office or downloaded{" "}
                <a href={application}>here</a>
              </li>
            </ul>
            <div className="text-center my-5">
              <a
                href={application}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg fw-bold"
              >
                Employment Application
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <p>
              We are hiring! Tabernacle School is hiring substitute teachers and
              support staff for the 2022-2023 school year. All elementary and
              middle school teaching staff must hold a bachelor's degree from an
              accredited university and be able to sign the school Statement of
              Faith. Tabernacle School is an evangelical Christian school
              focused on providing an excellent Christ centered education in
              spiritual, academic and extracurricular subjects. Our teachers and
              staff help students acquire the skills and attitudes necessary to
              be Faithful Followers of Jesus Christ, Life-Long Learners,
              Citizens of Character and Academic Achievers.{" "}
            </p>

            <h5 className="fw-bold">Required Application Materials</h5>
            <ul>
              <li>
                Completed employment application. Resumes can not be substituted
                for a completed application.
              </li>
              <li>Current Resume</li>
              <li>Copy of College Transcripts (For Faculty Positions)</li>
              <li>Three letters of reference</li>
            </ul>
            <h5 className="fw-bold">Spiritual Requirements</h5>
            <p>
              Must be a professing believer of Jesus Christ and attend a
              Christ-centered church.
            </p>
            <h5 className="fw-bold">Equal Opportunity Employer</h5>
            <p>
              Tabernacle School is an equal opportunity employer, dedicated to a
              policy of non-discrimination in employment on any basis including
              age, sex, color, race, creed, national origin, marital status,
              political belief or disability. Federal law prohibits the
              employment of unauthorized aliens. All persons hired must submit
              satisfactory proof of employment authorization and identity within
              three (3) days of being hired. Failure to submit such proof within
              the required time shall result in immediate employment
              termination.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Employment;
