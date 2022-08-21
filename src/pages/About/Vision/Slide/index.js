import { Row, Col } from "react-bootstrap";

const Slide = ({ image, paragraphs }) => {
  return (
    <Row className="align-items-center">
      <Col xl={6} className="text-center mb-5 mb-xl-0">
        <img
          className="img-fluid center-cropped rounded-circle"
          src={image}
          alt="..."
        />
      </Col>
      <Col xl={6}>
        {paragraphs.map((paragraph) => (
          <div key={paragraph["title"]}>
            <h4 className="text-center fs-3 fw-bold">{paragraph["title"]}</h4>
            <p className="lead">{paragraph["text"]}</p>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default Slide;
