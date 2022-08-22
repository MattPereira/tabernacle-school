// import { Carousel, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import "./index.scss";
import carousel1 from "../../../assets/images/home/carousel1.jpg";
import carousel2 from "../../../assets/images/home/carousel2.jpg";
import carousel3 from "../../../assets/images/home/carousel3.jpg";
import carousel4 from "../../../assets/images/home/carousel4.jpg";
import carousel5 from "../../../assets/images/home/carousel5.jpg";
import carousel6 from "../../../assets/images/home/carousel6.jpg";
import carousel7 from "../../../assets/images/home/carousel7.jpg";
import carousel8 from "../../../assets/images/home/carousel8.jpg";
// import carousel9 from "../../../assets/images/home/carousel9.jpg";

const LandingCarousel = () => {
  return (
    <>
      <div className="photosContainer">
        <div className="photo--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            <img
              className="img-fluid img-landing"
              src={carousel1}
              alt="operation christmas child"
            />

            <img
              className="img-fluid img-landing"
              src={carousel2}
              alt="Dr. Suess day"
            />

            <img
              className="img-fluid img-landing"
              src={carousel3}
              alt="thank you crowd"
            />

            <img
              className="img-fluid img-landing"
              src={carousel4}
              alt="operation christmas child"
            />
            <img
              className="img-fluid img-landing"
              src={carousel5}
              alt="Dr. Suess day"
            />

            <img
              className="img-fluid  img-landing"
              src={carousel6}
              alt="thank you crowd"
            />

            <img
              className="img-fluid img-landing"
              src={carousel7}
              alt="operation christmas child"
            />

            <img
              className="img-fluid img-landing"
              src={carousel8}
              alt="Dr. Suess day"
            />
          </Marquee>
        </div>
      </div>
      {/* <Carousel controls={false} indicators={false} fade>
        <Carousel.Item>
          <Row className="g-0">
            <Col md={6} xxl={4}>
              <img
                className="img-fluid"
                src={carousel1}
                alt="operation christmas child"
              />
            </Col>
            <Col md={6} xxl={4} className="d-none d-md-flex">
              <img className="img-fluid" src={carousel2} alt="Dr. Suess day" />
            </Col>
            <Col xxl={4} className="d-none d-xxl-flex">
              <img
                className="img-fluid"
                src={carousel3}
                alt="thank you crowd"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="g-0">
            <Col md={6} xxl={4}>
              <img
                className="img-fluid"
                src={carousel4}
                alt="operation christmas child"
              />
            </Col>
            <Col md={6} xxl={4} className="d-none d-md-flex">
              <img className="img-fluid" src={carousel5} alt="Dr. Suess day" />
            </Col>
            <Col xxl={4} className="d-none d-xxl-flex">
              <img
                className="img-fluid"
                src={carousel6}
                alt="thank you crowd"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="g-0">
            <Col md={6} xxl={4}>
              <img
                className="img-fluid"
                src={carousel7}
                alt="operation christmas child"
              />
            </Col>
            <Col md={6} xxl={4} className="d-none d-md-flex">
              <img className="img-fluid" src={carousel8} alt="Dr. Suess day" />
            </Col>
            <Col xxl={4} className="d-none d-xxl-flex">
              <img
                className="img-fluid"
                src={carousel9}
                alt="thank you crowd"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel> */}
    </>
  );
};

export default LandingCarousel;
