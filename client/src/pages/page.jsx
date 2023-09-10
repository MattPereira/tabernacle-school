import { HashLink } from "react-router-hash-link";
import { styled } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

// Accreditations Image Imports
import asci from "../assets/images/homepage/acsi.png";
import wasc from "../assets/images/homepage/wasc.jpeg";

// Internal Component Imports
import SectionTitle from "../components/SectionTitle";
import SectionWrapper from "../components/SectionWrapper";

export default function Homepage() {
  return (
    <>
      <LandingShowcase />
      <StatementSlider />
      <EducationLevels />
      <ParentTestimonials />
      <Accreditations />
    </>
  );
}

function LandingShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-1">
        <img
          className="w-full h-full"
          src="/images/home-showcase-1.jpg"
          alt="showcase image"
        />
      </div>

      <div className="col-span-1 md:flex md:col-span-1 hidden">
        <img
          className="w-full"
          src="/images/home-showcase-2.jpg"
          alt="showcase image"
        />
      </div>

      <div className="col-span-1 xl:flex hidden">
        <img
          className="w-full"
          src="/images/home-showcase-4.jpg"
          alt="showcase image"
        />
      </div>

      <div className="col-span-1 lg:flex hidden">
        <img
          className="w-full"
          src="/images/home-showcase-3.jpg"
          alt="showcase image"
        />
      </div>
    </div>
  );
}

const STATEMENTS = [
  {
    title: "Mission",
    text: "Teaching in all areas of life, the Truth, as centered in the Lord Jesus of the Bible.",
  },
  {
    title: "Vision",
    text: "To see children grow up and reach their full potential by providing an environment that allows students to blossom as unique individuals created in the image of God.",
  },
  {
    title: "Philosophy",
    text: "All children are gifted, and our responsibility is to help students discover and develop the unique abilities that God has given them.",
  },
];

