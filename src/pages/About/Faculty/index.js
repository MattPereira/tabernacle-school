import { Container } from "react-bootstrap";
import Slides from "./Slides";
import Accordion from "./FacultyAccordion";

const Faculty = () => {
  return (
    <section id="Faculty" className="py-5">
      <h2 className="display-3 text-center pt-5">Faculty</h2>
      <hr className="section-hr mb-5" />
      <Container className="py-5">
        <Slides />
        <Accordion />
      </Container>
    </section>
  );
};

export default Faculty;
