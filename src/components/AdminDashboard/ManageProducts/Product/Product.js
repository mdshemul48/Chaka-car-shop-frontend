import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Product = () => {
  return (
    <div className='d-flex my-2 ps-2'>
      <Row className='g-0'>
        <Col lg={3}>
          <div className='me-2'>
            <img
              src='https://i0.wp.com/www.bdcarshop.com/wp-content/uploads/2020/09/Mazda-6-2020-1.jpg?resize=1110%2C577&ssl=1'
              alt='order 1'
              className='img-fluid rounded'
            />
          </div>
        </Col>
        <Col className={9}>
          <div>
            <h3>Mazda 6</h3>
            <p className='w-75'>
              The 2020 Mazda 6 ranks near the top of the midsize car class,
              largely on the strength of its spirited performance and premium
              cabin.
            </p>
            <div className='d-flex align-items-center'>
              <span className='fs-5 fw-bold text-danger'>$899999</span>
              <Button
                // onClick={() => RemoveHandler(item._id)}
                variant='danger'
                className='ms-2'
              >
                Remove
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
