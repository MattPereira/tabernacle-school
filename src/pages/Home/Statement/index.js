import { Carousel, Container } from "react-bootstrap";
import "./index.scss";

const Statement = () => {
  return (
    <section id="statement" className="py-5 d-flex align-items-center">
      <Container>
        <Carousel
          controls={false}
          indicators={false}
          className="text-center p-5"
          interval={8000}
          fade
        >
          <Carousel.Item>
            <h2>Mission</h2>
            <p className="lead">
              Teaching in all areas of life, the Truth, as centered in the Lord
              Jesus of the Bible.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h2>Vision</h2>
            <p className="lead">
              To see children grow up and reach their full potential by
              providing an environment that allows students to blossom as unique
              individuals created in the image of God.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h2>Philosophy</h2>
            <p className="lead">
              All children are gifted, and our responsibility is to help
              students discover and develop the unique abilities with which God
              has bestowed upon them.
            </p>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Statement;
