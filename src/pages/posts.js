import React, { Component } from 'react';

import Navigation from './../components/navigation';

// ASSETS
import './../assets/css/main.css';

class PostsPage extends Component {
  render() {
    return (
      <div className="container">
        
        <div className="row">
          <Navigation />

          <div className="wrapUserList col-lg-10">
            <h3 className="title">Post</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default PostsPage;