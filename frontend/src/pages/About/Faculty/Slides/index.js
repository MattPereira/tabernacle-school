import { Carousel, Row, Col } from "react-bootstrap";

import slide1 from "../../../../assets/images/about/slides/slide1.jpg";
import slide2 from "../../../../assets/images/about/slides/slide2.jpg";
import slide3 from "../../../../assets/images/about/slides/slide3.jpg";
import slide4 from "../../../../assets/images/about/slides/slide4.jpg";
import slide5 from "../../../../assets/images/about/slides/slide5.jpg";
import slide6 from "../../../../assets/images/about/slides/slide6.jpg";

const Slides = () => {
  return (
    <div className="mb-5">
      <Carousel controls={false} indicators={false} fade>
        <Carousel.Item>
          <Row className="g-0">
            <Col md={6}>
              <img className="img-fluid" src={slide1} alt="First slide" />
            </Col>
            <Col md={6} className="d-none d-md-flex">
              <img className="img-fluid" src={slide6} alt="First slide" />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="g-0">
            <Col md={6}>
              <img className="img-fluid" src={slide2} alt="First slide" />
            </Col>
            <Col md={6} className="d-none d-md-flex">
              <img className="img-fluid" src={slide3} alt="First slide" />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="g-0">
            <Col md={6}>
              <img className="img-fluid" src={slide4} alt="First slide" />
            </Col>
            <Col md={6} className="d-none d-md-flex">
              <img className="img-fluid" src={slide5} alt="First slide" />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slides;
