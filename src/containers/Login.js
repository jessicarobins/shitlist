import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import { Formik } from 'formik';
import { withFirebase } from 'react-redux-firebase';

import LoginForm from '../components/LoginForm';

class LoginContainer extends Component {

  handleLogin = async (values, { setSubmitting }) => {
    const response = await this.props.firebase.login(values);
    console.log('logged in!', response)
    setSubmitting(false);
  }

  handleValidate = values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={this.handleValidate}
            onSubmit={this.handleLogin}
          >
            {LoginForm}
          </Formik>
        </div>
      </Container>
    );
  }
}

export default withFirebase(LoginContainer);