import { Typography, Box } from "@mui/material";

const Showcase = ({ title, image }) => {
  return (
    <Box
      sx={{
        height: { xs: "175px", sm: "225px", md: "275px" },
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${image}) center / cover no-repeat`,
      }}
    >
      <Box
        sx={{
          background: "rgba(0, 0, 0, 0.45)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      ></Box>
      <Box sx={{ zIndex: 2 }}>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Showcase;
