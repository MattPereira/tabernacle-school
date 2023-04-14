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
                        <Box sx={{ mb: 3 }}>
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
                              <Typography variant="h5" gutterBottom>
                                {staff["name"]}
                              </Typography>

                              {staff["image"] && (
                                <img
                                  src={staff["image"]}
                                  className="img-fluid rounded-circle"
                                  alt={staff["name"]}
                                  style={{ width: "150px" }}
                                />
                              )}
                              {staff["title"] && (
                                <div>
                                  <Typography variant="p">
                                    {staff["title"]}
                                  </Typography>
                                </div>
                              )}
                            </Link>
                          </Col>
                        ))}
                        <hr></hr>
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
                        <Typography variant="h5" gutterBottom>
                          {staff["name"]}
                        </Typography>
                        {staff["image"] && (
                          <img
                            src={staff["image"]}
                            className="img-fluid rounded-circle"
                            alt={staff["name"]}
                            style={{ width: "150px" }}
                          />
                        )}
                        {staff["title"] && (
                          <div>
                            <Typography variant="p">
                              {staff["title"]}
                            </Typography>
                          </div>
                        )}
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
