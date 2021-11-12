import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Product from './Product/Product';

const Products = (props) => {
  const { limit } = props;
  return (
    <Container className='my-5'>
      <Row className='g-3'>
        <Product
          item={{
            name: 'Mazda 6 ',
            description:
              'The 2020 Mazda 6 ranks near the top of the midsize car class, largely on the strength of its spirited performance and premium cabin.',
            price: '899999',
            _id: '1',
            image:
              'https://i0.wp.com/www.bdcarshop.com/wp-content/uploads/2020/09/Mazda-6-2020-1.jpg?resize=1110%2C577&ssl=1',
          }}
        />
        <Product
          item={{
            name: 'Mazda 6 ',
            description:
              'The 2020 Mazda 6 ranks near the top of the midsize car class, largely on the strength of its spirited performance and premium cabin.',
            price: '899999',
            _id: '1',
            image:
              'https://i0.wp.com/www.bdcarshop.com/wp-content/uploads/2020/09/Mazda-6-2020-1.jpg?resize=1110%2C577&ssl=1',
          }}
        />
        <Product
          item={{
            name: 'Mazda 6 ',
            description:
              'The 2020 Mazda 6 ranks near the top of the midsize car class, largely on the strength of its spirited performance and premium cabin.',
            price: '899999',
            _id: '1',
            image:
              'https://i0.wp.com/www.bdcarshop.com/wp-content/uploads/2020/09/Mazda-6-2020-1.jpg?resize=1110%2C577&ssl=1',
          }}
        />
        <Product
          item={{
            name: 'Mazda 6 ',
            description:
              'The 2020 Mazda 6 ranks near the top of the midsize car class, largely on the strength of its spirited performance and premium cabin.',
            price: '899999',
            _id: '1',
            image:
              'https://i0.wp.com/www.bdcarshop.com/wp-content/uploads/2020/09/Mazda-6-2020-1.jpg?resize=1110%2C577&ssl=1',
          }}
        />
        <Product
          item={{
            name: 'Mazda 6 ',
            description:
              'The 2020 Mazda 6 ranks near the top of the midsize car class, largely on the strength of its spirited performance and premium cabin.',
            price: '899999',
            _id: '1',
            image:
              'https://i0.wp.com/www.bdcarshop.com/wp-content/uploads/2020/09/Mazda-6-2020-1.jpg?resize=1110%2C577&ssl=1',
          }}
        />
        <Product
          item={{
            name: 'Mazda 6 ',
            description:
              'The 2020 Mazda 6 ranks near the top of the midsize car class, largely on the strength of its spirited performance and premium cabin.',
            price: '899999',
            _id: '1',
            image:
              'https://i0.wp.com/www.bdcarshop.com/wp-content/uploads/2020/09/Mazda-6-2020-1.jpg?resize=1110%2C577&ssl=1',
          }}
        />
      </Row>
    </Container>
  );
};

export default Products;
