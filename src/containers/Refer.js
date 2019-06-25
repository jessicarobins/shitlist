import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withFirebase } from 'react-redux-firebase';
import { Formik, Form } from 'formik';

class Refer extends Component {
  state = { code: null }

  handleGenerateCode = async (values, { setSubmitting }) => {
    const generateReferralCode = this.props.firebase.functions().httpsCallable('generateReferralCode');
    const { data: { code }} = await generateReferralCode();
    setSubmitting(false);
    this.setState({ code });
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                Refer a friend
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <code>
                { this.state.code }
              </code>
            </Grid>
            <Grid item xs={12}>
              <Formik
                onSubmit={this.handleGenerateCode}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                    >
                      Generate referral code
                    </Button>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default withFirebase(Refer);