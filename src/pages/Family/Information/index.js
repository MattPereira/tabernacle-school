import { Link } from "react-router-dom";

import {
  FaBook,
  FaMoneyCheck,
  FaParachuteBox,
  FaUserTie,
} from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoCalendar, IoWarning } from "react-icons/io5";

import { Row, Col } from "react-bootstrap";
import SectionTitle from "../../../components/SectionTitle";
import { Container, Box, Typography } from "@mui/material";

const Information = () => {
  return (
    <Box sx={{ py: 6 }}>
      <SectionTitle title="Information" />
      <Container>
        <Row className="text-center mb-md-5">
          <Col xs={6} md={3} className="mb-5">
            <a
              href="https://drive.google.com/file/d/1BERNJUWaKWVnerCK0cIbFh9ZVib4xSt0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark text-decoration-none"
            >
              <FaBook className="display-4 mb-3" />
              <Typography variant="h5">Handbook</Typography>
            </a>
          </Col>
          <Col xs={6} md={3} className="mb-5">
            <Link
              to="/admissions#Tuition"
              className="link-dark text-decoration-none"
            >
              <FaMoneyCheck className="display-4 mb-3" />
              <Typography variant="h5">Tuition</Typography>
            </Link>
          </Col>
          <Col xs={6} md={3} className="mb-5">
            <Link
              to="/family/orientation"
              className="link-dark text-decoration-none"
            >
              <RiParentFill className="display-4 mb-3" />
              <Typography variant="h5">Parent Orientation</Typography>
            </Link>
          </Col>
          <Col xs={6} md={3} className="mb-5">
            <Link to="/family/facts" className="link-dark text-decoration-none">
              <BsFillQuestionCircleFill className="display-4 mb-3" />
              <Typography variant="h5">Facts Help</Typography>
            </Link>
          </Col>
        </Row>
        <Row className="row text-center justify-content-around">
          <Col xs={6} md={3} className="mb-5">
            <a
              href="https://drive.google.com/file/d/1GZ1bmXDNX4m3_PeZMA5e6ley9Z3n_RjU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark text-decoration-none"
            >
              <IoCalendar className="display-4 mb-3" />
              <Typography variant="h5">Calendar</Typography>
            </a>
          </Col>
          <Col xs={6} md={3} className="mb-5">
            <Link
              to="/family/supply_list"
              className="link-dark text-decoration-none"
            >
              <FaParachuteBox className="display-4 mb-3" />
              <Typography variant="h5">Supply List</Typography>
            </Link>
          </Col>
          <Col xs={6} md={3} className="mb-5">
            <Link
              to="/family/uniform_guidelines"
              className="link-dark text-decoration-none"
            >
              <FaUserTie className="display-4 mb-3" />
              <Typography variant="h5">Uniform Guidelines</Typography>
            </Link>
          </Col>
          <Col xs={6} md={3} className="mb-5">
            <Link
              to="/family/discipline"
              className="link-dark text-decoration-none"
            >
              <IoWarning className="display-4 mb-3" />
              <Typography variant="h5">Jr High Discipline</Typography>
            </Link>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Information;
