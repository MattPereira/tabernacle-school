import { HashLink } from "react-router-hash-link";
import { styled } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";

import SectionTitle from "../components/SectionTitle";

// Jogathon icons for links
// import InfoIcon from "@mui/icons-material/Info";
// import PaidIcon from "@mui/icons-material/Paid";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
// import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import StorefrontIcon from "@mui/icons-material/Storefront";
// import LocalDiningIcon from "@mui/icons-material/LocalDining";
// import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

// Infinite Carousel Image Imports
// import Marquee from "react-fast-marquee";
// import carousel1 from "../assets/images/home/carousel1.jpg";
// import carousel2 from "../assets/images/home/carousel2.jpg";
// import carousel3 from "../assets/images/home/carousel3.jpg";
// import carousel4 from "../assets/images/home/carousel4.jpg";
// import carousel5 from "../assets/images/home/carousel5.jpg";
// import carousel6 from "../assets/images/home/carousel6.jpg";
// import carousel7 from "../assets/images/home/carousel7.jpg";
// import carousel8 from "../assets/images/home/carousel8.jpg";
// import jogHero from "../assets/images/home/ark-a-thon.png";

// Showcase Images
import showcase1 from "../assets/images/showcase/about.jpg";
import showcase2 from "../assets/images/showcase/admissions.jpg";
import showcase3 from "../assets/images/showcase/campus.jpg";
import showcase4 from "../assets/images/showcase/academics.jpg";

// Accreditations Image Imports
import asci from "../assets/images/home/acsi.png";
import wasc from "../assets/images/home/wasc.jpeg";

import { Box, Container, Typography, Grid, Button } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

export default function Homepage() {
  return (
    <div>
      <LandingShowcase />
      <StatementSlider />
      <EducationLevels />
      <ParentTestimonials />
      <Accreditations />
    </div>
  );
}

// function Jogathon() {
//   const StyledButton = styled(Button)(({ theme }) => ({
//     fontFamily: "didact gothic",
//     fontSize: "22px",
//     textTransform: "none",
//     width: "100%",
//     fontWeight: "bold",
//     justifyContent: "start",
//     borderRadius: "30px",
//     backgroundColor: theme.palette.dark.main,
//     "&:hover": {
//       color: "white",
//     },
//   }));

//   const jogLinks = [
//     {
//       title: "Information",
//       href: "https://drive.google.com/file/d/1URvjpRCrNm6JMVKk-EhlBuVOCcfAaWXL/view",
//       icon: InfoIcon,
//     },
//     {
//       title: "Schedule",
//       href: "https://drive.google.com/file/d/19XpnOu4jb1J13oxpBmsnRPvhl-iYBCa7/view?usp=sharing",
//       icon: ScheduleIcon,
//     },
//     {
//       title: "Lunch Orders",
//       href: "https://www.signupgenius.com/go/10c094baaab2aa1f4c52-taco",
//       icon: LocalDiningIcon,
//     },
//     {
//       title: "Volunteer",
//       href: "https://www.signupgenius.com/go/10c094baaab2aa1f4c52-2023#/",
//       icon: VolunteerActivismIcon,
//     },
//     {
//       title: "Distance Pledge Form",
//       href: "https://drive.google.com/file/d/16hU7RNSpjHs08kLaPG7hsbFVXJb3zqjg/view",
//       icon: FormatListBulletedIcon,
//     },
//     {
//       title: "Request Sponsor Form",
//       href: "https://drive.google.com/file/d/1UcQBiipGlwPy2CKNCl_xUw9frVzzuZCL/view",
//       icon: PaidIcon,
//     },
//     {
//       title: "Business Sponsor Form",
//       href: "https://drive.google.com/file/d/1U7E7Jv2lRcck7EBQBz8fd75MELWBrxj6/view?usp=sharing",
//       icon: StorefrontIcon,
//     },
//     {
//       title: "Prizes",
//       href: "https://drive.google.com/file/d/1WoCDaC1ki3FHWhT1-j5WR_omUOCrLuYP/view?usp=sharing",
//       icon: EmojiEventsIcon,
//     },
//     {
//       title: "Garden Competition",
//       href: "https://drive.google.com/file/d/1GjtrnM2d_RttlF1td5FPl9YucEbYXyO2/view?usp=sharing",
//       icon: LocalFloristIcon,
//     },
//   ];

