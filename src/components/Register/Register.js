import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import AutoForm from 'uniforms-bootstrap4/AutoForm';
import SimpleSchema from 'simpl-schema';
import { Alert } from 'reactstrap';
import { registerSchema } from '../../Schemas';
import apiUser from '../../api/user';
import titleSetter from '../../helpers/titleSetter';

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      const { history } = this.props;
      history.push('/profile/2');
    }
    const { title } = this.props;
    titleSetter(title);
  }

  async handleSubmit(doc) {
    // type is register/login
    const { type, history } = this.props;
    try {
      const { token } = await apiUser[type](doc);
      localStorage.setItem('token', token);
      history.push('/profile/2');
    } catch (e) {
      const { response: { data: { error } } } = e;
      this.setState({ error });
    }
  }


  render() {
    const schema = new SimpleSchema(registerSchema);
    const { error } = this.state;
    const { type } = this.props;
    return (
        <>
          {
                error
                && (
                <Alert color="danger">
                  {error}
                </Alert>
                )
          }
          <AutoForm schema={schema} onSubmit={this.handleSubmit} />
          <br />
          {
            type === 'register'
              ? (
                <Alert color="primary">
              Already have account?
                  {' '}
                  <Link to="/login">Login</Link>
                </Alert>
              )
              : (
                <Alert color="primary">
                  Don't have an account?
                  {' '}
                  <Link to="/register">Register</Link>
                </Alert>
              )
          }
        </>
    );
  }
}

export default withRouter(Register);
