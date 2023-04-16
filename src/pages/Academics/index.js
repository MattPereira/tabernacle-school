import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import SectionTitle from "../../components/SectionTitle";

import preschoolImg from "../../assets/images/academics/preschool.jpg";
import elementaryImg from "../../assets/images/academics/elementary.jpg";
import juniorHighImg from "../../assets/images/academics/junior-high.jpg";
import googleClassroomImg from "../../assets/images/academics/google-classroom.png";
import ignitiaImg from "../../assets/images/academics/ignitia.png";

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

function Preschool() {
  return (
    <Box>
      <Container sx={{ py: 5 }}>
        <SectionTitle title="Preschool" />

        <Box
          component="img"
          src={preschoolImg}
          sx={{ width: "100%", borderRadius: "30px", mb: 5 }}
          alt="Group of preschool children"
        />
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <Typography variant="p">
              Tabernacle’s Tiny Tigers is a licensed preschool facility and open
              to children from every background. We are a family-centered
              school, partnering with parents to ensure the success of every
              child. Clear and consistent communication between home and school
              is essential. Our school has been serving families in the
              community for 44 years. We offer a variety of childcare options to
              meet your individual family needs. We have half day and full day
              options available. Daycare is available from 6:45am to 6:00pm.
              Parents and children who attend Tabernacle will tell you that our
              school feels like a family. Many of our teachers and staff are
              former students who return to invest back into the school
              community. Lasting friendships are formed here. We invite you to
              start your experience at Tabernacle by joining the Tiny Tigers and
              watching your child excel.
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="p">
              Our classrooms and dedicated teachers offer students the
              opportunity to learn and discover more about themselves, their
              world, and each other in a warm and safe environment. Each of our
              teachers is trained in early childhood education and has a passion
              to see children excel. We provide a quality preschool program that
              combines play-based and academic curriculum to help our students
              prepare for kindergarten. We carefully plan activities that are
              developmentally appropriate and encourage exploration, fine-motor
              improvement, an interest in science and mathematics, and early
              literacy. Establishing routines and procedures is an important
              part of our program. These practices provide a safety and security
              that allows children the freedom to thrive. We encourage healthy
              lifestyle choices with our snack and lunch program.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Elementary() {
  return (
    <Box sx={{ bgcolor: "background.alternate" }}>
      <Container sx={{ py: 5 }}>
        <SectionTitle title="Elementary" />

        <Grid
          spacing={4}
          container
          sx={{ alginItems: "center", justifyContent: "center" }}
        >
          <Grid item lg={6} order={{ xs: 2, lg: 1 }}>
            <Typography variant="p">
              We understand how important it is to find the right elementary
              program to fit the needs of your growing child. At Tabernacle, we
              provide an elementary education that prepares children to think
              clearly, act responsibly, and live ethically. Our programs and
              curriculum give our students a competitive edge in an increasingly
              complex society as they discover their unique giftedness.{" "}
            </Typography>
            <Typography variant="p">
              Our qualified teachers are passionate about providing a
              high-quality education while developing students' love for Christ
              in a caring and safe environment. We provide different modalities
              of learning knowing that God has created each child to be unique.
              Through hands-on projects and enrichment activities such as
              electives, physical education, integrated technology, and field
              trips, Tabernacle equips our students to thrive academically,
              socially, and emotionally.
            </Typography>
          </Grid>
          <Grid
            item
            lg={6}
            order={{ xs: 1, lg: 2 }}
            sx={{ textAlign: "center" }}
          >
            <Box
              component="img"
              sx={{ width: "100%", borderRadius: "30px" }}
              src={elementaryImg}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function MiddleSchool() {
  return (
    <Box sx={{ my: 5 }}>
      <SectionTitle title="Middle School" />
      <Container sx={{ pb: 5 }}>
        <Grid
          spacing={4}
          container
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid item lg={6}>
            <Box
              component="img"
              sx={{ width: "100%", borderRadius: "30px" }}
              src={juniorHighImg}
              alt=""
            />
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="p">
                We are thrilled to welcome you to Tabernacle Middle School,
                where we help our students navigate the early teen years and
                prepare to excel in high school and beyond. Throughout the
                middle school years, our students are challenged academically
                and grow in confidence as they explore their interests. We
                consider it an honor to partner with you in providing support
                and guidance for your children as they grow academically,
                spiritually, and athletically. We offer a strong list of
                academic and elective courses that meet our standard of
                excellence and help our students gain a solid academic footing
                in preparation for high school. Because of our high standards,
                our students regularly perform beyond grade level in national
                standard testing.
              </Typography>
            </Box>
            <Typography variant="p">
              Our middle school students have the opportunity to attend hands-on
              learning experiences as they go to a four-day outdoor education
              science camp in sixth grade. Students in the eighth grade take a
              week-long trip to Washington D.C. to visit the places they have
              learned about in our country’s history. Middle school students at
              Tabernacle have access to state-of-the-art computer and science
              labs, award winning school sports teams, and an enriching extended
              care program before and after school. Biblical truth is a part of
              everything we teach through daily Bible classes, weekly chapels,
              and classroom Biblical integration. We have our own chapel band
              lead us in worship during chapel time on Fridays and have guest
              speakers join our staff presenting God’s Word in the Bible.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const DistanceLearning = () => {
  return (
    <Box sx={{ py: 5, bgcolor: "background.alternate" }}>
      <SectionTitle title="Distance Learning" />
      <Container sx={{ pb: 5 }}>
        <Box sx={{ mb: 5 }}>
          <Typography variant="p">
            In case of a resurgence in Coronavirus cases and potential school
            closure, Tabernacle has implemented a Distance Learning Program
            using Google Classroom. Each student has been assigned to a Google
            classroom. Middle School students engaging in distance learning will
            access their curriculum using Ignitia, a Web-based learning
            environment featuring a media-rich, online curriculum.
          </Typography>
        </Box>
        <Grid container spacing={5} justifyContent="space-around">
          <Grid item md={6} lg={5}>
            <Paper sx={{ borderRadius: "30px", height: "100%" }} elevation={0}>
              <Box sx={{ p: 5, textAlign: "center" }}>
                <Box
                  component="img"
                  src={googleClassroomImg}
                  sx={{ width: "75%" }}
                  alt=""
                />
              </Box>
              <Box sx={{ p: 3 }}>
                <Box>
                  <Typography
                    variant="h5"
                    component="a"
                    href="https://edu.google.com/workspace-for-education/classroom/"
                  >
                    Google Classroom
                  </Typography>
                </Box>

                <Typography variant="p">
                  A blended learning platform developed by Google for
                  educational institutions that aims to simplify creating,
                  distributing, and grading assignments.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6} lg={5}>
            <Paper sx={{ borderRadius: "30px", height: "100%" }} elevation={0}>
              <Box sx={{ p: 5, textAlign: "center" }}>
                <Box
                  component="img"
                  src={ignitiaImg}
                  sx={{ width: "75%" }}
                  alt=""
                />
              </Box>
              <Box sx={{ p: 3 }}>
                <Box>
                  <Typography
                    variant="h5"
                    component="a"
                    href="https://tabernacleca.ignitiaschools.com/owsoo/login/auth"
                  >
                    Ignitia
                  </Typography>
                </Box>

                <Typography variant="p">
                  A versatile online Christian curriculum and learning
                  management system with dynamic, Christ-centered lessons and
                  interactive features designed to serve teachers and students
                  in elementary, middle, and high school.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

function CommonCore() {
  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    marginBottom: "5px",
    border: `1px solid ${theme.palette.primary.main}`,
  }));

  return (
    <Box sx={{ py: 5 }}>
      <SectionTitle title="Common Core" />
      <Container sx={{ pb: 5 }}>
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
    <Box id="Elementary" sx={{ bgcolor: "background.alternate" }}>
      <Container sx={{ py: 5 }}>
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
