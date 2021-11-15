import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAxios from '../../hooks/useAxios';

import Product from './Product/Product';

const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  const axios = useAxios();
  const { limit } = props;
  useEffect(() => {
    if (limit) {
      axios.get(`/products?limit=${limit}`).then((res) => {
        setProducts(res.data);
      });
    } else {
      axios.get('/products').then((res) => {
        setProducts(res.data);
      });
    }
  }, []);
  return (
    <Container className='my-5'>
      <Row className='g-3'>
        {products.map((product) => (
          <Product key={product._id} item={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
