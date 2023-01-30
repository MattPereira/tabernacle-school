import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import {
  Grid,
  Button,
  Box,
  Divider,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import bgImage from "../../assets/images/academics/preschool.jpg";

const Footer = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    width: "100%",
    color: "white",
    border: "2px solid white",
    fontSize: "22px",
    letterSpacing: "3px",
    padding: "15px 0px",
    fontFamily: "Didact Gothic",
    borderRadius: "15px",
    "&:hover": {
      color: "white",
      border: `2px solid #c0ac15`,
      backgroundColor: "#c0ac15",
    },
  }));

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: "white",
    border: "1px solid white",
    borderRadius: "50%",
    padding: "16px",

    "&:hover": {
      color: "white",
      backgroundColor: "#c0ac15",
      border: "1px solid #c0ac15",
    },
  }));
  // bgcolor: "#1e88e5"
  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(rgba(21, 101, 192, 0.65), rgba(21, 101, 192, 0.65)), url(${bgImage}) center / cover no-repeat`,
          py: 9,
        }}
      >
        <Container>
          <Box>
            <Grid container spacing={4} sx={{ px: { xs: 0, md: 15 } }}>
              <Grid item xs={12} md={4}>
                <StyledButton
                  component={HashLink}
                  to="/connect#Contact"
                  variant="outlined"
                >
                  <strong>Contact</strong>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4}>
                <StyledButton
                  variant="outlined"
                  component={HashLink}
                  to="/admissions#Request"
                >
                  <strong>Visit</strong>
                </StyledButton>
              </Grid>

              <Grid item xs={12} md={4}>
                <StyledButton
                  component={HashLink}
                  variant="outlined"
                  to="/connect#Employment"
                >
                  <strong>Employment</strong>
                </StyledButton>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#1565c0", py: 5 }}>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            sx={{
              py: 5,
              color: "white",
              justifyContent: { xs: "center", md: "space-between" },
            }}
          >
            <Grid
              item
              sm={12}
              md={6}
              sx={{ textAlign: { xs: "center", md: "start" } }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                TABERNACLE CHRISTIAN SCHOOL
              </Typography>
              <Box>
                <Typography variant="p">4380 Concord Blvd</Typography>
              </Box>
              <Box>
                <Typography variant="p">Concord, CA 94521</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="p">925.685.9169</Typography>
              </Box>
              <Box sx={{ mb: { xs: 2, md: 0 } }}>
                <Typography
                  component="a"
                  href="https://goo.gl/maps/bzszKK9jY9ngSiDE9"
                  sx={{
                    color: "#E6BE67",
                    fontWeight: 600,
                    textDecoration: "none",

                    "&:hover": {
                      textDecoration: "underline",
                      color: "#E6BE67",
                    },
                  }}
                >
                  DIRECTIONS
                </Typography>
              </Box>
            </Grid>
            <Grid sm={12} md={6} item>
              <Box
                sx={{ mb: { xs: 3 }, textAlign: { xs: "center", md: "end" } }}
              >
                <Typography variant="h6" sx={{ color: "#E6BE67" }}>
                  <em>Love God. Learn for life. Lead like Christ.</em>
                </Typography>
              </Box>
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: { xs: "center", md: "end" } }}
              >
                <Grid item>
                  <StyledIconButton
                    component="a"
                    href="https://www.facebook.com/people/Tabernacle-School/100064024872370/"
                  >
                    <FacebookOutlinedIcon />
                  </StyledIconButton>
                </Grid>
                <Grid item>
                  <StyledIconButton component={Link} to="/campus#calendar">
                    <CalendarMonthIcon />
                  </StyledIconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{ borderTop: "2px solid white" }} />
          <Grid
            container
            justifyContent="flex-end"
            sx={{ pt: 3, color: "white" }}
          >
            <Grid item>
              <a
                href="https://matt-pereira.surge.sh/"
                className="text-decoration-none link-light"
              >
                Website by Matt Pereira
              </a>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
