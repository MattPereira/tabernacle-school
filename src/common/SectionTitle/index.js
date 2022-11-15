import { Typography, Divider, Box } from "@mui/material";

const SectionTitle = ({ title }) => {
  return (
    <Box sx={{ pb: 5, pt: 2 }}>
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
