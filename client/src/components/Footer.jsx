import { HashLink } from "react-router-hash-link";
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

import bgImage from "../assets/images/academics/preschool.jpg";

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
                    <svg
                      fill="white"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                    </svg>
                  </StyledIconButton>
                </Grid>
                <Grid item>
                  <StyledIconButton
                    component="a"
                    href="/pdfs/calendar-23-24.pdf"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
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
                href="https://matt-pereira.vercel.app/"
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
