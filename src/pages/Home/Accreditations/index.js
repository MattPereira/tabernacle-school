import { Grid, Container, Typography, Box } from "@mui/material";

import asci from "../../../assets/images/home/acsi.png";
import wasc from "../../../assets/images/home/wasc.jpeg";

import SectionTitle from "../../../common/SectionTitle";

const Accreditations = () => {
  return (
    <section id="accreditation" className="py-5">
      <Container>
        <SectionTitle title="Accreditations" />
        <Grid container columnSpacing={3} sx={{ mb: 5 }}>
          <Grid item xs={12} md={6} lg={8}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              ASSOCIATION OF CHRISTIAN SCHOOLS INTERNATIONAL
            </Typography>
            <p>
              Tabernacle School is accredited by the Association of Christian
              Schools International (ACSI). ACSI endeavors to "strengthen
              Christian schools and equip Christian educators worldwide as they
              prepare students academically and inspire them to become devoted
              followers of Jesus Christ."
            </p>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              sx={{ width: "100%" }}
              src={asci}
              alt="ACSI accreditaiton logo"
            />
          </Grid>
        </Grid>
        <Grid container columnSpacing={3} sx={{ mb: 5 }}>
          <Grid item md={6} lg={8}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              WESTERN ASSOCIATION OF SCHOOLS AND COLLEGES
            </Typography>
            <p>
              Tabernacle School is also accredited by the Western Association of
              Schools and Colleges (WASC). WASC fosters "excellence in
              elementary, secondary, adult and postsecondary institutions, and
              supplementary education programs. The Commission encourages school
              improvement through a process of continuing evaluation and
              recognizes institutions through granting accreditation to the
              schools that meet an acceptable level of quality in accordance
              with the established criteria."
            </p>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              sx={{ width: "50%" }}
              src={wasc}
              alt="Western Association of Schools and Colleges"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Accreditations;
