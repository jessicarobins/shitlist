import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './containers/Login';
import SignUp from './containers/SignUp';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Router>
    </React.Fragment>
  );
}

export default App;
