import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAxios from '../../../hooks/useAxios';

import Review from './Review/Review';

import './Reviews.css';
const Reviews = () => {
  const axios = useAxios();
  const [review, setReview] = React.useState([]);
  React.useEffect(() => {
    axios.get('/reviews').then((res) => {
      setReview(res.data);
    });
  }, []);

  return (
    <section className='my-5'>
      <h1 className='review-title mb-4'>Feedback from our clients</h1>
      <div className='review'>
        <Container className='py-5'>
          <Row className='g-3'>
            {review.map((item) => (
              <Review key={item.id} review={item} />
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Reviews;
