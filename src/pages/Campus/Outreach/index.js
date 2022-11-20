import { Row, Col } from "react-bootstrap";

import friends from "../../../assets/images/campus/friends-feeding.jpg";
import thanksgiving from "../../../assets/images/campus/thanksgiving-food.jpg";
import christmas from "../../../assets/images/campus/operation-christmas.jpg";
import SectionTitle from "../../../common/SectionTitle";
import { Container, Box } from "@mui/material";

import "./index.scss";

const Outreach = () => {
  return (
    <Box id="Outreach" sx={{ py: 5, bgcolor: "background.alternate" }}>
      <SectionTitle title="Outreach" />
      <Container sx={{ py: 5 }}>
        <Row className="row text-center">
          <Col xl={4} className="mb-3">
            <div className="text-center">
              <a
                href="http://gsconcord.com/outreach-ministries/friends-feeding-friends/"
                className="text-decoration-none link-dark"
              >
                <img
                  src={friends}
                  className="img-fluid center-crop my-4 rounded-circle"
                  alt=""
                />

                <h3 className="fw-bold">Friends Feeding Friends</h3>
              </a>
            </div>
            <p className="lead">
              An outreach ministry that serves the homeless and low income
              people in our community in loving memory of Sarah Deniston.
            </p>
          </Col>
          <Col xl={4} className="mb-3">
            <div className="text-center">
              <a
                href="https://www.foodbankccs.org/give-help/host-a-drive.html"
                className="text-decoration-none link-dark"
              >
                <img
                  src={thanksgiving}
                  className="img-fluid center-crop my-4 rounded-circle"
                  alt=""
                />
                <h3 className="fw-bold">Thanksgiving Food Drive</h3>
              </a>
            </div>
            <p className="lead">
              Tabernacle partners with the Food Bank of Contra Costa and Solano
              during November to collect healthy and nonperishable foods.
            </p>
          </Col>
          <Col xl={4} className="mb-3">
            <div className="text-center">
              <a
                href="https://www.samaritanspurse.org/what-we-do/operation-christmas-child/"
                className="text-decoration-none link-dark"
              >
                <img
                  src={christmas}
                  className="img-fluid center-crop my-4 rounded-circle"
                  alt=""
                />
                <h3 className="fw-bold">Operation Christmas Child</h3>
              </a>
            </div>
            <p className="lead">
              Partnering with Samaritan’s Purse, Tabernacle families pack
              shoeboxes to show God’s love in a tangible way to children in need
              around the world.
            </p>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Outreach;
