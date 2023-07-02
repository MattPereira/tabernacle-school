import { Link } from "react-router-dom";

import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

import SectionTitle from "../../../components/SectionTitle";
import { Container, Box, Typography, Grid } from "@mui/material";

const Information = () => {
  const infoItems = [
    {
      title: "Handbook",
      icon: <MenuBookOutlinedIcon sx={{ fontSize: "55px" }} />,
      url: "https://drive.google.com/file/d/1BERNJUWaKWVnerCK0cIbFh9ZVib4xSt0/view?usp=sharing",
    },
    {
      title: "Tuition",
      icon: <PaymentOutlinedIcon sx={{ fontSize: "55px" }} />,
      path: "/admissions#Tuition",
    },
    {
      title: "Parent Orientation",
      icon: <FamilyRestroomOutlinedIcon sx={{ fontSize: "55px" }} />,
      path: "/family/orientation",
    },
    {
      title: "Facts Help",
      icon: <HelpOutlineOutlinedIcon sx={{ fontSize: "55px" }} />,
      path: "/family/facts",
    },
    {
      title: "Calendar",
      icon: <CalendarMonthOutlinedIcon sx={{ fontSize: "55px" }} />,
      url: "https://drive.google.com/file/d/1GZ1bmXDNX4m3_PeZMA5e6ley9Z3n_RjU/view?usp=sharing",
    },
    {
      title: "Supply List",
      icon: <InventoryOutlinedIcon sx={{ fontSize: "55px" }} />,
      path: "/family/supply-list",
    },
    {
      title: "Uniform Guidelines",
      icon: <StraightenOutlinedIcon sx={{ fontSize: "55px" }} />,
      path: "/family/uniform-guidelines",
    },
    {
      title: "Discipline Policy",
      icon: <GavelOutlinedIcon sx={{ fontSize: "55px" }} />,
      path: "/family/discipline",
    },
  ];

  const LinkOrAnchor = ({ item }) => {
    if (item.url) {
      return (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Box>{item.icon}</Box>
          <Typography variant="p">{item.title}</Typography>
        </a>
      );
    } else {
      return (
        <Link to={item.path} style={{ color: "black", textDecoration: "none" }}>
          <Box>{item.icon}</Box>
          <Typography variant="p">{item.title}</Typography>
        </Link>
      );
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Information" />
      <Container>
        <Grid container spacing={4}>
          {infoItems.map((item, index) => (
            <Grid
              item
              xs={6}
              md={3}
              key={item.name}
              sx={{ textAlign: "center", mb: 5 }}
            >
              <LinkOrAnchor item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Information;