//   return (
//     <Box sx={{ bgcolor: "background.alternate" }}>
//       <Container sx={{ py: 5 }}>
//         <Grid container spacing={2} sx={{ mb: 7 }} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Box component="img" sx={{ width: "100%", pr: 4 }} src={jogHero} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography
//               sx={{
//                 fontFamily: "copse",
//                 fontSize: { xs: "2rem", md: "2.5rem" },
//                 textAlign: "center",
//               }}
//             >
//               Friday, April 8th
//             </Typography>
//             <Typography variant="p">
//               Join us for Tabernacle's 2023 jogathon fundraiser! Please mark
//               your calendars and review the resource links below. If you are
//               available to volunteer or have any additional questions, please
//               contact Lisa Mazzoncini at LisaM@tbs.org
//             </Typography>
//           </Grid>
//         </Grid>
//         <Grid container spacing={2}>
//           {jogLinks.map((link) => (
//             <Grid item xs={12} sm={6} lg={4} key={link.title}>
//               <StyledButton
//                 variant="contained"
//                 component="a"
//                 href={link.href}
//                 target="_blank"
//                 size="small"
//               >
//                 <link.icon sx={{ fontSize: "25px", marginLeft: "10px" }} />
//                 <span style={{ marginLeft: "15px" }}>{link.title}</span>
//               </StyledButton>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// function LandingCarousel() {
//   const carouselImages = [
//     carousel1,
//     carousel2,
//     carousel3,
//     carousel4,
//     carousel5,
//     carousel6,
//     carousel7,
//     carousel8,
//   ];

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         width: "100%",
//       }}
//     >
//       <Box sx={{ width: "100%" }}>
//         <Marquee
//           gradient={false}
//           speed={80}
//           pauseOnHover={true}
//           pauseOnClick={true}
//           delay={0}
//           play={true}
//           direction="left"
//         >
//           {carouselImages.map((image, idx) => (
//             <Box
//               key={idx}
//               sx={{ width: { xs: "400px", md: "500px", lg: "600px" } }}
//               component="img"
//               src={image}
//               alt="carousel image"
//             />
//           ))}
//         </Marquee>
//       </Box>
//     </Box>
//   );
// }

function LandingShowcase() {
  const items = [showcase1, showcase2, showcase4, showcase3];
  return (
    <Carousel indicators={false} interval={5000} duration={1500}>
      {items.map((item, idx) => (
        <Box
          component="img"
          src={item}
          sx={{
            width: "100%",
            objectFit: "cover",
            height: {
              xs: "300px",
              sm: "300px",
              md: "400px",
              lg: "500px",
              xl: "550px",
            },
          }}
          alt="showcase"
        />
      ))}
    </Carousel>
  );
}

function StatementSlider() {
  const statements = [
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
        {statements.map((statement, idx) => (
          <>
            <Typography variant="h4" gutterBottom>
              {statement.title}
            </Typography>
            <Typography variant="p">{statement.text}</Typography>
          </>
        ))}
      </Carousel>
    </Container>
  );
}

function EducationLevels() {
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

  return (
    <Box sx={{ bgcolor: "rgb(53, 94, 59)", py: 6, color: "white" }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item sm={10} md={8} lg={4}>
            <Typography
              variant="h3"
              sx={{ my: 3, textAlign: "center", fontFamily: "Copse" }}
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
              sx={{ my: 3, textAlign: "center", fontFamily: "Copse" }}
            >
              Elementary
            </Typography>
            <Typography variant="p">
              Our elementary program provides an education that prepares
              children to think clearly, act responsibly, and live ethically.
              Our programs and curriculum give students a competitive edge in an
              increasingly complex society as they discover their unique
              giftedness.
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
              sx={{ my: 3, textAlign: "center", fontFamily: "Copse" }}
            >
              Middle School
            </Typography>
            <Typography variant="p">
              During middle school, we help our students navigate the early teen
              years and prepare them to excel in high school and beyond.
              Throughout the middle school years, our students are challenged
              academically and grow in confidence as they explore their
              interests.
            </Typography>
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <StyledButton
                size="large"
                component={HashLink}
                variant="outlined"
                to="/academics#Junior"
              >
                Learn More
              </StyledButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function ParentTestimonials() {
  const theme = useTheme();

  console.log(theme.palette);
  return (
    <Box sx={{ py: 6, bgcolor: "background.alternate" }}>
      <Container>
        <SectionTitle title="Parent Testimonials" />

        <Box sx={{ mb: 5 }}>
          <blockquote>
            <Typography variant="p">
              “I couldn’t say enough great things about Tabernacle’s preschool
              program. I appreciate them so much and wish I could have them be
              my daughter’s teachers forever. They are the most loving, smart,
              kind hearted, caring teachers I have ever met. We are so blessed
              to have them in our kids lives! They are the very best.”
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
              encouraging and supportive, while still holding high expectations
              to ensure the students are ready for 4th grade and beyond. With
              any question or concerns that I have had throughout the year, she
              is timely in her response with a wealth of knowledge and
              resources. Her help class has been such a lifesaver to my son,
              giving him the additional practice and encouragement on those more
              challenging concepts throughout the year. I have seen my son grow
              into a more confident learner and this is a huge thank you to his
              teacher and the safe learning environment she creates in her
              classroom.”
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
              opportunities in leadership, sports, and a Christian walk are
              worth the sacrifices we make as parents for them to attend here.
              We appreciate all the Tabernacle offers their students, families,
              and staff.”
            </Typography>
          </blockquote>
          <figcaption style={{ color: theme.palette.grey[600] }}>
            — Middle school parent, 2016
          </figcaption>
        </Box>
      </Container>
    </Box>
  );
}

function Accreditations() {
  return (
    <Box id="accreditation" sx={{ py: 6 }}>
      <SectionTitle title="Accreditations" />

      <Container>
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
              Schools and Colleges (WASC). WASC fosters "excellence in
              elementary, secondary, adult and postsecondary institutions, and
              supplementary education programs. The Commission encourages school
              improvement through a process of continuing evaluation and
              recognizes institutions through granting accreditation to the
              schools that meet an acceptable level of quality in accordance
              with the established criteria."
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
      </Container>
    </Box>
  );
}
