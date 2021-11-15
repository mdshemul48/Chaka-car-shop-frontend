import React from 'react';
import useAxios from '../../../hooks/useAxios';
import Order from './Order/Order';

const MyOrders = () => {
  const axios = useAxios();
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('/orders')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <h1 className='ms-2'>My Orders</h1>
      <hr />
      <div>
        {products.map((order) => (
          <Order key={order._id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default MyOrders;
