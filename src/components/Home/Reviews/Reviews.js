import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Review from './Review/Review';

import './Reviews.css';
const Reviews = () => {
  return (
    <section className='my-5'>
      <h1 className='review-title mb-4'>Feedback from our clients</h1>
      <div className='review'>
        <Container className='py-5'>
          <Row className='g-3'>
            <Review />
            <Review />
            <Review />
            <Review />
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Reviews;
