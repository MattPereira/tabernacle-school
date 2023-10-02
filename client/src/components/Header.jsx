import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";
import { useTheme, styled } from "@mui/material/styles";

//prettier-ignore
import { AppBar, Toolbar, Typography, Box, Divider, List, ListItem, ListItemButton, ListItemText, IconButton, Button, Drawer } from "@mui/material";

/***** STATIC STYLES *****/
const StyledTopToolBar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  justifyContent: "space-between",
}));

const StyledSiteTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: "Roboto Mono",
  fontWeight: "700",
}));

const StyledTopNavButtons = styled(Button)({
  color: "#fff",
  fontFamily: "Montserrat",
  paddingLeft: "1rem",
  fontSize: "18px",
  fontWeight: 500,
  textTransform: "none",
  "&:hover": {
    color: "white",
    fontWeight: "bold",
  },
});

const topNavItems = [
  {
    text: "Contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    path: "/connect#Contact",
  },
  {
    text: "Calendar",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
        />
      </svg>
    ),
    url: "/pdfs/calendar-23-24.pdf",
  },
  {
    text: "Employment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
        />
      </svg>
    ),
    path: "/connect#Employment",
  },
  // {
  //   text: "Facts",
  //   icon: <ExitToAppOutlinedIcon fontSize="small" />,
  //   path: "",
  //   url: "https://logins2.renweb.com/logins/ParentsWeb-Login.aspx",
  // },
];

const midNavItems = [
  "about",
  "admissions",
  "academics",
  "campus",
  "family",
  "connect",
];

export default function Header(props) {
  const [transparent, setTransparent] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isCollapsed = useMediaQuery({ query: "(max-width: 900px)" });

  const theme = useTheme();

  /***** DYNAMIC STYLES *****/

  const StyledMidNavButtons = styled(Button)({
    height: "64px",
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontWeight: 600,
    borderRadius: "0px",
    padding: "0px 10px",
    color: transparent ? "white" : "black",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#1565c0",
    },
  });

  const StyledPagesToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: "center",
    backgroundColor: transparent
      ? "rgba(21, 101, 192, 0.9)"
      : theme.palette.grey[300],
  }));

  // Handles mobile drawer opening and closing
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handles bottom navbar changing to transparent on scroll down
  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 80) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // MUI Drawer component needs container to mount.. or something
  const container =
    props.window !== undefined ? () => props.window().document.body : undefined;

  return (
    <>
      {/***** TOP NAVBAR *****/}
      <AppBar
        component="nav"
        elevation={0}
        color="transparent"
        position={isCollapsed ? "fixed" : "relative"}
      >
        <StyledTopToolBar sx={{ py: { xs: 1, md: 2 } }}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <StyledSiteTitle
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
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {topNavItems.map((item) => {
              const { icon, path, text, url } = item;
              return (
                <StyledTopNavButtons
                  key={text}
                  component={url ? "a" : HashLink}
                  to={url ? null : path}
                  href={url ? url : null}
                >
                  {icon} <span style={{ marginLeft: "7px" }}>{text}</span>
                </StyledTopNavButtons>
              );
            })}
          </Box>
        </StyledTopToolBar>
      </AppBar>

      {/***** BOTTOM NAV BAR*****/}
      <AppBar
        component="nav"
        elevation={0}
        color="transparent"
        position={transparent ? "fixed" : "relative"}
      >
        <StyledPagesToolbar sx={{ display: { xs: "none", md: "flex" } }}>
          {midNavItems.map((item, index) => {
            return (
              <Box key={item}>
                <StyledMidNavButtons component={NavLink} to={`/${item}`}>
                  {item}
                </StyledMidNavButtons>
              </Box>
            );
          })}
        </StyledPagesToolbar>
      </AppBar>

      {/***** MOBILE NAVBAR *****/}
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
              <NavLink
                to="/"
                style={{ textDecoration: "none", paddingLeft: "1rem" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{ fontFamily: "Roboto Mono", fontWeight: "bold" }}
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
                  <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
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
                const { text, icon, path, url } = item;
                return (
                  <div key={text}>
                    <StyledTopNavButtons
                      component={url ? "a" : HashLink}
                      to={path}
                      href={url}
                      sx={{ mb: 1 }}
                      target={url ? "_blank" : "_self"}
                    >
                      {icon} <span style={{ marginLeft: "7px" }}>{text}</span>
                    </StyledTopNavButtons>
                  </div>
                );
              })}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
