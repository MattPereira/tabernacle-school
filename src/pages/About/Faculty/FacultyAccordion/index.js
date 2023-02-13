import { Accordion, Row, Col } from "react-bootstrap";
import { facultyData } from "../../../../data/facultyData.js";

import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const FacultyAccordion = () => {
  return (
    <>
      <Accordion>
        {facultyData.map((level, idx) => (
          <Accordion.Item eventKey={`${idx}`} key={level["grade"]}>
            <Accordion.Header>{level["grade"]}</Accordion.Header>
            <Accordion.Body>
              {level["grade"] === "Elementary" ? (
                level.groups.map((group) => {
                  return (
                    <Box key={group.grade}>
                      <Row>
                        <Box
                          sx={{
                            mb: 2,
                            backgroundColor: "grey.900",
                            color: "white",
                            borderRadius: "10px",
                          }}
                        >
                          <Typography variant="h4" align="center">
                            {group["grade"]}
                          </Typography>
                        </Box>
                        {group.staff.map((staff, idx) => (
                          <Col
                            md={4}
                            lg={3}
                            className="text-center mb-3"
                            key={staff["name"]}
                          >
                            <Link
                              to={`/about/staff/${staff["email"]}`}
                              className="link-dark text-decoration-none"
                            >
                              <h5 className="fw-bold">{staff["name"]}</h5>

                              {staff["image"] ? (
                                <img
                                  src={staff["image"]}
                                  className="img-fluid rounded-circle"
                                  alt={staff["name"]}
                                  style={{ width: "150px" }}
                                />
                              ) : null}
                              {staff["title"] ? (
                                <div>
                                  <span className="fs-5">{staff["title"]}</span>
                                </div>
                              ) : null}
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </Box>
                  );
                })
              ) : (
                <Row>
                  {level["staff"].map((staff, idx) => (
                    <Col
                      md={4}
                      lg={3}
                      className="text-center mb-3"
                      key={staff["name"]}
                    >
                      <Link
                        to={`/about/staff/${staff["email"]}`}
                        className="link-dark text-decoration-none"
                      >
                        <h5 className="fw-bold">{staff["name"]}</h5>

                        {staff["image"] ? (
                          <img
                            src={staff["image"]}
                            className="img-fluid rounded-circle"
                            alt={staff["name"]}
                            style={{ width: "150px" }}
                          />
                        ) : null}
                        {staff["title"] ? (
                          <div>
                            <span className="fs-5">{staff["title"]}</span>
                          </div>
                        ) : null}
                      </Link>
                    </Col>
                  ))}
                </Row>
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default FacultyAccordion;
