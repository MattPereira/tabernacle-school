import { Row, Col } from "react-bootstrap";

const GiftCard = ({ image, title, definition, description, bgColor }) => {
  return (
    <Col xl={10}>
      <Row
        className={`${bgColor} justify-content-center align-items-center p-4 mb-3 rounded text-white`}
      >
        <Col md={6} className="d-flex justify-content-center">
          <img
            src={image}
            className="img-fluid rounded-circle"
            alt={title}
            style={{ width: "300px", height: "300px" }}
          />
        </Col>
        <Col md={6}>
          <h4 className="mb-0 py-3">{title}</h4>
          <p className="lead fst-italic">{definition}</p>
          <p>{description}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default GiftCard;
