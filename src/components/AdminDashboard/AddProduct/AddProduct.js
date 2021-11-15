import React from 'react';
import useAxios from '../../../hooks/useAxios';

import { Button, Form } from 'react-bootstrap';

const AddProduct = () => {
  const axios = useAxios();
  const [Product, setProduct] = React.useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const inputChangeHandler = (event) => {
    setProduct({
      ...Product,
      [event.target.name]: event.target.value,
    });
  };

  const inputSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      setProduct({
        name: '',
        description: '',
        price: '',
        image: '',
      });

      const response = await axios.post('/products', Product);
      const { insertedId } = response.data;
      if (insertedId) {
        alert('Product added successfully');
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <main className='m-3'>
      <h2>Add New Car</h2>
      <hr />
      <Form onSubmit={inputSubmitHandler}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Car Name </Form.Label>
          <Form.Control
            name='name'
            onChange={inputChangeHandler}
            value={Product.name}
            type='text'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            name='price'
            onChange={inputChangeHandler}
            type='text'
            value={Product.price}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Image Link </Form.Label>
          <Form.Control
            name='image'
            onChange={inputChangeHandler}
            type='text'
            value={Product.image}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={inputChangeHandler}
            name='description'
            as='textarea'
            rows={3}
            value={Product.description}
          />
        </Form.Group>
        <Button variant='danger' type='submit'>
          Submit
        </Button>
      </Form>
    </main>
  );
};

export default AddProduct;
