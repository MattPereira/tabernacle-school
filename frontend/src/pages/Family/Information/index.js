import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { Container, Box, Typography, Grid, Icon } from "@mui/material";

// https://remixicon.com/
import { ReactComponent as Handbook } from "../../../assets/svgs/handbook.svg";
import { ReactComponent as Uniform } from "../../../assets/svgs/uniform.svg";
import { ReactComponent as Parent } from "../../../assets/svgs/parent.svg";

import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

const Information = () => {
  const infoItems = [
    {
      title: "Handbook",
      icon: <Icon component={Handbook} sx={{ fontSize: "55px" }} />,
      url: "https://drive.google.com/file/d/1BERNJUWaKWVnerCK0cIbFh9ZVib4xSt0/view?usp=sharing",
    },
    {
      title: "Tuition",
      icon: <PaymentOutlinedIcon sx={{ fontSize: "55px" }} />,
      path: "/admissions#Tuition",
    },

    {
      title: "Calendar",
      icon: <CalendarMonthOutlinedIcon sx={{ fontSize: "55px" }} />,
      url: "https://drive.google.com/file/d/1GZ1bmXDNX4m3_PeZMA5e6ley9Z3n_RjU/view?usp=sharing",
    },
    {
      title: "Uniform Standards",
      icon: <Icon component={Uniform} sx={{ fontSize: "55px" }} />,
      url: "https://drive.google.com/file/d/1GLoienR9b0TgNC08Dga5hybKXfPp9hgs/view?usp=sharing",
    },
    {
      title: "Facts Help",
      icon: <HelpOutlineOutlinedIcon sx={{ fontSize: "55px" }} />,
      path: "/family/facts",
    },
    {
      title: "Parent Orientation",
      icon: <Icon component={Parent} sx={{ fontSize: "55px" }} />,
      path: "/family/orientation",
    },
    {
      title: "Supply List",
      icon: <InventoryOutlinedIcon sx={{ fontSize: "55px" }} />,
      path: "/family/supply-list",
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
              key={item.title}
              sx={{ textAlign: "center", mb: 8 }}
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
