import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import useAuth from '../../../hooks/useAuth';
import useAxios from '../../../hooks/useAxios';

const AddReview = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [review, setReview] = React.useState({
    comment: '',
    rating: 0,
  });

  const inputChangeHandler = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value,
    });
  };

  const reviewSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      setReview({
        comment: '',
        rating: 1,
      });
      const response = await axios.post('/reviews', {
        ...review,
        name: user.displayName,
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className='my-5'>
      <div className='ps-3'>
        <h2>Add New Review</h2>
        <hr />
        <Form onSubmit={reviewSubmitHandler}>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              className='w-25'
              onChange={inputChangeHandler}
              name='comment'
              as='textarea'
              rows={3}
              defaultValue={review.comment}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlSelect1'>
            <Form.Label>Rating</Form.Label>
            <ReactStars
              onChange={(newRating) => {
                setReview({ ...review, rating: newRating });
              }}
              value={review.rating}
              count={5}
              size={24}
              isHalf={true}
              emptyIcon={<i className='far fa-star'></i>}
              halfIcon={<i className='fa fa-star-half-alt'></i>}
              fullIcon={<i className='fa fa-star'></i>}
              activeColor='#ffd700'
            />
          </Form.Group>
          <Button variant='danger' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
};

export default AddReview;
