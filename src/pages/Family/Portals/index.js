import ignitia from "../../../assets/images/family/ignitia.png";
import choiceLunch from "../../../assets/images/family/choice-lunch.png";
import facts from "../../../assets/images/family/facts-logo.png";

import { Container, Row, Col } from "react-bootstrap";

const Portals = () => {
  return (
    <section id="portals" className="py-5">
      <h2 className="display-2 text-center pt-5">School Portals</h2>
      <hr className="section-hr mb-5" />
      <Container className="py-5">
        <Row className="text-center align-items-center justify-content-around">
          <Col lg={4} className="mb-5">
            <a href="https://logins2.renweb.com/logins/ParentsWeb-Login.aspx">
              <img src={facts} className="img-fluid" alt="" />
            </a>
          </Col>

          <Col lg={4} className="mb-5">
            <a href="https://tabernacleca.ignitiaschools.com/owsoo/login/auth">
              <img src={ignitia} className="img-fluid w-50" alt="" />
            </a>
          </Col>
          <Col lg={4} className="">
            <a href="https://www.choicelunch.com/">
              <img src={choiceLunch} className="img-fluid" alt="" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portals;
