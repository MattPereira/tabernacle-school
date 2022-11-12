import { Typography, Divider } from "@mui/material";

const SectionTitle = ({ title }) => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginBottom: "1.5rem" }}
      >
        {title}
      </Typography>
      <Divider
        sx={{ width: "125px", margin: "auto", borderTop: "3px solid" }}
      />
    </>
  );
};

export default SectionTitle;
