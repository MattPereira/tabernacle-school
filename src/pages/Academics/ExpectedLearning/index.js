import { Container, Row, Col } from "react-bootstrap";

const ExpectedLearning = () => {
  return (
    <section id="eslr" className="bg-light py-5">
      <h2 className="display-4 text-center pt-5">Expected Learning Results</h2>
      <hr className="section-hr mb-md-5" />
      <Container className="py-5">
        <Row>
          <Col xl={6}>
            <div className="mb-5">
              <h5 className="text-center fs-3 fw-bold">Lifelong Learner</h5>
              <p className="lead">
                Is accountable for exerting personal effort towards his/her
                educational responsibility to be self-controlled and productive
                in the classroom and his/her commitment to live-long learning.
                Recognizes and develops his/her unique gifts by setting
                short-term and life-long personal goals which honor God, the
                Creator or gifts. Demonstrates leadership skills which are
                evidenced by living ethically and morally pure before both God
                and man while cultivating mental discipline and discernment as
                an involved citizen of the society.
              </p>
            </div>
            <div className="mb-5">
              <h5 className="text-center fs-3 fw-bold">
                Faithful Follower of Jesus
              </h5>
              <p className="lead">
                After accepting the Lord Jesus Christ as personal Savior,
                demonstrates an on-going, deepening love relationship with the
                Lord as evidenced by a Christ-centered life displaying the
                personal attributes of Jesus. Develops a Biblical world view
                which results in a proper perspective of God as Heavenly Father
                and produces a growing trust in Him as Provider, Sustainer, and
                Controller of life. Shows evidence of a conscience sensitive to
                God’s commandments by knowing and applying God’s Word to all
                aspects of life.
              </p>
            </div>
          </Col>
          <Col xl={6}>
            <div className="mb-5">
              <h5 className="text-center fs-3 fw-bold">Academic Achiever</h5>
              <p className="lead">
                Reads with good comprehension and writes with clear expression,
                meaningful vocabulary, and organization of thought.Applies
                critical thinking and problem solving skills to all types of
                learning and life situations. Communicates effectively with
                others by listening attentively and speaking clearly with
                confidence.Exercises a variety of methods, strategies and tools,
                including technology, to conduct research, evaluate information,
                and make responsible decisions in light of Biblical truths.
              </p>
            </div>
            <div className="mb-5">
              <h5 className="text-center fs-3 fw-bold">Citizen of Character</h5>
              <p className="lead">
                Demonstrates respectful and responsive behavior towards others,
                with the right heart attitude. Exhibits responsible conduct in
                word and action, employing resourcefulness in accomplishing
                educational and life objectives. Works receptively with a
                diversity of people in a variety of frameworks with a resolute
                approach to learning.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExpectedLearning;
