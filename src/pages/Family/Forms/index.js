import { Container, Row, Col } from "react-bootstrap";

import technology from "../../../assets/images/family/forms/technology.pdf";
import sports from "../../../assets/images/family/forms/sports.pdf";
import medication from "../../../assets/images/family/forms/medication.pdf";
import bicycle from "../../../assets/images/family/forms/bicycle.pdf";

import {
  FaLaptopCode,
  FaBicycle,
  FaClinicMedical,
  FaBasketballBall,
} from "react-icons/fa";

const Forms = () => {
  return (
    <section id="Forms" className="py-5 bg-light">
      <h2 className="display-3 text-center pt-5">Forms</h2>
      <hr className="section-hr mb-3" />
      <Container className="py-5">
        <Row className="text-center">
          <Col sm={6} md={3} className="mb-5">
            <a
              href={technology}
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark text-decoration-none"
            >
              <FaLaptopCode className="display-1 mb-2" />
              <div className="lead fw-bold">Technology</div>
            </a>
          </Col>
          <Col sm={6} md={3} className="mb-5">
            <a
              href={bicycle}
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark text-decoration-none"
            >
              <FaBicycle className="display-1 mb-2" />
              <div className="lead fw-bold">Bicycle & Walk</div>
            </a>
          </Col>
          <Col sm={6} md={3} className="mb-5">
            <a
              href={medication}
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark text-decoration-none"
            >
              <FaClinicMedical className="display-1 mb-2" />
              <div className="lead fw-bold">Medication</div>
            </a>
          </Col>
          <Col sm={6} md={3} className="mb-5">
            <a
              href={sports}
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark text-decoration-none"
            >
              <FaBasketballBall className="display-1 mb-2" />
              <div className="lead fw-bold">Sports</div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Forms;
