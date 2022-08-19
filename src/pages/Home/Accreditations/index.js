import { Row, Col, Container } from "react-bootstrap";

import asci from "../../../assets/images/home/acsi.png";
import wasc from "../../../assets/images/home/wasc.jpeg";

const Accreditations = () => {
  return (
    <section id="accreditation" className="py-5">
      <Container>
        <h2 className="text-center display-4 mt-5 mb-3">Accreditation</h2>
        <hr className="section-hr mb-5" />
        <Row className="py-5">
          <Col lg={8}>
            <h5 className="fw-bold">
              ASSOCIATION OF CHRISTIAN SCHOOLS INTERNATIONAL
            </h5>
            <p>
              Tabernacle School is accredited by the Association of Christian
              Schools International (ACSI). ACSI endeavors to "strengthen
              Christian schools and equip Christian educators worldwide as they
              prepare students academically and inspire them to become devoted
              followers of Jesus Christ."
            </p>
          </Col>
          <Col lg={4} className="mb-3">
            <img
              className="img-fluid"
              src={asci}
              alt="ACSI accreditaiton logo"
            />
          </Col>
        </Row>
        <Row className="py-5">
          <Col lg={8}>
            <h5 className="fw-bold">
              WESTERN ASSOCIATION OF SCHOOLS AND COLLEGES
            </h5>
            <p>
              Tabernacle School is also accredited by the Western Association of
              Schools and Colleges (WASC). WASC fosters "excellence in
              elementary, secondary, adult and postsecondary institutions, and
              supplementary education programs. The Commission encourages school
              improvement through a process of continuing evaluation and
              recognizes institutions through granting accreditation to the
              schools that meet an acceptable level of quality in accordance
              with the established criteria."
            </p>
          </Col>
          <Col className="mb-3 d-flex justify-content-center">
            <img
              className="img-fluid w-50"
              src={wasc}
              alt="Western Association of Schools and Colleges"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Accreditations;
