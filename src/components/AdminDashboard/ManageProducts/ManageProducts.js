import React from 'react';
import useAxios from '../../../hooks/useAxios';

import Product from './Product/Product';
const ManageProducts = () => {
  const axios = useAxios();
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios.get('/products').then((res) => {
      setProducts(res.data);
    });
  }, []);
  console.log(products);
  return (
    <section>
      <h1>Manage Products</h1>
      <hr />
      <div>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ManageProducts;
