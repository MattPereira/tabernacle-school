import { Container, Row, Col } from "react-bootstrap";

import "./index.scss";

const Location = () => {
  return (
    <section id="Location" className="py-5 bg-light">
      <h2 className="display-4 text-center mb-3 pt-5">Location</h2>
      <hr className="section-hr mb-md-5" />

      <Container className="py-5">
        <Row>
          <Col xl={8} className="mb-5 mb-xl-0">
            <div className="mapouter">
              <div className="video-container">
                <iframe
                  title="tabernacle location"
                  className="responsive-iframe"
                  // width="800"
                  // height="700"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=4380%20Concord%20Blvd%20Concord,%20CA%2094521&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </Col>
          <Col xl={4}>
            <Row>
              <Col xl={12} lg={6} md={6} sm={6} xs={6}>
                <div className="mb-5">
                  <h5 className="fs-5 fw-bold">TABERNACLE CAMPUS</h5>
                  <p>
                    4380 Concord Blvd
                    <br />
                    Concord, CA 94521
                    <br />
                    (925) 685-9169
                    <br />
                    info@tbs.org
                  </p>
                </div>
                <div className="mb-5">
                  <h5 className="fs-5 fw-bold">OFFICE HOURS</h5>
                  <p>9:00AM - 5:00PM</p>
                </div>
              </Col>
              <Col xl={12} lg={6} md={6} sm={6} xs={6}>
                <div className="mb-5">
                  <h5 className="fs-5 fw-bold">SCHOOL HOURS</h5>
                  <p>8:00AM - 3:15PM</p>
                </div>
                <div className="mb-5">
                  <h5 className="fs-5 fw-bold">DAYCARE HOURS</h5>
                  <p>
                    6:45 am – 8:00 am
                    <br />
                    3:15 pm – 6:00 pm
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Location;
