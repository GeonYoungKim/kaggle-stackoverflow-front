import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Main from './containers/Main';
import Search from './containers/Search';
import Post from './containers/Post';
import Account from './containers/Account';
import Login from './containers/Login';



class App extends Component {
  render() {
    return (
      <Router >
        <div className="layout ">
          <Switch>
            <Route path="/main/:job?/:view?/:id?" component={Main} />
            <Route path="/search/:pageNo?/:content?" component={Search} />
            <Route path="/post/:postId?" component={Post} />
            <Route path="/account/:job?/:view?/:id?" component={Account} />
            <Route path="/login/:job?/:view?/:id?" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
