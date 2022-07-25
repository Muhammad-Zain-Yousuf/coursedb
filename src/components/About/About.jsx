import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import './styles.css';

export const About = () => {
  return (
    <Container className='about'>
      <Row className="d-flex align-items-center">
        <Col sm={12} md={12} lg={12}>
          <h1>About CourseDB</h1>
          <p>CourseDB is established to help young CS enthusiasts kick-start their career and improve their CS skills. If you are looking for CS courses that would really help you to hone your CS skills and land a dream job, you're in the right place! Browse through different courses to select which course you want to take on as per your desired career path.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About;