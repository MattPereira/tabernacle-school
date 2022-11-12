// import { Carousel, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import carousel1 from "../../../assets/images/home/carousel1.jpg";
import carousel2 from "../../../assets/images/home/carousel2.jpg";
import carousel3 from "../../../assets/images/home/carousel3.jpg";
import carousel4 from "../../../assets/images/home/carousel4.jpg";
import carousel5 from "../../../assets/images/home/carousel5.jpg";
import carousel6 from "../../../assets/images/home/carousel6.jpg";
import carousel7 from "../../../assets/images/home/carousel7.jpg";
import carousel8 from "../../../assets/images/home/carousel8.jpg";

import { Box } from "@mui/material";

const LandingCarousel = () => {
  const carouselImages = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
    carousel8,
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {carouselImages.map((image, idx) => (
            <Box
              key={idx}
              sx={{ width: { xs: "400px", md: "500px", lg: "600px" } }}
              component="img"
              src={image}
              alt="carousel image"
            />
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default LandingCarousel;
