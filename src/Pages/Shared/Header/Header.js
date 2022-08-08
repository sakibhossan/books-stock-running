import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  logo from '../../../Images/logo.png';



const Header = () => {
    return (
        
               <>
       <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
      <Container>
      <Navbar.Brand  as={Link} to="/">
    <img  height={30} src={logo} alt="" />books-stock</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="home#product">Product</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default Header;