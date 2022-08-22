import value1 from "../../../assets/images/about/values/value1.jpg";
import value2 from "../../../assets/images/about/values/value2.jpg";

import { Container, Row, Col } from "react-bootstrap";

const Values = () => {
  return (
    <section id="Values" className="py-5">
      <h2 className="display-3 text-center pt-5">Values</h2>
      <hr className="section-hr mb-lg-5" />
      <Container className="py-5">
        <Row className="d-flex align-items-center">
          <Col xl={6}>
            <h5 className="fs-3 text-center fw-bold">Truth Centered</h5>
            <div>
              <p className="lead">
                Committed to education which will mold students’ hearts and
                minds to effectively impact their lives forever.
              </p>
            </div>

            <div className="">
              <h5 className="fs-3 text-center fw-bold">Excellence Based</h5>
              <p className="lead">
                Vitally engaged in producing life-long learners through teaching
                and modeling self-discipline. We identify each student’s unique
                God-given intelligence, through awards assemblies and
                instruction. We begin to outline the future and build their
                skills by introducing them to professions that match their
                abilities.
              </p>
            </div>

            <div className="">
              <h5 className="fs-3 text-center fw-bold">Relationally Engaged</h5>
              <div>
                <p className="lead">
                  Dedicated to loving and nurturing students. Tabernacle School
                  has a foundational character program which teacher morals and
                  ethics. Every child knows that they will be a servant leader.
                </p>
              </div>
            </div>
            <div className="">
              <h5 className="fs-3 text-center fw-bold">
                Evangelically Focused
              </h5>
              <p className="lead">
                Passionate about knowing Jesus and making Him known. Inclusive
                in our outreach. We have families from every religion; we have
                those who are not connected with anyone. Through our interview
                process, we explain that JESUS is the central figure of our
                school. He is a Person, not a religion. We explain very honestly
                that their children will be taught to believe in Jesus and to
                love Him. We do not present ourselves as religious Christians,
                rather, we are followers of Jesus.
              </p>
            </div>
          </Col>
          <Col xl={6} className="d-none d-xl-block">
            <img src={value1} className="img-fluid mb-3" alt="" />
            <img src={value2} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Values;
