import { Typography, Divider, Box } from "@mui/material";

const SectionTitle = ({ title }) => {
  // Weird div is for anchor links on same page

  const anchorId = title.split(" ")[0];
  return (
    <Box sx={{ pb: 5, pt: 0 }}>
      <div
        id={anchorId}
        style={{
          display: "block",
          position: "relative",
          top: "-175px",
          visibility: "hidden",
        }}
      ></div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <Divider
            sx={{
              width: "55px",
              height: "2px",
              bgcolor: "black",
            }}
          />
        </Box>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mx: 1.5,
          }}
        >
          {title}
        </Typography>
        <Box>
          <Divider
            sx={{
              width: "55px",
              height: "2px",
              bgcolor: "black",
              border: "none",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionTitle;
