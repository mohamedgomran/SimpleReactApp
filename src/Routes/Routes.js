import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from '../components/Router/Private';
import Register from '../components/Register/Register';
import Profile from '../components/User/Profile';
import Notfound from '../components/Notfound/Notfound';
import ExamResult from '../components/Exam/Result';

const routes = () => (
  <Switch>
    <PrivateRoute path="/profile/:id" component={Profile} exact />
    <PrivateRoute path="/exam" component={ExamResult} exact />
    <Route path="/register" render={props => <Register {...props} type="register" title="Register new user" />} />
    <Route path="/login" render={props => <Register {...props} type="login" title="Login" />} />
    <Route component={Notfound} />
  </Switch>);

export default withRouter(routes);
