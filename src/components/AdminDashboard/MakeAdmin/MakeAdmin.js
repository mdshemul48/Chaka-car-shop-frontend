import { useState } from 'react';

const MakeAdmin = () => {
  const [mail, setEmail] = useState('');
  return (
    <section className='ms-2'>
      <h1>Make Admin</h1>
      <hr />
      <form className='form-group'>
        <label htmlFor='username'>Email</label>
        <input
          type='email'
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          className='form-control my-2 w-25'
          id='username'
          placeholder='Enter email'
        />
        <button type='submit' className='btn btn-primary'>
          Make Admin
        </button>
      </form>
    </section>
  );
};

export default MakeAdmin;
