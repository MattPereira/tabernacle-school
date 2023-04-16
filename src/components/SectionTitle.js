import { Typography, Divider, Box } from "@mui/material";

const SectionTitle = ({ title }) => {
  // Weird div is for anchor links on same page

  const anchorId = title.split(" ")[0];
  console.log(anchorId);
  return (
    <Box sx={{ pb: 5, pt: 2 }}>
      <div
        id={anchorId}
        style={{
          display: "block",
          position: "relative",
          top: "-200px",
          visibility: "hidden",
        }}
      ></div>
      <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>
        {title}
      </Typography>
      <Divider
        sx={{ width: "125px", margin: "auto", borderTop: "3px solid" }}
      />
    </Box>
  );
};

export default SectionTitle;
