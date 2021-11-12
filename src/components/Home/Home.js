import React from 'react';
import { Container } from 'react-bootstrap';
import Products from '../Products/Products';
import Header from './Header/Header';

import './Home.css';
const Home = () => {
  return (
    <main>
      <Header />
      <Container>
        <h1 className='product-area-title'>Buy Your Dream Car</h1>
        <hr />
      </Container>
      <Products />
    </main>
  );
};

export default Home;
