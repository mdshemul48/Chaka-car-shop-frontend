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

  const deleteProductHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      axios.delete(`/products/${id}`);
      const newProducts = products.filter((product) => product._id !== id);
      setProducts(newProducts);
    }
  };

  return (
    <section>
      <h1>Manage Products</h1>
      <hr />
      <div>
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            deleteProductHandler={deleteProductHandler}
          />
        ))}
      </div>
    </section>
  );
};

export default ManageProducts;
