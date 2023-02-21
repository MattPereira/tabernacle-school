import Showcase from "../../../../components/Showcase";

import { Container, Row, Col } from "react-bootstrap";

import facts from "../../../../assets/images/family/facts-help.png";

const FactsHelp = () => {
  return (
    <>
      <Showcase title="Facts Help" />
      <section className="py-5">
        <Container className="container">
          <Row className="row align-items-center">
            <Col lg={6} className="d-grid bg-white p-5 rounded">
              <p>
                To log into FACTS (formally known as RenWeb) you will need the
                <strong> school code</strong> and an
                <strong>
                  {" "}
                  email account registered with Tabernacle School
                </strong>
                .
              </p>
              <p>
                Please provide your email address to the front office before
                attempting to login to FACTS.
              </p>
              <p>
                The School District Code is: <strong>TCS-CA</strong>
              </p>
              <p>
                The user name will be your email address as given to the school.
              </p>
              <p>You will pick your own password.</p>
              <p>
                The first time you login to FACTS – click on the Create New
                ParentsWeb Account.
              </p>
              <p>
                If you forgot your password you can click on the Forgot User
                Name/Password? link. If you need to change your email address or
                aren’t sure which address you gave to the school, please contact
                the front office either by phone (925) 685-9169 or by email.
              </p>

              <a
                href="https://logins2.renweb.com/logins/ParentsWeb-Login.aspx"
                className="btn btn-dark btn-lg"
              >
                FACTS LOGIN
              </a>
            </Col>
            <Col lg={6} className="d-flex justify-content-center mb-5">
              <img src={facts} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default FactsHelp;
