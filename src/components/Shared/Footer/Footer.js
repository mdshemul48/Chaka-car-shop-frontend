import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <Container className='pt-5'>
        <Row>
          <Col lg={2}>
            <h6 className='fw-bold text-dark'>About us</h6>
            <ul>
              <li>
                <Link to='#' className='footer-link'>
                  Overview
                </Link>
              </li>
              <li>
                {' '}
                <Link to='#' className='footer-link'>
                  Contact
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  What to see
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Rental Vehicles
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Pre Owned Vehicles
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Brand New Cars
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={2}>
            <h6 className='fw-bold text-dark'>Rooms</h6>
            <ul>
              <li>
                <Link to='#' className='footer-link'>
                  New & Used Car
                </Link>
              </li>
              <li>
                {' '}
                <Link to='#' className='footer-link'>
                  0% APR Finincing
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Maintanence Pakages
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Vehicles History Pakages
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-link'>
                  Buy, Sale, Trade
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={6}>
            <h6 className='fw-bold text-dark'>SIGN UP FOR NEWSLETTER</h6>
            <p>Get 30% OFF coupon today subscibers.</p>
            <Row>
              <Col>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Email'
                />
              </Col>
              <Col>
                <button className='btn btn-dark'>Subscribe</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
