import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import Faculty from "./Faculty";
import Values from "./Values";
import Vision from "./Vision";
import GiftProgram from "./GiftProgram";
import LiveProgram from "./LiveProgram";
import aboutShowcase from "../../assets/images/showcase/about.jpg";

import { Container, Typography, Box } from "@mui/material";

import SectionTitle from "../../components/SectionTitle";

export default function About() {
  return (
    <div>
      <Showcase title="About" image={aboutShowcase} />
      <PageNav
        sections={[
          "History",
          "Faculty",
          "Live Program",
          "Gift Program",
          "Values",
          "Vision",
        ]}
      />
      <History />
      <Faculty />
      <LiveProgram />
      <GiftProgram />
      <Values />
      <Vision />
    </div>
  );
}

function History() {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <SectionTitle title="History" />
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            textAlign={{ xs: "center", md: "start" }}
            gutterBottom
          >
            Founding
          </Typography>
          <Typography variant="p">
            In 1989 our Founder, Margaret Bridges, felt God’s call to establish
            Christian Schools in parts of the world that were previously
            unreachable. Tabernacle School has partnered with several schools
            overseas to help spread the good news of Jesus, and we continue to
            identify opportunities to impact our world.
          </Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            textAlign={{ xs: "center", md: "start" }}
            gutterBottom
          >
            Restructuring
          </Typography>
          <Typography variant="p">
            The school and church separated operations in 1996 and have
            continued to share use of the Tabernacle Church property. At the
            beginning of the 2009 school year, Mrs. Bridges retired from daily
            school services. We are grateful for the impact she has made as the
            Founder of Tabernacle School, and we continue to honor her vision
            and her love for children. A management team was formed to oversee
            the day-to-day operations of the school, while the school board
            continues to be responsible for Tabernacle's vision, mission and
            finances.
          </Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            textAlign={{ xs: "center", md: "start" }}
            gutterBottom
          >
            Present Day
          </Typography>
          <Typography variant="p">
            Tabernacle School has flourished under our current leadership team.
            We are continuing to look for ways to improve our campus through the
            use of technology and the integration of teaching methods based on
            our philosophy of multiple intelligences. Each year we strive for
            excellence in education while fostering a loving family atmosphere
            where children grow and thrive.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
