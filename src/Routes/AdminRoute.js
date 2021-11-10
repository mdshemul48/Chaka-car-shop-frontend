import React from 'react';
import { Spinner } from 'react-bootstrap';

import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, adminRole, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className='my-5 d-flex justify-content-center'>
        <Spinner animation='border' />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName && adminRole ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
