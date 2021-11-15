import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

const OrderNow = () => {
  const axios = useAxios();
  const { productId } = useParams();
  const { user } = useAuth();
  const [carInfo, setCarInfo] = React.useState({});
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      name: user.displayName,
      email: user.email,
    });
  }, []);

  useEffect(() => {
    axios.get(`/products/${productId}`).then((res) => {
      setCarInfo(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/orders', {
        ...formData,
        product: carInfo,
      })
      .then(() => {
        alert('order placed successfully.');
      })
      .catch(() => {
        alert('order failed.');
      });
  };

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.name}
                name='name'
                type='text'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.email}
                name='email'
                type='email'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.phone}
                name='phone'
                type='text'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formData.address}
                name='address'
                type='text'
              />
            </Form.Group>
            <Button variant='danger' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={6}>
          <div className=''>
            <div className='me-2'>
              <img
                src={carInfo.image}
                alt={carInfo.name}
                className='img-fluid rounded'
              />
            </div>
            <div>
              <h3>{carInfo.name}</h3>
              <p className='w-75'>{carInfo.description}</p>
              <div className='d-flex align-items-center'>
                <span className='fs-5 fw-bold text-danger'>
                  ${carInfo.price}
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderNow;
