import React from 'react';
import Order from './Order/Order';

const MyOrders = () => {
  return (
    <section>
      <h1 className='ms-2'>My Orders</h1>
      <hr />
      <div>
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </section>
  );
};

export default MyOrders;
