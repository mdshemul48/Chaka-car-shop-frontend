import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import Order from './Order/Order';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const axios = useAxios();
  useEffect(() => {
    axios
      .get('/orders')
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
      });
  }, []);

  const statusChangeHandler = (id) => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      axios.put(`/orders/${id}`).then((res) => {
        const newOrders = orders.map((order) => {
          if (order._id === id) {
            order.status = 'shipped';
          }
          return order;
        });
        setOrders(newOrders);
      });
    }
  };

  const orderRemoveHandler = (id) => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      axios.delete(`/orders/${id}`).then((res) => {
        const newOrders = orders.filter((order) => order._id !== id);
        setOrders(newOrders);
      });
    }
  };

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
