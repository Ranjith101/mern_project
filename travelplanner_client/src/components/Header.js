import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaPlane, FaUserCircle } from "react-icons/fa";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header-animation">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <FaPlane className="mr-2" /> Travel Planner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/destinations">Destinations</Nav.Link>
            <Nav.Link href="/itineraries">Itineraries</Nav.Link>
            <Nav.Link href="/profile">
              <FaUserCircle className="mr-1" /> My Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
