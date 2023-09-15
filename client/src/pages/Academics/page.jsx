import {
  SectionTitle,
  SectionWrapper,
  Showcase,
  PageNav,
} from "../../components";

import academicsShowcaseImg from "../../assets/images/showcase/academics.jpg";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import Preschool from "./Preschool";
import Elementary from "./Elementary";
import MiddleSchool from "./MiddleSchool";
import DistanceLearning from "./DistanceLearning";

export default function AcademicsPage() {
  return (
    <div>
      <Showcase title="Academics" image={academicsShowcaseImg} />
      <PageNav
        sections={[
          "Preschool",
          "Elementary",
          "Middle School",
          "Distance Learning",
          "Common Core",
        ]}
      />
      <Preschool />
      <Elementary />
      <MiddleSchool />
      <DistanceLearning />
      <CommonCore />
      <ExpectedLearningResults />
    </div>
  );
}

function CommonCore() {
  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    marginBottom: "5px",
    border: `1px solid ${theme.palette.primary.main}`,
  }));

  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Common Core" />
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <Box sx={{ mb: 1 }}>
              <Typography variant="h5" textAlign="center">
                School Standards
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography variant="p">
                As a school well-known for maintaining academic excellence,
                Tabernacle School reviews all educational standards, both state
                and national. More importantly, we are committed to providing a
                Christian education to those we serve by forming and awakening
                faith in Jesus Christ in our students.
              </Typography>
            </Box>
            <Typography variant="p">
              Many Common Core standards have been implemented at Tabernacle
              School. The Common Core calls for an increased emphasis on deeper
              understanding of underlying concepts in both the English Language
              Arts and Mathematics standards. Tabernacle School has long
              challenged students not just to memorize facts, but to go deeper,
              think critically, and demonstrate a higher level of understanding.
              Other Common Core Standards address only minimum requirements and
              may be one or more grade levels below what we recognize as good
              teaching. We do not limit ourselves to national standards but go
              beyond, based on our philosophy of learning and sound educational
              practices. In other words, Tabernacle School’s curriculum exceeds
              many Common Core Standards in age­ appropriate instruction and
              academic rigor.{" "}
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <StyledAccordion defaultExpanded elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">What Is Common Core?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">
                  Common Core Standards are a broad set of national standards
                  established to shape and govern the general educational
                  standards and assessments in public school. Currently, there
                  are a handful of states who have opted not to align with the
                  national standards.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">
                  Private Schools & Common Core
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">
                  While public schools in California are mandated by our state
                  leadership to adopt Common Core Standards, private schools are
                  in a unique position to choose their alignment with the
                  standards for their curriculum and institutions as a whole. In
                  addition to new standards, Common Core also brings a new
                  standardized test for students. However, private school
                  students are not required to take these state tests.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">English</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">
                  In English (which the state refers to as English Language
                  Arts), the Common Core refers to specific state standards of
                  reading, writing, speaking, and listening whose mastery allows
                  students to leave high school “ready in literacy.” Tabernacle
                  School never set out to align ourselves with secular
                  standards, but we find that the Common Core standards are
                  already embedded in our courses. We strive to encourage
                  students to think skillfully, critically, and intelligently.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">Mathematics</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">
                  The stated purpose of the Common Core State Standards
                  Initiative is to detail and standardize what K-12 students
                  from each state should know upon leaving each grade level.
                  They are intended to achieve greater focus and coherence in
                  the mathematics curriculum across the grade levels, leading to
                  greater depth of application and understanding for individual
                  students. Many would simply call this “good teaching,” and the
                  Mathematics Department at Tabernacle is committed to a level
                  of excellence that universally meets or exceeds the
                  aforementioned standards.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function ExpectedLearningResults() {
  return (
    <Box id="Elementary" sx={{ bgcolor: "background.alternate", py: 8 }}>
      <Container>
        <SectionTitle title="Expected Learning Results" />
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" textAlign="center" gutterBottom>
                Lifelong Learner
              </Typography>
              <Typography variant="p">
                Is accountable for exerting personal effort towards his/her
                educational responsibility to be self-controlled and productive
                in the classroom and his/her commitment to live-long learning.
                Recognizes and develops his/her unique gifts by setting
                short-term and life-long personal goals which honor God, the
                Creator or gifts. Demonstrates leadership skills which are
                evidenced by living ethically and morally pure before both God
                and man while cultivating mental discipline and discernment as
                an involved citizen of the society.
              </Typography>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" textAlign="center" gutterBottom>
                Faithful Follower of Jesus
              </Typography>
              <Typography variant="p">
                After accepting the Lord Jesus Christ as personal Savior,
                demonstrates an on-going, deepening love relationship with the
                Lord as evidenced by a Christ-centered life displaying the
                personal attributes of Jesus. Develops a Biblical world view
                which results in a proper perspective of God as Heavenly Father
                and produces a growing trust in Him as Provider, Sustainer, and
                Controller of life. Shows evidence of a conscience sensitive to
                God’s commandments by knowing and applying God’s Word to all
                aspects of life.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" textAlign="center" gutterBottom>
                Academic Achiever
              </Typography>
              <Typography variant="p">
                Reads with good comprehension and writes with clear expression,
                meaningful vocabulary, and organization of thought. Applies
                critical thinking and problem solving skills to all types of
                learning and life situations. Communicates effectively with
                others by listening attentively and speaking clearly with
                confidence. Exercises a variety of methods, strategies and
                tools, including technology, to conduct research, evaluate
                information, and make responsible decisions in light of Biblical
                truths.
              </Typography>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" textAlign="center" gutterBottom>
                Citizen of Character
              </Typography>
              <Typography variant="p">
                Demonstrates respectful and responsive behavior towards others,
                with the right heart attitude. Exhibits responsible conduct in
                word and action, employing resourcefulness in accomplishing
                educational and life objectives. Works receptively with a
                diversity of people in a variety of frameworks with a resolute
                approach to learning.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
