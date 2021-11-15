import React from 'react';
import { Col } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

const Review = ({ review }) => {
  const { comment, name, rating } = review;
  return (
    <Col lg={4}>
      <div className='bg-white rounded p-3 d-flex flex-column'>
        <h4 className='text-center'>{name}</h4>
        <ReactStars
          classNames={'mx-auto'}
          count={5}
          size={24}
          isHalf={true}
          emptyIcon={<i className='far fa-star'></i>}
          halfIcon={<i className='fa fa-star-half-alt'></i>}
          fullIcon={<i className='fa fa-star'></i>}
          activeColor='#ffd700'
          edit={false}
          value={rating}
        />

        <p className='text-center'>{comment}</p>
      </div>
    </Col>
  );
};

export default Review;