function StatementSlider() {
  return (
    <Container
      sx={{
        height: { xs: "250px", md: "275px" },
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Carousel interval={5000} duration={1500}>
        {STATEMENTS.map((statement, idx) => (
          <div key={idx}>
            <h4 className="font-copse text-2xl md:text-3xl">
              {statement.title}
            </h4>
            <p className="font-gothic text-xl">{statement.text}</p>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

const StyledButton = styled(Button)({
  color: "white",
  border: "1px solid white",
  textTransform: "none",
  borderRadius: "30px",
  fontFamily: "Didact Gothic",
  fontSize: "1.2rem",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    border: "1px solid white",
  },
});
function EducationLevels() {
  return (
    <SectionWrapper bgcolor="rgb(53, 94, 59)">
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ color: "white" }}
      >
        <Grid item sm={10} md={8} lg={4}>
          <Typography
            variant="h3"
            sx={{ mb: 3, textAlign: "center", fontFamily: "Copse" }}
          >
            Preschool
          </Typography>
          <Typography variant="p">
            The tiny tigers preschool provides a warm, nurturing, family
            atmosphere that is conducive to learning at an early age. Our
            program accepts children that are 3 years old by September 1st. We
            have been providing and promoting high quality early childhood
            education since 1971.
          </Typography>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <StyledButton
              size="large"
              component={HashLink}
              variant="outlined"
              to="/academics#Preschool"
            >
              Learn More
            </StyledButton>
          </Box>
        </Grid>
        <Grid item sm={10} md={8} lg={4}>
          <Typography
            variant="h3"
            sx={{ mb: 3, textAlign: "center", fontFamily: "Copse" }}
          >
            Elementary
          </Typography>
          <Typography variant="p">
            Our elementary program provides an education that prepares children
            to think clearly, act responsibly, and live ethically. Our programs
            and curriculum give students a competitive edge in an increasingly
            complex society as they discover their unique giftedness.
          </Typography>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <StyledButton
              size="large"
              component={HashLink}
              variant="outlined"
              to="/academics#Elementary"
            >
              Learn More
            </StyledButton>
          </Box>
        </Grid>
        <Grid item sm={10} md={8} lg={4}>
          <Typography
            variant="h3"
            sx={{ mb: 3, textAlign: "center", fontFamily: "Copse" }}
          >
            Middle School
          </Typography>
          <Typography variant="p">
            During middle school, we help our students navigate the early teen
            years and prepare them to excel in high school and beyond.
            Throughout the middle school years, our students are challenged
            academically and grow in confidence as they explore their interests.
          </Typography>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <StyledButton
              size="large"
              component={HashLink}
              variant="outlined"
              to="/academics#Middle"
            >
              Learn More
            </StyledButton>
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

function ParentTestimonials() {
  const theme = useTheme();

  return (
    <SectionWrapper bgcolor="background.alternate">
      <SectionTitle title="Parent Testimonials" />

      <Box sx={{ mb: 5 }}>
        <blockquote>
          <Typography variant="p">
            “I couldn’t say enough great things about Tabernacle’s preschool
            program. I appreciate them so much and wish I could have them be my
            daughter’s teachers forever. They are the most loving, smart, kind
            hearted, caring teachers I have ever met. We are so blessed to have
            them in our kids lives! They are the very best.”
          </Typography>
        </blockquote>
        <figcaption style={{ color: theme.palette.grey[600] }}>
          — Preschool parent, 2019
        </figcaption>
      </Box>
      <Box sx={{ mb: 5 }}>
        <blockquote>
          <Typography variant="p">
            “My child’s third grade teacher is incredible! She is caring,
            encouraging and supportive, while still holding high expectations to
            ensure the students are ready for 4th grade and beyond. With any
            question or concerns that I have had throughout the year, she is
            timely in her response with a wealth of knowledge and resources. Her
            help class has been such a lifesaver to my son, giving him the
            additional practice and encouragement on those more challenging
            concepts throughout the year. I have seen my son grow into a more
            confident learner and this is a huge thank you to his teacher and
            the safe learning environment she creates in her classroom.”
          </Typography>
        </blockquote>
        <figcaption style={{ color: theme.palette.grey[600] }}>
          — Third grade parent, 2019
        </figcaption>
      </Box>
      <Box>
        <blockquote>
          <Typography variant="p">
            “We feel blessed that two of our three children have attended
            Tabernacle. Knowing that the teachers care, that they can be
            themselves without a ‘direct worldly attack’, and that there are
            opportunities in leadership, sports, and a Christian walk are worth
            the sacrifices we make as parents for them to attend here. We
            appreciate all the Tabernacle offers their students, families, and
            staff.”
          </Typography>
        </blockquote>
        <figcaption style={{ color: theme.palette.grey[600] }}>
          — Middle school parent, 2016
        </figcaption>
      </Box>
    </SectionWrapper>
  );
}

function Accreditations() {
  return (
    <SectionWrapper>
      <SectionTitle title="Accreditations" />

      <Grid container columnSpacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} md={6} lg={8}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            ASSOCIATION OF CHRISTIAN SCHOOLS INTERNATIONAL
          </Typography>
          <Typography variant="p">
            Tabernacle School is accredited by the Association of Christian
            Schools International (ACSI). ACSI endeavors to "strengthen
            Christian schools and equip Christian educators worldwide as they
            prepare students academically and inspire them to become devoted
            followers of Jesus Christ."
          </Typography>
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
          <Typography variant="p">
            Tabernacle School is also accredited by the Western Association of
            Schools and Colleges (WASC). WASC fosters "excellence in elementary,
            secondary, adult and postsecondary institutions, and supplementary
            education programs. The Commission encourages school improvement
            through a process of continuing evaluation and recognizes
            institutions through granting accreditation to the schools that meet
            an acceptable level of quality in accordance with the established
            criteria."
          </Typography>
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
    </SectionWrapper>
  );
}
