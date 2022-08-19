import { Container, Row, Col } from "react-bootstrap";
import athletics from "../../../assets/images/campus/athletics.jpg";

const Athletics = () => {
  return (
    <section id="Athletics" className="py-5 bg-light">
      <h2 className="text-center display-4 pt-5">Athletics</h2>
      <hr className="section-hr mb-md-5" />
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={6} className="col-lg-6">
            <div className="mb-5">
              <h4 className="text-center fw-bold mb-3">Focus</h4>
              <p className="lead">
                To instill Christ-centered character traits within the lives of
                our student athletes. While the program includes training to
                enhance the ability of the student and education to develop a
                better understanding of sports, at the end of each day, we
                strive to glorify Him in all that we do.
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
          </Col>
          <Col lg={6} className="col-lg-6">
            <img
              src={athletics}
              className="img-fluid"
              alt="Child running on track"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Athletics;
