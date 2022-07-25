import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const Footer = () => {
  return (
    <>
    <footer className='bg-dark'>
      <Container>
        <Row>
          <Col className='text-center'>
            <aside className="footer-content mt-4">
              <h1>CourseDB</h1>
            </aside>
          </Col>
          <Col className='text-center'>
            <aside className="footer-content ms-5 mt-4">
              <h5>Site Map</h5>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
              </aside>
          </Col>
          <Col>
            <aside className="footer-content ms-5 mt-4">
              <h5>Popular Courses</h5>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=rfscVS0vtbw&t=7s" target="_blank" rel="noreferrer">Python</a></li>
                <li><a href="https://www.youtube.com/watch?v=jS4aFq5-91M" target="_blank" rel="noreferrer">JavaScript</a></li>
                <li><a href="https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" target="_blank" rel="noreferrer">React JS</a></li>
              </ul>
              </aside>
          </Col>
          <Col>
            <aside className="footer-content ms-5 mt-4">
              <h5>Contact</h5>
              <ul>
                <li><Link to="/">Email</Link></li>
                <li><Link to="/">LinkedIn</Link></li>
                <li><Link to="/">Facebook</Link></li>
                <li><Link to="/">Instagram</Link></li>
              </ul>
              </aside>
          </Col>
        </Row>
      </Container>
    </footer>

    <section className='copyright'>
      <Container>
        <Row>
          <Col>
            <p>Copyrights &copy; 2022. All Rights Reserved by CourseDB, Inc.</p>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Footer;