import { Row, Col } from "react-bootstrap";
import SectionTitle from "../../../common/SectionTitle";
import { Container, Box } from "@mui/material";

import {
  FaLaptopCode,
  FaBicycle,
  FaClinicMedical,
  FaBasketballBall,
} from "react-icons/fa";

const Forms = () => {
  return (
    <Box id="Elementary" sx={{ py: 5 }}>
      <SectionTitle title="Forms" />
      <Container sx={{ py: 5 }}>
        <Row className="text-center">
          <Col xs={6} md={3} className="mb-5">
            <a
              href="https://docs.google.com/document/d/1UG-KgfmIjsgstryN86A6uzKw59r_twLPAP74-3GKGvU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark text-decoration-none"
            >
              <FaLaptopCode className="display-1 mb-2" />
              <div className="lead fw-bold">Technology</div>
            </a>
          </Col>
          <Col xs={6} md={3} className="mb-5">
            <a
              href="https://drive.google.com/file/d/1CpmlHSZ23FMp4UxCpLKw80nDpNEO6sze/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark text-decoration-none"
            >
              <FaBicycle className="display-1 mb-2" />
              <div className="lead fw-bold">Bicycle & Walk</div>
            </a>
          </Col>
          <Col xs={6} md={3} className="mb-5">
            <a
              href="https://drive.google.com/file/d/1EIfpUITQCQpeMKXpzInPcFAO5cdHzA4X/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark text-decoration-none"
            >
              <FaClinicMedical className="display-1 mb-2" />
              <div className="lead fw-bold">Medication</div>
            </a>
          </Col>
          <Col xs={6} md={3} className="mb-5">
            <a
              href="https://drive.google.com/file/d/1XMxpVPuQXgngYSy_SeEpGvOZ2EoBA7RL/view?usp=sharing"
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
    </Box>
  );
};

export default Forms;
