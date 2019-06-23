import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Search from './containers/Search';
import SignUp from './containers/SignUp';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Router>
    </React.Fragment>
  );
}

export default App;
