import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div className="navber">
     <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Newsies</Navbar.Brand>
          <Nav className="me-auto">
              <NavLink to="/" style={{padding: '10px'}}>Home</NavLink> 
              <NavLink to="/gen1" style={{padding: '10px'}}>Information</NavLink>
              <NavLink to="/newsarticle" style={{padding: '10px'}}>Articles</NavLink>
              <NavLink to="/calculator" style={{padding: '10px'}}>Calculator</NavLink>
           </Nav>
        </Container>
      </Navbar>      
    </div>
  );
}

export default NavBar;
