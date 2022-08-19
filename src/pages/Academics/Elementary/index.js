import { Container, Row, Col } from "react-bootstrap";
import elementary from "../../../assets/images/academics/elementary.jpg";

const Elementary = () => {
  return (
    <section id="Elementary" className="bg-light py-5">
      <h2 className="text-center display-4 pt-5">Elementary</h2>
      <hr className="section-hr mb-md-5" />
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
            <img
              src={elementary}
              className="img-fluid"
              alt="Elementary school children"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Elementary;
