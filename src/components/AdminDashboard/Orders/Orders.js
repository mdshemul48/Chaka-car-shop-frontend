import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import Order from './Order/Order';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const axios = useAxios();
  useEffect(() => {
    console.log('gg');
    axios
      .get('/orders')
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const statusChangeHandler = (id) => {
    axios.put(`/orders/${id}`).then((res) => {
      console.log(res);
      const newOrders = orders.map((order) => {
        if (order._id === id) {
          order.status = 'shipped';
        }
        return order;
      });
      setOrders(newOrders);
    });
  };

  const orderRemoveHandler = (id) => {
    axios.delete(`/orders/${id}`).then((res) => {
      console.log(res);
      const newOrders = orders.filter((order) => order._id !== id);
      setOrders(newOrders);
    });
  };

  console.log(orders);
  return (
    <section className='ps-2'>
      <h2>Manage Orders</h2>
      <hr />
      {orders.map((order) => (
        <Order
          key={order._id}
          order={order}
          statusChangeHandler={statusChangeHandler}
          orderRemoveHandler={orderRemoveHandler}
        />
      ))}
    </section>
  );
};

export default Orders;
