import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import  logo from '../../../Images/logo.png';
import {signOut} from 'firebase/auth';



const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  }

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
            {
            user ?
            <button className='btn btn-dark text-decoration-none' onClick={handleLogOut}>LogOut</button>
            :
              <Nav.Link as={Link} to="login">Login</Nav.Link>
              }
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default Header;