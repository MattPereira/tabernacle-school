import facts from "../../../assets/images/family/facts-help.png";

import { Typography, Container, Grid, Box } from "@mui/material";

const FactsHelp = () => {
  return (
    <>
      <Typography variant="h2" align="center" sx={{ pt: 10 }}>
        Facts Help
      </Typography>
      <section>
        <Container sx={{ py: 10 }}>
          <Grid container alignItems="center" spacing={4}>
            <Grid item lg={6}>
              <Box sx={{ mb: 5 }}>
                <Typography variant="p">
                  To log into FACTS (formally known as RenWeb) you will need the
                  <strong> school code</strong> and an
                  <strong>
                    {" "}
                    email account registered with Tabernacle School
                  </strong>
                  .
                </Typography>
                <Typography variant="p">
                  Please provide your email address to the front office before
                  attempting to login to FACTS.
                </Typography>
                <Typography variant="p">
                  The School District Code is: <strong>TCS-CA</strong>
                </Typography>
                <Typography variant="p">
                  The user name will be your email address as given to the
                  school.
                </Typography>
                <Typography variant="p">
                  You will pick your own password.
                </Typography>
                <Typography variant="p">
                  The first time you login to FACTS – click on the Create New
                  ParentsWeb Account.
                </Typography>
                <Typography variant="p">
                  If you forgot your password you can click on the Forgot User
                  Name/Password? link. If you need to change your email address
                  or aren’t sure which address you gave to the school, please
                  contact the front office either by phone (925) 685-9169 or by
                  email.
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="p"
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://logins2.renweb.com/logins/ParentsWeb-Login.aspx"
                >
                  Facts Parent Login
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <a
                href="https://logins2.renweb.com/logins/ParentsWeb-Login.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src={facts}
                  sx={{ width: "100%" }}
                  alt="facts login portal"
                />
              </a>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
export default FactsHelp;
