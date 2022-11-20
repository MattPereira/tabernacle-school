import { Row, Col } from "react-bootstrap";

import googleClassroom from "../../../assets/images/academics/google-classroom.png";
import ignitia from "../../../assets/images/academics/ignitia.png";
import SectionTitle from "../../../common/SectionTitle";
import { Container, Box } from "@mui/material";

const Distance = () => {
  return (
    <Box id="Distance Learning" sx={{ py: 5, bgcolor: "background.alternate" }}>
      <SectionTitle title="Distance Learning" />
      <Container className="py-5">
        <p className="lead px-lg-5">
          In case of a resurgence in Coronavirus cases and potential school
          closure, Tabernacle has implemented a Distance Learning Program using
          Google Classroom. Each student has been assigned to a Google
          classroom. To continue the parent orientation and learn more about
          your child’s teacher and what they will be doing this year, please
          sign in to their Google Classroom. Middle School students engaging in
          distance learning will access their curriculum using Ignitia, a
          Web-based learning environment featuring a media-rich, online
          curriculum.
        </p>
        <Row className="justify-content-around align-items-center">
          <Col lg={6} xl={5} className="rounded p-5 mb-4">
            <img
              src={googleClassroom}
              className="mx-auto d-block w-50"
              alt=""
            />
            <h3 className="text-center my-4 fw-bold">Google Classroom</h3>
            <div className="text-center">
              <a
                href="https://classroom.google.com/u/0/h"
                className="btn btn-dark px-5 fw-bold"
              >
                Login
              </a>
            </div>
          </Col>
          <Col lg={6} xl={5} className="p-5 rounded mb-4">
            <img src={ignitia} className="mx-auto d-block w-75" alt="" />
            <div className="text-center">
              <a
                href="https://tabernacleca.ignitiaschools.com/owsoo/login/auth"
                className="btn btn-dark px-5 fw-bold"
              >
                Login
              </a>
            </div>
            <p className="mt-3"></p>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Distance;
