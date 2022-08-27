import { useState } from "react";
import "./NavBar.scss";

import { NavLink as RRNavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Navbar, Nav, Container } from "react-bootstrap";

import { BsFillPersonFill } from "react-icons/bs";
import { IoSchool, IoBookSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { FaSchool } from "react-icons/fa";

import ts_logo from "../../assets/svgs/TS_LOGO_LIGHT.svg";

const NavBar = () => {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 75) {
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
        expand="xl"
        className={navColour ? "sticky" : "navbar"}
        variant="dark"
        bg="dark"
        fixed="top"
      >
        <Container fluid className="py-1 px-xl-4">
          <Navbar.Brand
            eventKey={1}
            as={RRNavLink}
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
                    <Nav.Link eventKey={2} as={RRNavLink} to="/about">
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
                    <Nav.Link eventKey={3} as={RRNavLink} to="/admissions">
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
                    <Nav.Link eventKey={4} as={RRNavLink} to="/academics">
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
                    <Nav.Link eventKey="5" as={RRNavLink} to="/campus">
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
                    <Nav.Link eventKey={6} as={RRNavLink} to="/family">
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
                    <Nav.Link
                      eventKey={7}
                      as={RRNavLink}
                      to="/connect#Employment"
                    >
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
