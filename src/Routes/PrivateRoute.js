import React from 'react';
import { Spinner } from 'react-bootstrap';

import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading, adminLoading } = useAuth();

  if (isLoading || adminLoading) {
    return (
      <div className='my-5 d-flex justify-content-center'>
        <Spinner animation='border' />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log(location);
        return user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
