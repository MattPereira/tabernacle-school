import { Row, Col, Accordion } from "react-bootstrap";
import { Container } from "@mui/material";
import SectionTitle from "../../../common/SectionTitle";

const CommonCore = () => {
  return (
    <section id="Common" className="my-5">
      <SectionTitle title="Common Core" />
      <Container className="py-5">
        <Row>
          <Col xl={6}>
            <h4 className="text-center fw-bold">Tabernacle School Standards</h4>
            <p className="lead">
              As a school well known for maintaining academic excellence,
              Tabernacle School reviews all educational standards, both state
              and national. More importantly, we are committed to providing a
              Christian education to those we serve by forming and awakening
              faith in Jesus Christ in our students.
            </p>
            <p className="lead">
              Many of the Common Core standards already have been in place at
              Tabernacle School. The Common Core calls for an increased emphasis
              on deeper understanding of underlying concepts in both the English
              Language Arts and Mathematics standards. Tabernacle School has
              long challenged students not just to memorize facts, but to go
              deeper, think critically, and demonstrate a higher level of
              understanding of content areas. Other Common Core Standards
              address only the minimum requirements and may be one or more grade
              levels below what we recognize as good teaching. We do not limit
              ourselves to the level of the standards but go beyond, based on
              our philosophy of learning and sound educational practices. In
              other words, Tabernacle School’s curriculum exceeds many Common
              Core Standards in age­ appropriate instruction and academic rigor.{" "}
            </p>
          </Col>
          <Col xl={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What Is Common Core?</Accordion.Header>
                <Accordion.Body>
                  Common Core Standards are a broad set of national standards
                  established to shape and govern the general educational
                  standards and assessments in public school. Currently, there
                  are a handful of states who have opted to not align with the
                  national standards.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Private Schools & Common Core
                </Accordion.Header>
                <Accordion.Body>
                  While public schools in California are mandated by our state
                  leadership to adopt Common Core Standards, private schools are
                  in a unique position to choose their alignment with the
                  standards for their curriculum and institutions as a whole. In
                  addition to new standards, Common Core also brings a new
                  standardized test for students. However, private school
                  students are not required to take these state tests.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>English</Accordion.Header>
                <Accordion.Body>
                  In English (which the state refers to as English Language
                  Arts), the Common Core State Standards refer to specific
                  standards of reading, writing, speaking, and listening whose
                  mastery allows students to leave high school “ready in
                  literacy.” Tabernacle School never set out to align ourselves
                  to secular standards, but we find that the Common Core
                  standards are already embedded in our courses. Perhaps, it is
                  because educators all agree that good teaching is teaching
                  that drives students to think well, think critically, and
                  think intelligently. This is what we strive to do.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Mathematics</Accordion.Header>
                <Accordion.Body>
                  The stated purpose of the Common Core State Standards
                  Initiative is to detail and standardize what K-12 students
                  from each state should know upon leaving each grade level.
                  They are intended to achieve greater focus and coherence in
                  the mathematics curriculum across the grade levels, leading to
                  greater depth of application and understanding for individual
                  students. Many would simply call this “good teaching,” and the
                  Mathematics Department at Tabernacle is committed to a level
                  of excellence that universally meets or exceeds the
                  aforementioned standards.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommonCore;
