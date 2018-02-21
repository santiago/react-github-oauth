import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import UserSpace from './UserSpace';
import LoginForm from './LoginForm';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={UserSpace} />
        <Route path="/login" component={LoginForm} />
        <Route path="/auth/github" component={LoginForm} />
      </div>
    );
  }
}

export default App;
