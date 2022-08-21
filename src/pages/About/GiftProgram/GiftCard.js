import { Row, Col } from "react-bootstrap";

const GiftCard = ({ image, title, definition, description, bgColor }) => {
  return (
    <div className="gift--box">
      <Row
        className={`${bgColor} justify-content-center align-items-center p-4 rounded text-white`}
      >
        <Col md={6} className="d-flex justify-content-center">
          <img
            src={image}
            className="img-fluid rounded-circle"
            alt={title}
            style={{ width: "275px", height: "275px" }}
          />
        </Col>
        <Col md={6}>
          <h4 className="mb-0 py-3 fw-bold">{title}</h4>
          <p className="lead fst-italic">{definition}</p>
          <p>{description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default GiftCard;
