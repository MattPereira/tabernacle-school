import Showcase from "../../components/Showcase";
import PageNav from "../../components/PageNav";
import Information from "./Information";
import familyShowcase from "../../assets/images/showcase/family.jpg";

import SectionTitle from "../../components/SectionTitle";

// Services
import ignitia from "../../assets/images/family/ignitia.png";
import choiceLunch from "../../assets/images/family/choice-lunch.png";
import facts from "../../assets/images/family/facts-logo.png";

// Forms
import ComputerIcon from "@mui/icons-material/Computer";
import { ReactComponent as Computer } from "../../assets/svgs/computer.svg";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";

import { Container, Grid, Paper, Box, Typography, Icon } from "@mui/material";

export default function Family() {
  return (
    <div>
      <Showcase title="Family" image={familyShowcase} />
      <PageNav sections={["Information", "Services", "Forms"]} />
      <Information />
      <Services />
      <Forms />
    </div>
  );
}

const Services = () => {
  const services = [
    {
      title: "Facts Management",
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

  return (
    <Box sx={{ pt: 8, pb: 12, bgcolor: "background.alternate" }}>
      <SectionTitle title="Services" />
      <Container>
        <Grid container spacing={4}>
          {services.map((resource) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={resource.title}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: "30px",
                  height: "100%",
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
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="h6" component="a" href={resource.url}>
                      {resource.title}
                    </Typography>
                  </Box>

                  <Typography variant="p">{resource.description}</Typography>
                </Box>
              </Paper>
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
      name: "Technology",
      icon: <Icon component={Computer} sx={{ fontSize: "55px" }} />,
      url: "/pdfs/forms/technology.pdf",
    },
    {
      name: "Chromebook",
      icon: <ComputerIcon sx={{ fontSize: "55px" }} />,

      url: "/pdfs/forms/chromebook.pdf",
    },
    {
      name: "Bicycle & Walk",
      icon: <PedalBikeIcon sx={{ fontSize: "55px" }} />,
      url: "/pdfs/forms/bicycle-walk.pdf",
    },
    {
      name: "Medication",
      icon: <MedicalServicesOutlinedIcon sx={{ fontSize: "55px" }} />,
      url: "/pdfs/forms/medication.pdf",
    },
    {
      name: "Sports Physical",
      icon: <SportsFootballOutlinedIcon sx={{ fontSize: "55px" }} />,
      url: "/pdfs/forms/sports.pdf",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Forms" />
      <Container>
        <Grid container justifyContent="space-around">
          {formData.map((item) => (
            <Grid key={item.name} item xs={12} md={6} lg={2} sx={{ mb: 5 }}>
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
                <Box>{item.name}</Box>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
