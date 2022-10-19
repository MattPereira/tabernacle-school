import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ts_logo from "../../assets/svgs/TS_LOGO_LIGHT.svg";

import "./NavBar.scss";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import { useTheme } from "@mui/material/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Button,
  Drawer,
} from "@mui/material";

const topNavItems = [
  // {
  //   text: "Renweb",
  //   icon: <LockOpenOutlinedIcon fontSize="small" />,
  //   path: "/renweb",
  // },
  {
    text: "Contact",
    icon: <InfoOutlinedIcon fontSize="small" />,
    path: "/connect#Contact",
  },
  {
    text: "Calendar",
    icon: <CalendarTodayIcon fontSize="small" />,
    path: "/campus#Calendar",
  },
  {
    text: "Employment",
    icon: <WorkOutlineIcon fontSize="small" />,
    path: "/connect#Employment",
  },
];

const midNavItems = [
  "About",
  "Admissions",
  "Academics",
  "Campus",
  "Family",
  "Connect",
];

const alertNavItems = [
  {
    text: "Preschool Hiring",
    icon: <NotificationsActiveOutlinedIcon fontSize="small" />,
    path: "/connect#Employment",
  },
];

const NavBar = (props) => {
  const [transparent, setTransparent] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 75) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const { window: windoo } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = useTheme();
  console.log(theme.palette);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ bgcolor: theme.palette.primary.main }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 2,
        }}
      >
        <NavLink to="/" style={{ textDecoration: "none", paddingLeft: "1rem" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              alt="ts logo"
              src={ts_logo}
              sx={{ height: "40px", width: "40px", pb: 1, mr: 1 }}
            />
            <Typography
              variant="h4"
              color="white"
              sx={{ fontFamily: "Didact Gothic", fontWeight: "bold" }}
            >
              Tabernacle School
            </Typography>
          </Box>
        </NavLink>
        <Box>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: "white", mr: 1 }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ border: "0.5px solid white" }} />
      <List sx={{ px: 2 }}>
        {midNavItems.map((item) => (
          <div key={item}>
            <ListItem component={NavLink} to={`/${item}`} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={item.toUpperCase()}
                  primaryTypographyProps={{
                    fontSize: "16px",
                    color: "white",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ border: "1px solid white" }} />
          </div>
        ))}
        <Box sx={{ py: 1 }}></Box>
        {topNavItems.map((item) => {
          const { text, icon, path } = item;
          return (
            <div key={text}>
              <Button
                component={HashLink}
                to={path}
                sx={{
                  color: "#fff",
                  fontFamily: "Montserrat",
                  p: 2,
                  "&:hover": {
                    color: "white",
                    fontWeight: "bold",
                  },
                }}
              >
                {icon} <span style={{ marginLeft: "4px" }}>{text}</span>
              </Button>
            </div>
          );
        })}
      </List>
    </Box>
  );

  const container =
    windoo !== undefined ? () => windoo().document.body : undefined;
  return (
    <>
      <AppBar component="nav" elevation={0} color="transparent">
        <Toolbar
          sx={{
            bgcolor: "#1565c0",
            justifyContent: "space-between",
            py: { md: 2, xs: 1 },
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                alt="ts logo"
                src={ts_logo}
                sx={{ height: "45px", width: "45px", mr: 1, pb: 1 }}
              />
              <Typography
                color="white"
                variant="h4"
                sx={{ fontFamily: "Roboto Mono" }}
              >
                Tabernacle School
              </Typography>
            </Box>
          </NavLink>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: "white" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {topNavItems.map((item) => {
              const { icon, path, text } = item;
              return (
                <Button
                  key={text}
                  component={HashLink}
                  to={path}
                  sx={{
                    color: "#fff",
                    fontFamily: "Montserrat",
                    p: 2,
                    "&:hover": {
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                >
                  {icon} <span style={{ marginLeft: "4px" }}>{text}</span>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            justifyContent: "center",
            bgcolor: transparent
              ? "rgba(255, 255, 255, 0.9)"
              : "rgb(224, 230, 233)",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box sx={{ display: "flex" }}>
            {midNavItems.map((item) => (
              <Box key={item}>
                <Button
                  component={NavLink}
                  to={`/${item}`}
                  sx={{
                    p: 2,
                    // py: 2,
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#1565c0",
                    },
                  }}
                >
                  {item}
                </Button>
              </Box>
            ))}
          </Box>
        </Toolbar>
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: transparent ? "rgba(255, 255, 255, 0.9)" : "#ffffff",
          }}
        >
          <Box>
            {alertNavItems.map((item) => {
              const { icon, path, text } = item;
              return (
                <Box key={text}>
                  <Button
                    component={HashLink}
                    to={`${path}`}
                    sx={{
                      p: 1.5,
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#1565c0",
                      },
                    }}
                  >
                    {icon} <span style={{ marginLeft: "5px" }}>{text}</span>
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavBar;
