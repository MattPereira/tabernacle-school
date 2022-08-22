import { Accordion, Table } from "react-bootstrap";
import { facultyData } from "../../../../data/facultyData.js";

const ContactAccordion = () => {
  return (
    <div>
      <h3 className="mb-3 fs-2 text-center">Contact our Staff</h3>
      <Accordion>
        {facultyData
          .filter((level) => level["grade"] !== "Board of Directors")
          .map((level, idx) => (
            <Accordion.Item eventKey={`${idx}`} key={level["grade"]}>
              <Accordion.Header>{level["grade"]}</Accordion.Header>
              <Accordion.Body>
                <Table>
                  <tbody>
                    {level["staff"].map((staff, idx) => (
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
