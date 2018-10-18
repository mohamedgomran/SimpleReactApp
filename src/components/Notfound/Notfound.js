import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Alert } from 'reactstrap';

const NotFound = props => (
  <Alert color="danger">
    Not Found!
    <br />
    <Link to="/register">Register</Link>
  </Alert>
);


export default withRouter(NotFound);
