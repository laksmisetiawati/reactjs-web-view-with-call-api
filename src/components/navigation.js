import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

// ASSETS
import './../assets/css/main.css';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Navigation);
