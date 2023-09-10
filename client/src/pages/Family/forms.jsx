import ComputerIcon from "@mui/icons-material/Computer";
import { ReactComponent as Computer } from "../../assets/svgs/computer.svg";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";

import { Container, Grid, Box, Typography, Icon } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";

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

export default function FamilyForms() {
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
}
