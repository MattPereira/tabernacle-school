import { Row, Col, Table } from "react-bootstrap";

const Trait = ({ image, adjectives }) => {
  return (
    <Row className="align-items-center justify-content-center mt-5">
      <Col xl={5} className="text-center mb-5 mb-xl-0">
        <img
          src={image}
          className="img-fluid rounded"
          alt="responsible children reading books"
        />
      </Col>
      <Col xl={7} lg={10}>
        <Table striped>
          <tbody>
            {Object.entries(adjectives).map((adjective, index) => (
              <tr key={adjective[0]}>
                <th>{adjective[0]}</th>
                <td>{adjective[1]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default Trait;
