import React from 'react';
import { Col } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

const Review = () => {
  return (
    <Col lg={4}>
      <div className='bg-white rounded p-3 d-flex flex-column'>
        <h4 className='text-center'>MD.Shimul</h4>
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
          value={4}
        />

        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          quisquam.
        </p>
      </div>
    </Col>
  );
};

export default Review;
