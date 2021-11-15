import React from 'react';
import { Badge, Button, Col, Row } from 'react-bootstrap';

const Order = ({ order, statusChangeHandler, orderRemoveHandler }) => {
  const { name: userName, address, product, _id, status } = order;
  const { name, price, description } = product;
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
            <h3>{name}</h3>
            {status !== 'shipped' ? (
              <Badge className='bg-warning'>pending</Badge>
            ) : (
              <Badge className='bg-primary'>shipped</Badge>
            )}
            <h5>
              ordered by {userName} from {address}
            </h5>
            <p className='w-75'>{description}</p>
            <div className='d-flex align-items-center'>
              <span className='fs-5 fw-bold text-danger'>${price}</span>
              {status !== 'shipped' && (
                <Button
                  onClick={() => statusChangeHandler(_id)}
                  variant='primary'
                  className='ms-2'
                >
                  shipped
                </Button>
              )}
              <Button
                onClick={() => orderRemoveHandler(_id)}
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

export default Order;
