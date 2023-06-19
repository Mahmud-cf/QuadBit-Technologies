import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from '../assets/logo2.png'
import logo2 from '../assets/logo.png'

function Navigation(props) {
  const [scroll, setScroll] = useState(false);
  function scrollHeandler() {
    if (window.scrollY >= 600) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener("scroll", scrollHeandler);
  return (
    <Navbar
    expand="lg"
      className={
        scroll ? "navbar navbar-expand-lg nav-bg" : "navbar navbar-expand-lg "
      }
    >
      <div className="container">
        <Navbar.Brand href="/">
          <img src={scroll?props.logo2:props.logo1} alt="Creative Campus" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link href='/#about'>About</Nav.Link>
            <Nav.Link href='/#projects'>Projects</Nav.Link>
            <Nav.Link href='/#services'>Services</Nav.Link>
            <Nav.Link href="/services">Capabilities</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation