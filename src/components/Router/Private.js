import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component, render, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token');
  const Component = component || render;
  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )}
    />
  );
};

export default PrivateRoute;
