import { Box, Grid, Typography } from "@mui/material";

const Slide = ({ image, paragraphs }) => {
  return (
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      <Grid item lg={6}>
        <Box
          component="img"
          sx={{
            width: "100%",
            borderRadius: "30px",
            objectFit: "cover",
            height: { sx: "250px", md: "550px" },
          }}
          src={image}
          alt="..."
        />
      </Grid>
      <Grid item lg={6}>
        {paragraphs.map((paragraph) => (
          <Box key={paragraph["title"]} sx={{ mb: 3 }}>
            <Typography variant="h5" textAlign="center">
              {paragraph["title"]}
            </Typography>
            <Typography variant="p">{paragraph["text"]}</Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default Slide;
