import React from "react";
import{LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {logout} from "../actions/userAction"

const Header = () => {
  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () =>{
    dispatch(logout());
  }

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
              {
                userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to='/profile'>
                  <NavDropdown.Item>
                    Profile
                  </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    log out
                  </NavDropdown.Item>
                </NavDropdown>)
                :(
                  <LinkContainer to="/login">
                  <Nav.Link>sign in</Nav.Link>
                  </LinkContainer>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
