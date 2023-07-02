import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import Information from "./Information";
import familyShowcase from "../../assets/images/showcase/family.jpg";

import { useTheme } from "@mui/material/styles";
import SectionTitle from "../../components/SectionTitle";

// Services
import ignitia from "../../assets/images/family/ignitia.png";
import choiceLunch from "../../assets/images/family/choice-lunch.png";
import facts from "../../assets/images/family/facts-logo.png";

// Forms
import ComputerIcon from "@mui/icons-material/Computer";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";

import { Container, Grid, Paper, Box, Link, Typography } from "@mui/material";

export default function Family() {
  return (
    <div>
      <Showcase title="Family" image={familyShowcase} />
      <PageNav sections={["Information", "Services", "Forms", "Donations"]} />
      <Information />
      <Services />
      <Forms />
      <AmazonSmile />
    </div>
  );
}

const Services = () => {
  const resources = [
    {
      title: "FACTS",
      description:
        "Facts provides tools and solutions to private K-12 schools that elevate the education experience for administrators, teachers, and families.",
      image: facts,
      url: "https://logins2.renweb.com/logins/ParentsWeb-Login.aspx",
    },
    {
      title: "Ignitia",
      description:
        "A versatile online Christian curriculum and learning management system with dynamic, Christ-centered lessons",
      image: ignitia,
      url: "https://tabernacleca.ignitiaschools.com/owsoo/login/auth",
    },
    {
      title: "ChoiceLunch",
      description:
        "Choicelunch individually packages your child’s lunch for safe delivery and easy distribution at school.",
      image: choiceLunch,
      url: "https://www.choicelunch.com/",
    },
  ];

  const theme = useTheme();

  return (
    <Box sx={{ pt: 8, pb: 12, bgcolor: "background.alternate" }}>
      <SectionTitle title="Services" />
      <Container>
        <Grid container spacing={4}>
          {resources.map((resource) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={resource.title}>
              <Link
                href={resource.url}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "30px",
                    height: "100%",
                    "&:hover": {
                      border: `5px solid ${theme.palette.primary.light}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: "150px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      p: 5,
                    }}
                  >
                    <Box
                      component="img"
                      src={resource.image}
                      sx={{ width: "100%" }}
                      alt=""
                    />
                  </Box>

                  <Box sx={{ p: 3 }}>
                    <Typography variant="p">{resource.description}</Typography>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const Forms = () => {
  const formData = [
    {
      name: "Technology Agreement",
      icon: <ComputerIcon fontSize="large" sx={{ fontSize: "55px" }} />,
      url: "https://docs.google.com/document/d/1UG-KgfmIjsgstryN86A6uzKw59r_twLPAP74-3GKGvU/edit?usp=sharing",
    },
    {
      name: "Bicycle & Walk",
      icon: <PedalBikeIcon fontSize="large" sx={{ fontSize: "55px" }} />,
      url: "https://drive.google.com/file/d/1CpmlHSZ23FMp4UxCpLKw80nDpNEO6sze/view?usp=sharing",
    },
    {
      name: "Medication",
      icon: (
        <MedicalServicesOutlinedIcon
          fontSize="large"
          sx={{ fontSize: "55px" }}
        />
      ),
      url: "https://drive.google.com/file/d/1EIfpUITQCQpeMKXpzInPcFAO5cdHzA4X/view?usp=sharing",
    },
    {
      name: "Sports Physical",
      icon: <SportsFootballOutlinedIcon sx={{ fontSize: "55px" }} />,
      url: "https://drive.google.com/file/d/1XMxpVPuQXgngYSy_SeEpGvOZ2EoBA7RL/view?usp=sharing",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Forms" />
      <Container>
        <Grid container>
          {formData.map((item) => (
            <Grid item xs={12} md={6} lg={3} sx={{ mb: 5 }}>
              <Typography
                component="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="p"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  {item.icon}
                </Box>
                <Box sx={{ ml: 1 }}>{item.name}</Box>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const AmazonSmile = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.alternate" }}>
      <SectionTitle title="Donations" />
      <Container>
        <div id="amazonSmile">
          {/* <div className="d-flex justify-content-center mb-5">
            <a href="https://smile.amazon.com">
              <img src={amazon} className="img-fluid" alt="Amazon Smile Logo" />
            </a>
          </div> */}
          <Typography variant="p">
            AmazonSmile is a program that donates 0.5% of your eligible
            purchases on Amazon to a charity of your choice. All you need to do
            is start your shopping at{" "}
            <a href="https://smile.amazon.com">smile.amazon.com</a>. The
            donation will be made at no extra cost to you and you can choose
            from nearly one million public charitable organizations.
          </Typography>
          <Box sx={{ my: 3 }}>
            <Typography variant="h5">Explanation</Typography>
            <Typography variant="p">
              <a href="https://smile.amazon.com">AmazonSmile</a> is a website
              operated by Amazon with the same products, prices, and shopping
              features as Amazon.com. The difference is that when you shop on
              AmazonSmile, the AmazonSmile Foundation will donate 0.5% of the
              purchase price of eligible products to the charitable organization
              of your choice. Please choose Tabernacle Christian School in
              Concord, CA.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5">
              How To Start Using AmazonSmile Today!
            </Typography>
            <Typography variant="p">
              Sign in to <a href="https://smile.amazon.com">smile.amazon.com</a>{" "}
              on your desktop or mobile phone browser. Search for Tabernacle
              Christian School and make sure to choose the one in Concord, CA!
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">AmazonSmile With Amazon App</Typography>

            <ol>
              <li>
                <Typography variant="p">
                  Download or update to the latest version of the Amazon
                  Shopping app on your phone. You can find it in the{" "}
                  <a href="https://apps.apple.com">App Store</a> for iOS or{" "}
                  <a href="https://play.google.com">Google Play</a> for Android.
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  Open the app and find ’Settings’ in the main menu (☰). Tap on
                  ‘AmazonSmile’ and follow the on-screen instructions to turn on
                  AmazonSmile on your phone.
                </Typography>
              </li>
            </ol>
          </Box>
        </div>
      </Container>
    </Box>
  );
};
