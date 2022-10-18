import { useState } from "react";
import "./NavBar.scss";

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Navbar, Nav, Container } from "react-bootstrap";

import { BsFillPersonFill } from "react-icons/bs";
import { IoSchool, IoBookSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { FaSchool } from "react-icons/fa";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

import { useTheme } from "@mui/material/styles";

import ts_logo from "../../assets/svgs/TS_LOGO_LIGHT.svg";

const topNavItems = ["Renweb Login", "Contact Us", "Calendar", "Employment"];

const midNavItems = [
  "About",
  "Admissions",
  "Academics",
  "Campus",
  "Family",
  "Connect",
];

const NavBar = (props) => {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 75) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const { window: windoo } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = useTheme();

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
          <>
            <ListItem
              key={item}
              component={NavLink}
              to={`/${item}`}
              disablePadding
            >
              <ListItemButton>
                <ListItemText
                  primary={item.toUpperCase()}
                  primaryTypographyProps={{
                    fontSize: "16px",
                    color: "white",
                    fontFamily: "Didact Gothic",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ border: "1px solid white" }} />
          </>
        ))}
      </List>
    </Box>
  );

  const container =
    windoo !== undefined ? () => windoo().document.body : undefined;
  return (
    <>
      <AppBar component="nav" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between", py: 2 }}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                alt="ts logo"
                src={ts_logo}
                sx={{ height: "40px", width: "40px", pb: 1, mr: 1 }}
              />
              <Typography
                color="white"
                variant="h4"
                sx={{ fontFamily: "Didact Gothic", fontWeight: "bold" }}
              >
                Tabernacle School
              </Typography>
            </Box>
          </NavLink>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {topNavItems.map((item) => (
              <Button
                key={item}
                component={NavLink}
                to={`/${item}`}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            justifyContent: "center",
            bgcolor: "lightgrey",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box>
            {midNavItems.map((item) => (
              <Button
                key={item}
                component={NavLink}
                to={`/${item}`}
                sx={{
                  fontFamily: "Didact Gothic",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                {item}
              </Button>
            ))}
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
            display: { xs: "block", sm: "none" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Navbar
        collapseOnSelect
        expand="xl"
        className={navColour ? "sticky" : "navbar"}
        variant="dark"
        bg="dark"
        fixed="top"
      >
        <Container fluid className="py-1 px-xl-4">
          <Navbar.Brand
            eventKey={1}
            as={NavLink}
            to="/"
            className="navbar-brand fs-4 fw-bold"
          >
            <img
              src={ts_logo}
              alt="Tabernacle School logo"
              className="img-fluid"
              style={{
                width: "2rem",
                marginBottom: "0.7rem",
                marginRight: "7px",
              }}
            />
            Tabernacle School
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <ul className="navbar-nav m-auto align-items-center text-center">
                <li className="nav-item dropdown">
                  <Nav.Item className="fs-5">
                    <Nav.Link eventKey={2} as={NavLink} to="/about">
                      <BsFillPersonFill style={{ marginBottom: "2px" }} /> About
                    </Nav.Link>
                  </Nav.Item>
                  <ul
                    className="dropdown-menu text-white"
                    aria-labelledby="mainNavbarDropdown"
                  >
                    <li>
                      <HashLink className="dropdown-item" to="/about#History">
                        History
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/about#Faculty">
                        Faculty
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/about#Programs">
                        Programs
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/about#Values">
                        Values
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/about#Vision">
                        Vision
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Nav.Item className="fs-5">
                    <Nav.Link eventKey={3} as={NavLink} to="/admissions">
                      <IoSchool style={{ marginBottom: "2px" }} /> Admissions
                    </Nav.Link>
                  </Nav.Item>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="mainNavbarDropdown"
                  >
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/admissions#Tuition"
                      >
                        Tuition & Fees
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/admissions#Schedule"
                      >
                        Schedule Tour
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Nav.Item className="fs-5">
                    <Nav.Link eventKey={4} as={NavLink} to="/academics">
                      <IoBookSharp style={{ marginBottom: "2px" }} /> Academics
                    </Nav.Link>
                  </Nav.Item>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="mainNavbarDropdown"
                  >
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/academics#Preschool"
                      >
                        Preschool
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/academics#Elementary"
                      >
                        Elementary
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/academics#Junior"
                      >
                        Junior High
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/academics#Distance"
                      >
                        Distance Learning
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/academics#Common"
                      >
                        Common Core
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/academics#eslr">
                        ESLR
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Nav.Item className="fs-5">
                    <Nav.Link eventKey="5" as={NavLink} to="/campus">
                      <FaSchool style={{ marginBottom: "2px" }} /> Campus
                    </Nav.Link>
                  </Nav.Item>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="mainNavbarDropdown"
                  >
                    <li>
                      <HashLink className="dropdown-item" to="/campus#Calendar">
                        Calendar
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/campus#Athletics"
                      >
                        Athletics
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/campus#Daycare">
                        Daycare
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/campus#Outreach">
                        Outreach
                      </HashLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Nav.Item className="fs-5">
                    <Nav.Link eventKey={6} as={NavLink} to="/family">
                      <img
                        src={ts_logo}
                        alt="Tabernacle School logo"
                        className="img-fluid"
                        style={{
                          width: "1.25rem",
                          marginBottom: "7px",
                          marginRight: "4px",
                        }}
                      />
                      Family
                    </Nav.Link>
                  </Nav.Item>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="mainNavbarDropdown"
                  >
                    <li>
                      <HashLink className="dropdown-item" to="/family#Portals">
                        Portals
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/family#Information"
                      >
                        Information
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/family#Tiger">
                        Tiger Life
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/family#Forms">
                        Forms
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Nav.Item className="fs-5">
                    <Nav.Link eventKey={7} as={NavLink} to="/connect">
                      <GrMail style={{ marginBottom: "2px" }} /> Connect
                    </Nav.Link>
                  </Nav.Item>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="mainNavbarDropdown"
                  >
                    <li>
                      <HashLink className="dropdown-item" to="/connect#Contact">
                        Contact Us
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/connect#Location"
                      >
                        Location
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/connect#Employment"
                      >
                        Employment
                      </HashLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
