import { useState } from 'react';
import useAxios from '../../../hooks/useAxios';
const MakeAdmin = () => {
  const axios = useAxios();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirm = window.confirm(
      `Are you sure you want to make ${email} an admin?`
    );

    try {
      if (confirm) {
        await axios.put(`/users/make-admin?email=${email}`);
        setEmail('');
        alert(`${email} is now an admin`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className='ms-2'>
      <h1>Make Admin</h1>
      <hr />
      <form className='form-group' onSubmit={handleSubmit}>
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
