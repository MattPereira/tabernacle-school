import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { useMediaQuery } from "react-responsive";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import { useTheme, styled } from "@mui/material/styles";

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
  "about",
  "admissions",
  "academics",
  "campus",
  "family",
  "connect",
];

const NavBar = (props) => {
  const [transparent, setTransparent] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 80) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const { window: windoo } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const isCollapsed = useMediaQuery({ query: "(max-width: 900px)" });

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
            <Typography
              variant="h4"
              color="white"
              sx={{ fontFamily: "Copse", fontWeight: "bold" }}
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
        <div>
          <Button
            component="a"
            href="https://logins2.renweb.com/logins/ParentsWeb-Login.aspx"
            target="_blank"
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
            <LockOpenOutlinedIcon fontSize="small" />{" "}
            <span style={{ marginLeft: "4px" }}>Facts</span>
          </Button>
        </div>
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

  const StyledTopToolBar = styled(Toolbar)(({ theme }) => ({
    backgroundColor: "#1565c0",
    justifyContent: "space-between",
  }));

  const StyledSiteTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "Didact Gothic",
    letterSpacing: "0.2rem",
    fontWeight: "bold",
  }));

  const StyledTopNavButtons = styled(Button)({
    color: "#fff",
    fontFamily: "Montserrat",
    paddingLeft: "1rem",
    "&:hover": {
      color: "white",
      fontWeight: "bold",
    },
  });

  const StyledPagesToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: "center",
    backgroundColor: transparent
      ? "rgba(21, 101, 192, 0.9)"
      : theme.palette.grey[300],
  }));

  return (
    <>
      <AppBar
        component="nav"
        elevation={0}
        color="transparent"
        position={isCollapsed ? "fixed" : "relative"}
      >
        <StyledTopToolBar sx={{ py: { xs: 1, md: 2 } }}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <StyledSiteTitle
              color="white"
              variant="h4"
              sx={{ fontSize: { xs: "1.75rem", md: "2rem", lg: "2.25rem" } }}
            >
              Tabernacle School
            </StyledSiteTitle>
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
            <StyledTopNavButtons
              component="a"
              href="https://logins2.renweb.com/logins/ParentsWeb-Login.aspx"
              target="_blank"
            >
              <LockOpenOutlinedIcon fontSize="small" />{" "}
              <span style={{ marginLeft: "4px" }}>Facts</span>
            </StyledTopNavButtons>
            {topNavItems.map((item) => {
              const { icon, path, text } = item;
              return (
                <StyledTopNavButtons key={text} component={HashLink} to={path}>
                  {icon} <span style={{ marginLeft: "4px" }}>{text}</span>
                </StyledTopNavButtons>
              );
            })}
          </Box>
        </StyledTopToolBar>
      </AppBar>
      <AppBar
        component="nav"
        elevation={0}
        color="transparent"
        position={transparent ? "fixed" : "relative"}
      >
        <StyledPagesToolbar
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {midNavItems.map((item) => (
            <Box key={item}>
              <Button
                component={NavLink}
                to={`/${item}`}
                sx={{
                  p: 2,
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: transparent ? "white" : "black",
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
        </StyledPagesToolbar>
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
