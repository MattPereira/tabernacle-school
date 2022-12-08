import { Accordion, Table } from "react-bootstrap";
import { facultyData } from "../../../../data/facultyData.js";
import { Typography, Box } from "@mui/material";

const ContactAccordion = () => {
  console.log(facultyData);

  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" align="center">
          Staff Directory
        </Typography>
      </Box>

      <Accordion>
        {facultyData
          .filter((level) => level["grade"] !== "Board of Directors")
          .map((level, idx) => (
            <Accordion.Item eventKey={`${idx}`} key={level["grade"]}>
              <Accordion.Header>{level["grade"]}</Accordion.Header>
              <Accordion.Body>
                <Table>
                  <tbody>
                    {level["grade"] === "Elementary"
                      ? level.groups.map((group) => {
                          return group.staff.map((staff, idx) => (
                            <tr key={staff["name"]}>
                              <td>{staff["name"]}</td>
                              <td>{staff["title"]}</td>
                              <td>
                                <a href={`mailto:${staff["email"]}`}>
                                  {staff["email"]}
                                </a>
                              </td>
                            </tr>
                          ));
                        })
                      : level["staff"].map((staff, idx) => (
                          <tr key={staff["name"]}>
                            <td>{staff["name"]}</td>
                            <td>{staff["title"]}</td>
                            <td>
                              <a href={`mailto:${staff["email"]}`}>
                                {staff["email"]}
                              </a>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>
    </div>
  );
};

export default ContactAccordion;
