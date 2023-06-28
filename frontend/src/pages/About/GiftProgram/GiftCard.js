import { Row } from "react-bootstrap";

import { Box, Typography } from "@mui/material";

const GiftCard = ({ image, title, definition, description, bgColor }) => {
  return (
    <div>
      <Row
        className={`${bgColor} justify-content-center align-items-center p-4 rounded text-white`}
      >
        <Box sx={{ mb: 3 }}>
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: "100%",
              borderRadius: "7px",
              objectFit: "cover",
              height: { xs: "250px", sm: "450px", md: "300px", lg: "350px" },
            }}
          />
        </Box>
        <Box>
          <Typography variant="h5">{title}</Typography>
          <Typography
            variant="p"
            sx={{ fontSize: "1.5rem", fontStyle: "italic" }}
          >
            {definition}
          </Typography>
          <Box>
            <Typography variant="p">{description}</Typography>
          </Box>
        </Box>
      </Row>
    </div>
  );
};

export default GiftCard;
