import { Typography, Box, Grid } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import * as React from "react";

const PageNav = ({ sections }) => {
  return (
    <>
      <Box
        sx={{
          py: 2,
          borderBottom: "1px solid #e0e0e0",
          // display: "flex",
          // flexWrap: "nowrap",
        }}
      >
        <Grid
          container
          justifyContent={{ xs: "start", md: "center" }}
          sx={{
            px: { xs: 3, md: 0 },
            flexWrap: "nowrap",
            overflow: "auto",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          spacing={4}
        >
          {sections.map((section) => (
            <Grid item xs="auto" key={section}>
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
        {/* <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
          }}
        >
          <ArrowForwardIosIcon />
        </Box> */}
      </Box>
    </>
  );
};

export default PageNav;
