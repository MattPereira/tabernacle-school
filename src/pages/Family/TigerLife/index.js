import orientation from "../../../assets/images/family/orientation.jpg";

import { Link } from "react-router-dom";

import SectionTitle from "../../../common/SectionTitle";
import { Container, Box, Paper, Typography, Grid } from "@mui/material";

const TigerLife = () => {
  return (
    <Box id="Tiger" sx={{ py: 5, bgcolor: "background.alternate" }}>
      <Container>
        <SectionTitle title="Tiger Life" />

        <Grid container justifyContent="center" sx={{ pb: 5 }}>
          <Grid item xs={12} md={6} lg={4}>
            <Link
              to="/family/orientation_video"
              className="text-decoration-none link-dark"
            >
              <Paper elevation={0} sx={{ borderRadius: "30px" }}>
                <Box
                  component="img"
                  src={orientation}
                  sx={{ width: "100%", borderRadius: "30px" }}
                  alt=""
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h5">Parent Orientation</Typography>
                  <Typography variant="p">
                    All relevant information parents need for the upcoming
                    school year
                  </Typography>
                </Box>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TigerLife;
