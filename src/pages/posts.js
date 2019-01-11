import React, { Component } from 'react';

import Bootstrap from './../components/bootstrap';
import Navigation from './../components/navigation';

// ASSETS
import './../assets/css/main.css';

class PostsPage extends Component {
  render() {
    return (
      <div className="container">
         <Bootstrap />
        <div className="row">
          <div className="col-md-3">
            <Navigation />
          </div>
          <div className="userList col-md-9">
            <div className="App">
              <p>post</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostsPage;