import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillCar } from 'react-icons/ai';
import { FaCarAlt } from 'react-icons/fa';
import { BsTools } from 'react-icons/bs';

import './Services.css';
const Services = () => {
  return (
    <Container className='my-5'>
      <Row>
        <div className='col-lg-4 col-md-6 p-0'>
          <div className='text-center bg-danger text-white py-5 px-5 w-100'>
            <AiFillCar className='text-white fs-1' />
            <h5 className='py-3 service-title fs-4'>Buy and Sale Vehicles</h5>
            <p>We buy and sale brand new car and also used car of any brand</p>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 p-0'>
          <div className='text-center text-white py-5 px-5 w-100 service-blue-bg'>
            <FaCarAlt className='text-white fs-1' />
            <h5 className='py-3 service-title fs-4'>Vehicles Rental Service</h5>
            <p>We buy and sale brand new car and also used car of any brand</p>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 p-0'>
          <div className='text-center bg-dark text-white py-5 px-5 w-100'>
            <BsTools className='text-white fs-1' />
            <h5 className='py-3 service-title fs-4'>Vehicles Servicing</h5>
            <p>We buy and sale brand new car and also used car of any brand</p>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Services;
