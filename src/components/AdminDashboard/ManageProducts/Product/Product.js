import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import useAxios from '../../../../hooks/useAxios';

const Product = ({ product, deleteProductHandler }) => {
  const axios = useAxios();
  const { name, price, description, image, _id } = product;

  return (
    <div className='d-flex my-2 ps-2'>
      <Row className='g-0'>
        <Col lg={3}>
          <div className='me-2'>
            <img src={image} alt='order 1' className='img-fluid rounded' />
          </div>
        </Col>
        <Col className={9}>
          <div>
            <h3>{name}</h3>
            <p className='w-75'>{description}</p>
            <div className='d-flex align-items-center'>
              <span className='fs-5 fw-bold text-danger'>${price}</span>
              <Button
                onClick={() => deleteProductHandler(_id)}
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
