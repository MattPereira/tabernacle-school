import { Row, Col } from "react-bootstrap";
import elementary from "../../../assets/images/academics/elementary.jpg";
import SectionTitle from "../../../common/SectionTitle";

import { Container, Box } from "@mui/material";

const Elementary = () => {
  return (
    <Box id="Elementary" sx={{ py: 5, bgcolor: "background.alternate" }}>
      <SectionTitle title="Elementary" />
      <Container className="py-5">
        <Row className="align-items-center">
          <Col xl={6} className="order-2">
            <p className="lead">
              We understand how important it is to find the right elementary
              program to fit the needs of your growing child. At Tabernacle, we
              provide an elementary education that prepares children to think
              clearly, act responsibly, and live ethically. Our programs and
              curriculum give our students a competitive edge in an increasingly
              complex society as they discover their unique giftedness.{" "}
            </p>
            <p className="lead">
              Our qualified teachers are passionate about providing a
              high-quality education while developing student’s love for Christ
              in a caring and safe environment. We provide different modalities
              of learning knowing that God has created each child to be unique.
              Through hands on projects and enrichment activities such as
              electives, physical education, integrated technology, and field
              trips, Tabernacle equips our students to thrive academically,
              socially, and emotionally.{" "}
            </p>
          </Col>
          <Col xl={6} className="order-1 order-xl-2 mb-5 text-center">
            <Box
              component="img"
              sx={{ width: "100%", borderRadius: "30px" }}
              src={elementary}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Elementary;
