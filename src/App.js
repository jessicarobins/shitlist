import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Nav from './components/Nav';
import Refer from './containers/Refer';
import Search from './containers/Search';
import SignUp from './containers/SignUp';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Nav />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/refer" exact component={Refer} />
        <Route path="/search" exact component={Search} />
        <Route path="/signup" exact component={SignUp} />
      </Router>
    </React.Fragment>
  );
}

export default App;
