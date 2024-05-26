import React from "react";
import{LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <LinkContainer to ="/"> 
          <Navbar.Brand>Shopping App </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/cart">
              <Nav.Link >cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signin">
              <Nav.Link>sign in</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
