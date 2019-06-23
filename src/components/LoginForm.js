import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

function LoginForm({ isSubmitting }) {
  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            name="email"
            component={TextField}
            variant="outlined"
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="password"
            component={TextField}
            variant="outlined"
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Form>
  )
}

export default LoginForm;