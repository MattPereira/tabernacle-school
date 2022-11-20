import juniorHigh from "../../../assets/images/academics/junior-high.jpg";
import { Row, Col } from "react-bootstrap";
import { Container } from "@mui/material";
import SectionTitle from "../../../common/SectionTitle";

const JuniorHigh = () => {
  return (
    <section id="Junior" className="py-5">
      <SectionTitle title="Junior High" />
      <Container className="py-5">
        <Row className="align-items-center">
          <Col xl={6} className="d-flex justify-content-center mb-5">
            <img src={juniorHigh} className="img-fluid" alt="" />
          </Col>
          <Col xl={6} className="align-middle">
            <p className="lead">
              We are thrilled to welcome you to Tabernacle Middle School, where
              we help our students navigate the early teen years and prepare to
              excel in high school and beyond. Throughout the middle school
              years, our students are challenged academically and grow in
              confidence as they explore their interests. We consider it an
              honor to partner with you in providing support and guidance for
              your children as they grow academically, spiritually, and
              athletically. We offer a strong list of academic and elective
              courses that meet our standard of excellence and help our students
              gain a solid academic footing in preparation for high school.
              Because of our high standards, our students regularly perform
              beyond grade level in national standard testing.
            </p>
            <p className="lead">
              Our middle school students have the opportunity to attend hands-on
              learning experiences as they go to a four-day outdoor education
              science camp in sixth grade. Students in the eighth grade take a
              week-long trip to Washington D.C. to visit the places they have
              learned about in our country’s history. Middle school students at
              Tabernacle have access to state-of-the-art computer and science
              labs, award winning school sports teams, and an enriching extended
              care program before and after school. Biblical truth is a part of
              everything we teach through daily Bible classes, weekly chapels,
              and classroom Biblical integration. We have our own chapel band
              lead us in worship during chapel time on Fridays and have guest
              speakers join our staff presenting God’s Word in the Bible.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JuniorHigh;
