import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import data from '../../Data/db.json';
import CourseList from '../CourseList/CourseList';


const Home = () => {

  return (
    <>
      <section className='home-back'>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}></Col>
            <Col lg={6} md={6} sm={12}>
              <h1 className='mb-4'>CourseDB</h1>
              <h4 className='mb-3'>Database Of Essential CS Courses</h4>
            <p>If you are looking for CS courses that would really help you to hone your CS skills and land a dream job, you're in the right place! Browse through different courses to select which course you want to take on as per your desired career path.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <CourseList data={data}/>
    </>
  );
}

export default Home;