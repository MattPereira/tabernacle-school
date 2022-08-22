import Showcase from "../../../../common/Showcase/Showcase";

import { Container, Row, Col, Table } from "react-bootstrap";
import "./index.scss";

import { useEffect } from "react";
const Orientation = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Showcase title="Parent Orientation" />
      <section className="py-5">
        <Container className="py-5">
          <h5 className="mb-5 display-6 text-center">Monday, August 8, 2022</h5>
          <Row className="justify-content-center">
            <Col xl={6}>
              <p className="lead mb-5">
                We are excited to have you back on campus for the 2022-2023
                school year. No children on campus on parent orientation day
                please. Meetings will take place in the appropriate student
                classrooms.
              </p>
              <Table className="table table-bordered bg-white">
                <thead>
                  <tr className="table-dark text-white">
                    <th scope="col">Time</th>
                    <th scope="col">Grades</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">10:00 AM</th>
                    <td>KINDERGARTEN and TK</td>
                  </tr>
                  <tr>
                    <th scope="row">11:00 AM</th>
                    <td>FIRST AND SECOND GRADE</td>
                  </tr>
                  <tr>
                    <th scope="row">1:00 PM</th>
                    <td colSpan="2">THIRD, FOURTH, AND FIFTH GRADE</td>
                  </tr>
                  <tr>
                    <th scope="row">2:00 PM</th>
                    <td colSpan="2">SIXTH, SEVENTH AND EIGHTH GRADE</td>
                  </tr>
                </tbody>
              </Table>
              <p>*Jr. Knd and 3's meetings require signup with Betty.</p>
            </Col>
            <Col xl={6}>
              <div className="video-container">
                <iframe
                  title="Parent Orientation Video"
                  className="responsive-iframe"
                  width="1000"
                  src="https://www.youtube.com/embed/kS7yJQ6MwEc"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Orientation;
