import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import carImage from '../../../Assets/car-picture.png';

import './Header.css';
const Header = () => {
  return (
    <header
      className='header-area'
      style={{ backgroundImage: `url(/img/bg.png)` }}
    >
      <section className='container'>
        <Row>
          <Col lg={5}>
            <div className='text-area'>
              <h1>
                <span className='text-danger'>Power &</span> beauty
              </h1>
              <p>
                Free Library’s $1M auto archives are moving to <br /> Philly’s
                world-famous car museum and to a <br /> Hershey attraction
              </p>

              <Button className='my-4' variant='danger'>
                Discover Today
              </Button>
            </div>
          </Col>
          <Col lg={7}>
            <img className='img-fluid' src={carImage} alt='blue car' />
          </Col>
        </Row>
      </section>
    </header>
  );
};

export default Header;
