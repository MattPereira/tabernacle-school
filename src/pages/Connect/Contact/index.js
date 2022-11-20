import ContactAccordion from "./ContactAccordion";
import ContactForm from "./ContactForm";
import { Container, Grid } from "@mui/material";
import SectionTitle from "../../../common/SectionTitle";

const Contact = () => {
  return (
    <section id="Contact" className="py-5">
      <SectionTitle title="Contact Us" />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} sm={10} md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} sm={10} md={6}>
            <ContactAccordion />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
