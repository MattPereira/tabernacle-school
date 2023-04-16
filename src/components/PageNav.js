import { Typography, Box, Grid } from "@mui/material";

const PageNav = ({ sections }) => {
  return (
    <Box
      sx={{
        py: 2,
        borderBottom: "1px solid #e0e0e0",
        display: { xs: "none", md: "flex" },
      }}
    >
      <Grid container justifyContent="center">
        {sections.map((section) => (
          <Grid item key={section} sx={{ mx: 3 }}>
            <Typography
              component="a"
              href={`#${section.split(" ")[0]}`}
              sx={{
                fontSize: "1.25rem",
                fontFamily: "Didact Gothic",
                fontWeight: 500,
                textDecoration: "none",
                color: "black",
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
