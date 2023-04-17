import Slides from "./Slides";
import Accordion from "./FacultyAccordion";
import SectionTitle from "../../../components/SectionTitle";
import { Container, Grid, Box } from "@mui/material";

const Faculty = () => {
  return (
    <Box sx={{ py: 6, bgcolor: "background.alternate" }}>
      <SectionTitle title="Faculty" />
      <Container>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xl={10}>
            <Slides />
            <Accordion />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Faculty;
