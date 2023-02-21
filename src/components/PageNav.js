import { Typography, Box, Grid } from "@mui/material";

const PageNav = ({ sections }) => {
  return (
    <Box
      sx={{
        py: 2,
        borderBottom: "1px solid #e0e0e0",
        display: { xs: "none", sm: "flex" },
      }}
    >
      <Grid container justifyContent="center" spacing={6}>
        {sections.map((section) => (
          <Grid item key={section}>
            <Typography
              href={`#${section.split(" ")[0]}`}
              sx={{
                fontSize: "1.2rem",
                fontFamily: "Montserrat",
                fontWeight: 500,
              }}
            >
              {section}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PageNav;
