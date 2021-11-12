import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Order = () => {
  return (
    <div className='d-flex my-3'>
      <Row>
        <Col lg={3}>
          <div className='me-2'>
            <img
              src='https://i0.wp.com/www.bdcarshop.com/wp-content/uploads/2020/09/Mazda-6-2020-1.jpg?resize=1110%2C577&ssl=1'
              alt='room 1'
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
              <Button variant='danger' className='ms-2'>
                Remove Order
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Order;
