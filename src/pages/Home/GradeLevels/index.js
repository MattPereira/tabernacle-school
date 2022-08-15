import { Container, Row, Col } from "react-bootstrap";

const GradeLevels = () => {
  return (
    <section id="grade-levels" className="bg-success py-5 text-white">
      <Container>
        <Row className="g-5 justify-content-center">
          <Col md={10} lg={4}>
            <h4 className="display-6 my-4 text-center">Preschool</h4>
            <p className="lead">
              Tiny Tigers Preschool provides a warm, nurturing, family
              atmosphere that is conducive to learning at an early age. Our
              program accepts children that are 4 years in age by September 1st.
              We have been providing and promoting high quality early childhood
              education since 1971.
            </p>
            <div className="text-center mt-4">
              <a
                href="/academics#preschool"
                className="btn btn-outline-light btn-lg rounded-pill"
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col md={10} lg={4}>
            <h4 className="display-6 my-4 text-center">Elementary</h4>
            <p className="lead">
              At Tabernacle, we provide an elementary education that prepares
              children to think clearly, act responsibly, and live ethically.
              Our programs and curriculum give students a competitive edge in an
              increasingly complex society as they discover their unique
              giftedness.
            </p>
            <div className="text-center mt-4">
              <a
                href="/academics#elementary"
                className="btn btn-lg btn-outline-light rounded-pill"
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col md={10} lg={4}>
            <h4 className="display-6 my-4 text-center">Middle School</h4>
            <p className="lead">
              At Tabernacle Middle School, we help our students navigate the
              early teen years and prepare to excel in high school and beyond.
              Throughout the middle school years, our students are challenged
              academically and grow in confidence as they explore their
              interests.
            </p>
            <div className="text-center mt-4">
              <a
                href="/academics#middleSchool"
                className="btn btn-lg btn-outline-light rounded-pill"
              >
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GradeLevels;
