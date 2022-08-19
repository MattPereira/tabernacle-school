import {
  FaBook,
  FaMoneyCheck,
  FaParachuteBox,
  FaUserTie,
} from "react-icons/fa";

import { RiParentFill } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import { IoCalendar, IoWarning } from "react-icons/io5";

import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import handbook from "../../../assets/images/family/information/school-handbook.pdf";
import calendar from "../../../assets/images/family/information/calendar.pdf";

const Information = () => {
  return (
    <section id="schoolInfo" className="bg-light py-5">
      <h2 className="display-3 text-center pt-5">Information</h2>
      <hr className="section-hr mb-md-5" />
      <Container className="py-5">
        <Row className="text-center mb-xl-5">
          <Col lg={6} xl={3}>
            <a
              href={handbook}
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark text-decoration-none"
            >
              <FaBook className="display-1 mb-3" />
              <div className="mb-3 fs-5 fw-bold">Handbook</div>
            </a>
          </Col>
          <Col lg={6} xl={3}>
            <Link
              to="/admissions#Tuition"
              className="link-dark text-decoration-none"
            >
              <FaMoneyCheck className="display-1 mb-3" />
              <div className="mb-3 fs-5 fw-bold">Tuition</div>
            </Link>
          </Col>
          <Col lg={6} xl={3}>
            <Link
              to="/family/orientation"
              className="link-dark text-decoration-none"
            >
              <RiParentFill className="display-1 mb-3" />
              <div className="mb-3 fs-5 fw-bold">Parent Orientation</div>
            </Link>
          </Col>
          <Col lg={6} xl={3}>
            <Link to="/family/facts" className="link-dark text-decoration-none">
              <BsFillQuestionCircleFill className="display-1 mb-3" />
              <div className="mb-3 fs-5 fw-bold">Facts Help</div>
            </Link>
          </Col>
        </Row>
        <Row className="row text-center justify-content-around">
          <Col lg={6} xl={3}>
            <a
              href={calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark text-decoration-none"
            >
              <IoCalendar className="display-1 mb-3" />
              <div className="mb-3 fs-5 fw-bold">Calendar</div>
            </a>
          </Col>
          <Col lg={6} xl={3}>
            <Link
              to="/family/supply_list"
              className="link-dark text-decoration-none"
            >
              <FaParachuteBox className="display-1 mb-3" />
              <div className="mb-3 fs-5 fw-bold">Supply List</div>
            </Link>
          </Col>
          <Col lg={6} xl={3}>
            <Link
              to="/family/uniform_guidelines"
              className="link-dark text-decoration-none"
            >
              <FaUserTie className="display-1 mb-3" />
              <div className="mb-3 fs-5 fw-bold">Uniform Guidelines</div>
            </Link>
          </Col>
          <Col lg={6} xl={3}>
            <Link
              to="/family/discipline"
              className="link-dark text-decoration-none"
            >
              <IoWarning className="display-1 mb-3" />
              <div className="mb-3 fs-5 fw-bold">Jr High Discipline</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Information;
