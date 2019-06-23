import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import { Formik } from 'formik';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router';

import SearchForm from '../components/SearchForm';

class SearchContainer extends Component {

  handleSearch = async (values, { setSubmitting }) => {
    console.log('we just searched for ', values)
    setSubmitting(false);
  }

  handleValidate = values => {
    let errors = {};

    if (!values.company) {
      errors.company = 'Required';
    }
    return errors;
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <Formik
            initialValues={{ company: '' }}
            validate={this.handleValidate}
            onSubmit={this.handleSearch}
          >
            {SearchForm}
          </Formik>
        </div>
      </Container>
    );
  }
}

export default withRouter(withFirebase(SearchContainer));