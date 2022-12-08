import ignitia from "../../../assets/images/family/ignitia.png";
import choiceLunch from "../../../assets/images/family/choice-lunch.png";
import facts from "../../../assets/images/family/facts-logo.png";

import { Row, Col } from "react-bootstrap";
import { Container } from "@mui/material";
import SectionTitle from "../../../common/SectionTitle";

const Portals = () => {
  return (
    <section id="Resources" className="py-5">
      <SectionTitle title="Resources" />
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
