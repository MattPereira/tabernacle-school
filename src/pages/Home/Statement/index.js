import { Carousel } from "react-bootstrap";

import { Container, Box, Typography } from "@mui/material";

const Statement = () => {
  return (
    <Container sx={{ py: 5, minHeight: "300px" }}>
      <Carousel
        controls={false}
        indicators={false}
        className="text-center p-5"
        interval={8000}
        fade
      >
        <Carousel.Item>
          <Typography variant="h4">Mission</Typography>
          <p className="lead">
            Teaching in all areas of life, the Truth, as centered in the Lord
            Jesus of the Bible.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <Typography variant="h4">Vision</Typography>
          <p className="lead">
            To see children grow up and reach their full potential by providing
            an environment that allows students to blossom as unique individuals
            created in the image of God.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <Typography variant="h4">Philosophy</Typography>
          <p className="lead">
            All children are gifted, and our responsibility is to help students
            discover and develop the unique abilities that God has given them.
          </p>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Statement;
