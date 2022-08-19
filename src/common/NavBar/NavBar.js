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
        <Container>
          <Navbar.Brand
            eventkey={1}
            as={RRNavLink}
            to="/"
            className="navbar-brand"
          >
            <strong>Tabernacle School</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <ul className="navbar-nav m-auto align-items-center text-center">
                <li className="nav-item dropdown">
                  <Nav.Item>
                    <Nav.Link eventkey={2} as={RRNavLink} to="/about">
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
                      <HashLink className="dropdown-item" to="/about#Values">
                        Values
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/about#Vision">
                        Vision
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/about#Programs">
                        Programs
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Nav.Item>
                    <Nav.Link eventkey={3} as={RRNavLink} to="/admissions">
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
                        to="/admissions#Visit"
                      >
                        Visit Us!
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/admissions#charges"
                      >
                        Tuition & Fees
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Nav.Item>
                    <Nav.Link eventkey={4} as={RRNavLink} to="/academics">
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
                        to="/academics#preschool"
                      >
                        Preschool
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/academics#elementary"
                      >
                        Elementary
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/academics#juniorHigh"
                      >
                        Junior High
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/academics#distanceLearning"
                      >
                        Distance Learning
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/academics#commonCore"
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
                  <Nav.Item>
                    <Nav.Link eventkey="5" as={RRNavLink} to="/campus">
                      <FaSchool style={{ marginBottom: "2px" }} /> Campus
                    </Nav.Link>
                  </Nav.Item>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="mainNavbarDropdown"
                  >
                    <li>
                      <HashLink className="dropdown-item" to="/campus#calendar">
                        Calendar
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/campus#athletics"
                      >
                        Athletics
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/campus#daycare">
                        Daycare
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/campus#safety">
                        Safety
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/campus#outreach">
                        Outreach
                      </HashLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Nav.Item>
                    <Nav.Link eventkey={7} as={RRNavLink} to="/family">
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
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="mainNavbarDropdown"
                  >
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/tsFamily#portals"
                      >
                        Portals
                      </HashLink>
                    </li>
                    <li>
                      <HashLink className="dropdown-item" to="/tsFamily#forms">
                        Forms
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/tsFamily#tigerLife"
                      >
                        Tiger Life
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/tsFamily#schoolInfo"
                      >
                        Information
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Nav.Item>
                    <Nav.Link eventkey={6} as={RRNavLink} to="/contact">
                      <GrMail style={{ marginBottom: "2px" }} /> Contact
                    </Nav.Link>
                  </Nav.Item>
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
