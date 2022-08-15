import { useState } from "react";
import "./NavBar.scss";

import { NavLink as RRNavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import { BsFillPersonFill } from "react-icons/bs";
import { IoSchool, IoBookSharp } from "react-icons/io5";

import { GrMail } from "react-icons/gr";
import { FaSchool } from "react-icons/fa";

import ts_logo from "../../assets/svgs/TS_LOGO_LIGHT.svg";

const NavBar = () => {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={navColour ? "sticky main" : "navbar main"}
        variant="dark"
        bg="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand
            eventkey={1}
            as={RRNavLink}
            to="/"
            className="navbar-brand"
          >
            Tabernacle School
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link eventkey={2} as={RRNavLink} to="/about">
                  <BsFillPersonFill style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={3} as={RRNavLink} to="/admissions">
                  <IoSchool style={{ marginBottom: "2px" }} /> Admissions
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={4} as={RRNavLink} to="/academics">
                  <IoBookSharp style={{ marginBottom: "2px" }} /> Academics
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={5} as={RRNavLink} to="/campus">
                  <FaSchool style={{ marginBottom: "2px" }} /> Campus
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={6} as={RRNavLink} to="/contact">
                  <GrMail style={{ marginBottom: "2px" }} /> Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={6} as={RRNavLink} to="/contact">
                  <img
                    src={ts_logo}
                    alt="Tabernacle School logo"
                    className="img-fluid"
                    style={{
                      width: "1.25rem",
                      marginBottom: "2px",
                      marginRight: "7px",
                    }}
                  />
                  Family
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
