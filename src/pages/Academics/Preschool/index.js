import preschool from "../../../assets/images/academics/preschool.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Preschool = () => {
  return (
    <section id="Preschool" className="py-5">
      <h2 className="text-center display-4 pt-5">Preschool</h2>
      <hr className="section-hr mb-md-5" />
      <Container className="py-5">
        <div className="text-center mb-5">
          <img
            src={preschool}
            className="img-fluid mb-4"
            alt="Group of preschool children"
          />
        </div>
        <Row>
          <Col xl={6}>
            <p className="lead">
              Tabernacle’s Tiny Tigers is a licensed preschool facility and open
              to children from every background. We are a family-centered
              school, partnering with parents to ensure the success of every
              child. Clear and consistent communication between home and school
              is essential. Our school has been serving families in the
              community for 44 years. We offer a variety of childcare options to
              meet your individual family needs. We have half day and full day
              options available. Daycare is available from 7:00am to 6:00pm.
              Parents and children who attend Tabernacle will tell you that this
              school feels like family. Many of our teachers and staff are
              former students who return to invest back into the school
              community. Lasting friendships are formed here. We invite you to
              start your experience at Tabernacle by joining the Tiny Tigers and
              watch your child excel.
            </p>
          </Col>
          <Col xl={6}>
            <p className="lead">
              Our classrooms and dedicated teachers offer students the
              opportunity to learn and discover more about themselves, their
              world and each other in a warm and safe environment. Each one of
              our teachers is trained in early childhood education and has a
              passion to see children excel. We provide a quality preschool
              program that combines play-based and academic curriculum to help
              our students prepare for kindergarten. We carefully plan
              activities that are developmentally appropriate and encourage
              exploration, fine-motor improvement, an interest in science and
              mathematics, and early literacy. Establishing routines and
              procedures is an important part of our program. These practices
              provide a safety and security that allows children the freedom to
              thrive. We encourage healthy lifestyle choices with our snack and
              lunch program.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Preschool;
