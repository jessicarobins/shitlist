import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

function SearchForm({ isSubmitting }) {
  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            name="company"
            component={TextField}
            variant="outlined"
            fullWidth
            label="Company Name"
            id="company"
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
            Search
          </Button>
        </Grid>
      </Grid>
    </Form>
  )
}

export default SearchForm;