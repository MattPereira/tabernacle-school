import { Row, Col } from "react-bootstrap";

import SectionTitle from "../../../common/SectionTitle";
import { Container, Box } from "@mui/material";
import "./index.scss";

const Location = () => {
  return (
    <Box id="Location" sx={{ py: 5 }}>
      <SectionTitle title="Location" />

      <Container sx={{ py: 5 }}>
        <Row className="justify-content-center mb-5">
          <Col xl={9} className="mb-5 mb-xl-0">
            <div className="mapouter">
              <div className="video-container">
                <iframe
                  title="tabernacle location"
                  className="responsive-iframe"
                  // width="800"
                  // height="700"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=4380%20Concord%20Blvd%20Concord,%20CA%2094521&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </div>
          </Col>
          <Col xl={2}>
            <Row>
              <Col xl={12} lg={6} md={6} sm={6} xs={6}>
                <div className="mb-5">
                  <h5 className="fs-5 fw-bold">CAMPUS ADDRESS</h5>
                  <p>
                    4380 Concord Blvd
                    <br />
                    Concord, CA 94521
                  </p>
                </div>
                <div className="mb-5">
                  <h5 className="fs-5 fw-bold">FRONT OFFICE</h5>
                  <p>
                    8:30AM - 4:00PM
                    <br />
                    (925) 685-9169
                  </p>
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
    </Box>
  );
};

export default Location;
