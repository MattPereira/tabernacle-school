import { Accordion, Row, Col } from "react-bootstrap";
import { facultyData } from "../../../../data/facultyData.js";

import "./index.scss";

const FacultyAccordion = () => {
  console.log(facultyData);
  return (
    <Accordion>
      {facultyData.map((level, idx) => (
        <Accordion.Item eventKey={`${idx}`} key={level["grade"]}>
          <Accordion.Header>{level["grade"]}</Accordion.Header>
          <Accordion.Body>
            <Row>
              {level["staff"].map((staff, idx) => (
                <Col md={4} lg={3} className="text-center mb-3">
                  <h5>{staff["name"]}</h5>
                  {staff["title"] ? (
                    <div>
                      <span className="text-muted">{staff["title"]}</span>
                    </div>
                  ) : null}
                  {staff["image"] ? (
                    <img
                      src={staff["image"]}
                      className="img-fluid rounded-circle"
                      alt={staff["name"]}
                    />
                  ) : null}
                  <br />
                  <p>{staff["email"]}</p>
                </Col>
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FacultyAccordion;
