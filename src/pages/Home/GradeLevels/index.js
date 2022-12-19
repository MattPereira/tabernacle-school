import { HashLink } from "react-router-hash-link";
import { Typography, Grid, Container, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const GradeLevels = () => {
  const StyledButton = styled(Button)({
    color: "white",
    border: "1px solid white",
    textTransform: "none",
    borderRadius: "30px",
    fontFamily: "Didact Gothic",
    fontSize: "1.2rem",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      border: "1px solid white",
    },
  });

  return (
    <Box sx={{ bgcolor: "rgb(53, 94, 59)", py: 5, color: "white" }}>
      <Container sx={{ px: { xs: 3, lg: 0 } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item sm={10} md={8} lg={4}>
            <Typography
              variant="h3"
              sx={{ my: 3, textAlign: "center", fontFamily: "Copse" }}
            >
              Preschool
            </Typography>
            <Typography variant="p">
              Tiny Tigers Preschool provides a warm, nurturing, family
              atmosphere that is conducive to learning at an early age. Our
              program accepts children that are 4 years in age by September 1st.
              We have been providing and promoting high quality early childhood
              education since 1971.
            </Typography>
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <StyledButton
                size="large"
                component={HashLink}
                variant="outlined"
                to="/academics#Preschool"
              >
                Learn More
              </StyledButton>
            </Box>
          </Grid>
          <Grid item sm={10} md={8} lg={4}>
            <Typography
              variant="h3"
              sx={{ my: 3, textAlign: "center", fontFamily: "Copse" }}
            >
              Elementary
            </Typography>
            <Typography variant="p">
              At Tabernacle, we provide an elementary education that prepares
              children to think clearly, act responsibly, and live ethically.
              Our programs and curriculum give students a competitive edge in an
              increasingly complex society as they discover their unique
              giftedness.
            </Typography>
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <StyledButton
                size="large"
                component={HashLink}
                variant="outlined"
                to="/academics#Elementary"
              >
                Learn More
              </StyledButton>
            </Box>
          </Grid>
          <Grid item sm={10} md={8} lg={4}>
            <Typography
              variant="h3"
              sx={{ my: 3, textAlign: "center", fontFamily: "Copse" }}
            >
              Junior High
            </Typography>
            <Typography variant="p">
              At Tabernacle Middle School, we help our students navigate the
              early teen years and prepare them to excel in high school and
              beyond. Throughout the middle school years, our students are
              challenged academically and grow in confidence as they explore
              their interests.
            </Typography>
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <StyledButton
                size="large"
                component={HashLink}
                variant="outlined"
                to="/academics#Junior"
              >
                Learn More
              </StyledButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GradeLevels;
