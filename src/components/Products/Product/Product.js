import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'react-bootstrap';

const Service = (props) => {
  const { item } = props;
  const { name, description, price, _id, image } = item;
  return (
    <Col lg={4}>
      <div>
        <div>
          <img src={image} alt='car 1' className='img-fluid rounded' />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className='d-flex align-items-center'>
            <Button as={Link} to={`/order/${_id}`} variant='danger'>
              Buy Now
            </Button>
            <span className='ms-2 fs-5 fw-bold text-danger'>${price}</span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Service;
