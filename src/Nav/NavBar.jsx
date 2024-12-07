import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // تحميل CSS الخاص بـ Bootstrap
import logo from '../../src/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
const NavBar= () => {

  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand >
          <img src={logo} title="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href='/Home' className='active'>Home</Nav.Link>
          <NavDropdown title="pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/About">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/Our">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Login / Register</NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Service Details</NavDropdown.Item>
            
            </NavDropdown>
          
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Blogs Details</NavDropdown.Item>
            
            </NavDropdown>
            <Nav.Link href='/Contact'> Contact Us</Nav.Link>
            <Nav.Link> <FontAwesomeIcon icon={faSearch} /></Nav.Link>
            <Nav.Link> <FontAwesomeIcon icon={faPhone} /> (+01 )999 888 777</Nav.Link>
            <Nav.Link href='/Contact'> <button > contact us <span> <FontAwesomeIcon icon={faArrowRight} /> </span></button></Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;