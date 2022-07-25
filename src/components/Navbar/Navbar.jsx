import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>CourseDB</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='links'>Home</Link>
            <Link to="/about" className='links'>About</Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;